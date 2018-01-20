const app = "I don't do much."
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  newKittens = [...kittens,name];
  return newKittens;
}

function prependKitten(name){
  newKittens = [name,...kittens];
  return newKittens;
}

function removeLastKitten(){
  newKitten = kitten.slice(0,kitten.length - 1);
  return newKitten;
}

function removeFirstKitten(){
  newKitten = kitten.slice(1);
  return newKitten;
}