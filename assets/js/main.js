const externalLinks = document.querySelectorAll('a[target="_blank"]');
externalLinks.forEach((link) => {
    link.addEventListener("click", () => {
        console.log(`Opening external link: ${link.href}`);
    });
});
