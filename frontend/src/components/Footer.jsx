import { Container, Row, Col } from 'react-bootstrap';
const handleClick = () => {
    window.location.replace('https://cleansolid-c0f64a400a8c.herokuapp.com');
  };
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <button className='btn-block'
                                          type='button' onClick={handleClick}>Crie sua loja virtual CleanSolid</button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
