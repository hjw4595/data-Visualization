import seriesStore from './seriesStore';

class RootStore {
  constructor(){
    this.seriesStore = new seriesStore(this);
  }
}
export default RootStore;