import React, { Component } from 'react';
import Web3 from 'web3'
import { Button, Header, Icon } from 'semantic-ui-react';
import Contracts from './Contracts';
import CreateChit from './CreateChit';
import ViewContract from './ViewContract';
import Layout from './Layout/Index';

class App extends Component {

  async loadBlockchainData() {
    var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
    // const web3 = new Web3(Web3.givenProvider || 'http://127.0.0.1:7545')

    const network = await web3.eth.net.getNetworkType()

    const accounts = await web3.eth.getAccounts()

    console.log("accounts", accounts)
  }

  componentWillMount() {
    this.loadBlockchainData()
  }

  render() {
    return (
      <Layout>

        <Contracts />
         <CreateChit />
      </Layout>
    )
  }
}

export default App;
