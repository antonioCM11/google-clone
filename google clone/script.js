document.getElementById('search-button').addEventListener('click', function() {
    performSearch();
});

document.getElementById('lucky-button').addEventListener('click', function() {
    performSearch();
});

document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const query = document.getElementById('search-input').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}