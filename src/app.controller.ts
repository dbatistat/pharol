import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchPeopleDto } from './dto/search-people.dto';
import { CreatePeopleDto } from './dto/create-people.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() data: CreatePeopleDto) {
    return this.appService.save(data);
  }

  @Get('search')
  async search(@Query() params: SearchPeopleDto) {
    return this.appService.search(params);
  }
}
