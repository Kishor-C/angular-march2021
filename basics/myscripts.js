var items = [2, 1, 3, 4, 5];

// items are iterated through anonymous function
items.forEach(function(i){
    console.log("i = "+i);
});

// arrow functions simplify writing anonymous functions
items.forEach(i => console.log("arrow -> i = "+i));

// arrow with braces

items.forEach(i => {
    console.log("arrow with braces: "+i);
});


