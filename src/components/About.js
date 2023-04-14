import { Col, Row, Container } from "react-bootstrap";

const About = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center py-4 fw-bold">ABOUT US</h2>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={4} className="p-3">
          <img
            src="https://images.pexels.com/photos/796602/pexels-photo-796602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width="100%"
            className="rounded-circle"
          />
        </Col>
        <Col xs={12} md={6} xl={8} className="p-3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            ipsa porro id autem non neque ullam aperiam nobis tenetur dolorum,
            quaerat consequatur! Maiores possimus hic magnam totam aliquam a
            eligendi molestias eum nesciunt voluptas, perspiciatis ab.
            Exercitationem ducimus asperiores libero mollitia maxime
            repudiandae, adipisci ea! Pariatur, quae repellat nemo magni tempora
            enim eaque! Perferendis ipsa quisquam perspiciatis ipsum nostrum
            nemo maxime exercitationem modi distinctio quos magni est et,
            placeat temporibus repellendus vero harum veniam provident a autem
            tempore explicabo totam mollitia. Quibusdam consequuntur libero
            eveniet nobis dolor nulla nisi, ad accusantium quia facere placeat
            odio laboriosam sint amet ipsam mollitia.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
