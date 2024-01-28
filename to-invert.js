invert = () => {

    if (htmlElement.getAttribute("data-bs-theme") === 'dark') {
        document.querySelectorAll('.to-invert').forEach(item => {
            item.classList.add('invert');
        });
    }
    if (htmlElement.getAttribute("data-bs-theme") === 'light') {
        document.querySelectorAll('.to-invert').forEach(item => {
            item.classList.remove('invert');
        });
    }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', invert)
invert()