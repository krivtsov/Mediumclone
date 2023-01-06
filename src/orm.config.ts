import { DataSource, DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5439,
  username: 'admin',
  password: 'admin',
  database: 'medium_clone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  logging: true,
  migrations: [__dirname + '/**/migrations/*{ts,js}'],
};

export default new DataSource(config);
