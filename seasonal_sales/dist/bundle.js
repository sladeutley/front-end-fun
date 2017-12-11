(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// categories XHR
const categoryReq = new XMLHttpRequest();
const parseCatData = () => {
  const data = JSON.parse(event.target.responseText).categories;
  // formatData(data);
  console.log("Cat data", data);
};

categoryReq.addEventListener("load", parseCatData);
categoryReq.open("GET", "data/categories.json");
categoryReq.send();

// products XHR
const prodsReq = new XMLHttpRequest();
const parseProdData = () => {
  const data = JSON.parse(event.target.responseText).products;
  // formatData(data);
  console.log("prod data", data);
};

prodsReq.addEventListener("load", parseProdData);
prodsReq.open("GET", "data/products.json");
prodsReq.send();

},{}]},{},[1]);
