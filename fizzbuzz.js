for (var i = 0; i <= 100; i++) {
    console.log(fizzbuzz(i));
}
;
function fizzbuzz(number) {
    var result = '';
    if (number % 3 == 0 && number % 5 == 0) {
        result = 'fizzbuzz';
    }
    else if (number % 3 == 0) {
        result = 'fizz';
    }
    else if (number % 5 == 0) {
        result = 'buzz';
    }
    else {
        result = number.toString();
    }
    return result;
}
;
