import { createStore, applyMiddleware, compose } from 'redux';
import RootState from '../reducer';

const isProduction = import.meta.env.MODE === 'production';

/**
 *  createStore 三个参数
 * 1.reducer
 * 2.initState
 * 3.中间件 applyMiddleware
 *
 */

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;

const RootStore = isProduction
  ? createStore(RootState, applyMiddleware())
  : createStore(RootState, composeEnhancers(applyMiddleware()));
export default RootStore;
