import React from 'react'
import { FeedCard } from '../components/organisms/FeedCard'
import { Header } from '../components/organisms/Header'
import{ useSharedStore } from '../store/Shared'
import { Redirect } from  'react-router-dom'

export const Feed = () => {

    const { feedPosts, loadFeed, isLoggedIn } = useSharedStore()

    React.useEffect(() => {
        loadFeed()
    }, [])

    if (!isLoggedIn && localStorage.getItem('tribe-user-info') === null) {
        return <Redirect to='/' />
    }

    return (
        <>
            <Header />
            <div style={{width: '100%', padding: '0 20px'}}>
            {
                    feedPosts?.map((post: any) =>             
                        <FeedCard 
                            key={post?.id}
                            imageURL={post?.imageUrl}
                            title={post?.title}
                            text={post?.text}
                        />)
                }
            </div>
        </>
    )
}