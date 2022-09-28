import { Test, TestingModule } from "@nestjs/testing";
import { AppCoffeController } from "./app.coffe.controler";
import { AppCoffeeService } from "./app.coffee.service";
import { ImNotACoffeMachineException } from "./exceptions/im.not.a.coffe.machine.exception";

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