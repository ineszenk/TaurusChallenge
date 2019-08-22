import React from 'react';
import './App.css';
import { Layout, Button } from 'antd'
import 'antd/dist/antd.css'
const { Header, Footer, Sider, Content } = Layout

function App() {
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
              <Content className="App-Content">Content</Content>
            </div>
            <Footer className="App-Footer">Footer</Footer>
          </Layout>

        </Layout>
      </header>
    </div>
  );
}

export default App;
