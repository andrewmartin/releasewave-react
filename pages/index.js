import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from 'components/Forms/Register/Register';
import Login from 'components/Forms/Login/Login';

import { actions } from 'store/reducers/user';

class Home extends React.Component {
  componentDidMount() {
    // console.log('updated', this.props);
  }

  render() {
    const {
      actions: { registerUser, loginUser },
    } = this.props;

    return (
      <div>
        <h2>Home</h2>
        <Register onSubmit={registerUser} />
        <Login onSubmit={loginUser} />
      </div>
    );
  }
}

const mapStateToProps = ({ client }) => {
  return {
    client,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      ...actions,
    },
    dispatch
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
