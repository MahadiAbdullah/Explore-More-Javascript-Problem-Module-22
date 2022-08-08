const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const students = { id: 121, class: 11, name: 'agun'};
const friends = [13, 14, 11, 17, 21, 16, 20];
function add (num1, num2){
    return num1 + num2;
}
console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof students);
// check array using array.isarray 
console.log(Array.isArray(friends));
console.log(typeof add);
if(friends.indexOf(19) !== -1){
    
}
// concat 
const newFriends = [12, 13, 11, 14];
const allFriends = newFriends.concat(friends);
console.log(allFriends);