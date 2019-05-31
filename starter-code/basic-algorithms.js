// Names and Input

//Create a variable hacker1 with the driver's name
const hacker1 = 'Balta'

//Print "The driver's name is XXXX"
console.log("The driver's name is " + hacker1)

//Create a variable hacker2 and ask the user for the navigator's name
const hacker2 = 'Pepe'

//Print "The navigator's name is YYYY"
console.log("The navigator's name is " + hacker2)

//Conditionals

// Depending on which name is longer, print:
// The Driver has the longest name, it has XX characters or
if (hacker1.length > hacker2.length)
    console.log("The Driver has the longest name, it has " + hacker1.length + " characters")

// Yo, navigator got the longest name, it has XX characters or
else if (hacker1.length < hacker2.length)
    console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")

// wow, you both got equally long names, XX characters!!
else
    console.log("wow, you both got equally long names, " + hacker1.length + " characters!!")

// Loops

// Print all the characters of the driver's name, separated by a space and in capitals ie. "J O H N"
var nameDriver = []
for (i = 0; i < hacker1.length; i++)
    nameDriver += hacker1[i].toUpperCase() + "  "
console.log(nameDriver)

// Print all the characters of the navigator's name, in reverse order. ie. "nhoJ"
var nameDriverReverse = []
for (i = 0; i < hacker1.length; i++)
    nameDriverReverse += hacker1[i]
console.log(nameDriverReverse.split('').reverse().join(''))

// Depending on the lexicographic order of the strings, print:
const nombresOrdenados = [hacker1, hacker2].sort()

// What?! You both got the same name?
if (hacker1.charAt(0) == hacker2.charAt(0))
    console.log("What?! You both got the same name?")

// The driver's name goes first
else if (nombresOrdenados[0] == hacker1)
    console.log("The driver's name goes first")

// Yo, the navigator goes first definitely
else if (nombresOrdenados[0] == hacker2)
    console.log("Yo, the navigator goes first definitely")




