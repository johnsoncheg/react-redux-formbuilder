import React, {Component} from 'react'
import {Menu, Icon} from 'antd'
import {IndexLink, Link} from 'react-router'
import styles from './index.scss'


export default class MenuBar extends Component {
    state = {
        current: null
    }

    handleClick = (e) => {
        //console.log('click', e.key);
        this.setState({current: e.key})
    }

    //根据pathname判断菜单项是否选中
    MenuSelected() {
        if (window.location.pathname === '/') {
            this.setState({current: "newform"})
        }
        if (window.location.pathname === "/formlist") {
            this.setState({current: "formlist"})
        }
    }

    componentDidMount() {
        this.MenuSelected()
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                theme="light"
                mode="inline"
                style={{
                width: "20%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0
            }}
                selectedKeys={[this.state.current]}>
                <Menu.Item key="newform">
                    <IndexLink to="/">
                        <span><Icon type="home"/>新建表单</span>
                    </IndexLink>
                </Menu.Item>
                <Menu.Item key="formlist">
                    <Link to="/formlist">
                        <span><Icon type="windows"/>表单列表</span>
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}