//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.
console.log('Question #1');
var myWorld = [];
myWorld.splice(0, 0, 'screen', 'curtain', 'magic mouse', 'back-of-hand', 'Kindle', 'cord', 'lamp');
console.log(myWorld);

// 2. Add an additional item to the beginning of your Array.
console.log('Question #2');
myWorld.unshift('hat');
console.log(myWorld);

// 3. Remove the second and third items.
console.log('Question #3');
myWorld.splice(1, 2);
console.log(myWorld);

// 4. Add two new items after the second item.
console.log('Question #4');
myWorld.splice(2, 0, 'headphones', 'keyboard');
console.log(myWorld);

// 5. Write 'The current length of the array is....' using the .length method
console.log('Question #5');
console.log('The current length of this array is ' + myWorld.length + '.');

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
console.log('Question #6');
things[2] = 'keyboard';
console.log(things);

// 7. Combine all of the elements of the array into a string.
console.log('Question #7');
var stringThings = things.join(' | ');
console.log(stringThings);

// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, one at the beginning and one at the end.
console.log('Question #8');
var lastItem = [things.pop()];
lastItem.unshift('a priori');
lastItem.push('case');
console.log(lastItem);

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.
console.log('Question #9');
var itemLast = lastItem.reverse(); 
console.log(itemLast);

// 10. Remove the first item of itemLast.
console.log('Question #10');
itemLast.shift();
console.log(itemLast);

// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)
console.log('Question #11');
itemLast.splice(0, 2);
console.log(itemLast);

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
console.log('Question #12');
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var numberPets = firstArray.concat(secondArray);
console.log(numberPets);

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
console.log('Question #13');
people.splice(4, 0, 'David', 'Lisa');
console.log(people);

// 14. Remove everybody except 'Andrea' and 'Ted'
console.log('Question #14');
people = [people[1], people[3]]; // the more parsimonious people eater
//people = [people[people.indexOf('Andrea')], people[people.indexOf('Ted')]]; // people people eater
console.log(people);

// 15. Add a new person to the beginning of the Array
console.log('Question #15');
people.unshift('New Kid');
console.log(people);

// 16. Arrange the items alphabetically. Store this Array as orderedPeople
console.log('Question #16');
orderedPeople = people.sort();
console.log(orderedPeople);

// 17. Create an array of arrays with the following three arrays:
console.log('Question #17');
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]
var arrayOfArrays = [];
arrayOfArrays.splice(0, 0, array1, array2, array3);
console.log(arrayOfArrays);

// 18. Remove "Sparky" and "White" from the above array of arrays.
console.log('Question #18');
arrayOfArrays[0].splice(3, 1);
arrayOfArrays[2].splice(0, 1);
console.log(arrayOfArrays);


// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
sortingNumbers.sort( function (a, b) {
	return a-b;
});
console.log(sortingNumbers);
// Explain why it doesn't sort as expected.
console.log("JavaScript's .sort method arranges items alphabetically or 'lexicographically' and so compares one value with another value by comparing only the first character of each value (unless the characters are equal, in which case only the second charcter of each value). So 299999 comes before 30 because '2' comes before '3' as 'azure' comes before 'baa' in a dictionary/lexicon because 'a' comes before 'b'.");

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
//var arrayStart = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

var arrayStart = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];
arrayStart.splice(2, 1);
arrayStart.splice(4, 1);
//[2, "dog", "Bill", "plant", 17]

var transporter = function(thingToMove) {

	var passenger = arrayStart.splice(arrayStart.indexOf(thingToMove), 1);
	var particles = passenger.toString();
	arrayStart.push(particles);
}
transporter('plant');
transporter(17);
transporter(2);
transporter('Bill');
transporter('dog');

console.log(arrayStart);

//['plant', 17, 2, 'Bill', 'dog']; goal
	



