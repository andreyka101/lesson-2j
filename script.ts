
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
  hour : 23,
  minute : 59,
  second : 9,
}
const answer2 = document.querySelector('.block2 #s1')
const stringInput1 = document.querySelector('#input1')

function n3 (){
  if (localStorage.obj){
    time = JSON.parse(localStorage.obj)
  }
  else{
    localStorage.obj = JSON.stringify(time)
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
  if (time.hour>23){
    let a = time.hour - 23
    time.hour = a -1
  }
  
  
  localStorage.obj = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : "
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
  if (time.hour>23){
    let a = time.hour - 23
    time.hour = a -1
  }
  
  
  localStorage.obj = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : "
}


function n6 (){
  // @ts-ignore
  time.hour=stringInput1.value
    if (time.hour>23){
    let a = time.hour - 23
    time.hour = a -1
  }
  
  
  localStorage.obj = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : "
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
