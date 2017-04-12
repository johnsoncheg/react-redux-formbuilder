import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { FormArea } from '../components'
import * as formActions  from '../actions/FormActions'

class Form extends Component {

    render() {
        const {state, actions} = this.props
        return (
            <FormArea fields={state} actions={actions}/>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        state: state.form.fields
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(formActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)