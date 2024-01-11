import { combineReducers, createStore } from 'redux';

import billReducer from './bill';
import productReducer from './product';
import selectItemReducer from './selectItem';

const rootReducer = combineReducers({ productReducer, billReducer, selectItemReducer });

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
