
import React from 'react';
import MainNavigation from './src/navigator/MainNavigation';
import { Provider } from 'react-redux';
import store from './src/store/ConfigStore';

export default function App() {
  return (<Provider store={store}>
  <MainNavigation/>
  </Provider>
  );
}


