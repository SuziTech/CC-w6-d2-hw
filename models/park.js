const Park = function (name, ticketPrice, dinosaurCollection) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection;
}

Park.prototype.dinosaurCollectionLength = function () {
  this.dinosaurCollection = [];
  this.dinosaurCollection.push(dinosaur);
  numberInDinosaurCollection = this.dinosaurCollection.length();
  return numberInDinosaurCollection;
}

module.exports = Park;
