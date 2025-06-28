function logTheUnknown(n){
    let type = typeof n
    let firstWord = type[0]
    if (firstWord == 'u' || firstWord == 'o'){
        console.log("This is an " + type + "!")
    } else{
        console.log("This is a " + type + "!")
    }
}


logTheUnknown(42);
logTheUnknown("hello");
logTheUnknown({});
logTheUnknown(undefined)
