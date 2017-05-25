import {RECEIVE_DATA} from '../actions/data_actions';

const initState = {
  allData: {}
};

const DataReducer = (state=initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_DATA:
      return { allData: action.data }
    default:
      return state;
  }
}

export default DataReducer;
