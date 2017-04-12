import React, { Component } from 'react'
import Components from '../Components'
import classnames from 'classnames'
import styles from './index.scss'

export default class FormArea extends Component {

    render() {

        const {fields, actions} = this.props
        return (
            <div className={classnames(styles['form-area'], {[styles.edit]: fields.length !== 0})}>
                {fields.length?
                    fields.map((item, index) => <Components field={item} key={index} {...actions}/>):
                    <span className={styles.title}>请添加组件</span>
                }
            </div>
        )
    }
}