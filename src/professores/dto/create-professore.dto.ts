import { IsNotEmpty } from "class-validator"

export class CreateProfessoreDto {
    @IsNotEmpty()
    firstName: string
    @IsNotEmpty()
    lastName: string
    password!: string
}
