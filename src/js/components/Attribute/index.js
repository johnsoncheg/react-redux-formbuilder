import React, {Component} from 'react'
import {Input, Checkbox, InputNumber, Icon} from 'antd'
import RadioGroup from './RadioGroup'
import styles from './index.scss'

//required or not

export default class Attribute extends Component {

    handleRequired = (e) => {
        // console.log(e.target.checked)

        let checked = e.target.checked
        this
            .props
            .setRequired(checked);
    }

    //标题
    handleLabel = (e) => {
        let value = e.target.value
        this
            .props
            .setLabel(value)
    }

    //默认值
    handleDefaultValue = (e) => {
        let value = e.target.value
        this
            .props
            .setValue(value)
    }

    //数字默认值
    handleDefaultNumber = (value) => {
        this
            .props
            .setValue(value)
    }

    render() {
        let {fields} = this.props
        let {label} = this.props.fields[0]
        const {setName, insertRadio, removeRadio} = this.props
        //length = 1 时 removeRadio UI不显示

        let content

        if (fields[0].field_type === 'single_line_text') {
            content = (
                <div>
                    <div className={styles['setting-panel__name']}>
                        单行文本
                    </div>
                    <div className={styles['title']}>
                        <label>标题</label>
                        <Input value={label} onChange={this.handleLabel}/>
                    </div>
                    <div className={styles['value']}>
                        <label>默认值</label>
                        <Input onChange={this.handleDefaultValue}/>
                    </div>
                    <div className={styles['required']}>
                        <Checkbox checked={fields[0].required} onChange={this.handleRequired}>必填项</Checkbox>
                    </div>
                </div>
            )
        }

        if (fields[0].field_type === 'paragraph_text') {
            content = (
                <div>
                    <div className={styles['setting-panel__name']}>
                        多行文本
                    </div>
                    <div className={styles['title']}>
                        <label>标题</label>
                        <Input value={label} onChange={this.handleLabel}/>
                    </div>
                    <div className={styles['value']}>
                        <label>默认值</label>
                        <Input type="textarea" onChange={this.handleDefaultValue}/>
                    </div>
                    <div className={styles['required']}>
                        <Checkbox checked={fields[0].required} onChange={this.handleRequired}>必填项</Checkbox>
                    </div>
                </div>
            )
        }

        if (fields[0].field_type === 'number') {
            content = (
                <div>
                    <div className={styles['setting-panel__name']}>
                        数字
                    </div>
                    <div className={styles['title']}>
                        <label>标题</label>
                        <Input value={label} onChange={this.handleLabel}/>
                    </div>
                    <div className={styles['value']}>
                        <label>默认值</label>
                        <InputNumber
                            onChange={this.handleDefaultNumber}
                            style={{
                            display: 'block'
                        }}/>
                    </div>
                    <div className={styles['required']}>
                        <Checkbox checked={fields[0].required} onChange={this.handleRequired}>必填项</Checkbox>
                    </div>
                </div>
            )
        }

        if (fields[0].field_type === 'single_choice' || fields[0].field_type === 'multiple_choice' || fields[0].field_type === 'drop_down') {
            const length = fields[0].options.length
            let type;
            if(fields[0].field_type === 'single_choice') {
                type = '单选项'
            }
            if(fields[0].field_type === 'multiple_choice') {
                type = '多选项'
            }
            if(fields[0].field_type === 'drop_down') {
                type = '下拉框'
            }
            content = (
                <div>
                    <div className={styles['setting-panel__name']}>
                        {
                            type
                        }
                    </div>
                    <div className={styles['title']}>
                        <label>标题</label>
                        <Input value={label} onChange={this.handleLabel}/>
                    </div>
                    <div className={styles.radiogroup}>
                        <label className={styles['setting-name']}>选项</label>
                        {fields[0]
                            .options
                            .map((item, index) => <RadioGroup
                                ItemLength={length}
                                Index={index}
                                Item={item}
                                key={index}
                                setName={setName}
                                insertRadio={insertRadio}
                                removeRadio={removeRadio}/>)}
                    </div>
                    <div className={styles['required']}>
                        <Checkbox checked={fields[0].required} onChange={this.handleRequired}>必填项</Checkbox>
                    </div>
                </div>
            )
        }

        return (
            <div className={styles['setting-panel']}>
                {content}
            </div>
        )
    }
}