"use strict";

var allHeaders = document.querySelectorAll(".sub_header > h3"); //get all title headers

var allList = document.querySelectorAll(".sub_header > ul"); //get list

var allListItem = document.querySelectorAll(".sub_header > ul > li"); //get all items of list

var showingItems = false;
var displayTime = 300;
var nowTime = new Date().getTime();
var startLearn = new Date('2016-09-12 00:00:00').getTime();
var startInspireLabs = new Date('2019-07-01 00:00:00').getTime();
var elStartLearn = document.querySelector(".experience .start-lern .date");
var elInspireLabs = document.querySelector(".experience .inspire .date");

function hideListItems() {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = allListItem[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var liItem = _step.value;
      liItem.style.display = 'none';
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function renderItems(currentListChild) {
  currentListChild.forEach(function (el, index) {
    setTimeout(function () {
      el.style.display = 'block';
    }, index * displayTime);
  });
  setTimeout(function () {
    showingItems = false;
  }, currentListChild.length * displayTime);
}

function experience(nowTime, currentWork, outputSelector) {
  var experience = Math.floor(nowTime / (1000 * 60 * 60 * 24 * 30) - currentWork / (1000 * 60 * 60 * 24 * 30));
  var year = Math.floor(experience / 12);
  var month = experience % 12;
  outputSelector.textContent = "do\u015Bwiadczenie ".concat(year, ". rok i ").concat(month, ". miesi\u0105c");
  return experience;
} // allHeaders.forEach((el) => {
//     el.addEventListener('click', (e) => {
//         if (showingItems) return;
//         showingItems = true;
//         e.target.nextElementSibling.style.display = 'block';
//         const currentList = e.target.nextElementSibling;
//         const currentListChild = [...currentList.children];
//         hideListItems();
//         renderItems(currentListChild);
//     })
// });


experience(nowTime, startLearn, elStartLearn);
experience(nowTime, startInspireLabs, elInspireLabs);