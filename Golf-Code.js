//Write a function that will be passed par and strokes arguments. Return the correct string according to the table (see readme) which lists the strokes in order of //priority; top (highest) to bottom (lowest):

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1){
    return "Hole-in-one!";
  }else if (strokes <= par - 2){
    return "Eagle";
  }else if (strokes == par -1){
    return "Birdie";
  }else if (strokes == par){
    return "Par";
  }else if (strokes == par + 1){
    return "Bogey";
  }else if (strokes == par + 2){
    return "Double Bogey";
  }else{
    return "Go Home!";
  }
  return "Change Me";
}

golfScore(5, 4);
