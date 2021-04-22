console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item, array){
  array.push(item);
  return true;
}

console.log('basket should have juice:', addItem('juice', basket), basket[0]);
console.log('basket should have bagels:', addItem('bagels', basket), basket[1]);
console.log('basket should have oatly:', addItem('oatly', basket), basket[2]);

function listItems(array){
  for (let itemTest of array){
    console.log(itemTest);
  }
  console.log('are all in the basket');
}

console.log('what\'s in the basket?');

listItems(basket);

function empty(array){
  array.splice(0, array.length);
  console.log('basket is now empty');
}

empty(basket);
console.log(basket);

console.log('--- Stretch Goals ---');
console.log('--- Using functions in other functions ---');
const maxItems = 5;

function isFull(array){
  if (array.length < maxItems){
    return false;
  }
  if (array.length >= maxItems){
    return true;
  }
}
console.log('testing part 2')

let food = ['coldbrew', 'yogurt', 'shortbread', 'eggs'];
console.log('should be false', isFull(food));

food.push('cake');
console.log('should be true', isFull(food));
//
console.log('--- function in functions part 3 ---');

function addItem2(item, array){ //named updated function something else because having two functions with the same name was messing everything up
  if (isFull(array) == false){
    array.push(item);
    console.log('yay,', item, 'added!');
  return true;
}
  if (isFull(array) == true){
    console.log('boo, array is full! cannot add', item);
    return false;
  }
}

console.log('basket should have juice:', addItem2('juice', basket), basket[0]);
console.log('basket should have bagels:', addItem2('bagels', basket), basket[1]);
console.log('basket should have oatly:', addItem2('oatly', basket), basket[2]);
console.log('basket should have pancakes:', addItem2('pancakes', basket), basket[3]);
console.log('basket should have buttermilk:', addItem2('buttermilk', basket), basket[4]);
console.log('cannot add. should be false and undefined', addItem2('babka', basket), basket[5]);

console.log('--- Using array built in functions ---');

function removeItem(item, array){


}


//extra lines
