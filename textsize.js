const slider = document.getElementById('textsizeslider');
const sizeDisplay = document.getElementById('textsizevalue');
const resetBtn = document.getElementById('resetsize');
const defaultSize = 20;

document.querySelectorAll('p').forEach(p => {
    p.style.fontSize = defaultSize + 'px';
});


slider.addEventListener('input', function() {
    sizeDisplay.textContent = this.value;
    document.querySelectorAll('p').forEach(p => {
        p.style.fontSize = this.value + 'px';
    });
});

resetBtn.addEventListener('click', function() {
    slider.value = defaultSize;
    sizeDisplay.textContent = defaultSize;
    document.querySelectorAll('p').forEach(p => {
        p.style.fontSize = defaultSize + 'px';
    });
});