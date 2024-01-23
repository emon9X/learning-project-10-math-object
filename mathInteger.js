/*
Math.round(x)	Returns x rounded to its nearest integer
Math.ceil(x)	Returns x rounded up to its nearest integer
Math.floor(x)	Returns x rounded down to its nearest integer
Math.trunc(x)	Returns the integer part of x (new in ES6)
*/

{
    console.log(Math.round(4.1));
    console.log(Math.round(4.4));
    console.log(Math.round(4.49));
    console.log(Math.round(4.5));
    console.log(Math.round(4.8));
    console.log(Math.round(-4.8));
    console.log(Math.round(-4.49));
}

{
    console.log(Math.ceil(4.1));
    console.log(Math.ceil(-4.1));
}

{
    console.log(Math.floor(4.9));
    console.log(Math.floor(-4.9));
    console.log(Math.floor(-4.1));
}

{
    console.log(Math.trunc(4.1));
    console.log(Math.trunc(-4.1));
    console.log(Math.trunc(-4.9));
}