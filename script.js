// Get quote from API
function getQuote(quotesArr) {
    const randomIndex = Math.floor(Math.random() * quotesArr.length);
    return quotesArr[randomIndex];
}

async function getQuotes() {
    try {
        const apiUrl = 'https://type.fit/api/quotes';
        const response = await fetch(apiUrl);
        const quotes = await response.json();
        const oneQuote = getQuote(quotes);
        console.log(oneQuote);
    } catch (error) {
        alert(error)
    }
}

getQuotes();
