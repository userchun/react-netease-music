import { combineReducers, ReducersMapObject } from 'redux';
import musicState, { IMusicInitState } from './music';
import songState, { ISongInitState } from './song';
import commonState, { IComonInitState } from './common';

export interface IRootState {
  musicState: IMusicInitState;
  songState: ISongInitState;
  commonState: IComonInitState;
}

const RootState: ReducersMapObject<IRootState, any> = {
  musicState,
  songState,
  commonState,
};

export default combineReducers(RootState);
