import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';

export const userProvider = [
    {
        provide: REPOSITORY_NAMES.USER_REPOSITORY,// TODO: legar esta string para um arquivo de constates
        useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
        inject: [database_consts.DATA_SOURCE], // TODO: legar esta string para um arquivo de constates
    },
];