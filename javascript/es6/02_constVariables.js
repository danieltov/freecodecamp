/*

Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices, meaning constants should be in all caps.

*/
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // change code below this line

  (s[0] = 2), (s[1] = 5), (s[2] = 7);

  return s;

  // change code above this line
}
editInPlace();
