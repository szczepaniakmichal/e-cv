const allHeaders = document.querySelectorAll(".sub_header > h3"); //get all title headers
const allList = document.querySelectorAll(".sub_header > ul"); //get list
const allListItem = document.querySelectorAll(".sub_header > ul > li"); //get all items of list

let showingItems = false;
const displayTime = 300;

const nowTime = new Date().getTime();

const startLearn = new Date('2016-09-12 00:00:00').getTime();
const startInspireLabs = new Date('2019-07-01 00:00:00').getTime();

const elStartLearn = document.querySelector(".experience .start-lern .date");
const elInspireLabs = document.querySelector(".experience .inspire .date");

function hideListItems() {
    for (const liItem of allListItem) {
        liItem.style.display = 'none';
    }
}

function renderItems(currentListChild) {
    currentListChild.forEach((el, index) => {
        setTimeout(() => {
            el.style.display = 'block';
        }, index * displayTime)
    })
    setTimeout(() => {
        showingItems = false;
    }, currentListChild.length * displayTime);
}

function experience(nowTime, currentWork, outputSelector) {
    const experience = Math.floor((nowTime / (1000 * 60 * 60 * 24 * 30)) - (currentWork / (1000 * 60 * 60 * 24 * 30)));
    let year = Math.floor(experience / 12);
    let month = experience % 12;
    outputSelector.textContent = `doswiadczenie ${year} rok i ${month} miesiąc`;
    return experience;
}

allHeaders.forEach((el) => {
    el.addEventListener('click', (e) => {
        if (showingItems) return;
        showingItems = true;
        e.target.nextElementSibling.style.display = 'block';
        const currentList = e.target.nextElementSibling;
        const currentListChild = [...currentList.children];
        hideListItems();
        renderItems(currentListChild);
    })
});

experience(nowTime, startLearn, elStartLearn);
experience(nowTime, startInspireLabs, elInspireLabs);
