/* eslint-disable no-magic-numbers */
'use strict';
for (let block = 2; block <= 6; block += 4) {
  for (let row = 1; row <= 10; row++) {
    let str = '';
    for (let column = block; column <= block + 3; column++) {
      str += `  ${column}  x ${String(row).padStart(2,'_')} = ${String(column * row).padStart(2)}  `;
    }
    console.log(str);
  } 
  console.log('\n');
}