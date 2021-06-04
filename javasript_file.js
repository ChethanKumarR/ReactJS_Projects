//ES 5
function add (a,b) {
    return a + b ;
}

add(2, 4);


//ES 6   
const add = (a, b) => {
     return a + b ;
}

add(2, 4);


function test(a,b) {
    return a, b
}
test(2,4);


function test (a , b) {
    var c = [a , b];
    return c;
}