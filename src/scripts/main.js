const allHeaders = document.querySelectorAll(".sub_header > h3"); //pobranie wszystkich naglowkow
const allList = document.querySelectorAll(".sub_header > ul"); //pobranie list
const allListItem = document.querySelectorAll(".sub_header > ul > li"); //pobranie wszystkich elementow li

for (const liItem of allListItem) {
    liItem.style.display = 'none';
}

function renderItems(currentListChild) {
    currentListChild.forEach((el, index) => {
        setTimeout(() => {
            el.style.display = 'block';
        }, index * 300)
    })
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

        renderItems(currentListChild);
    })
});

const startWork = new Date('2019-07-01 00:00:00').getTime();

const elDate = document.querySelector("body > div > div.row.content > div > div:nth-child(2) > div.col-md-12.col-lg-7.sub_header > ul > li:nth-child(3) > span")

function howManyMonth() {
    const nowTime = new Date().getTime();
    const howMuchMonth = Math.floor((nowTime / (1000 * 60 * 60 * 24 * 30)) - (startWork / (1000 * 60 * 60 * 24 * 30)));
    elDate.textContent = `obecnie pracuje ${howMuchMonth} miesięcy`;
    return howMuchMonth;
}

howManyMonth();
