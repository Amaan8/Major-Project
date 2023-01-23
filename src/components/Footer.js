import {Container, Nav, Navbar} from 'react-bootstrap';

const Footer = () => {
  return (
    <>
        <Navbar bg="dark" variant='dark' className='p-5'>
            <Container>
                <Navbar.Brand href="#" className='fs-2'>The Generics</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#">Youtube</Nav.Link>
                    <Nav.Link href="#">Spotify</Nav.Link>
                    <Nav.Link href="#">Facebook</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default Footer