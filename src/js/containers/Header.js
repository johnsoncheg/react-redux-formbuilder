import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormHeader } from '../components'
import * as headerActions  from '../actions/HeaderActions'
class Header extends Component {

    render() {
        const {state, actions} = this.props
        return (
            <FormHeader {...state} {...actions} />
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        state: state.form.header
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(headerActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)