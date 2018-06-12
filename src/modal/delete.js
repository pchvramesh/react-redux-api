import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from "react-bootstrap";
import actions from "../store/features/counter/actions";
import {connect} from "react-redux";

import {Services} from '../store/services/services';

const propTypes = {deleteCar: PropTypes.func.isRequired};

class DeleteModalPage extends Component {
    constructor(props) {
        super(props);

        this.service = new Services();
    }

    handleHide() {
        this.props.onHide()
    }


    render() {
        const {deleteCar} = this.props;
        return (
            <Modal
                show={this.props.show}
                onHide={() => this.handleHide()}
                aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Delete Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Are you sure you want to delete the</h3>
                    <h3>{this.props.data.year} {this.props.data.manufacturer} {this.props.data.make} {this.props.data.modal} ?</h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={() => deleteCar(this)}>Save</Button>
                    <Button onClick={() => this.handleHide()}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    deleteCar: (data) => {
        data.service.deleteCar(data.state).then(function (resp) {
            dispatch(actions.deleteCar(data.props.data));
            data.handleHide();
        }).catch(function (error) {
            alert('Check console for error');
            console.log(error);
        });
    }
});

DeleteModalPage.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(DeleteModalPage);