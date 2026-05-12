const searchData = [
    { title: "Greek Mythology", url: "Greek.html", description: "Gods, heroes, and myths of ancient Greece" },
    { title: "Roman Mythology", url: "Roman.html", description: "Gods, heroes, and myths of ancient Rome" },
    { title: "Norse Mythology", url: "Norse.html", description: "Gods, heroes amd myths of the Norse world" },
    { title: "Greek Gods", url: "greekgods.html", description: "Gods of the ancient Greece" },
];

const searchInput = document.querySelector('.search-container input');
const searchBtn = document.querySelector('.search-container button');
const resultsBox = document.getElementById('search-results');

function doSearch() {
    const query = searchInput.value.toLowerCase().trim();
    resultsBox.innerHTML = '';

    if (query === '') {
        resultsBox.style.display = 'none';
        return;
    }

    const matches = searchData.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        resultsBox.style.display = 'block';
        resultsBox.innerHTML = '<div class="search-result-item">No results found</div>';
        return;
    }

    resultsBox.style.display = 'block';
    matches.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('search-result-item');
        div.innerHTML = `<a href="${item.url}"><strong>${item.title}</strong></a>`;
        resultsBox.appendChild(div);
    });
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') doSearch();
    else doSearch();
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container') && !e.target.closest('#search-results')) {
        resultsBox.style.display = 'none';
    }
});