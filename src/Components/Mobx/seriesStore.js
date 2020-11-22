import {observable, action } from 'mobx';
import chartData from "../JsonData/data.json"

const dateTime = chartData.map(data => data.time)
const EC_slab1 = chartData.map(data => data.EC_slab1)
const EC_slab2 = chartData.map(data => data.EC_slab2)
const EC_drain_PC = chartData.map(data => data.EC_drain_PC)
const WC_slab1 = chartData.map(data => data.WC_slab1)
const WC_slab2 = chartData.map(data => data.WC_slab2)
const CO2air = chartData.map(data => data.CO2air)
const HumDef = chartData.map(data => data.HumDef)
const Rhair = chartData.map(data => data.Rhair)
const Tair = chartData.map(data => data.Tair)
const EnScr = chartData.map(data => data.EnScr)
const BlackScr = chartData.map(data => data.BlackScr)
const PipeGrow = chartData.map(data => data.PipeGrow)
const PipeLow = chartData.map(data => data.PipeLow)
const Iglob = chartData.map(data => data.Iglob)
const RadSum = chartData.map(data => data.RadSum)
const Tout = chartData.map(data => data.Tout)

export default class TodoStore {
  
      /**
   * todoItem : {
   *   name : string,
   *   data : data,
   *   check : bool,
   * }
   */
  @observable series = [{
    name: "dateTime",
    data: dateTime,
    check : true
    },{
    name: "EC_slab1",
    data : EC_slab1,
    check : false
    },{
    name: "EC_slab2",
    data : EC_slab2,
    check : false
    },{
    name: "EC_drain_PC",
    data : EC_drain_PC,
    check : false
    },{
    name: "WC_slab1",
    data : WC_slab1,
    check : false
    },{
    name: "WC_slab2",
    data : WC_slab2,
    check : false
    },{
    name: "CO2air",
    data : CO2air,
    check : false
    },{
    name: "HumDef",
    data : HumDef,
    check : false
    },{
    name: "Rhair",
    data : Rhair,
    check : false
    },{
    name: "Tair",
    data : Tair,
    check : false
    },{
    name: "EnScr",
    data : EnScr,
    check : false
    },{
    name: "BlackScr",
    data : BlackScr,
    check : false
    },{
    name: "PipeGrow",
    data : PipeGrow,
    check : false
    },{
    name: "PipeLow",
    data : PipeLow,
    check : false
    },{
    name: "Iglob",
    data : Iglob,
    check : false
    },{
    name: "RadSum",
    data : RadSum,
    check : false
    },{
    name: "Tout",
    data : Tout,
    check : false
    }]

    /**
   * 아이템 체크 
   * @param id string
   */
  @action checkItem = id => {
    const checkItem = this.todoList.map(item => item.id === id ? {...item, check : !item.check} : item )
    this.todoList.replace(checkItem);
}
}