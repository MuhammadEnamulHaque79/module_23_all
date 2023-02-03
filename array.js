const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id:102, name:"sabul",class:11};
const friendsAge = [7, 122, 23, 34, 78,19];
function add(number1, number2){
    return number1 + number2;
}
console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isIndependent));
console.log(typeof(student));
// console.log(typeof(friendsAge)); check array to use; Array.isArray(friendsAge);
console.log(Array.isArray(friendsAge));
console.log(typeof(add));
console.log(friendsAge.includes(19));
if(friendsAge.indexOf(22) !== -1){
    console.log("The element exists on array");
}
else{
    console.log("The element does not exists on array");
}
const newFriendsAge = [7, 12, 25, 20];
const allFriends = newFriendsAge.concat(friendsAge);
console.log(allFriends);