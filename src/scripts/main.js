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
        // allList.forEach((el) => {
        //     el.style.display = 'none';
        // });

        e.target.nextElementSibling.style.display = 'block';
        const currentList = e.target.nextElementSibling;
        const currentListChild = [...currentList.children];
        allListItem.forEach(el => {
            el.style.display = 'none';
        });

        renderItems(currentListChild);
    })
});

const nowTime = new Date().getTime();

const startLern = new Date('2016-09-12 00:00:00').getTime();
const startInspireLabs = new Date('2019-07-01 00:00:00').getTime();

const elStartLern = document.querySelector("ul.experience > li:nth-child(1) > .date");
const elInspireLabs = document.querySelector("ul.experience > li:nth-child(4) > .date");

function experience(nowTime, currentWork, outputSelector) {
    const experience = Math.floor((nowTime / (1000 * 60 * 60 * 24 * 30)) - (currentWork / (1000 * 60 * 60 * 24 * 30)));
    let year = Math.floor(experience / 12);
    let month = experience % 12;
    outputSelector.textContent = `doswiadczenie ${year} rok i ${month} miesiąc`;
    return experience;
}

experience(nowTime, startLern, elStartLern);
experience(nowTime, startInspireLabs, elInspireLabs);
