import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { UserProfileMenu } from './/UserProfileMenu'
import { useSharedStore } from '../../store/Shared'

export const Header = () => {
    const [showUserMenu, setShowUserMenu] = React.useState<boolean>(false)
    const { doLogout } = useSharedStore()

    return (
        <>
        <header className='site-header'>
            <FontAwesomeIcon onClick={e => setShowUserMenu(!showUserMenu)} icon={faBars} height={70} fontSize='1.2em' />
            <h4>Feed de Notícias</h4>
            <FontAwesomeIcon icon={faPowerOff} height={70} fontSize='1.2em' onClick={doLogout} />
            
        </header>
        <UserProfileMenu hidden={showUserMenu}></UserProfileMenu>
        </>
    )
}