import React, {Component} from 'react'
import classnames from 'classnames'
import styles from './index.scss'
import Label from '../Label'
import Attribute from '../Attribute'

export default class Panel extends Component {

    ClickNavAdd = () => {
        this
            .props
            .actions
            .activeNavAdd();
    }

    ClickNavEdit = () => {
        this
            .props
            .actions
            .activeNavEdit();
    }

    render() {
        const {nav_add, nav_edit} = this.props.nav
        const {fields} = this.props
        //action
        // const {addText, addTextArea, addNumber} = this.props.actions
        const {actions} = this.props
        let content
        
        if(nav_add) {
            content = (
                <div>
                    <h3>通用字段</h3>
                    <Label {...actions}/>
                </div>
            )   
        }

        if(nav_edit) {
            content = fields.some(field => field.selected) ? <Attribute fields={fields.filter(field => field.selected === true)} {...actions}/> : <div className="">没有选定的字段
请添加或者选择一个字段</div>
            
        }
        return (
            <div className={styles['panel-container']}>
                <div className={styles.nav}>
                    <div
                        className={classnames(styles['nav__add'], {
                        [styles.active]: nav_add
                    })}
                        onClick={this.ClickNavAdd}>
                        <a href="javascript:void(0)">添加字段</a>
                    </div>
                    <div
                        className={classnames(styles['nav__edit'], {
                        [styles.active]: nav_edit
                    })}
                        onClick={this.ClickNavEdit}>
                        <a href="javascript:void(0)">编辑字段</a>
                    </div>
                </div>
                <div className={styles.content}>
                    {content}
                </div>
            </div>
        )
    }
}