import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import Navbar from './Navbar';



class Layout extends Component {

  render() {
    return (
      <>
        <Navbar />
        <Container>
          {this.props.children}
        </Container>
      </>
    )
  }
}

export default Layout;
