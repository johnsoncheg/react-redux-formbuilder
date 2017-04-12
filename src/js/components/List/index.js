import React, {Component} from 'react'
import styles from './index.scss'
import {Link} from 'react-router'
import {Card, Row, Col, Spin} from 'antd';
export default class List extends Component {

    componentDidMount() {
        this
            .props
            .doFetch();
    }

    render() {
        const {items, isFetching} = this.props
        return (
            <div className={styles.list}>
                <Spin tip="加载中..." size="large" spinning={isFetching}>
                    <Row gutter={16}>
                        {items.length && items.map((item, index) => <Col className={styles['gutter-row']} span={8}
                                                                         key={index}>
                            <Card title={item.name} bordered={false}><Link
                                to={{pathname: '/forms', query: {symbol: item.symbol}}}>编辑</Link></Card>
                        </Col>)
                        }
                    </Row>
                </Spin>
            </div>
        )
    }
}