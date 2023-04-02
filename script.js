// get Dom elements to work with
const elements = {
    $quoteContainer: {},
    $quoteText: {},
    $quoteAuthor: {},
    $twitterBtn: {},
    $newQuoteBtn: {},
    $loader: {},
};

function getDomElements() {
    elements.$quoteContainer = document.querySelector('.quote__container');
    elements.$quoteText = document.querySelector('.quote');
    elements.$quoteAuthor = document.querySelector('.author');
    elements.$twitterBtn = document.querySelector('.btn__twitter');
    elements.$newQuoteBtn = document.querySelector('.btn__new-quote');
    elements.$loader = document.querySelector('.loader');
}

// loader functions to show and hide loader

function loading() {
    elements.$loader.hidden = false;
    elements.$quoteContainer.hidden = true;
}

function complete() {
    elements.$quoteContainer.hidden = false;
    elements.$loader.hidden = true;
}

// Get quote from API
let quotesList = [];

// Get quote from quotesList array and display it
function getRandomQuote() {
    loading();
    const quote = quotesList[Math.floor(Math.random() * quotesList.length)];
    if (!quote.author) {
        elements.$quoteAuthor.textContent = 'Unknown';
    } else {
        elements.$quoteAuthor.textContent = quote.author;
    };
    if (quote.text.length > 120) {
        elements.$quoteText.classList.add('long-quote');
    } else {
        elements.$quoteText.classList.remove('long-quote');
    }
    elements.$quoteText.textContent = quote.text;
    complete();
}

// Get quotes from API for the first time and then get random quote from quotesList array and display it
async function displayQuote() {
    loading();
    try {
        const apiUrl = 'https://type.fit/api/quotes';
        const response = await fetch(apiUrl);
        quotesList = await response.json();
        getRandomQuote();
    } catch (error) {
        alert(error);
    }
}

// twitter button functionality
function tweetQuote() {
    const quote = elements.$quoteText.textContent;
    const author = elements.$quoteAuthor.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
    window.open(twitterUrl, '_blank');
}

getDomElements();
displayQuote();
elements.$newQuoteBtn.addEventListener('click', getRandomQuote);
elements.$twitterBtn.addEventListener('click', tweetQuote);


