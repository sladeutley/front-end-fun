"use strict";

const carFactory = require('./carFactory');
const carController = require('./carController');
const events = require('./events');

// Run the code!
const inventory = carFactory.getInventory();
carController.showInventory(inventory, events);
carController.showContactForm();
