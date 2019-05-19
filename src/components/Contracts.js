import React, { Component } from 'react';
import { Container, Table, Divider, Header } from 'semantic-ui-react';



class Contracts extends Component {
  contractData =
    [{
      contractName: "C1"
    },
    {
      contractName: "C2"
    }]

  handleClick() {
    console.log('routing to contract')
  }

  render() {
    return (
      <Container>
        <Header size='large'>List of contracts:</Header>
        <Divider />
        <Table basic='very'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Contract name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              this.contractData.map(contract => (
                <Table.Row key={contract.contractName} onClick={this.handleClick}>
                  <Table.Cell>{contract.contractName}</Table.Cell>
                </Table.Row>
              ))
            }
          </Table.Body>
        </Table>

      </Container>
    )
  }
}

export default Contracts;
