import {connect} from 'react-redux';
import List from './list';
import {getData} from '../../actions/data_actions';

const mapStateToProps = (state) => {
  return {
    data: state.data.allData,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getData: () => dispatch(getData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
