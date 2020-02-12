"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var allHeaders = document.querySelectorAll(".sub_header > h3"); //pobranie wszystkich naglowkow

var allList = document.querySelectorAll(".sub_header > ul"); //pobranie list

var allListItem = document.querySelectorAll(".sub_header > ul > li"); //pobranie wszystkich elementow li

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

    function renderItems() {
      currentListChild.forEach(function (el, index) {
        setTimeout(function () {
          el.style.display = 'block';
        }, index * 300);
      });
    }

    renderItems();
  });
});