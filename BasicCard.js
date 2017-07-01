function BasicCard(front, back) {

  
  if (!(this instanceof BasicCard)) {
    return new BasicCard(front, back);
  }
  this.front = front;
  this.back = back;
}
var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

    console.log(firstPresident.front); 
    console.log(firstPresident.back); 
module.exports = BasicCard;


