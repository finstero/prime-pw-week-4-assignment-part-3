console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item){
  basket.push(item);
  return true;
}

console.log('basket should have juice:', addItem('juice'), basket[0]);
console.log('basket should have bagels:', addItem('bagels'), basket[1]);
console.log('basket should have oatly:', addItem('oatly'), basket[2]);

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

const maxItems = 5;







//extra lines
