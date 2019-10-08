import * as data from './data/petrol.json';


export const getData = () => {
  console.log(data)
}

export const getFuelList = () => {
  const { petrolStations = []} = { ...data.default }
  let fuel = []
  petrolStations.forEach((elem, index) => {
    let { fuel_type='un-named'} = { ...elem }
    fuel_type = fuel_type !== '' ? fuel_type : 'un-named'
    fuel.push(fuel_type)
  })
}