import React from 'react';
import AdminDashboard from './AdminDashboard';

export const withAdmin = Component => () => (
  <AdminDashboard>{props => <Component {...props} />}</AdminDashboard>
);
