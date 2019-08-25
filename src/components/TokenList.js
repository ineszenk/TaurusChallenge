import React from 'react';
import TokenTable from './TokenTable';
import '../App.css';
import 'antd/dist/antd.css';
import 'antd/lib/button/style';
import { Layout, Button } from 'antd';
import { connect } from 'react-redux';
const { Header, Sider, Content } = Layout;

class TokenList extends React.Component {
	constructor(props) {
		super(props);
		this.issueToken = this.issueToken.bind(this);
	}
	issueToken() {
		this.props.history.push('/IssueToken');
	}
	render() {
		return (
			<div className="App">
				<header className="header">
					<Layout>
						<Sider width="25%" className="App-Sider">
							<img id="taurus_logo" alt="logo" src="/taurus_logo.png" />
							<h5>+ Issue Token </h5>
							<h5> Token List</h5>
						</Sider>
						<Layout>
							<Header className="App-Header" width="75%">
								<h1>Token List</h1>
							</Header>
							<div>
								<Content className="App-Content">
									<TokenTable />
									<Button type="primary" className="IssueToken" onClick={this.issueToken}>
										Issue Token
									</Button>
									<Button type="primary" icon="download" className="Export">
										Export To CSV
									</Button>
								</Content>
							</div>
						</Layout>
					</Layout>
				</header>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	dataSource: state.dataSource
});

export default connect(mapStateToProps)(TokenList);
