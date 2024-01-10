import { combineReducers, createStore } from 'redux';

import billReducer from './bill';
import productReducer from './product';

const rootReducer = combineReducers({ productReducer, billReducer });

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
