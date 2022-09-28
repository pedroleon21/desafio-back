import { Professor } from 'src/professores/entities/professore.entity';
import { DataSource } from 'typeorm';

export const professorProvider = [
    {
        provide: "PROFESSOR",
        userFactory: (dataSource: DataSource) => dataSource.getRepository(Professor),
        inject: ["DATA_SOURCE"],
    }
]