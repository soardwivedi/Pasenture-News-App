import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsList = ({ newsData }) => {
  return (
    <>
      {newsData.length
        ? newsData.map((element) => {
            return (
              <Card key={element.id} style={{ width: '18rem' }}>
                <Card.Img variant='top' src={element.image} />
                <Card.Body>
                  <Card.Title>{element?.title}</Card.Title>
                  <Card.Text>{element?.description}</Card.Text>
                  <Button variant='primary'>Click to Open</Button>
                </Card.Body>
              </Card>
            );
          })
        : null}
    </>
  );
};

export default NewsList;
