// Save the 30 quotes in local storage
// if quotes exist, do not fetch

fetch("https://dummyjson.com/quotes")
    .then((res)=> res.json())
    .then((data) => {
        var myOl = document.getElementById('quotes-id');
        data.quotes.map((quote) => {
            var listItem = document.createElement('li');
            listItem.innerHTML = `${quote.quote}`;
            myOl.appendChild(listItem);
        })
    })