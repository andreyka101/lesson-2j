
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
    strcar += i + " : " + car[i] + " // "
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
}

// 3

let time ={
  hour : 13,
  minute : 40,
  second : 9,
}
const answer2 = document.querySelector('.block2 #s1')

function n3 (){
  if (time.second < 10){
    if (time.minute < 10){
      // @ts-ignore
      answer2.innerText = "ответ : " + time.hour + ":0" + time.minute + ":0" + time.second
    }
    else{
      // @ts-ignore
      answer2.innerText = "ответ : " + time.hour + ":" + time.minute + ":0" + time.second
    }
  }
  else if (time.minute < 10){
    // @ts-ignore
    answer2.innerText = "ответ : " + time.hour + ":0" + time.minute + ":" + time.second
  }
  else{
    // @ts-ignore
    answer2.innerText = "ответ : " + time.hour + ":" + time.minute + ":" + time.second
  }
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