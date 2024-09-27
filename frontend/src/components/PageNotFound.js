import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Img404 from '../images/404.png';

function PageNotFound() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src={Img404} />
        </Col>
      </Row>
    </Container>
  );
}

export default PageNotFound;
