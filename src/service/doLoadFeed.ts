import { FeedPosts } from '../store/Shared/state'
import { doFetch } from './doFetch';
import  API_URL  from '../config/environment'

export const doLoadFeed = async () => {
  const response = await doFetch<FeedPosts>(`${API_URL}/posts`);
  return response.parsedBody
};
