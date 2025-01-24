//console.log(1; //compile time error

// console.log(x); //runtime error

// try{
//     console.log(x);
// }

// catch(e)
// {
//     console.log("error",e);
// }

// finally{
//     console.log("this is final");
// }

try{
    console.log(x);
}

catch(e)
{
    throw new Error("retry pls")
}

finally{
    console.log("this is final");
}