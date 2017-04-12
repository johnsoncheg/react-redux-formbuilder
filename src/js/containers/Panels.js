import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Panel } from '../components'
import * as NavActions from '../actions/NavActions'
import * as FormActions from '../actions/FormActions'
import * as FieldActions from '../actions/FieldActions'

class Panels extends Component {

    render() {
        const {nav, fields, actions} = this.props
        return (
            <Panel nav={nav} fields={fields}  actions={actions} />
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        nav: state.nav,
        fields: state.form.fields
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators({...NavActions, ...FormActions, ...FieldActions}, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Panels)