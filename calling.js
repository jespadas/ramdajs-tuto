// The call function invokes a provided function on arguments separated by comma.
import * as R from 'ramda';

let res = R.call(R.add, 1, 2);

console.info('res', res);
// We call the repeat function to generate a list of five 'x' letters.
console.info('second log', R.call(R.repeat, 'x')(5));
// Finally, we use the call function to output the list.
R.call(console.info, [1, 2, 3]);
