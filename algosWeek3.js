
// TUESDAY 10/26/2021

// NUMBER 1
// Create a function that, given an input string, returns a boolean true/false whether parentheses in that string are valid.
// Example 1:"y(3(p)p(3)r)s" --> true
// Example 2: "n(0(p)3" --> false
// Example 3: "n)0(t(o)k" --> false

function parensValid(str) {
    var counter = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == ')'){
            counter--
        } 
        if(str[i] == '('){
            counter++
        }
        if(counter < 0){
            return false
        }
    }
    if(counter > 0){
        return false
    } else if (counter == 0){
        return true
    }
}
console.log(parensValid("y(3(p)p(3)r)s"))
console.log(parensValid("n(0(p)3"))
console.log(parensValid("n)0(t(o)k"))

// NUMBER 2
// Given a string, returns whether the sequence of various parentheses, braces and brackets within it are valid. 
// Example 1: "({[({})]})" --> true
// Example 2: "d(i{a}l[t]o)n{e!" --> false
// Example 2: "{{[a]}}(){bcd}{()}" --> true

function bracesValid(str) {
    var brackets = 0;
    var parens = 0;
    var braces = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == ')'){
            parens--
        } 
        if(str[i] == '('){
            parens++
        }
        if(str[i] == '}'){
            braces--
        } 
        if(str[i] == '{'){
            braces++
        }
        if(str[i] == ']'){
            brackets--
        } 
        if(str[i] == '['){
            brackets++
        }
        if(parens < 0 || brackets < 0 || braces < 0){
            return false
        }
    }
    if(parens > 0 || brackets > 0 || braces > 0){
        return false
    } else if (parens == 0 || brackets == 0 || braces == 0){
        return true
    }
}
console.log(bracesValid("({[({})]})")) // true
console.log(bracesValid("d(i{a}l[t]o)n{e!")) // false
console.log(bracesValid("{{[a]}}(){bcd}{()}")) // true
console.log(bracesValid("{([}}}")) // false

// WEDNESDAY 10/27/2021