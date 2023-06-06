
// dz 1 /////////////////////////////////////////////



// 1

let car ={
  predictor : "Proton Edar Sdr Holding",
  model : "PROTON PERDANA",
  yearOfIssue : 2008 ,
  speed : 260 ,
}

const answer1 = document.querySelector('.block1 #s1')

function n1 (){
  let strcar = "ответ : "
  for (let i in car){
    strcar += car[i]
    strcar += " // "
  }
  // @ts-ignore
  answer1.innerText = strcar
}

function n2 (){
  let distance = parseInt(prompt('введите расстояние которое нужно преодолеть') as string)
  let watch = 0
  let wastedTime = 0
  while (distance >= 0){
    wastedTime += 1
    if (watch > 4){
      watch = 0
    }
    else{
      watch += 1
      distance -= car.speed
    }
  }
  // @ts-ignore
  answer1.innerText = "ответ : " + wastedTime
  console.log (wastedTime)
}



  // pz 1 /////////////////////////////////////////////
  
  
  // 1
  
  function n99 (){
    let rectangle ={
      topLeftY : 1,
      topLeftX : 1,
      lowerRightY : 3,
      lowerRightX : 3,
    }
  }
      

    // n99()