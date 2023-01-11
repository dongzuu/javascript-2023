const quotes = [
  {
    saying: "Absence makes the heart grow fonder",
    author: "Walt Disney",
  },
  {
    saying: "A picture is worth a thousand words",
    author: "John Lennon",
  },

  {
    saying:
      "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children",
    author: "Madeleine L'Engle",
  },
  {
    saying:
      "If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
    author: "Stephen King",
  },
  {
    saying: "We write to taste life twice, in the moment and in retrospect.",
    author: "Anaïs Nin",
  },
  {
    saying:
      "Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
    author: "Mark Twain",
  },
  {
    saying:
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
    author: "Toni Morrison",
  },
  {
    saying: "One day I will find the right words, and they will be simple.",
    author: "Jack Kerouac, The Dharma Bums",
  },
  {
    saying:
      "Either write something worth reading or do something worth writing.",
    author: "Benjamin Franklin",
  },
  {
    saying:
      "You never have to change anything you got up in the middle of the night to write.",
    author: "Saul Bellow",
  },
];
const length = quotes.length;
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * length)];

quote.innerText = todayQuote.saying; //여기서 quote는 quotes 안에걸 말함
author.innerText = todayQuote.author;
