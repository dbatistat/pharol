import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { configuration } from './configuration/configuration';
import { PeopleSchema } from './schemas/people.schema';

@Module({
  imports: [
    MongooseModule.forRoot(configuration.mongodb),
    MongooseModule.forFeature([{ name: 'People', schema: PeopleSchema }])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
