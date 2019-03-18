import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from 'components/Forms/Register/Register';
import Login from 'components/Forms/Login/Login';

import { bindAllActions } from 'store/actions/helpers';

class Home extends React.Component {
  async getInitialProps() {
    const {
      actions: { getArtists },
    } = this.props;

    try {
      const data = await getArtists();
      console.log('data', data);
    } catch (err) {
      console.log('err');
    }

    // console.log('updated', this.props);
    return {
      data,
    };
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

const mapStateToProps = ({ client }) => {
  return {
    client,
  };
};

const mapDispatchToProps = dispatch => bindAllActions(dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
