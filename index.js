const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name);
  return kittens;
}

function appendKitten(name) {
  newKittensList = kittens.push(name);
  return newKittensList;
}

function prependKitten(name) {
  newKittensList = kittens.unshift(name);
  return newKittensList;
}

function removeLastKitten() {
  lessKittens = kittens.pop();
  return lessKittens;
}

function removeFirstKitten() {
  lessKittens = kittens.shift();
  return lessKittens;
}
