import React from 'react';
import '../App.css';
import 'antd/dist/antd.css'
import 'antd/lib/button/style'
import { Table } from 'antd'

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
    }
];

let creationDate = new Date().toLocaleDateString()


class TokenTable extends React.Component {

    async componentDidMount() {
        const tokenName = localStorage.getItem('TokenName')
        const tokenTicker = localStorage.getItem('TokenTicker')
        const totalSupply = localStorage.getItem('TotalSupply')
        const issuerName = localStorage.getItem('IssuerName')
        const template = localStorage.getItem('Template')

        await dataSource.push({ tokenName, tokenTicker, totalSupply, issuerName, creationDate, template })
    }


    render() {
        return (
            <div>
                <Table rowKey={dataSource => dataSource.uid} dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

export default TokenTable;
