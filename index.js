//list of three quotes
let quotes = [`"I don’t want to survive. I want to live." - WALL-E`, 
`“It’s important to always look where you’re headed rather than where you were.” – The Lion King`, 
`“Sometimes the right path is not the easiest one.” – Pocahontas`]

//returns number between 0 and 1
//console.log(Math.random())
//returns a number between 0 and 3 including decimals
//console.log((3 * Math.random()))
//retuns a number  0, 1, or 2 integers only
let index = Math.floor((3 * Math.random()));

//gives quote based off number 0,1,2 to correlate with the quote in that location
console.log(quotes[index]);