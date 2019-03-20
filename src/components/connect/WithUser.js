import { Children, cloneElement } from 'react';
import { connect } from 'react-redux';

const WithUser = ({ user, children }) => {
  const { id } = user;

  const childrenWithUser = Children.map(children, child => {
    return cloneElement(child, {
      user,
    });
  });

  if (id) return childrenWithUser;

  return null;
};

WithUser.defaultProps = {
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
)(WithUser);
