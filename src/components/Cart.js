import {Offcanvas, Table, Button} from 'react-bootstrap';

const Cart = (props) => {
    const cartElements = [
        {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
        },
        {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
        },
        {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
        }
    ]

  return (
    <>
        <Offcanvas show='true' onHide={props.onClose} scroll='true' placement='end' className='my-5 p-3' style={{width: '450px'}}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title className='mx-auto fs-2'>CART</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Table>
                    <thead>
                        <tr>
                        <th>ITEM</th>
                        <th>PRICE</th>
                        <th>QUANTITY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartElements.map((item) => (
                            <tr>
                                <td className='d-flex'>
                                    <img src={item.imageUrl} alt='' width='80px' /> 
                                    <span className='ps-2'>{item.title}</span>
                                </td>
                                <td>{item.price}</td>
                                <td className=''>
                                    <input type="number" value={item.quantity} className='w-100 mb-2' />
                                    <Button variant="danger">Remove</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <p><b>Total</b> Rs 0.00</p>
                <Button variant="info">PURCHASE</Button>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}

export default Cart