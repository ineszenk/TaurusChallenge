import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import 'antd/lib/button/style'
import { Table, Icon } from 'antd'

const dataSource = []

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
        dataIndex: 'creationDate',
        key: 'creationDate',
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
            <Icon type="delete" color='green' />
        ),
    }
];

let creationDate = new Date().toLocaleDateString()


class TokenTable extends React.Component {

    componentDidMount() {
        const tokenName = localStorage.getItem('TokenName')
        const tokenTicker = localStorage.getItem('TokenTicker')
        const totalSupply = localStorage.getItem('TotalSupply')
        const issuerName = localStorage.getItem('IssuerName')
        const template = localStorage.getItem('Template')

        dataSource.push({ tokenName, tokenTicker, totalSupply, issuerName, creationDate, template })
    }


    render() {
        console.log(dataSource)
        return (
            <div>
                <Table rowKey={dataSource => dataSource.uid} dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

export default TokenTable;
