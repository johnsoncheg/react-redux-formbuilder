import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {Menu, List} from '../components'
import * as PostActions  from '../actions/PostActions'

class FormList extends Component {

    render() {

        const {actions, isFetching, items} = this.props
        return (
            <div className="container">
                <Menu />
                <div className="form-container">
                    <List {...actions} items={items} isFetching={isFetching}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isFetching: state.post.isFetching,
        items: state.post.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(PostActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormList)