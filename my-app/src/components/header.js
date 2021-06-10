import React from 'react';
import Nav from 'react-bootstrap/Nav';


class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Horned Beasts</h1>
        <Nav variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="#">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">page 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
  }
}

export default Header;