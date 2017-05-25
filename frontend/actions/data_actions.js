import * as APIUtil from '../util/data_api_util';

export const RECEIVE_DATA = "RECEIVE_DATA";

export const receiveData = data => {
  return {
    type: RECEIVE_DATA,
    data
  };
};

export function getData(){
  return(dispatch)=>{
    return APIUtil.getData().then(
      (data) => dispatch(receiveData(data))
    );
  };
}
