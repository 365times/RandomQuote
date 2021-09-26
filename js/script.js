/*** 
 * `quotes` array: contains quote, source, and tag. May also contain year and citation. 
***/
const quotes = [
  {quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
   source: 'Nelson Mandela',
   tag: '#failure'},
  {quote: 'There is nothing permanent except change.',
   source: 'Heraclitus',
   tag: '#change'},
  {quote: 'Do not let making a living prevent you from making a life.',
   source: 'John Wooden',
   tag: '#life'},
  {quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
   source: 'Barack Obama',
   year: '2006',
   tag: '#failure'},
  {quote: 'When we are no longer able to change a situation - we are challenged to change ourselves.',
   source: 'Viktor E. Frankl',
   citation: "Man's Search for Meaning",
   tag: '#change'}
];

/***
 * `getRandomQuote` function: generates a random number between 0-4, and uses that number to select an index in the quotes array.
***/
function getRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
};

/***
 * `printQuote` function: prints the quote, tag, and source. May also print year and citation, if applicable.
***/
function printQuote(){
  const theQuote = getRandomQuote();
  let quote = `<p class="quote">  ${theQuote.quote}
  <p class="source"> ${theQuote.source}`;
  if (theQuote.citation) {
   quote += `<span class="citation"> ${theQuote.citation} </span>`}
  if (theQuote.year){
   quote += `<span class="year"> ${theQuote.year} </span>`}
  if (theQuote.tag){
   quote += `<span class="tag"> ${theQuote.tag} </span>`}
  document.getElementById('quote-box').innerHTML = quote;
  randomRGB();
};

printQuote();
setInterval(printQuote, 20000);

/***
 * `randomRGB` function: generates random numbers up to 256 and then plugs those numbers into the rgb background color.
***/
function randomRGB() {
  const value = () => Math.floor(Math.random() * 256);
  const color = `rgb(${value()}, ${value()}, ${value()})`;
  document.body.style.backgroundColor = color;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);