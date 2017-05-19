'use strict';

const upper = (str) => {
  return str.toUpperCase();
}

const lower = (str) => {
  return str.toLowerCase();
}

const PORT = 8080;

module.exports = {
  upper,
  lower,
  PORT
}
