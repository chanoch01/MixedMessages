"use strict";

// Define future kids message parts in object
var futureKidsObject = {
  number: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  gender: ['Male ♂', 'Female ♀'],
  iqLevel: ['85-114', '115-129', '115-129', '130-144', '145-159']
}; // Store the 'future kids' in an array

var futureKidsArray = []; // Store number of kids, gender

var totalKids, kidsGender, prefix; // Iterate over the object

for (var prop in futureKidsObject) {
  var randomIndex = Math.floor(Math.random() * futureKidsObject[prop].length); // use the object's properties to customize the message being added to futureKidsArray

  switch (prop) {
    case 'number':
      totalKids = futureKidsObject[prop][randomIndex];
      futureKidsArray.push("You will have ".concat(totalKids, " kid(s) in the future."));
      break;

    case 'gender':
      kidsGender = futureKidsObject[prop][randomIndex];
      futureKidsArray.push("Your future kid(s) gender will be ".concat(kidsGender, "."));
      break;

    case 'iqLevel':
      if (totalKids == 1) {
        if (kidsGender.includes('Male')) prefix = 'His';else prefix = 'Her';
      } else {
        prefix = 'Their';
      }

      futureKidsArray.push("".concat(prefix, " IQ levels will be between ").concat(futureKidsObject[prop][randomIndex], "."));
      break;
  }
} // Format and print your 'future kids' message


var formatAndPrint = function formatAndPrint(array) {
  var formatted = array.join('\n');
  console.log(formatted);
}; // Print your formatted 'future kids' message


formatAndPrint(futureKidsArray);