
function ClozeCard(text, clozeDeletion) {

  
  if (!(this instanceof ClozeCard)) {
    return new ClozeCard(text, clozeDeletion);
  }
  
  var clozePositions = clozeDelete(text, clozeDeletion);

  this.partial = getPartial(text, clozePositions);
  this.fullText = text // +  text.slice(clozePositions[1] 
  this.cloze = text.slice(clozePositions[0], clozePositions[1]);

  
  function getPartial(text, clozePositions) {    
    var start = text.slice(0, clozePositions[0]);    
    var end = text.slice(clozePositions[1], text.length);
        return start + "..." + end;
  }
  
  function clozeDelete(text, clozeDeletion) {
    var start = text.indexOf(clozeDeletion);

    if (start !== -1) {
      return [start, start + clozeDeletion.length];
    }
    throw new Error("Cloze deletion not found in input text.");
  }
}

ClozeCard.prototype.displayCard = function displayCard() {
  return this.partial.replace(/\.\.\./, "'" + this.cloze + "'");
};

//var text = fullText 
var firstPresidentCloze = new ClozeCard(
      "George Washington was the first president of the United States.", "George Washington");
   console.log("Cloze: " + firstPresidentCloze.cloze);
   console.log("Partial: " + firstPresidentCloze.partial);
   console.log("Full Text: " + firstPresidentCloze.fullText);
  
   //Throws an error because "oops" doens't appear it "This doesn't work"
   //var brokenCloze = new ClozeCard("This doesn't work", "oops");

module.exports = ClozeCard;