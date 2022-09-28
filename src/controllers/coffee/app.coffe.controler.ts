import { Controller, Get, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/filter/http/respose.filter';
import { AppCoffeeService } from 'src/services/app.coffee.service';

@Controller("coffee-machine")
export class AppCoffeController {
    constructor(private readonly appService: AppCoffeeService) { }

    @UseFilters(new HttpExceptionFilter())
    @Get('make-coffee')
    makeCorffee(): string {
        return this.appService.getCoffe();
    }
}
