const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  var newKittensList = kittens.push(name);
  return newKittensList;
}

function prependKitten(name) {
  var newKittensList = kittens.unshift(name);
  return newKittensList;
}

function removeLastKitten() {
  var lessKittens = kittens.pop();
  return lessKittens;
}

function removeFirstKitten() {
  var lessKittens = kittens.shift();
  return lessKittens;
}
