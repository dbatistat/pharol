import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchPeopleDto } from './dto/search-people.dto';
import { PeopleDto } from './dto/people.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() data: PeopleDto) {
    return this.appService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: PeopleDto) {
    return this.appService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.appService.delete(id);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.appService.findProduct(id);
  }

  @Get('search')
  async search(@Query() params: SearchPeopleDto) {
    return this.appService.search(params);
  }
}
