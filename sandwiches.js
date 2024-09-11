"use strict";
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call 
// provides, and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
function makeSandwiche(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoye your sandwich !\n');
}
makeSandwiche(['Ham', 'Cheese', 'Lettuce']);
makeSandwiche(['Turkey', 'Bacon']);
makeSandwiche(['Peanut butter', 'Jelly']);
