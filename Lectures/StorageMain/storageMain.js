// Save the 30 quotes in local storage
// if quotes exist, do not fetch, show data from local storage

if(localStorage.getItem('quotes')){
    console.log('from local storage', localStorage.getItem('quotes'));
    let quotes = JSON.parse(localStorage.getItem('quotes'));
    showData(quotes);
}
else{
    fetch("https://dummyjson.com/quotes")
    .then((res)=> res.json())
    .then((data) => {
        console.log('data from fetching', data);
        localStorage.setItem('quotes', JSON.stringify(data));
        showData(data);
    })
}
function showData(data){
    var myOl = document.getElementById('quotes-id');
        data.quotes.map((quote) => {
            var listItem = document.createElement('li');
            listItem.innerHTML = `${quote.quote}`;
            myOl.appendChild(listItem);
        })

}

