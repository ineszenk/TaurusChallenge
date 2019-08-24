import React from 'react';
import TokenTable from './TokenTable'
import '../App.css';
import 'antd/dist/antd.css'
import 'antd/lib/button/style'
import { Layout, Button, Form, Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout


class TokenList extends React.Component {

  constructor(props) {
    super(props);
    this.issueToken = this.issueToken.bind(this)
  }

  issueToken() {
    this.props.history.push("/IssueToken")
  }


  render() {
    console.log(this.props)
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
                  <Form className="ant-advanced-search-form">
                    <Icon type="search" />
                    Contract name or address or ticker
                  </Form>
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
