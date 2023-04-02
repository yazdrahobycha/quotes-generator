// get Dom elements to work with
const elements = {
    $quoteContainer: {},
    $quoteText: {},
    $quoteAuthor: {},
    $twitterBtn: {},
    $newQuoteBtn: {},
};

function getDomElements() {
    elements.$quoteContainer = document.querySelector('.quote__container');
    elements.$quoteText = document.querySelector('.quote');
    elements.$quoteAuthor = document.querySelector('.author');
    elements.$twitterBtn = document.querySelector('.btn__twitter');
    elements.$newQuoteBtn = document.querySelector('.btn__new-quote');
}

// Get quote from API
let quotesList = [];


// Get quote from quotesList array and display it
function getRandomQuote() {
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
}

// Get quotes from API for the first time and then get random quote from quotesList array and display it
async function displayQuote() {
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


