import {Container, Nav, Navbar, Button} from 'react-bootstrap';

const Header = () => {
  return (
    <>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto fs-5">
                    <Nav.Link href="#" className='ms-5'>Home</Nav.Link>
                    <Nav.Link href="#" className='ms-5'>Store</Nav.Link>
                    <Nav.Link href="#" className='ms-5'>About</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                <Button variant="info">Cart</Button>
            </Container>
        </Navbar>
        <div className='text-center text-white bg-secondary'>
            <h1 className='p-5 fw-bolder'>The Generics</h1>
        </div>
    </>
  )
}

export default Header