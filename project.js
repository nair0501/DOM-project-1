const btn = document.querySelector('#new-quote');
const quoteElement = document.querySelector('.quote');
const personElement = document.querySelector('.person');

const quotes = [
  {
    quote: "All that glitters is not gold",
    person: "William Shakespeare"
  },
  {
    quote: "All the world’s a stage, and all the men and women merely players.",
    person: "William Shakespeare"
  },
  {
    quote: "Ask not what your country can do for you; ask what you can do for your country.",
    person: "John Kennedy"
  },
  {
    quote: "Ask, and it shall be given you; seek, and you shall find.",
    person: "the Bible"
  },
  {
    quote: "Eighty percent of success is showing up.",
    person: "Woody Allen"
  },
  {
    quote: "Elementary, my dear Watson.",
    person: "Sherlock Holmes (character)"
  },
  {
    quote: "For those to whom much is given, much is required.",
    person: "the Bible"
  },
  {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas Edison"
  },
  {
    quote: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
    person: "Martin Luther King"
  },
  {
    quote: "If at first you don’t succeed, try, try again.",
    person: "W. E. Hickson"
  },
  {
    quote: "If you want something done right, do it yourself.",
    person: "Charles-Guillaume Étienne"
  },
];

btn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, person } = quotes[randomIndex];
  quoteElement.innerText = quote;
  personElement.innerText = person;
});

document.addEventListener('DOMContentLoaded', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const { quote, person } = quotes[randomIndex];
  quoteElement.innerText = quote;
  personElement.innerText = person;
});
