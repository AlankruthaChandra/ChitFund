import React, { Component } from 'react';
import { Menu, Header } from 'semantic-ui-react';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable size='massive'>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          href='/'
        >
          Home
        </Menu.Item>


        <Menu.Item
          name='address'
          active={activeItem === 'address'}
          onClick={this.handleItemClick}
          position='right'>
          <span style={{ textDecoration: "underline " }}>
            Address:
          </span>{'  '} 0x9076e77E8B846B9e69f95e99A8E88c458037978E
        </Menu.Item>
      </Menu>
    )
  }
}
