let obj ={};
let list = ["hi", "I", "am", "wiki"];
obj[list[0]] = list[list.length - 1];

alert(JSON.stringify(obj));