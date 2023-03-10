import { Module } from '@nestjs/common';
import { databaseProviders } from './mongoose.service';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
