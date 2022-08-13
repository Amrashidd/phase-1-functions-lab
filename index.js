// Code your solution in this file!
function distanceFromHqInBlocks(distance){
if (distance > 42)
{ 
    return distance - 42
}
else {

  return 42 - distance;
}
}

function distanceFromHqInFeet(distance){
    const distanceInFeet = distanceFromHqInBlocks(distance) * 264
    return distanceInFeet
}

function distanceTravelledInFeet(start, end){
    return Math.abs(start - end) * 264;
}


function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400)
     return 0


else if (distance > 400 && distance <= 2000)
         return ((distance-400) *0.02);

         else if (distance > 200 && distance <= 2500)
         return 25

         else if (distance > 2500)
         return "cannot travel that far"
}