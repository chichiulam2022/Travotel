import React from 'react'
//import './Footer.css'
import Card from 'react-bootstrap/Card';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import Jump from 'react-reveal/Jump';
import Shake from 'react-reveal/Shake';
import Wobble from 'react-reveal/Wobble';

function AboutUs() {
  return (
    <div>
    
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>KEEVE</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          KEEVE
        </Card.Text>
        <Card.Link href="https://github.com/KeeveRW11">GitHub</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>CHI CHIU</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          CHI CHIU
        </Card.Text>
        <Card.Link href="https://github.com/chichiulam2022">GitHub</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>ALEX</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          ALEX
        </Card.Text>
        < Card.Link href="https://github.com/AlexJCturbo">GitHub</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>ANDY</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          ANDY
        </Card.Text>
        <Card.Link href="https://github.com/andyloo416"> GitHub</Card.Link>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>AASHAY</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          AASHAY
        </Card.Text>
        <Card.Link href="https://github.com/A-N26">Card Link</Card.Link>
      </Card.Body>
    </Card>
    

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>NABEEL</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          NABEEL
        </Card.Text>
        <Card.Link href="https://github.com/nab-man">GitHub</Card.Link>
      </Card.Body>
    </Card>
        
  </div>
  );
}

export default AboutUs;
