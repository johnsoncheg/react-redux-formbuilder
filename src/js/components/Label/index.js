import React, {Component} from 'react'
import { Icon } from 'antd'
import styles from './index.scss'

export default class Label extends Component {

    render() {
        const {addText, addTextArea, addNumber, addRadio, addCheckbox, addDropdown} = this.props
        return (
            <div className={styles['field-container']}>
                <a href="javascript:void(0)" className={styles.button} data-role="single_line" onClick={addText}>
                    <Icon type="edit" />
                    单行文本
                </a>
                <a href="javascript:void(0)" className={styles.button} data-role="paragraph_text" onClick={addTextArea}>
                    <Icon type="copy" />
                    多行文本
                </a>
                <a href="javascript:void(0)" className={styles.button} data-role="number" onClick={addNumber}>
                    <Icon type="up-circle-o" />
                    数字
                </a>
                <a href="javascript:void(0)" className={styles.button} data-role="single_choice" onClick={addRadio}>
                    <Icon type="smile-o" />
                    单项选择
                </a>
                <a href="javascript:void(0)" className={styles.button} data-role="multiple_choice" onClick={addCheckbox}>
                    <Icon type="smile" />
                    多项选择
                </a>
                <a href="javascript:void(0)" className={styles.button} data-role="drop_down" onClick={addDropdown}>
                    <Icon type="down" />
                    下拉框
                </a>
            </div>
        )
    }
}