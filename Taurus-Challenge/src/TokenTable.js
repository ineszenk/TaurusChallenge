import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import 'antd/lib/button/style'
import { Layout, Button, Col, Row, Form, Input, Icon, Table } from 'antd'
const { Header, Footer, Sider, Content } = Layout

const dataSource = [
    {
        key: '1',
        tokenName: 'TTism',
        tokenTicker: 'TTT',
        totalSupply: 100000,
        creationDate: '17 mai 2019',
        issuerName: 'Taurus Group SA',
        template: 'ERC20'
    }
];

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

class TokenTable extends React.Component {


    render() {
        return (
            <div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

export default TokenTable;
