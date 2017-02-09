/**
 * add length to array
 * Created by hailingli on 2/9/2017.
 */

function addLength(s) {
  return _.map(s, function (item) { return (item + item.length); });
}

console.log(addLength(['apple', 'pear']));
console.log(addLength(['you', 'can', 'win']));
