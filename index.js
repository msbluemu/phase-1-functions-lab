// Code your solution in this file!
function distanceFromHqInBlocks (block){
   if (block > 42) {
   return block - 42
  } else
   return 42 - block
}

function distanceFromHqInFeet (block) {
   if (block > 42 ) {
      return (block - 42) * 264
   } else {
      return (42 - block) * 264
   }
}

function distanceTravelledInFeet (block1, block2) {
  if (block2 > block1 ) {
   return (block2-block1) * 264
  } else {
   return (block1-block2) * 264
  }
}

function calculatesFarePrice (block1, block2) {
  let distance = distanceTravelledInFeet(block1, block2);

  if (distance < 400 ){
   return 0
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02
  } else if (distance <= 2500) {
   return 25
  } else {
   return 'cannot travel that far'
  }
}