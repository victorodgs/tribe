/* eslint-disable import/no-anonymous-default-export */
import { SharedState } from './state'

export default ($StoreState: SharedState) => {
  const feedPosts = $StoreState.feedPosts;
  const currentUser = JSON.parse(String($StoreState.loggedUser));
  const isLoggedIn = localStorage.getItem('tribe-user-info') !== null

  return {
    feedPosts,
    currentUser,
    isLoggedIn
  };
};
