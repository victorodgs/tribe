import { User } from '../store/Shared/state'
import { doFetch } from './doFetch';
import  API_URL  from '../config/environment'

export const doLogin = async () => {
  const response = await doFetch<User>(`${API_URL}/login/1`);
  return response.parsedBody
};
