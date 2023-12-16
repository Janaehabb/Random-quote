

var quotes = [
    "Be yourself; everyone else is already taken ― Oscar Wilde " , 

"“So many books, so little time.”― Frank Zappa" , "“A room without books is like a body without a soul.”― Marcus Tullius Cicero"

, "“You only live once, but if you do it right, once is enough.”― Mae West"
, 
"“Be the change that you wish to see in the world.”― Mahatma Gandhi"
,
"“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost"



]

function showRandomQuote() {
    var randomIndex = Math.floor(Math.random()*quotes.length);
    var randomQuote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerText = randomQuote;

}

