import { Module } from '@nestjs/common';
import { databaseProviders } from './database.typeorm';

@Module({
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }