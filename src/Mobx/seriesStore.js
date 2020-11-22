import {observable} from 'mobx';

export default class TodoStore {
      /**
   * series : {
   *   id : Number,
   *   name : string,
   *   check : bool,
   * }
   */
  @observable series = [{
    id : 100,
    name: "dateTime",
    check : true
    },{
      id : 0,
      name: "EC_slab1",
      check : false
    },{
      id : 1,
      name: "EC_slab2",
      check : false
    },{
      id : 2,
      name: "EC_drain_PC",
      check : false
    },{
      id : 3,
      name: "WC_slab1",
      check : false
    },{
      id : 4,
      name: "WC_slab2",
      check : false
    },{
      id : 5,
      name: "CO2air",
      check : false
    },{
      id : 6,
      name: "HumDef",
      check : false
    },{
      id : 7,
      name: "Rhair",
      check : false
    },{
      id : 8,
      name: "Tair",
      check : false
    },{
      id : 9,
      name: "EnScr",
      check : false
    },{
      id : 10,
      name: "BlackScr",
      check : false
    },{
      id : 11,
      name: "PipeGrow",
      check : false
    },{
      id : 12,
      name: "PipeLow",
      check : false
    },{
      id : 13,
      name: "Iglob",
      check : false
    },{
      id : 14,
      name: "RadSum",
      check : false
    },{
      id : 15,
      name: "Tout",
      check : false
    }]
}