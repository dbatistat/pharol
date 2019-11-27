import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { People } from './interfaces/people';
import { SearchPeopleDto } from './dto/search-people.dto';
import { PeopleDto } from './dto/people.dto';

@Injectable()
export class AppService {

  constructor(@InjectModel('People') private readonly peopleModel: Model<People>) {
  }

  async findProduct(id: string): Promise<People> {
    let product;
    try {
      product = await this.peopleModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find people.');
    }

    if (!product) {
      throw new NotFoundException('Could not find people.');
    }

    return product;
  }

  async create(data: PeopleDto) {
    const newPeople = new this.peopleModel(data);
    return newPeople.save();
  }

  async update(id: string, data: PeopleDto) {
    const updatePeople = await this.findProduct(id);
    updatePeople.rut = data.rut;
    updatePeople.rutChilen = data.rutChilen ? data.rutChilen : updatePeople.rutChilen;
    updatePeople.name = data.name ? data.name : updatePeople.name;
    updatePeople.lastname = data.lastname ? data.lastname : updatePeople.lastname;
    updatePeople.email = data.email ? data.email : updatePeople.email;
    updatePeople.gender = data.gender ? data.gender : updatePeople.gender;

    await this.peopleModel.updateOne({ _id: id }, updatePeople);
  }

  async delete(id: string) {
    await this.peopleModel.deleteOne({ _id: id });
  }

  async search(params: SearchPeopleDto) {
    const queryCond: any = {};
    if (params.name) {
      queryCond.name = { $regex: params.name, $options: 'i' };
    }

    if (params.lastname) {
      queryCond.lastname = { $regex: params.lastname, $options: 'i' };
    }

    if (params.rut) {
      queryCond.rut = params.rut;
    }

    if (params.rutChilen) {
      queryCond.rutChilen = { $regex: params.rutChilen, $options: 'i' };
    }

    if (params.email) {
      queryCond.email = { $regex: params.email, $options: 'i' };
    }

    if (params.gender) {
      queryCond.gender = params.gender;
    }

    if (params.address) {
      queryCond.addresses = { $elemMatch: { description: { $regex: params.address, $options: 'i' } } };
    }

    return await this.peopleModel.find(queryCond).exec();
  }
}
