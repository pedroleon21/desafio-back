import { IsNotEmpty } from "class-validator"
import { Professor } from "../entities/professore.entity"

export class CreateProfessoreDto {
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
}
