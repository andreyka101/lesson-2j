const answer1 = document.querySelector('.block1 #s1')
const answer2 = document.querySelector('.block2 #s1')
const answer3 = document.querySelector('.block3 #s1')

const stringInput1 = document.querySelector('#input1')

// dz 1 /////////////////////////////////////////////



// 1

let car ={
  predictor : "Proton Edar Sdr Holding",
  model : "PROTON PERDANA",
  yearOfIssue : 2008 ,
  speed : 260 ,
}


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
  answer1.innerText = "ответ : " + wastedTime + " ч."
}

// 3

let time ={
  hour : 23,
  minute : 59,
  second : 9,
}

function n3 (){
  if (localStorage.objTime){
    time = JSON.parse(localStorage.objTime)
  }
  else{
    localStorage.objTime = JSON.stringify(time)
  }

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

// 4

function n4 (){
  // @ts-ignore
  time.second=stringInput1.value
  if (time.second>60){
    let a=0
    for(;time.second>a*60;a++){}
    a--
    time.second -=a*60
    time.minute+=a
  }
  if (time.minute>60){
    let a=0
    for(;time.minute>a*60;a++){}
    a--
    time.minute -=a*60
    time.hour+=a
  }
  while (time.hour>23){
    time.hour -= 24
}
  
  
  localStorage.objTime = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : время задано"
}


function n5 (){
  // @ts-ignore
  time.minute=stringInput1.value
  if (time.minute>60){
    let a=0
    for(;time.minute>a*60;a++){}
    a--
    time.minute -=a*60
    time.hour+=a
  }
  while (time.hour>23){
    time.hour -= 24
}
  
  
  localStorage.objTime = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : время задано"
}


function n6 (){
  // @ts-ignore
  time.hour=stringInput1.value
  while (time.hour>23){
      time.hour -= 24
  }
  
  
  localStorage.objTime = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : время задано"
}


  // pz 1 /////////////////////////////////////////////
  
  
  // 1
  

  let rectangle ={
    topLeftY : 1,
    topLeftX : 1,
    bottomRightY : 3,
    bottomRightX : 3,
  }
  function n7 (){
    if (localStorage.objRectangle){
      rectangle = JSON.parse(localStorage.objRectangle)
    }
    else{
      localStorage.objRectangle = JSON.stringify(rectangle)
    }
    let storeInFunction = `ответ : `
    for (let i in rectangle){
      storeInFunction += `${i} : ${rectangle[i]} ; `
    }
    //@ts-ignore
    storeInFunction = storeInFunction.slice(0, storeInFunction.length-3)
    //@ts-ignore
    answer3.innerText = storeInFunction
  }

  function n8 (){
    if (localStorage.objRectangle){
      rectangle = JSON.parse(localStorage.objRectangle)
    }
    else{
      localStorage.objRectangle = JSON.stringify(rectangle)
    }
    let storeInFunction = `ответ : ${rectangle.topLeftX - rectangle.bottomRightX}`
  }


      

