import { Children, cloneElement } from 'react';
import { connect } from 'react-redux';

const WithOwnUser = ({ user, entity, children }) => {
  const { id } = user;
  const {
    user: { id: entityUserId },
  } = entity;

  if (!id || !entityUserId) return null;

  const childrenWithUser = Children.map(children, child => {
    return cloneElement(child, {
      user,
    });
  });

  if (id === entityUserId) return childrenWithUser;

  return null;
};

WithOwnUser.defaultProps = {
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
)(WithOwnUser);
