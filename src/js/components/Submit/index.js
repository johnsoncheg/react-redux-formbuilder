import React, {Component} from 'react'
import {Button} from 'antd'
import styles from './index.scss'
// import fetch from 'isomorphic-fetch'

export default class Submit extends Component {

    // state = {
    //     payload: false
    // }

    PrintForm = () => {
        //只有等请求响应有了才能再点击请求
        if(!this.props.isPosted){
            this.props.doRequest();
        }
        
        // const form = {
        //     symbol: Math.random().toString(36).substr(2, 6),
        //     name: this.props.header.name,
        //     description: this.props.header.description,
        //     fields: this.props.fields
        // }

        // const data = new FormData();
        // data.append('result', JSON.stringify(form));
        // fetch('http://192.168.11.171:3000/forms', {
        //     method: "POST",
        //     body: data
        // }).then((res) => {
        //     console.log(res)
        // }).catch(err => console.log(err))

    }

    render() {
        return (
            <div className={styles['submit-area']}>
                <div className={styles.submit}>
                    <Button type="primary" onClick={this.PrintForm} size={`large`}>保存表单</Button>
                </div>
            </div>
        )
    }
}