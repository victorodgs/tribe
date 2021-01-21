import React from 'react'
import { Row, Image, Button } from 'react-bootstrap'
import { useSharedStore } from '../../store/Shared'
import './UserProfileMenu.css'

interface UserProfileMenuProps {
    hidden: boolean
}

export const UserProfileMenu = ({hidden}: UserProfileMenuProps) => {
    const { currentUser, doLogout } = useSharedStore()
    return (
        <section className={`user-humberguer-menu ${hidden ? 'show' : 'hide'} `}>
            <Row>
                <Image src={currentUser?.photoURL} width={200} height={200} fluid roundedCircle style={{border: '6px solid #ffc107'}} />
            </Row>

            <Row className='user-humberguer-menu--links m5'>
                <h5 className='text-center m5' >Olá, Victor</h5>
                <Button variant="warning m5" onClick={doLogout}>Sair</Button>
            </Row>  
        </section>
    )
}