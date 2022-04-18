const url='https://api.whatdoestrumpthink.com/api/v1/quotes/random';
fetch(url)
    .then(data=> data.json())
    .then(quoteData =>{
        let quoteMessage=quoteData.message;
        const quoteElement=document.getElementById("message");
        quoteElement.innerHTML=quoteMessage;
    })
