const quotes = [
  {
    quotes: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quotes:
      "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "Mark Twain",
  },
  {
    quotes:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    author: "Dr. Seuss",
  },
  {
    quotes: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quotes:
      "Don’t walk in front of me… I may not follow. Don’t walk behind me… I may not lead. Walk beside me… just be my friend",
    author: "Albert Camus",
  },
  {
    quotes:
      "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
  },
  {
    quotes: "Always forgive your enemies; nothing annoys them so much.",
    author: "Oscar Wilde",
  },
  {
    quotes: "We accept the love we think we deserve.",
    author: "Stephen Chbosky, The Perks of Being a Wallflower",
  },
  {
    quotes: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche, Twilight of the Idols",
  },
  {
    quotes: "When you have something to say, silence is a lie.",
    author: "Jordan B. Peterson, 12 Rules for Life: An Antidote to Chaos",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
