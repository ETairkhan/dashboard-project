function equalizer(value1, value2){
    if (value1 === value2 ) {
        console.log(true)
    }else {
        console.log(false)
    }
}

equalizer(42, 42);
equalizer("42", 42);
equalizer(null, undefined)
equalizer("1", 1)
equalizer(0, 0)