const toggleBtn = document.getElementById('darkmodetoggle');

function applyTheme(mode) {
    document.body.classList.remove('lightmode');
    if (mode === 'light') {
        document.body.classList.add('lightmode');
        toggleBtn.textContent = 'Off';
    } else {
        toggleBtn.textContent = 'On';
    }
}

localStorage.setItem('theme', 'light');
applyTheme('light');

toggleBtn.addEventListener('click', function() {
    if (document.body.classList.contains('lightmode')) {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    } else {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    }
});

