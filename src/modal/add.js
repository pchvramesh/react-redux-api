import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button} from "react-bootstrap";
import actions from "../store/features/counter/actions";
import {connect} from "react-redux";

import {Services} from '../store/services/services';

const propTypes = {addcar: PropTypes.func.isRequired};

class AddModalPage extends Component {
    constructor(props) {
        super(props);

        this.service = new Services();

        this.state = {
            manufacturer: '',
            make: '',
            model: '',
            year: '',
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleHide() {
        this.setState({
            manufacturer: '',
            make: '',
            model: '',
            year: ''
        });
        this.props.onHide()
    }

    render() {
        const {addcar} = this.props;
        return (
            <Modal
                show={this.props.show}
                onHide={() => this.handleHide()}
                aria-labelledby="contained-modal-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Add Car</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Manufarurer</label>
                            <div className="col-sm-8">
                                <input type="text" name="manufacturer" value={this.state.manufacturer}
                                       onChange={this.handleChange} className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Make</label>
                            <div className="col-sm-8">
                                <input type="text" name="make" value={this.state.make}
                                       onChange={this.handleChange} className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Modal</label>
                            <div className="col-sm-8">
                                <input type="text" name="model" value={this.state.model}
                                       onChange={this.handleChange} className="form-control"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-4 control-label">Year</label>
                            <div className="col-sm-8">
                                <input type="text" name="year" value={this.state.year}
                                       onChange={this.handleChange} className="form-control"/>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={() => addcar(this)}>Save</Button>
                    <Button onClick={() => this.handleHide()}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addcar: (data) => {
        let isValid = true;

        Object.keys(data.state).forEach((item) => {
            if (data.state[item].trim().length === 0) {
                isValid = false;
            }
        });

        if (isValid) {
            data.service.addCar(data.state).then(function (resp) {
                dispatch(actions.addCar(data.state));
                data.setState({
                    manufacturer: '',
                    make: '',
                    model: '',
                    year: ''
                });
                data.handleHide();
            }).catch(function (error) {
                alert('Check console for error');
                console.log(error);
            });
        } else {
            alert('All fields are required');
        }
    }
});

AddModalPage.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(AddModalPage);