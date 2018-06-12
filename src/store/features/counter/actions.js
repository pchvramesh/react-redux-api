import types from './types';


function addCar(data) {
    return {
        type: types.ADD_CAR,
        payload:data
    }
}

function editCar(data) {
    return {
        type: types.EDIT_CAR,
        payload:data
    }
}

function viewCar(data) {
    return {
        type: types.VIEW_CAR,
        payload:data
    }
}

function deleteCar(data) {
    return {
        type: types.DELETE_CAR,
        payload:data
    }
}

export default {
    addCar,
    editCar,
    viewCar,
    deleteCar
};