import React, {Component} from "react";
import {Services} from "../store/services/services";
import {Modal, Button} from "react-bootstrap";

export default class ViewModalPage extends Component {
    constructor(props) {
        super(props);

        this.service = new Services();
    }

    handleHide() {
        this.props.onHide()
    }


    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={() => this.handleHide()}
                aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Car Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table className="table table-noborders">
                        <tbody>
                        <tr>
                            <td>Manufacturer</td>
                            <td>:</td>
                            <td>{this.props.data.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>Make</td>
                            <td>:</td>
                            <td>{this.props.data.make}</td>
                        </tr>
                        <tr>
                            <td>Modal</td>
                            <td>:</td>
                            <td>{this.props.data.modal}</td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>:</td>
                            <td>{this.props.data.year}</td>
                        </tr>
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={() => this.handleHide()}>Save</Button>
                    <Button onClick={() => this.handleHide()}>Cancel</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}