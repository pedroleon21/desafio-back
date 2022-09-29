import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Materia {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    LocalDate: Date;
    @Column({ length: 280 })
    conteudo: string
}
