import * as data from './data/shopping_list.json';


export const getData = () => {
  const { shoppingList=[] } = { ...data.default }
  console.log(shoppingList)
  return shoppingList
}