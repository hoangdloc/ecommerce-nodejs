declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEV_APP_PORT: string;
      DEV_DB_HOST: string;
      DEV_DB_PORT: string;
      DEV_DB_NAME: string;
      PROD_APP_PORT: string;
      PROD_DB_HOST: string;
      PROD_DB_PORT: string;
      PROD_DB_NAME: string;
      NODE_ENV: 'dev' | 'prod';
    }
  }
}
export {};
