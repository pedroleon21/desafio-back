import { Test, TestingModule } from "@nestjs/testing";
import { ImNotACoffeMachineException } from "src/exceptions/im.not.a.coffe.machine.exception";
import { AppCoffeeService } from "src/services/app.coffee.service";
import { AppCoffeController } from "./app.coffe.controler";

describe('AppCoffeeControler', () => {
    let appCoffeeControler: AppCoffeController;
    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppCoffeController],
            providers: [AppCoffeeService],
        }).compile();
    });
    describe('root', () => {
        it('should throw "ImNotACoffeMachineException"', () => {
            expect(appCoffeeControler.makeCorffee()).toThrow(ImNotACoffeMachineException);
        });
    });
});