import React from 'react';
import { FeedCard } from  '../components/organisms/FeedCard'

import 'bootstrap/dist/css/bootstrap.min.css';

export default {
    title: 'Feed Card Component',
    decorators: [
      storyFn => (
            storyFn()
      ),
    ],
  };
  

export const WithSelfiePost = () => (
    <FeedCard 
    imageURL='https://www.dicasdemulher.com.br/wp-content/uploads/2015/01/blogueiras-de-moda-para-seguir-no-instagram-1200x738.jpg'
    title='Como arrasar na Selfie'
    text='Texto do post de selfie'
    />
);
export const WithDummyText = () => (
    <FeedCard 
    imageURL='lalala'
    title='Dummy'
    text='Dummy Text'
    />
);