import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Professore {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 50 })
    firstName: string
    @Column({ length: 50 })
    lastName: string
}