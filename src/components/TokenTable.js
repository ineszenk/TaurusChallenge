import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import 'antd/lib/button/style'
import { connect } from "react-redux";

import { Table, Icon, Button } from 'antd'


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
    render() {
        const dataSource = this.props.dataSource.dataSource

        return (
            <div>
                <Table rowKey={dataSource => dataSource.uid} dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

const mapStateToProps = state => ({ dataSource: state.dataSource })



export default connect(mapStateToProps)(TokenTable)
