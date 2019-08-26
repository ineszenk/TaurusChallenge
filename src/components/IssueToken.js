import React from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import 'antd/dist/antd.css';
import 'antd/lib/button/style';
import { Form, Select, Input, Button, InputNumber } from 'antd';
import { connect } from 'react-redux';
import { addNewIssues } from '../reducers/dataSource';

const { Option } = Select;

class IssueToken extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countries: []
		};
	}

	componentDidMount() {
		fetch('https://restcountries.eu/rest/v2/all')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ countries: data });
			})
			.catch(console.log);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.props.DataToLocalStorage(values);
				this.props.history.push('/TokenList');
			}
		});
	};

	handleSelectChange = () => {
		this.props.form.setFieldsValue({});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		const listCountries = this.state.countries.map((country) => <Option key={country.name}>{country.name}</Option>);

		return (
			<Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
				<Form.Item label="Token Name">
					{getFieldDecorator('TokenName', {
						rules: [ { required: true, message: 'Please input the token name!' } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="Token Ticker">
					{getFieldDecorator('TokenTicker', {
						rules: [ { required: true, message: 'Please input the token ticker!' } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="Total Supply">
					{getFieldDecorator('TotalSupply', {
						initialValue: 0,
						rules: [ { required: true, message: 'Please input the total supply!' } ]
					})(<InputNumber min={0} />)}
				</Form.Item>
				<Form.Item label="Issuer Name">
					{getFieldDecorator('IssuerName', {
						rules: [ { required: true, message: 'Please input the issuer name!' } ]
					})(<Input />)}
				</Form.Item>
				<Form.Item label="Template">
					{getFieldDecorator('Template', {
						rules: [ { required: true, message: 'Please select the template!' } ]
					})(
						<Select placeholder="Select a template" onChange={this.handleSelectChange}>
							<Option value="ERC20">ERC20</Option>
						</Select>
					)}
				</Form.Item>
				<Form.Item label="Country">
					{getFieldDecorator('Country', {
						rules: [ { required: true, message: 'Please select the country!' } ]
					})(
						<Select placeholder="Select a country" onChange={this.handleSelectChange}>
							{listCountries}
						</Select>
					)}
				</Form.Item>
				<Form.Item wrapperCol={{ span: 12, offset: 5 }}>
					<Button type="primary" htmlType="submit">
						Issue Token
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

const mapState = (state) => {
	return {
		dataSource: state.dataSource
	};
};

const mapDispatchToProps = {
	DataToLocalStorage: addNewIssues
};

export default connect(mapState, mapDispatchToProps)(withRouter(Form.create()(IssueToken)));
