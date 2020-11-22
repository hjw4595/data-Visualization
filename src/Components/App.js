import MainPage from "./MainPage";
import RootStore from "../../mobx";
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
