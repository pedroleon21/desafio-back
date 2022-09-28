import { Module } from '@nestjs/common';
import { AppCoffeController } from './controllers/coffee/app.coffe.controler';
import { AppCoffeeService } from './services/app.coffee.service';


@Module({
  imports: [],
  controllers: [AppCoffeController],
  providers: [AppCoffeeService],
})
export class AppModule { }
