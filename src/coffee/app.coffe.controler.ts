import { Controller, Get, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filter/http/respose.filter';
import { AppCoffeeService } from './app.coffee.service';

@Controller("coffee-machine")
export class AppCoffeController {
    constructor(private readonly appService: AppCoffeeService) { }

    @Get('make-coffee')
    makeCorffee(): string {
        return this.appService.getCoffe();
    }
}
