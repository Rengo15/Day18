let shopingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]

]);
let arrKey=[];
let arrValue=[];
for(let i of shopingList.keys()){
    arrKey.push(i);
    console.log("groceries:", i);
}
for (let i of shopingList.values()){
    arrValue.push(i);
    console.log("amount:", i);
}
for (let i of shopingList.entries()){
    console.log(i);
}

// Only change code below this line

// Only change code above this line

module.exports = {shopingList, arrKey, arrValue};
