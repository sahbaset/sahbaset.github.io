const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const categorySelect = document.getElementById('category-select');

async function getQuoteByCategory(category) {
  try {
    const response = await fetch(`https://api.quotable.io/quotes?tags=${category}`);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.results.length);
    const quote = data.results[randomIndex];
    quoteText.textContent = quote.content;
    authorText.textContent = `- ${quote.author}`;
  } catch (error) {
    console.error('Error fetching quote:', error);
    quoteText.textContent = 'Error fetching quote. Please try again later.';
    authorText.textContent = '';
  }
}

newQuoteBtn.addEventListener('click', () => {
  const selectedCategory = categorySelect.value;
  getQuoteByCategory(selectedCategory);
});

getQuoteByCategory('inspirational');
