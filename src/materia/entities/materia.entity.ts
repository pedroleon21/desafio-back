import { Aula } from "src/aula/entities/aula.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Materia {
    @PrimaryGeneratedColumn()
    id: number
    @Column({ length: 280, })
    conteudo: string
    @Column({ length: 50 })
    materiaName: string
    @OneToMany(() => Aula, aula => aula.materia)
    aulas: Aula[]
}
