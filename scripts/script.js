window.addEventListener('scroll', function () {
    const scrollTopButton = document.getElementById('scrollTopButton');
    if (window.scrollY > 200) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

document.getElementById('scrollTopButton').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});