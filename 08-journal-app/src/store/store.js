import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducers';
import { notesReducer } from '../reducers/notesReducers';
import { uiReducer } from '../reducers/uiReducer';

// Para redux devtools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


// Store solo acepta un reducer, podríamos pasarle solo el authReducer
// pero así queda escalable. Si usamos otro reducer entonces solo tenemos que
// agregarlo al combineReducers
const reducers = combineReducers({
    auth: authReducer, //auth es el nombre que le estamos dando al state del authReducer
    ui: uiReducer,
    notes: notesReducer
});

// La store es la fuente única de información
export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)) //Para resolver acciones asíncronas
);
// ESTA ES TODA LA CONFIG QUE HAY QUE HACER PARA LAS COSAS ASÍNCRONAS (ej: http requests)

// Si no tuvieramos que trabajar con cosas asíncronas como http requests, en vez del composeEnhancers(applyMiddleware(thunk)) basta
// con poner // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), pero como
// estamos trabajando con http requests, entonces aplicamos un middleware que nos resolverá estas acciones asíncronas,
// de hecho es toda la config que hay que hacer para el tema de las cosas asíncronas.
// Importante hacer notar que la línea window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// se pone para trabajar con la extención de redux del navegador. Como no se puede poner dentro del createStore, entonces
// se pone afuera con la constante composeEnhancers.