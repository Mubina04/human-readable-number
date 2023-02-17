module.exports = function toReadable (number) {
const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

const toArray = (number) => number.toString().split('');

const sayOnes = (number) => {
    if (number <= 19 && number >= 0)
        return ones[number];
}

const sayTens = (number) => {
    if (+number[1] === 0 && +number[0] === 0) {
        return '';
    } else if ((number[0] + number[1]) < 20) {
        return sayOnes((number[0] + number[1]));
    } else if (+number[1] === 0) {
        return tens[+number[0]];
    } else {
        return `${tens[+number[0]]} ${sayOnes(+number[1])}`;
    }
}

const sayHundreds = (number) => {
    let n = toArray(number);
    if (number % 100 === 0) {
        return hundreds[+n[0]]
    } else if (+n[1] === 0) {
        return `${hundreds[+n[0]]} ${sayOnes(+n[2])}`
    } else {
        return `${hundreds[+n[0]]} ${sayTens([n[1], n[2]])}`
    }
}


if (number < 20) {
    return sayOnes(number);
} else if (number >= 20 && number < 100) {
    return sayTens(toArray(n));
} else if (number > 99 && number < 1000) {
    return sayHundreds(number);
} else console.log('💥 Boom!')

// toReadable(231)
}
