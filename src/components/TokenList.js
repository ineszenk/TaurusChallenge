import React from 'react';
import TokenTable from './TokenTable'
import '../App.css';
import 'antd/dist/antd.css'
import 'antd/lib/button/style'
import { Layout, Button, Input, Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout
const { Search } = Input;



function searchingFor(term) {
  return function (x) {
    return x.tokenName.toLowerCase().include(term.toLowerCase()) || !term
  }
}


class TokenList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: localStorage.getItem('all'),
      term: ''
    }

    this.issueToken = this.issueToken.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }



  issueToken() {
    this.props.history.push("/IssueToken")
  }

  handleSearch(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    console.log(localStorage.getItem('all'))
    return (
      <div className="App">
        <header className="header">
          <Layout >
            <Sider width='25%' className="App-Sider" >
              <img id='taurus_logo' alt='logo' src='/taurus_logo.png' />
              <h5>+ Issue Token </h5>
              <h5> Token List</h5>
            </Sider>
            <Layout >
              <Header className="App-Header" width='75%'>
                <h1>Token List</h1>
              </Header>
              <div>
                <Content className="App-Content">
                  <Search
                    placeholder="Contract name or address or ticker"
                    onSearch={value => console.log(value)}
                    style={{ margin: '10px 0' }}
                  />
                  <Button type="primary" className="IssueToken" onClick={this.issueToken}>Issue Token</Button>
                  <Button type="primary" icon="download" className="Export">Export To CSV</Button>
                </Content>
                <TokenTable />
              </div>
              <Footer className="App-Footer">Footer</Footer>
            </Layout>
          </Layout>
        </header>
      </div>
    );
  }
}

export default TokenList;
