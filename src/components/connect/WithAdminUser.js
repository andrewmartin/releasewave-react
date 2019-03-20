import { Children, cloneElement } from 'react';
import { connect } from 'react-redux';

const WithAdminUser = ({ user, children }) => {
  const { id, is_admin } = user;

  if (!id || !is_admin) return null;

  const childrenWithUser = Children.map(children, child => {
    return cloneElement(child, {
      user,
    });
  });

  return childrenWithUser;
};

WithAdminUser.defaultProps = {
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
)(WithAdminUser);
