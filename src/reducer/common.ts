import { AnyAction } from 'redux';

export interface IComonInitState {}
const initState: IComonInitState = {};
const commonState = (state = initState, action: AnyAction) => {
  const { type, params } = action;
  switch (type) {
    default:
      return state;
  }
};
export default commonState;
