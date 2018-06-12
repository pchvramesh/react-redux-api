import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import './App.css';

import renderIf from 'render-if';

import AddModalPage from './modal/add'
import EditModalPage from './modal/edit'
import DeleteModalPage from './modal/delete'
import ViewModalPage from './modal/view'

import {Services} from './store/services/services';

const propTypes = {
    cars: PropTypes.array,
};

class App extends Component {
    constructor(props) {
        super(props);
        this.Services = new Services();
        //this.getCars();
        this.state = {
            showAddModal: false,
            showEditModal: false,
            showViewModal: false,
            showDeleteModal: false,
            title: '',
            selected: {}
        };

        this.hideAddModal = this.hideAddModal.bind(this);
        this.hideEditModal = this.hideEditModal.bind(this);
        this.hideViewModal = this.hideViewModal.bind(this);
        this.hideDeleteModal = this.hideDeleteModal.bind(this);

        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.view = this.view.bind(this);
    }

    edit(data) {
        this.showEditModal(data);
    }

    delete(data) {
        this.showDeleteModal(data);
    }

    view(data) {
        this.showViewModal(data);
    }

    getCars() {
        this.Services.getCars().then((resp) => {
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }

    renderRows(cars) {
        return cars.map((item, index) => (<tr key={index}>
            <td><a onClick={() => this.view(item)}>{item.manufacturer}</a></td>
            <td>{item.make}</td>
            <td>{item.model}</td>
            <td>{item.year}</td>
            <td>
                <i onClick={() => this.edit(item)} className="fa fa-pencil"></i>
                <i onClick={() => this.delete(item)} className="fa fa-trash"></i>
            </td>
        </tr>))
    }

    hideAddModal() {
        this.setState({showAddModal: false})
    }

    hideEditModal() {
        this.setState({showEditModal: false})
    }

    hideViewModal() {
        this.setState({showViewModal: false})
    }

    hideDeleteModal() {
        this.setState({showDeleteModal: false})
    }

    showAddModal() {
        this.setState({showAddModal: true})
    }

    showEditModal(data) {
        console.log(data);
        this.setState({selected: data, showEditModal: true});
        console.log(this.state.selected);
    }

    showViewModal(data) {
        this.setState({selected: data, showViewModal: true})
    }

    showDeleteModal(data) {
        this.setState({selected: data, showDeleteModal: true})
    }

    render() {
        const {cars} = this.props;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row">
                            <div className="col-sm-12">
                                <button className="btn btn-primary pull-right" onClick={() => this.showAddModal()}>Add
                                    Car
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Manufacturer</th>
                                <th>Make</th>
                                <th>Modal</th>
                                <th>Year</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.renderRows(cars)}
                            </tbody>
                        </table>
                    </div>
                </div>

                {renderIf(this.state.showAddModal)(
                    <AddModalPage show={this.state.showAddModal} onHide={this.hideAddModal}/>
                )}

                {renderIf(this.state.showEditModal)(
                    <EditModalPage show={this.state.showEditModal} onHide={this.hideEditModal}
                                   data={this.state.selected}/>
                )}

                {renderIf(this.state.showDeleteModal)(
                    <DeleteModalPage show={this.state.showDeleteModal} onHide={this.hideDeleteModal}
                                   data={this.state.selected}/>
                )}

                {renderIf(this.state.showViewModal)(
                    <ViewModalPage show={this.state.showViewModal} onHide={this.hideViewModal}
                                   data={this.state.selected}/>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cars: state.counter.cars,
});

App.propTypes = propTypes;

export default connect(mapStateToProps)(App);
