import { Aula } from 'src/aula/entities/aula.entity';
import { DataSource } from 'typeorm';

export const aulaProvider = [
    {
        provide: REPOSITORY_NAMES.AULA_REPOSITORY,// TODO: legar esta string para um arquivo de constates
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Aula),
        inject: [database_consts.DATA_SOURCE], // TODO: legar esta string para um arquivo de constates
    },
];