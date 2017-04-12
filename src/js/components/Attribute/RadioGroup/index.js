import React, {Component} from 'react'
import {Input, Icon} from 'antd'
import styles from './index.scss'
export default class RadioGroup extends Component {

    state = {
        notNull: false
    }

    //设置Radio对应的Name
    SetOptionName = (e) => {
        // console.log(this.props.Index)
        const value = e.target.value
        const index = this.props.Index
        this
            .props
            .setName(index, value)
    }

    //指定位置插入
    InsertOption = () => {
        this
            .props
            .insertRadio(this.props.Index)
    }

    //指定位置删除
    RemoveOption = () => {
        this
            .props
            .removeRadio(this.props.Index)
    }

    //判空
    NotNull = (e) => {
        if(e.target.value.trim() == '') {
            this.setState({
                notNull: true
            })
        } else {
            this.setState({
                notNull: false
            })
        }
    }
    render() {
        const {Index, Item, ItemLength} = this.props
        let {notNull} = this.state
        return (
            <div className={styles['radio-setting']}><Input
                onBlur={this.NotNull}
                value={Item.name}
                onChange={this.SetOptionName}
                style={{
                width: '70%'
            }}/><Icon type="plus-circle-o" className={styles.plus} onClick={this.InsertOption}/>
            {
                ItemLength !== 1 && <Icon
                type="minus-circle-o"
                className={styles.minus}
                onClick={this.RemoveOption}/>
            }
            {
                notNull && 
                <div style={{color: 'red'}}>
                    选项名称不能为空！
                </div>
            }
            </div>
        )
    }
}