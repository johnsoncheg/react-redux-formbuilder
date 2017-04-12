import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Submit } from '../components'
import * as PostActions  from '../actions/PostActions'

class SaveForm extends Component {

    render() {
        const {actions, isPosted} = this.props
        return (
            <Submit {...actions} isPosted={isPosted}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    isPosted: state.post.isPosted
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(PostActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveForm)

