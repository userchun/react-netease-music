import { AnyAction } from 'redux';

export interface IMusicInitState {}
const musicInitState: IMusicInitState = {};

const musicState = (state = musicInitState, action: AnyAction) => {
  const { type, params } = action;
  switch (type) {
    default:
      return state;
  }
};
export default musicState;
