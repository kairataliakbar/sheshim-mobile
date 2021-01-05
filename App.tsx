import React from 'react';

import AuthNavigation from './src/navigations/AuthNavigation';
import AppNavigation from './src/navigations/AppNavigation';

export default function App() {
  const isAuth: boolean = false;

  if (isAuth) return <AuthNavigation />;

  return (
    <AppNavigation />
  );
}
