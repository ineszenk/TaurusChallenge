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
        dataIndex: 'tokenName',
        key: 'tokenName',
    },
    {
        title: 'Token ticker',
        dataIndex: 'tokenTicker',
        key: 'tokenTicker',
    },
    {
        title: 'Total supply',
        dataIndex: 'totalSupply',
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
        dataIndex: 'issuerName',
        key: 'issuerName',
    },
    {
        title: 'Template',
        dataIndex: 'template',
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
