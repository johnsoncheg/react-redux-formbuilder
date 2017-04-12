import React, {Component} from 'react'
import classnames from 'classnames'
import {Icon, Input, Radio, Checkbox, Select} from 'antd'
import styles from './index.scss'


export default class Components extends Component {

    //组件被选中
    handleClick = () => {
        this
            .props
            .focusComponent(this.props.field.view_id)
    }

    //组件被删除
    handleDelete = (e) => {
        e.stopPropagation();
        this
            .props
            .removeComponent(this.props.field.view_id)
    }

    //radio默认禁止点击
    handleRadioClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        let {field_type, selected, options, label, value, required} = this.props.field
        let {focusComponent, removeComponent} = this.props
        const Option = Select.Option;
        // console.log(options)
        let content;

        if (field_type == 'single_line_text') {
            content = (
                <div>
                    <div className={styles.title}>{label}{required && <i style={{
                            color: 'red'
                        }}>*</i>}</div>
                    <Input readOnly="readonly" value={value} data-role="text"/>
                </div>
            )
        }
        if (field_type === 'paragraph_text') {
            content = (
                <div>
                    <div className={styles.title}>{label}{required && <i style={{
                            color: 'red'
                        }}>*</i>}</div>
                    <Input type="textarea" readOnly="readonly" value={value} data-role="textarea"/>
                </div>
            )
        }

        if (field_type === 'number') {
            content = (
                <div>
                    <div className={styles.title}>{label}{required && <i style={{
                            color: 'red'
                        }}>*</i>}</div>
                    <Input readOnly="readonly" value={value} data-role="number"/>
                </div>
            )
        }

        if (field_type === 'single_choice') {
            content = (
                <div>
                    <div className={styles.title}>{label}{required && <i style={{
                            color: 'red'
                        }}>*</i>}</div>
                    {options && options.map((item, index) => <Radio
                        onClick={this.handleRadioClick}
                        disabled={true}
                        style={{
                        display: 'block',
                        height: '30px',
                        lineHeight: '30px'
                    }}
                        key={index}>{item.name}</Radio>)
}
                </div>
            )
        }

        if (field_type == 'multiple_choice') {
            content = (
                <div>
                    <div className={styles.title}>{label}{required && <i style={{
                            color: 'red'
                        }}>*</i>}</div>
                    {options && options.map((item, index) => <Checkbox
                        onClick={this.handleRadioClick}
                        disabled={true}
                        style={{
                        display: 'block',
                        height: '30px',
                        lineHeight: '30px'
                    }}
                        key={index}>{item.name}</Checkbox>)
}
                </div>
            )
        }

        if (field_type === 'drop_down') {
            content = (
                <div>
                    <div className={styles.title}>{label}{required && <i style={{
                            color: 'red'
                        }}>*</i>}</div>

                    <Select
                        style={{width: '80%'}}
                        value={options[0].value}
                        >
                        {options && options.map((item, index) => 
                            <Option value={item.value} key={index}>{item.name}</Option>
                            )}
                    </Select>
                </div>
            )
        }

        return (
            <div
                className={classnames(styles.field, {
                [styles.edit]: selected
            })}
                onClick={this.handleClick}>
                {content}
                {selected && <div className={styles.actions}>
                    <div className={styles.delete}>
                        <Icon type="delete" onClick={this.handleDelete}/>
                    </div>
                </div>
}
            </div>
        )
    }
}