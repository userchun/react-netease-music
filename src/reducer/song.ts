import { AnyAction } from 'redux';

export interface ISongInitState {}
const mediaInitState: ISongInitState = {};

const mediaState = (state = mediaInitState, action: AnyAction) => {
  const { type, params } = action;

  switch (type) {
    default:
      return state;
  }
};
export default mediaState;
