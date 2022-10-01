import { IsNotEmpty, isNotEmpty } from "class-validator";

export class CreateMateriaDto {
    @IsNotEmpty()
    conteudo: string
    @IsNotEmpty()
    materiaName: string
}
