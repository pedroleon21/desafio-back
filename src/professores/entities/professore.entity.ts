import { Aula } from "src/aula/entities/aula.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Professor {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50 })
    firstName: string
    @Column({ length: 50 })
    lastName: string
    @OneToMany(() => Aula, aula => aula.professor)
    aulas: Aula[]
}
