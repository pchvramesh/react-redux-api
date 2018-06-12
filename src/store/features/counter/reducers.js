import types from './types';
import {createDefaultReducer} from '../../helpers'

const initialState = {
    cars: [],
    update: true
};

const addCar = (state, payload) => {
    let data = [];
    data.push(payload);
    state.cars = state.cars.concat(data);
    return {
        ...state
    }
};

const editCar = (state, payload) => {
    let index = -1;

    state.forEach(function (item, i) {
        if (item.id === payload.id) {
            index = i;
        }
    });

    state[index] = payload;

    state.update = !state.update;

    return {
        ...state
    }
};

const deleteCar = (state, payload) => {
    let index = -1;

    state.forEach(function (item, i) {
        if (item.id === payload.id) {
            index = i;
        }
    });

    state.splice(index, 1);

    state.update = !state.update;
    return {
        ...state
    }
};

const actionMap = {
    [types.ADD_CAR]: addCar,
    [types.EDIT_CAR]: editCar
};

export default createDefaultReducer(actionMap, initialState)