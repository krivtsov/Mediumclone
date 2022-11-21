import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5439,
  username: 'admin',
  password: 'admin',
  database: 'medium_clone',
};

export default config;
