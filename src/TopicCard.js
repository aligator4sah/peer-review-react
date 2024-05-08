import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

function TopicCard() {
  return (
    <Card>
      <Card.Header>
        <h6>
          Topic <Badge pill bg="info">5</Badge>
        </h6>
      </Card.Header>
      <Card.Body>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Paper Originality</Accordion.Header>
            <Accordion.Body>
              <div class="topic-content">
                <p style={{ paddingLeft: '5px' }}><strong>Reviewer&nbsp; &nbsp; &nbsp; <span>R1, R2</span></strong> </p>
                <Card bg='#F0F2FC' style={{ marginBottom: '15px', backgroundColor: '#F0F2FC' }}>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Card.Body>
                </Card>
                <Button variant="primary">Prompt</Button>{' '}
              </div>

            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Methodology</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
}

export default TopicCard;