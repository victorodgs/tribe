import { Button, Card } from 'react-bootstrap'

interface CardProps {
    imageURL: string
    title: string
    text: string
    actionText?: string
}

export const FeedCard = ({imageURL, title, text, actionText}: CardProps) => {
    return (
        <Card bg='dark' text='light' style={{ width: '100%', margin: '15px 0' }}>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button variant="warning">{actionText || 'Ler Mais'}</Button>
            </Card.Body>
        </Card>
    )
}