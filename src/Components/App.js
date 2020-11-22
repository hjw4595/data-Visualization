import React from 'react';
import MainPage from "./MainPage";
import RootStore from "../Mobx";
import { Provider } from 'mobx-react';

const root = new RootStore();

function App() {
  return (
  <>
    <Provider {...root}>
      <MainPage />
    </Provider>
  </>
  )}

export default App;
