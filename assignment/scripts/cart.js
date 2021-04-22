console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; // declares variable with empty array

function addItem(item, array){
  array.push(item); //adds 'item' to array identified in function
  return true; //returns true if item was added
}

console.log('basket should have juice:', addItem('juice', basket), basket[0]);
console.log('basket should have bagels:', addItem('bagels', basket), basket[1]);
console.log('basket should have oatly:', addItem('oatly', basket), basket[2]);

function listItems(array){
  for (let itemTest of array){ // loops through all items in array
    console.log(itemTest); //logs every item
  }
  console.log('are all in the basket');
}

console.log('what\'s in the basket?');
listItems(basket);

console.log('--- playing with list items function to make more clear ---')

function listItems2(array){
  if (array.length == 0){ //conditional for if array is empty
    console.log('array is empty'); // if empty array, logs this
    return 'empty'; //if empty array, returns empty
  }
  else { //will execute this if array is not empty
    for (let itemTest of array){ // loops through all items in array
      console.log(itemTest); //logs every item
    }
  console.log('are all in the basket');
  return 'basket has items';
  }
}

listItems2(basket); //testing

console.log('--- empty function ---')

function empty(array){
  array.splice(0, array.length); // starting at beginning (index of 0), will delete entire array (deletes number equal to array length)
  console.log('basket is now empty'); //logs description of code
}
//testing below
console.log('basket includes:', basket);
empty(basket);
console.log('should be empty array', basket);
listItems(basket);
console.log('testing list items2. should be empty:', listItems2(basket));
addItem('bread', basket);
console.log('should have one item, bread:', basket);
//done with testing


console.log('--- Stretch Goals ---');
console.log('--- Using functions in other functions ---');
const maxItems = 5;

function isFull(array){
  if (array.length < maxItems){ //conditional to run if array has less items than max
    return false; // false for not full
  }
  if (array.length >= maxItems){ // conditional to run if array has max or more items
    return true; //true for full
  }
}
//testing
console.log('testing part 2')

let food = ['coldbrew', 'yogurt', 'shortbread', 'eggs'];
console.log('should be false', isFull(food));

food.push('cake');
console.log('should be true', isFull(food));
//done with testing
console.log('--- function in functions part 3 ---');

function addItem2(item, array){ //named updated function something else because having two functions with the same name was messing everything up
  if (isFull(array) == false){ //conditional for if array is not full
    array.push(item); //item will be added if not full
    console.log('yay,', item, 'added!');
  return true;
}
  if (isFull(array) == true){ //if array full
    console.log('boo, array is full! cannot add', item);
    return false;
  }
}
//testing
console.log('basket should have juice:', addItem2('juice', basket), basket[0]);
console.log('basket should have bagels:', addItem2('bagels', basket), basket[1]);
console.log('basket should have oatly:', addItem2('oatly', basket), basket[2]);
console.log('basket should have pancakes:', addItem2('pancakes', basket), basket[3]);
console.log('basket should have buttermilk:', addItem2('buttermilk', basket), basket[4]);
console.log('cannot add. should be false and undefined', addItem2('babka', basket), basket[5]);
//done with testing
console.log('--- Using array built in functions ---');

function removeItem (item, array){
  let itemIndex = array.indexOf(item); // using variable to make code simpler
  if (itemIndex == -1){ // conditional for if item not in array (indexOf returns -1 if item not found in array)
    console.log(item, 'is not in array');
    return 'null';
  }
  else { //conditional if item is in array
    array.splice(itemIndex, 1); // at index of parameter item, will remove 1 item
    console.log(item, 'has been removed!');
    return item;
  }
}
//testing
console.log(basket);
console.log('should be -1', basket.indexOf('jam'));
console.log('should be null:', removeItem('jam', basket));

console.log('should say oatly and array should not include oatly:', removeItem('oatly', basket), basket);





//extra lines
