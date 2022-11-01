import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'medium_clone',
};

export default config;
