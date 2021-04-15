//1 Color Analyzer
const color = "green";
switch (color) {
  case "blue" :
    console.log("the color is: " + color);
    break;
  case "red":
    console.log("the color is: " + color);
    break;

  case "yellow":
  console.log("the color is: " + color);
    break;
     case "green":
  console.log("the color is: " + color);
    break;

  default:
console.log("nope");

}

//2 Grading
const grade = "a";
switch (grade) {
  case "a" :
    console.log("wow!! excellent!!");
    break;
  case "b":
    console.log("well done!!");
    break;

  case "c":
  console.log("you can improv yorself");
    break;
     case "d":
  console.log("back to study");
    break;

  default:
console.log("whats that?! ");

}
//3. Fruits

const fruits = "ice";
switch (fruits) {
  case "apple" :
    console.log("i dont like this fruit");
    break;
  case "mango":
    console.log("style");
    break;

  case "banana":
  console.log("yeallo");
    break;
     case "ananas":
  console.log("yammi");
    break;

  default:
console.log("this is not type of fruit");

}

//4 -A

const percentageComplete  =99;
switch (true) {
  case percentageComplete < 30 && percentageComplete <= 50:
    console.log("Slowly getting there");
    break;
  case percentageComplete >=51 && percentageComplete <= 80:
    console.log("You can do it!");
    break;
  case percentageComplete >=81 && percentageComplete <= 99: 
    console.log("This is the last push!");
    break;
  case percentageComplete === 100:
    console.log("You're there. Well done!");
    break;
  default:
    console.log('default');
}

//4 -B

const foo = 100
if(foo < 30 ) {
    console.log("Still a long way to go");
}
else if(foo >=30 && foo <= 50) {
    console.log("Slowly getting there");
}
else if(foo >= 51 && foo <=80) {
    console.log( "You can do it!");
}
else if(foo >=81 && foo <=99){
    console.log("This is the last push!");
}
else {
    console.log("You're there. Well done!");
}

//5 
//if-else better for boolean values- tastist expration
// switch - when we need to choose between option or number its not matter. its more "clean" .

