const friendsName = ["abul","babul","sabul","mabul","abul","sabul","mabul"];
function removeDuplicateNames(names){
    const unique = [];
    for(let i = 0; i <friendsName.length; i++){
        const name = names[i];
        // console.log(name);
        if(unique.includes(name) === false ){
            unique.push(name);
        }
    }
    // return names;
    return unique;
}

const uniqueName = removeDuplicateNames(friendsName);
console.log(uniqueName);