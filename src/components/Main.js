import {Card, Col, Row, Button} from 'react-bootstrap';

const Main = () => {
    const productsArr = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        },
        {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        }
    ]

  return (
    <>
        <Row xs={1} md={2} className="g-4 w-50 mx-auto py-5">
            {productsArr.map((item) => (
                <Col>
                <Card border='white'>
                    <Card.Body>
                    <Card.Title className='text-center'>{item.title}</Card.Title>
                    <Card.Img variant="top" src={item.imageUrl} className='rounded-4 my-3' />
                    <Card.Text className='d-flex justify-content-between align-items-center'>
                        Rs {item.price}
                        <Button variant='info'>Add to Cart</Button>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default Main