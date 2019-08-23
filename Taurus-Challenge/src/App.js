import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import 'antd/lib/button/style'
import { Layout, Button, Col, Row, Form, Input, Icon } from 'antd'
const { Header, Footer, Sider, Content } = Layout

class App extends React.Component {
  state = {
    expand: false,
  }

  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? 'block' : 'none' }}>
          <Form.Item label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input placeholder="placeholder" />
            )}
          </Form.Item>
        </Col>
      );
    }
    return children;
  }
  render() {
    return (
      <div className="App">
        <header className="header">
          {/* <div> */}
          <Layout >
            <Sider width='25%' className="App-Sider" >
              <img id='taurus_logo' src='/taurus_logo.png' />
              <h5>+ Issue Token</h5>
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
                  <Button type="primary" className="IssueToken">Issue Token</Button>
                  <Button type="primary" icon="download" className="Export">Export To CSV</Button>
                </Content>
              </div>
              <Footer className="App-Footer">Footer</Footer>
            </Layout>

          </Layout>
        </header>
      </div>
    );
  }
}

export default App;
