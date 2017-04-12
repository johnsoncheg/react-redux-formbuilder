import React, {Component} from 'react'
import {Menu} from '../components'
import Header from './Header'
import Form from './Form'
import Panels from './Panels'
import SaveFrom from './SaveForm'
import {bindActionCreators} from 'redux'
import * as formActions  from '../actions/FormActions'
import {connect} from 'react-redux'

class EditForm extends Component {


    componentDidMount() {
        console.log(this.props.actions.fetchField())
    }

    render() {
        return (
            <div className="container">
                <Menu/>
                <div className="form-container">
                    <div className="form-container__form">
                        <div className="form-area">
                            <Header/>
                            <Form/>
                            <SaveFrom />
                        </div>

                    </div>
                    <div className="form-container__panel">
                        <Panels />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(formActions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(EditForm)
