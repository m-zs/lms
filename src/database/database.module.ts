import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => {
        return {
          config: {
            client: 'pg',
            connection: {
              host: process.env.DB_HOST,
              port: process.env.DB_PORT,
              database: process.env.DB_NAME,
              user: process.env.DB_USER,
              password: process.env.DB_PASSWORD,
            },
          },
        };
      },
    }),
  ],
  controllers: [],
})
export class DatabaseModule {}
