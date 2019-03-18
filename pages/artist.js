import React from 'react';
import { connect } from 'react-redux';
import { bindAllActions } from 'store/actions/helpers';

class Artist extends React.Component {
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
        <h2>Artist</h2>
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
)(Artist);
