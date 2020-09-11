"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var allHeaders = document.querySelectorAll(".sub_header > h3"); //pobranie wszystkich naglowkow

var allList = document.querySelectorAll(".sub_header > ul"); //pobranie list

var allListItem = document.querySelectorAll(".sub_header > ul > li"); //pobranie wszystkich elementow li

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

function renderItems(currentListChild) {
  currentListChild.forEach(function (el, index) {
    setTimeout(function () {
      el.style.display = 'block';
    }, index * 300);
  });
}

allHeaders.forEach(function (el) {
  el.addEventListener('click', function (e) {
    allList.forEach(function (el) {
      el.style.display = 'none';
    });
    e.target.nextElementSibling.style.display = 'block';
    var currentList = e.target.nextElementSibling;

    var currentListChild = _toConsumableArray(currentList.children);

    allListItem.forEach(function (el) {
      el.style.display = 'none';
    });
    renderItems(currentListChild);
  });
});
var startWork = new Date('2019-07-01 00:00:00').getTime();
var elDate = document.querySelector("body > div > div.row.content > div > div:nth-child(2) > div.col-md-12.col-lg-7.sub_header > ul > li:nth-child(3) > span");

function howManyMonth() {
  var nowTime = new Date().getTime();
  var howMuchMonth = Math.floor(nowTime / (1000 * 60 * 60 * 24 * 30) - startWork / (1000 * 60 * 60 * 24 * 30));
  elDate.textContent = "obecnie pracuje ".concat(howMuchMonth, " miesi\u0119cy");
  return howMuchMonth;
}

howManyMonth();