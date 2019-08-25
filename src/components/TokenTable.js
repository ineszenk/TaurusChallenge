import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import 'antd/lib/button/style'
import { connect } from "react-redux";

import { Table, Icon, Button, Input } from 'antd'
const { Search } = Input;

let creationDate = new Date().toLocaleDateString()

const columns = [
    {
        title: 'Token name',
        dataIndex: 'TokenName',
        key: 'tokenName',
    },
    {
        title: 'Token ticker',
        dataIndex: 'TokenTicker',
        key: 'tokenTicker',
    },
    {
        title: 'Total supply',
        dataIndex: 'TotalSupply',
        key: 'totalSupply',
    },
    {
        title: 'Creation date',
        key: 'creationDate',
        render: () => (
            <div>
                {creationDate}
            </div>
        )
    },
    {
        title: 'Issuer name',
        dataIndex: 'IssuerName',
        key: 'issuerName',
    },
    {
        title: 'Template',
        dataIndex: 'Template',
        key: 'template',
    },
    {
        title: 'Action',
        key: 'action',
        render: () => (
            <Button >
                <Icon type="delete" color='green' />
            </Button>
        ),
    }
];


class TokenTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchWord: '',
            hideResults: true
        }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.issueToken = this.issueToken.bind(this)

    }

    handleSearch(event) {
        this.setState({
            searchWord: event.target.value,
            hideResults: false
        })
    }

    handleBlur() {
        this.setState({
            hideResults: true
        })
    }

    issueToken() {
        this.props.history.push("/IssueToken")
    }

    render() {
        const currentlyDisplayed = this.props.dataSource.dataSource.filter(item => {
            var search = new RegExp('^' + this.state.searchWord.toLowerCase())
            return search.test(item.TokenName.toLowerCase()) || search.test(item.TokenTicker.toLowerCase()) || search.test(item.IssuerName.toLowerCase())
        })
        const dataSource = this.state.searchWord.length === 0 ? this.props.dataSource.dataSource : currentlyDisplayed

        return (
            <div >
                <div className="App-Content">
                    <Search
                        placeholder="Contract name or address or ticker"
                        onChange={this.handleSearch}
                        onBlur={this.handleBlur}
                        style={{ margin: '10px 0' }}
                    />
                    <Button type="primary" className="IssueToken" onClick={this.issueToken}>Issue Token</Button>
                    <Button type="primary" icon="download" className="Export">Export To CSV</Button>
                </div>
                <Table rowKey={dataSource => dataSource.uid} dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ dataSource: state.dataSource })



export default connect(mapStateToProps)(TokenTable)
