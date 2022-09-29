
import { Materia } from 'src/materia/entities/materia.entity';
import { DataSource } from 'typeorm';

export const materiaProvider = [
    {
        provide: repository_names.MATERIA_REPOSITORY,// TODO: legar esta string para um arquivo de constates
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Materia),
        inject: [database_consts.DATA_SOURCE], // TODO: legar esta string para um arquivo de constates
    },
];