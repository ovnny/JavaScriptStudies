{
  {
    {
      {
        var something = "someStuff"
        console.log(something) // output: "something"
      }
    } 
  }
}

console.log(something) // output: "something"

/* Variables of var type are visible inside as outside of 
a block of code but functions and classes 
____________________________________________________________________*/

function test() {
  var local = 123 
  console.log(local) // output: 123
}

test()
console.log(local) // ERROR: ReferenceError: local is not defined