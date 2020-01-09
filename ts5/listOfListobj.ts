let obj ={};
let list = [["make", "volvo"], ["model", "swift"], ["year", 2017]];
for(const [key, value] of list)
{
	obj[key]=value;
}
alert(JSON.stringify(obj));