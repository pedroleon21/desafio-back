import { Transform } from "class-transformer/types/decorators";
import { Materia } from "src/materia/entities/materia.entity";
import { Professor } from "src/professores/entities/professore.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Aula {
    @PrimaryGeneratedColumn()
    id: number
    @ManyToOne(() => Materia, materia => materia.aulas)
    @JoinColumn(
        {
            name: "FK_MATERIA",
            referencedColumnName: "id"
        }
    )
    materia!: Materia
    @ManyToOne(() => Professor, professor => professor.aulas)
    @JoinColumn({
        name: "FK_PROFESSOR",
        referencedColumnName: "id"
    })
    professor!: Professor
    @Column({ length: 50 })
    data: String
}
