"use strict";

const carFactory = require('./carFactory');
const carController = require('./carController');

// Run the code!
const inventory = carFactory.getInventory();
carController.populatePage(inventory);
