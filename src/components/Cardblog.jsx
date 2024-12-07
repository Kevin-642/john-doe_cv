import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../styles/Card.css";

function GroupExample() {
  return (
    <CardGroup>
      <Card>
        <Card.Img id="imgcard" className="imgcard" variant="top" src="./images/blog/coder.jpg" />
        <Card.Body>
          <h5>Coder son site en HTML/CSS</h5>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <div className="btn">
          <button>Lire la suite</button>
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Publié le 22 août 2022</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img id="imgcard" variant="top" src="./images/blog/croissance.jpg" />
        <Card.Body>
          <h5>Vendre ses produits sur le web</h5>
          <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <div className="btn">
          <button>Lire la suite</button>
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Publié le 20 août 2022</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img id="imgcard" variant="top" src="./images/blog/google.jpg" />
        <Card.Body>
          <h5>Se positionner sur <br />Google</h5>
          <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <div className="btn">
          <button>Lire la suite</button>
          </div>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Publié le 1 août 2022</small>
        </Card.Footer>
      </Card>
      
    </CardGroup>
    
  );
}

export default GroupExample;