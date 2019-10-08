import * as data from './data/specials.json';


export const getData = () => {
  const { todaySpecial=[] } = { ...data.default }
  console.log(todaySpecial)
  return todaySpecial
}