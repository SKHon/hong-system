import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  // console.log(appInfo);
  const config: PowerPartial<EggAppConfig> = {
    person: { name: 'ljh' }
  };
  return config;
};

export const logger = {
  dir: '../logs/my-new.log'
}