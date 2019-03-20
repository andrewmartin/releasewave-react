import { Children, cloneElement } from 'react';
import { connect } from 'react-redux';

const WithoutUser = ({ user, children }) => {
  const { id } = user;

  const childrenWithoutUser = Children.map(children, child => {
    return cloneElement(child, {
      user,
    });
  });

  if (!id) return childrenWithoutUser;

  return null;
};

WithoutUser.defaultProps = {
  user: {
    id: null,
  },
  entity: {
    user: {
      id: null,
    },
  },
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(
  mapStateToProps,
  null
)(WithoutUser);
