import { Injectable, HttpStatus } from '@nestjs/common';
import { ImNotACoffeMachineException } from './exceptions/im.not.a.coffe.machine.exception';
@Injectable()
export class AppCoffeeService {
    getCoffe(): string {
        throw new ImNotACoffeMachineException(`I'm a teapot`, HttpStatus.I_AM_A_TEAPOT);
    }
}