var M = {
  // randomInt should return a random integer inclusively
  // between n1 and n2.
  // TODO - do we need to make sure n1 and n2 are both integers?
  // what's the effect of using floats for n1 and/or n2?
  randomInt: function (n1, n2) {
    return Math.floor(Math.random() * (Math.max(n1, n2) - Math.min(n1, n2) + 1)) + Math.min(n1, n2);
  }
};

