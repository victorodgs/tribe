import React from 'react'
import Logo from '../assets/logo.png'
import Background from '../assets/background.png'
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { useSharedStore } from '../store/Shared'

export const Login = () => {

    const { dispareLogin, currentUser } = useSharedStore()
    const history = useHistory()

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        await dispareLogin();
        history.push('/feed')
    }

    return (
        <div style={{padding: '50px 20px', width: '100vw', height: '100vh', backgroundImage: `url(${Background})`, backgroundSize: 'cover'}}>
            <img src={Logo} alt="Logo do nosso App"/>   

            <Form onSubmit={e => handleSubmit(e)}>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Seu email" required />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Sua senha" required />
                </Form.Group>
                <Button variant="warning" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}