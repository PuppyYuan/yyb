'use strict'

import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import reducers from '../reducers';

const logger = store => next => action => {
    if(typeof action === 'function') console.log('dispatching a function');
    else console.log('dispatching', action.type);

    let result  = next(action);
    console.log('next state', store.getState());
    return result;
}

let createAppStrore = applyMiddleware(logger, thunk)(createStore);

export default function configureStore(onComplete: ()=>void){

    const store = compose(autoRehydrate())(createAppStrore)(reducers);

    persistStore(store, {storage: AsyncStorage}, onComplete);
    return store;
}
