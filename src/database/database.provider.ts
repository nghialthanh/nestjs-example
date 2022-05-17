import { Sequelize } from 'sequelize-typescript';
import { product } from 'src/product/entities/product.entity';
import { user } from 'src/user/entities/user.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mssql',
                host: 'localhost',
                port: 1433,
                username: 'ecommerce',
                password: '123456',
                database: 'ECOMMERCE',
                define: {
                    freezeTableName: true,
                    createdAt: false,
                    updatedAt: false,
                },
            });
            try {
                await sequelize.authenticate();
                console.log('Connection has been established successfully.');
            } catch (error) {
                console.error('Unable to connect to the database:', error);
            }
            /**
             * Add Models Here
             * ===============
             * You can add the models to
             * Sequelize later on.
             */
            sequelize.addModels([product, user]);
            // await sequelize.sync();
            return sequelize;
        },
    },
];
