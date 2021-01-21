
export interface FeedPosts {
    id: number, 
    title: string, 
    text: string, 
    imageUrl: string
}

export interface User {
  username: string,
  photoURL: string
}


export interface SharedState {
  feedPosts: FeedPosts[]
  loggedUser: User
}

export const initialState: any = {
  feedPosts: null,
  loggedUser: localStorage.getItem('tribe-user-info')
};
