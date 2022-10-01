import { IsDate, isNotEmpty, IsNotEmpty } from "class-validator"

export class CreateAulaDto {
    @IsNotEmpty()
    idProfessor: number
    @IsNotEmpty()
    idMateria: number
    @IsNotEmpty()
    data: string
}
