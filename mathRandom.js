//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
{
    console.log(Math.random());
    console.log(Math.floor(Math.random()));
    console.log(Math.ceil(Math.random()));
}

{
    // Returns a random integer from 0 to 9:
    Math.floor(Math.random() * 10);
    // Returns a random integer from 0 to 10:
    Math.floor(Math.random() * 11);
    // Returns a random integer from 0 to 99:
    Math.floor(Math.random() * 100);
    // Returns a random integer from 0 to 100:
    Math.floor(Math.random() * 101);
    // Returns a random integer from 1 to 10:
    Math.floor(Math.random() * 10) + 1;
    // Returns a random integer from 1 to 100:
    Math.floor(Math.random() * 100) + 1;
}

//how to generate random number between 2 numbers

// This JavaScript function always returns a random number between min (included) and max (excluded)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
//This JavaScript function always returns a random number between min and max (both included):
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}