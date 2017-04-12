import React, {Component} from 'react'
import classnames from 'classnames'
import {Input} from 'antd'
import styles from './index.scss'

export default class FormHeader extends Component {

    handleClick = () => {
        this
            .props
            .focusHeader()
    }

    saveName = (e) => {
        const value = e
            .target
            .value
            .trim()
        if (value !== '') {
            this
                .props
                .saveName(value)
        }
    }

    saveDescription = (e) => {
        const value = e
            .target
            .value
            .trim()
        if (value !== '') {
            this
                .props
                .saveDescription(value)
        }
    }

    render() {
        const {name, description, edit} = this.props

        return (
            <div
                className={classnames(styles['form-header'], {
                [styles.edit]: false
            })}
                onClick={this.handleClick}>
                {edit
                    ? <div>
                            <div>
                                <Input
                                    className={styles['form-name']}
                                    onChange={this.saveName}
                                    placeholder="未命名表单"/>
                            </div>
                            <div>
                                <Input
                                    type="textarea"
                                    rows={3}
                                    className={styles['form-description']}
                                    onChange={this.saveDescription}
                                    placeholder="未添加表单"
                                     /> 
                            </div>
                        </div>
                    : <div>
                        <h2>{name}</h2>
                        <p>{description}</p>
                    </div>
}
            </div>
        )
    }
}