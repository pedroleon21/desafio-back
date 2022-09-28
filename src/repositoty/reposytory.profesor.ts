import { Professor } from 'src/professores/entities/professore.entity';
import { DataSource } from 'typeorm';

export const professorProvider = [
    {
        provide: "PROFESSOR_REPOSITORY",
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Professor),
        inject: ["DATA_SOURCE"], // TODO: legar esta string para um arquivo de constates
    },
];