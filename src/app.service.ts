import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { People } from './interfaces/people';
import { SearchPeopleDto } from './dto/search-people.dto';
import { CreatePeopleDto } from './dto/create-people.dto';

@Injectable()
export class AppService {

  constructor(@InjectModel('People') private readonly peopleModel: Model<People>) {
  }

  async save(data: CreatePeopleDto) {
    const newPeople = new this.peopleModel(data);
    return newPeople.save();
  }

  async search(params: SearchPeopleDto) {
    const queryCond: any = {};
    if (params.name) {
      queryCond.name = { $regex: params.name, $options: 'i' };
    }

    if (params.lastname) {
      queryCond.lastname = params.lastname;
    }

    if (params.rut) {
      queryCond.rut = params.rut;
    }

    if (params.email) {
      queryCond.email = params.email;
    }

    if (params.gender) {
      queryCond.gender = params.gender;
    }

    if (params.addresses && params.addresses.length > 0) {
      queryCond.addresses = params.addresses;
    }

    return await this.peopleModel.find(queryCond).exec();
  }
}
