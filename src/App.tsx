import {useState, useMemo} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Cart2} from 'react-bootstrap-icons';

import './App.css'
import {Provider, connect} from 'react-redux';
import {legacy_createStore as createStore} from 'redux'

const store = createStore(reducer)

function reducer(state = {
    count : 0
}, action : {
    type : any;
}) {
    switch (action.type) {
        case 'INCREMENT':
            let add = state.count + 1
            return {
                count: add
            };
        case 'DECREMENT':
            let sub = state.count - 1
            return {
                count: sub
            };
        default:
            return state;
    }
}

// Creamos las acciones
function increment() {
    return {type: 'INCREMENT'};
}

function decrement() {
    return {type: 'DECREMENT'};
}

// Creamos el componente de React
function Counter({count, increment, decrement}) {
    return (
        <div>
            <button type="button" className="btn btn-primary position-relative cartbutton">
                Tu Carrito
                <Cart2 className='mx-2'></Cart2>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {count} </span>
            </button>
            <span className='row-buttons mt-2'>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Articulo 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className='row-buttons'>
                            <a className="btn btn-primary"
                                onClick={increment}>Agregar al Carrito</a>
                            <a className="btn btn-danger"
                                onClick={count > 0 ? decrement : ''}>Eliminar del Carrito</a>
                        </span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Articulo 2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <span className='row-buttons'>
                            <a className="btn btn-primary"
                                onClick={increment}>Agregar al Carrito</a>
                            <a className="btn btn-danger"
                                onClick={count > 0 ? decrement : ''}>Eliminar del Carrito</a>
                        </span>
                    </div>
                </div>
            </span>
        </div>
    );
}

// Conectamos el componente al store
const ConnectedCounter = connect(state => ({count: state.count}), {increment, decrement})(Counter);

function App() {
    const [count, setCount] = useState(0)
    return (
        <>
            <Provider store={store}>
                <ConnectedCounter/>
            </Provider>
        </>
    )
}

export default App
