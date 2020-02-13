const allHeaders = document.querySelectorAll(".sub_header > h3"); //pobranie wszystkich naglowkow
const allList = document.querySelectorAll(".sub_header > ul"); //pobranie list
const allListItem = document.querySelectorAll(".sub_header > ul > li"); //pobranie wszystkich elementow li

for (const liItem of allListItem) {
    liItem.style.display = 'none';
}

allHeaders.forEach((el) => {
    el.addEventListener('click', (e) => {
        allList.forEach((el) => {
            el.style.display = 'none';
        });

        e.target.nextElementSibling.style.display = 'block';
        const currentList = e.target.nextElementSibling;
        const currentListChild = [...currentList.children];
        allListItem.forEach(el => {
            el.style.display = 'none';
        });

        function renderItems() {
            currentListChild.forEach((el, index) => {
                setTimeout(() => {
                    el.style.display = 'block';
                }, index * 300)
            })
        }
        renderItems();
    })
});