import { Controller, Get, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { HttpExceptionFilter } from 'src/filter/http/respose.filter';
import { AppCoffeeService } from './app.coffee.service';

@Controller("coffee-machine")
@ApiTags("coffee")
export class AppCoffeController {
    constructor(private readonly appService: AppCoffeeService) { }

    @Get('make-coffee')
    makeCorffee(): string {
        return this.appService.getCoffe();
    }
}
