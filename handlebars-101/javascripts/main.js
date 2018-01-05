'use strict';

const $ = require('jquery');
const Handlebars = require('hbsfy/runtime');
const testTemplate = require('../templates/test.hbs');
const solarTemplate = require('../templates/solarSystem.hbs');

Handlebars.registerPartial("nav", require('../templates/partials/header.hbs'));
Handlebars.registerHelper("add", function() {
  return 2 + 2;
});

const solarSystemData = {
  planets: [
    {
      type: "rocky",
      name: "Mercury"
    },
    {
      type: "rocky",
      name: "Earth"
    },
    {
      type: "gas giant",
      name: "Saturn"
    }
  ]
};

let thing = {name: "Fred"};
$(".output").append(testTemplate(thing)).append(solarTemplate(solarSystemData));

