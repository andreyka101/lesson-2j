import './style.css'

let answer1 = document.querySelector('.block1 #s1')
let answer2 = document.querySelector('.block2 #s1')
let answer3 = document.querySelector('.block3 #s1')

let stringInput1 = document.querySelector('#input1')


// dz 1 /////////////////////////////////////////////



// 1

let car ={
  predictor : "Proton Edar Sdr Holding",
  model : "PROTON PERDANA",
  yearOfIssue : 2008 ,
  speed : 260 ,
} as any

answer1 = document.querySelector('.block1 #s1')

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
answer2 = document.querySelector('.block2 #s1')
stringInput1 = document.querySelector('#input1')

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
  while (time.hour>23){
    time.hour -= 24
}
  
  
  localStorage.obj = JSON.stringify(time)
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
  
  
  localStorage.obj = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : время задано"
}


function n6 (){
  // @ts-ignore
  time.hour=stringInput1.value
  while (time.hour>23){
      time.hour -= 24
  }
  
  
  localStorage.obj = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : время задано"
}


  // pz 1 /////////////////////////////////////////////
  
  
  // 1
  
  
  let rectangle ={
    topLeftY : 1,
    topLeftX : 1,
    bottomRightY : 3,
    bottomRightX : 4,
  } as any

  function n7 (){
    if (localRectangle.obj){
      rectangle = JSON.parse(localRectangle.obj)
    }
    else{
      localRectangle.obj = JSON.stringify(rectangle)
    }

    let str =`ответ : `
    for (let i in rectangle){
      str += `${i} : ${rectangle[i]} / `
    }
    // @ts-ignore
    answer3.innerText = str
  }
  
  function n8 (){
    // @ts-ignore
    answer3.innerText = 'ответ : ширина - ' + ((rectangle.bottomRightX - rectangle.topLeftX) + 1)
  }

  function n9 (){
    // @ts-ignore
    answer3.innerText = 'ответ : высота - ' + ((rectangle.bottomRightY - rectangle.topLeftY) + 1)
  }
  function n10 (){
    // @ts-ignore
    answer3.innerText = 'ответ : площадь - ' + (((rectangle.bottomRightY - rectangle.topLeftY) + 1) * ((rectangle.bottomRightX - rectangle.topLeftX) + 1))
  }
  function n11 (){
    // @ts-ignore
    answer3.innerText = 'ответ : периметр - ' + (((rectangle.bottomRightY - rectangle.topLeftY) + 1) * 2 + ((rectangle.bottomRightX - rectangle.topLeftX) + 1) * 2)
  }
  // function n12 (){
  //   let width = parseInt(prompt('введите расстояние которое нужно преодолеть') as string)
  //   if (width >= 0){
  //     rectangle.bottomRightX = (width+rectangle.topLeftX) - 1
  //   }
  // }
      



// ...................................................................




  function a1 (){
    alert(`Задание 1
Создать объект, описывающий автомобиль (производитель, 
модель, год выпуска, средняя скорость), и следующие функции 
для работы с этим объектом.
1. Функция для вывода на экран информации об автомобиле.
2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час`)
  }
  const itemJ1 = document.querySelector('.block1 #item')
  itemJ1?.addEventListener('click',a1)
  const executor1 = document.querySelector('.block1 #b1')
  executor1?.addEventListener('click',n1)
  const executor2 = document.querySelector('.block1 #b2')
  executor2?.addEventListener('click',n2)
  
  function a2 (){
    alert(`Задание 3
    Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
    1. Функция вывода времени на экран.
    2. Функция изменения времени на переданное количество 
секунд.
3. Функция изменения времени на переданное количество 
минут.
4. Функция изменения времени на переданное количество 
часов.
Учтите, что в последних 3-х функциях, при изменении одной 
части времени, может измениться и другая. Например: если ко 
времени «20:30:45» добавить 30 секунд, то должно получиться 
«20:31:15», а не «20:30:75».`)
  }
  const itemJ2 = document.querySelector('.block2 #item')
  itemJ2?.addEventListener('click',a2)
  const executor3 = document.querySelector('.block2 #b1')
  executor3?.addEventListener('click',n3)
  const executor4 = document.querySelector('.block2 #b2')
  executor4?.addEventListener('click',n4)
  const executor5 = document.querySelector('.block2 #b3')
  executor5?.addEventListener('click',n5)
  const executor6 = document.querySelector('.block2 #b4')
  executor6?.addEventListener('click',n6)


  function a3 (){
    alert(`Задание 
Создать объект, описывающий прямоугольник (хранит координаты левой верхней и правой нижней точек), и написать следующие функции для работы с таким объектом.
1. Функция принимает объект-прямоугольник и выводит 
информацию о нем (где какая точка расположена).
2. Функция принимает объект-прямоугольник и возвращает 
его ширину.
3. Функция принимает объект-прямоугольник и возвращает 
его высоту.
4. Функция принимает объект-прямоугольник и возвращает 
его площадь.
5. Функция принимает объект-прямоугольник и возвращает 
его периметр.
6. Функция изменения ширины прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить 
ширину.`)
  }
  function a4 (){
    alert(`7. Функция изменения высоты прямоугольника. Она принимает объект-прямоугольник и на сколько единиц изменить 
высоту.
8. Функция изменения ширины и высоты прямоугольника. 
Она принимает объект-прямоугольник и два значения – 
для изменения ширины и высоты.
9. Функция смещения прямоугольника по оси X. Она принимает объект-прямоугольник и на сколько единиц его 
сдвинуть.
10. Функция смещения прямоугольника по оси Y. Она принимает объект-прямоугольник и на сколько единиц его 
сдвинуть.
11. Функция смещения прямоугольника и по оси X и по 
оси Y. Она принимает объект-прямоугольник и два значения: сдвиг по оси X и сдвиг по оси Y.
12. Функция для проверки, находится ли точка внутри прямоугольника. Она принимает объект-прямоугольник и 
координаты точки.`)
  }
  const itemJ3 = document.querySelector('.block3 #item1')
  itemJ3?.addEventListener('click',a3)
  const itemJ4 = document.querySelector('.block3 #item2')
  itemJ4?.addEventListener('click',a4)
  const executor7 = document.querySelector('.block3 #b1')
  executor7?.addEventListener('click',n7)
  const executor8 = document.querySelector('.block3 #b2')
  executor8?.addEventListener('click',n8)
  const executor9 = document.querySelector('.block3 #b3')
  executor9?.addEventListener('click',n9)
  const executor10 = document.querySelector('.block3 #b4')
  executor10?.addEventListener('click',n10)
  const executor11 = document.querySelector('.block3 #b5')
  executor11?.addEventListener('click',n11)
  const executor12 = document.querySelector('.block3 #b6')
  executor12?.addEventListener('click',n12)
  // const executor13 = document.querySelector('.block3 #b7')
  // executor13?.addEventListener('click',n13)
  // const executor14 = document.querySelector('.block3 #b8')
  // executor14?.addEventListener('click',n14)
  // const executor15 = document.querySelector('.block3 #b9')
  // executor15?.addEventListener('click',n15)
  // const executor16 = document.querySelector('.block3 #b10')
  // executor16?.addEventListener('click',n16)
  // const executor17 = document.querySelector('.block3 #b11')
  // executor17?.addEventListener('click',n17)
  // const executor18 = document.querySelector('.block3 #b12')
  // executor18?.addEventListener('click',n18)