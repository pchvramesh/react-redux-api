const BASE_URL = 'http://localhost:53262';

export class Services {
    constructor() {
        this.getCarsURL = BASE_URL + '/api/productlist';
        this.saveCarsURL = BASE_URL + '/api/productlist';
        this.deleteCarsURL = BASE_URL + '/api/productlist';
        this.editCarsURL = BASE_URL + '/api/productlist';


        this.addCar = this.addCar.bind(this);
        this.getCars = this.getCars.bind(this);
        this.deleteCar = this.deleteCar.bind(this);
        this.updateCar = this.updateCar.bind(this);

        this.headers = {
            'Content-Type': 'application/json'
        };
    }

    addCar(object) {
        return fetch(this.saveCarsURL, {
            method: 'POST',
            body: JSON.stringify(object),
            headers: this.headers
        }).then((response) => response.json()).then((responseJson) => {
            return responseJson;
        }).catch((error) => error)
    }

    getCars() {
        return fetch(this.getCarsURL, {
            method: 'GET',
            headers: this.headers
        }).then((response) => response.json()).then((responseJson) => {
            return responseJson;
        }).catch((error) => error)
    }

    deleteCar(data) {
        return fetch(this.deleteCarsURL + '/' + data.id, {
            method: 'DELETE',
            headers: this.headers
        }).then((response) => response.json()).then((responseJson) => {
            return responseJson;
        }).catch((error) => error)
    }

    updateCar(data) {
        return fetch(this.editCarsURL + '/' + data.id, {
            method: 'PUT',
            headers: this.headers,
            body: JSON.stringify({
                manufacturer: data.manufacturer,
                make:data.make,
                model:data.model,
                year:data.year
            })
        }).then((response) => response.json()).then((responseJson) => {
            return responseJson;
        }).catch((error) => error)
    }
}