const quotes = [

{
    name: 'Stephen King',
    quote: 'Get busy living or get busy dying.'
},
{
    name: 'John F.Kennedy',
    quote: 'Those who dare to fall miserably can achieve greatly.'
},
{
    name: 'Leonardo Da Vinci',
    quote: 'It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them.They went out and happened to things.'
},
{
    name: 'Abraham Lincoln',
    quote: "I'm a success today because i had a friend who believed in me and I didn't have the heart to let him down."

},
{
    name: 'Leo Tolstoy',
    quote: 'If you want to be happy, be.'
}
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote(){
    let number  = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    
}