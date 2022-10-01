import { UpdateProfessoreDto } from "src/professores/dto/update-professore.dto";
import { Professor } from "src/professores/entities/professore.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    constructor(user: any) {
        this.id = user?.id;
        this.firstName = user?.firstName;
        this.lastName = user?.lastName;
        this.password = user?.password;
        this.professor = user?.professor;
    }
    @PrimaryGeneratedColumn()
    id: number
    @Column({ length: 50 })
    firstName: string
    @Column({ length: 50 })
    lastName: string
    @Column({ length: 50 })
    private password: string
    @OneToOne(() => Professor, {
        nullable: false,
        cascade: ["update", "insert", "remove"]
    })
    professor: Professor

    protected getPassword() {
        return this.password;
    }
    public setPassword(password: string) {
        this.password = password;
    }
}