import { Aula } from "src/aula/entities/aula.entity";
import { User } from "src/users/entities/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from "typeorm";

@Entity()
export class Professor {
    @PrimaryGeneratedColumn()
    id: number;
    @OneToOne(() => User, {
        nullable: false,
        cascade: ["update", "insert", "remove"],
        eager: true,
    })
    @JoinColumn()
    user: User
    @OneToMany(() => Aula, aula => aula.professor)
    aulas: Aula[]
}
