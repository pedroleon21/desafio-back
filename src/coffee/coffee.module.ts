import { Module } from '@nestjs/common';
import { AppCoffeController } from './app.coffe.controler';
import { AppCoffeeService } from './app.coffee.service';

@Module({
  controllers: [AppCoffeController],
  providers: [AppCoffeeService]
})
export class CoffeeModule { }
