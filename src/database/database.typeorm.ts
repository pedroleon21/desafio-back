import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: database_consts.DATA_SOURCE,
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres' as 'postgres', //problema do postegres defina assim
                host: 'localhost',
                port: 5432,
                username: 'user',
                password: '12345678',
                database: 'escola',
                entities: [
                    __dirname + '/../**/*.entity{.ts,.js}',
                ],
                synchronize: true,
                migrations: []
            });

            return dataSource.initialize();
        },
    },
];