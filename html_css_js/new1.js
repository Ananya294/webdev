let obj ={
    age:12,
    wt:23
}

console.log(obj);

let obj1={};
for(key in obj)
{
    let newk=key;
    let newo=obj[key];
    obj1[newk]=newo

}



// let obj1 =Object.assign({}, obj);
console.log(obj1);
