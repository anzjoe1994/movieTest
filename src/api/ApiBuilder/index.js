import { create } from 'apisauce';
import env from 'constants/env';

export default create({
  baseURL: `${env.apiUrl}&apikey=${env.apiKey}`
});
