const paragraph = document.getElementById('para');
const quo = document.getElementById('quote');
const aut = document.getElementById('author');
const usedIndeces = new Set();

function fetchQuotes(){
  fetch('../data/quotes.json').then((res) => {
    if(!res.ok){
      throw new Error(res.status);
    }
    return res.json();
  }).then((data) => {
    let count = data.quoteList.length;
    generateQuote(data.quoteList, count);
    
  });
}

function generateQuote(quotes, count){
  if(usedIndeces.size >= count){
        usedIndeces.clear();
  }
  while(true){
    let randomIndex = Math.floor(Math.random() * count);
    
    if(usedIndeces.has(randomIndex)) continue        

    quo.innerHTML = `"${quotes[randomIndex].quote}"`;
    aut.innerHTML = '-' + quotes[randomIndex].author;
   
    usedIndeces.add(randomIndex);
    break  ;      
  }
}

function showQuotes() {
  fetchQuotes();
}