const allHeaders = document.querySelectorAll(".sub_header > h3"); //pobranie wszystkich naglowkow
const allList = document.querySelectorAll(".sub_header > ul"); //pobranie list
const allListItem = document.querySelectorAll(".sub_header > ul > li"); //pobranie wszystkich elementow li

let showingItems = false;
const displayTime = 300;

for (const liItem of allListItem) {
    liItem.style.display = 'none';
}

function renderItems(currentListChild) {
    currentListChild.forEach((el, index) => {
        setTimeout(() => {
            el.style.display = 'block';
        }, index * displayTime)

        setTimeout(() => {
            showingItems = false;
        }, currentListChild.length * displayTime);
    })
}

allHeaders.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (showingItems) return;
        showingItems = true;
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

const elStartLern = document.querySelector(".experience .start-lern .date");
const elInspireLabs = document.querySelector(".experience .inspire .date");

function experience(nowTime, currentWork, outputSelector) {
    const experience = Math.floor((nowTime / (1000 * 60 * 60 * 24 * 30)) - (currentWork / (1000 * 60 * 60 * 24 * 30)));
    let year = Math.floor(experience / 12);
    let month = experience % 12;
    outputSelector.textContent = `doswiadczenie ${year} rok i ${month} miesiąc`;
    return experience;
}

experience(nowTime, startLern, elStartLern);
experience(nowTime, startInspireLabs, elInspireLabs);
