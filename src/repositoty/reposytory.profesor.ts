import { Professor } from 'src/professores/entities/professore.entity';
import { DataSource } from 'typeorm';

export const professorProvider = [
    {
        provide: repository_names.PROFESSOR_REPOSITORY,// TODO: legar esta string para um arquivo de constates
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Professor),
        inject: [database_consts.DATA_SOURCE], // TODO: legar esta string para um arquivo de constates
    },
];