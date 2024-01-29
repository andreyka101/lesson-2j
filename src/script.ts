// import { NULL } from 'sass';
import './style.scss'
import anime from 'animejs'

let img1 = document.createElement('img');

// мы можем загрузить картинку
img1.src = "public/foto/Fussballfeld.gif"
document.head.append(img1);
// img1.onload = function() {
//   alert(`Изображение загружено, размеры ${img1.width}x${img1.height}`);
// };
// img1.onerror = function() {
//   alert("Ошибка во время загрузки изображения");
// };

// ANCHOR -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// @ts-ignore

let detect = new MobileDetect(window.navigator.userAgent)

let answer1 = document.querySelector('.block1 #s1')// as HTMLInputElement
let answer2 = document.querySelector('.block2 #s1')// as HTMLInputElement
let answer3 = document.querySelector('.block3 #s1')// as HTMLInputElement
let answer4 = document.querySelector('.block4 #s1')// as HTMLInputElement
let answer5 = document.querySelector('.block5 #s1')// as HTMLInputElement
let answer7 = document.querySelector('.block7 #s1')// as HTMLInputElement
let answer8 = document.querySelector('.block8 #s1')// as HTMLInputElement
let answer9 = document.querySelector('.block9 #s1')// as HTMLInputElement
let answer10 = document.querySelector('.block10 #s1')// as HTMLInputElement
let answer11 = document.querySelector('.block11 #s1')// as HTMLInputElement
let answer12 = document.querySelector('.block12 #s1')// as HTMLInputElement
let answer13 = document.querySelector('.block13 #s1')// as HTMLInputElement
let answer14 = document.querySelector('.block14 #s1')// as HTMLInputElement
let answer15 = document.querySelector('.block15 #s1')// as HTMLInputElement
let answer16 = document.querySelector('.block21 #s1') as HTMLSpanElement

let stringInput1 = document.querySelector('#input1')// as HTMLInputElement
let stringInput2 = document.querySelector('#input2')// as HTMLInputElement
let stringInput3 = document.querySelector('#input3')// as HTMLInputElement
let stringInput4 = document.querySelector('#input4')// as HTMLInputElement
let stringInput5 = document.querySelector('#input5')// as HTMLInputElement
let stringInput6 = document.querySelector('#input6')// as HTMLInputElement
let stringInput7 = document.querySelector('#input7')// as HTMLInputElement
let stringInput8 = document.querySelector('#input8')// as HTMLInputElement

const buttonALL = document.querySelectorAll('button') //as Record<number,HTMLInputElement>
const inputALL = document.querySelectorAll('input')// as Record<number,HTMLInputElement>
const H1ALL = document.body.querySelectorAll('h1')// as Record<number,HTML>


// FIXME  dz 1 --999999999999999999999999999999999999999999999999999999999999999999



// TODO  1

let car = {
  predictor: "Proton Edar Sdr Holding",
  model: "PROTON PERDANA",
  yearOfIssue: 2008,
  speed: 260,
} as any

answer1 = document.querySelector('.block1 #s1')

function n1() {
  let strcar = "ответ : "
  for (let i in car) {
    strcar += i + " : " + car[i] + " // "
  }
  // @ts-ignore
  answer1.innerText = strcar
}
function n2() {
  let distance = parseInt(prompt('введите расстояние которое нужно преодолеть') as string)
  let watch = 0
  let wastedTime = 0
  while (distance >= 0) {
    wastedTime += 1
    if (watch > 4) {
      watch = 0
    }
    else {
      watch += 1
      distance -= car.speed
    }
  }
  // @ts-ignore
  answer1.innerText = "ответ : " + wastedTime + " ч."
}

// TODO  3

let time = {
  hour: 23,
  minute: 59,
  second: 9,
}
answer2 = document.querySelector('.block2 #s1')
stringInput1 = document.querySelector('#input1')

function n3() {
  if (localStorage.objTime) {
    time = JSON.parse(localStorage.objTime)
  }
  else {
    localStorage.objTime = JSON.stringify(time)
  }

  if (time.second < 10) {
    if (time.minute < 10) {
      // @ts-ignore
      answer2.innerText = "ответ : " + time.hour + ":0" + time.minute + ":0" + time.second
    }
    else {
      // @ts-ignore
      answer2.innerText = "ответ : " + time.hour + ":" + time.minute + ":0" + time.second
    }
  }
  else if (time.minute < 10) {
    // @ts-ignore
    answer2.innerText = "ответ : " + time.hour + ":0" + time.minute + ":" + time.second
  }
  else {
    // @ts-ignore
    answer2.innerText = "ответ : " + time.hour + ":" + time.minute + ":" + time.second
  }
}

function n4() {
  // @ts-ignore
  time.second = stringInput1.value
  if (time.second > 60) {
    let a = 0
    a--
    time.second -= a * 60
    time.minute += a
  }
  if (time.minute > 60) {
    let a = 0
    a--
    time.minute -= a * 60
    time.hour += a
  }
  while (time.hour > 23) {
    time.hour -= 24
  }


  localStorage.objTime = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : время задано"
}


function n5() {
  // @ts-ignore
  time.minute = stringInput1.value
  if (time.minute > 60) {
    let a = 0
    for (; time.minute > a * 60; a++) { }
    a--
    time.minute -= a * 60
    time.hour += a
  }
  while (time.hour > 23) {
    time.hour -= 24
  }


  localStorage.objTime = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : время задано"
}


function n6() {
  // @ts-ignore
  time.hour = stringInput1.value
  while (time.hour > 23) {
    time.hour -= 24
  }


  localStorage.objTime = JSON.stringify(time)
  // @ts-ignore
  answer2.innerText = "ответ : время задано"
}



// FIXME  dz 2 ---99999999999999999999999999999999999999999999999999999999999999999999999


// TODO  1


let groceryList = [
  { id: 1, name: "йогурт", quantity: 2, bought: "надо купить!!" },
  { id: 2, name: "молоко", quantity: 1, bought: "надо купить!!" },
  { id: 3, name: "хлеб", quantity: 1, bought: "надо купить!!" },
]

function n19() {
  if (localStorage.objGroceryList) {
    groceryList = JSON.parse(localStorage.objGroceryList)
  }
  else {
    localStorage.objGroceryList = JSON.stringify(groceryList)
  }

  let str = ``
  for (let i in groceryList) {
    for (let e in groceryList[i]) {
      // @ts-ignore
      str += `${groceryList[i][e]} `
    }
    str += `
    `
  }
  alert(str)
}

function n20() {
  if (localStorage.objGroceryList) {
    groceryList = JSON.parse(localStorage.objGroceryList)
  }
  else {
    localStorage.objGroceryList = JSON.stringify(groceryList)
  }
  let num = 0
  let uuu = ""
  // @ts-ignore
  let tyt = stringInput2.value
  if (tyt != "") {
    for (let u in groceryList) {
      // @ts-ignore
      if (stringInput2.value == groceryList[u].name) {
        num = 1
        uuu = u
      }
    }
    if (num == 1) {
      // @ts-ignore
      groceryList[uuu].quantity += 1
      // @ts-ignore
      answer4.innerText = "information : " + groceryList[+(uuu)].name + " , " + groceryList[+(uuu)].quantity
    }
    else {
      groceryList.push({ id: groceryList.length + 1, name: tyt, quantity: 1, bought: "надо купить!!" } as any)

      // @ts-ignore
      answer4.innerText = "information : " + tyt + " , " + 1
    }
    localStorage.objGroceryList = JSON.stringify(groceryList)
  }
  else {
    // @ts-ignore
    answer4.innerText = "information : название продукта пустое"
  }
}


function n21() {
  if (localStorage.objGroceryList) {
    groceryList = JSON.parse(localStorage.objGroceryList)
  }
  else {
    localStorage.objGroceryList = JSON.stringify(groceryList)
  }

  let purchasedProducts = 0

  if (localStorage.loPurchasedProducts) {
    purchasedProducts = JSON.parse(localStorage.loPurchasedProducts)
  }
  else {
    localStorage.loPurchasedProducts = JSON.stringify(purchasedProducts)
  }
  let num = 0
  let uuu = ""
  // @ts-ignore
  let tyt = stringInput2.value
  if (tyt != "") {
    for (let u in groceryList) {
      // @ts-ignore
      if (stringInput2.value == groceryList[u].name) {
        num = 1
        uuu = u
      }
    }
    if (num == 1) {
      // @ts-ignore
      if (groceryList[uuu].bought != "куплен") {

        // @ts-ignore
        groceryList[uuu].bought = "куплен"
        // @ts-ignore
        answer4.innerText = "information : " + groceryList[+(uuu)].name + " куплен"
        // @ts-ignore
        let temporaryStorage = groceryList[uuu]
        // @ts-ignore
        groceryList[uuu] = groceryList[purchasedProducts]
        groceryList[purchasedProducts] = temporaryStorage
        localStorage.objGroceryList = JSON.stringify(groceryList)
        purchasedProducts++
        localStorage.loPurchasedProducts = JSON.stringify(purchasedProducts)
      }
    }
    else {
      // @ts-ignore
      answer4.innerText = "information : такого продукта нет"
    }
  }
  else {
    // @ts-ignore
    answer4.innerText = "information : название продукта пустое"
  }
}


// TODO  3


let switch1 = 0

let color = ["background-color:", "color:"]
let strColor = ""


function n22() {
  if (switch1 == 0) {
    switch1 = 1
  }
  if (localStorage.locSwitch1) {
    switch1 = JSON.parse(localStorage.locSwitch1)
  }
  else {
    localStorage.locSwitch1 = JSON.stringify(switch1)
  }

  switch (switch1) {
    case 1:
      switch1 = 2
      break;
    case 2:
      switch1 = 3
      break;
    case 3:
      switch1 = 4
      break;
    case 4:
      switch1 = 5
      break;
    case 5:
      switch1 = 6
      break;
    case 6:
      switch1 = 1
      break;
  }

  localStorage.locSwitch1 = JSON.stringify(switch1)

  //* dark
  if (switch1 == 1) {
    // @ts-ignore
    answer5.innerText = 'dark'
    for (let i in color) {
      strColor += color[i]
      if (i == "0") {
        strColor += "#232323;"
      }
      else {
        strColor += "azure;"
      }
    }
    // @ts-ignore
    document.querySelector('body').style = strColor

    for (let r of buttonALL) {
      // @ts-ignore
      r.style = "background-color: #efefef; color: #232323;"
    }
    for (let r of inputALL) {
      // @ts-ignore
      r.style = "background-color: #efefef; color: #232323;"
    }
    // @ts-ignore
    document.querySelector('html').style.setProperty('--plshldColor', '#232323')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aColor', '#cbcbcb')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackground', '#717171')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#717171')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aShadowHOVER', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonShadow', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonColor', '#232323')
    for (let w of H1ALL) {
      // @ts-ignore
      w.style = "color:azure;"
    }
  }

  //* white
  if (switch1 == 2) {
    // @ts-ignore
    answer5.innerText = 'white'
    for (let i in color) {
      strColor += color[i]
      if (i == "0") {
        strColor += "#ffffff;"
      }
      else {
        strColor += "#000000;"
      }
    }
    // @ts-ignore
    document.querySelector('body').style = strColor
    for (let r of buttonALL) {
      // @ts-ignore
      r.style = "background-color: #575757;"
    }
    for (let r of inputALL) {
      // @ts-ignore
      r.style = "background-color: #575757; color: #efefef;"
    }
    // @ts-ignore
    document.querySelector('html').style.setProperty('--plshldColor', '#efefef')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aColor', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackground', '#9b9b9b')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#9b9b9b')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aShadowHOVER', '#f71414')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonShadow', '#000000')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonColor', '#ffffff')
    for (let w of H1ALL) {
      // @ts-ignore
      w.style = "color:#202020;"
    }
  }

  //* dark gold
  if (switch1 == 3) {
    // @ts-ignore
    answer5.innerText = 'dark gold'
    for (let i in color) {
      strColor += color[i]
      if (i == "0") {
        strColor += "#232323;"
      }
      else {
        strColor += "#edf49c;"
      }
    }
    // @ts-ignore
    document.querySelector('body').style = strColor

    for (let r of buttonALL) {
      // @ts-ignore
      r.style = "background-color: #c9a805;"
    }
    for (let r of inputALL) {
      // @ts-ignore
      r.style = "background-color: #8b7404; color: white;"
    }
    // @ts-ignore
    document.querySelector('html').style.setProperty('--plshldColor', '#fcfdd4')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aColor', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackground', '#b29115')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aShadowHOVER', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonShadow', '#ffe52d')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonColor', '#ffffff')
    for (let w of H1ALL) {
      // @ts-ignore
      w.style = "color:#f1da23;"
    }
  }

  //* girly
  if (switch1 == 4) {
    // @ts-ignore
    answer5.innerText = 'girly'
    for (let i in color) {
      strColor += color[i]
      if (i == "0") {
        strColor += "#630949;"
      }
      else {
        strColor += "#ff6ce9;"
      }
    }
    // @ts-ignore
    document.querySelector('body').style = strColor

    for (let r of buttonALL) {
      // @ts-ignore
      r.style = "background-color: #ee0cae; color: white;"
    }
    for (let r of inputALL) {
      // @ts-ignore
      r.style = "background-color: #efefef; color: #d34c89;"
    }
    // @ts-ignore
    document.querySelector('html').style.setProperty('--plshldColor', '#d34c89')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aColor', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackground', '#ba0e89')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#7d095c')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aShadowHOVER', '#ff93e0')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonShadow', '#f15dc7')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonColor', '#ffffff')
    for (let w of H1ALL) {
      // @ts-ignore
      w.style = "color:azure;"
    }
  }

  //* classic
  if (switch1 == 6) {
    // @ts-ignore
    answer5.innerText = 'classic'
    for (let i in color) {
      strColor += color[i]
      if (i == "0") {
        strColor += "#8fb5a2;"
      }
      else {
        strColor += "azure;"
      }
    }
    // @ts-ignore
    document.querySelector('body').style = strColor

    for (let r of buttonALL) {
      // @ts-ignore
      r.style = "background-color: #637c6f; color: #f0f0f0;"
    }
    for (let r of inputALL) {
      // @ts-ignore
      r.style = "background-color: #637c6f; color: #f0f0f0;"
    }
    // @ts-ignore
    document.querySelector('html').style.setProperty('--plshldColor', '#dcd9d9')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aColor', '#f0f0f0')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackground', '#56836d')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#566b60')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aShadowHOVER', '#60ffcd')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonShadow', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonColor', '#ffffff')
    for (let w of H1ALL) {
      // @ts-ignore
      w.style = "color:#272f2b;"
    }
  }

  //* gold
  if (switch1 == 5) {
    // @ts-ignore
    answer5.innerText = 'gold'
    for (let i in color) {
      strColor += color[i]
      if (i == "0") {
        strColor += "#c2c04f;"
      }
      else {
        strColor += "#807b00;"
      }
    }
    // @ts-ignore
    document.querySelector('body').style = strColor

    for (let r of buttonALL) {
      // @ts-ignore
      r.style = "background-color: #fbff4f; color: #000000;"
    }
    for (let r of inputALL) {
      // @ts-ignore
      r.style = "background-color: #fbff5b; color: #000000;"
    }
    // @ts-ignore
    document.querySelector('html').style.setProperty('--plshldColor', '#000000')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aColor', '#ffffff')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackground', '#b29115')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aBackgroundHOVER', '#ffe52d')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--aShadowHOVER', '#ffe52d')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonShadow', '#6c6407')
    // @ts-ignore
    document.querySelector('html').style.setProperty('--bottonColor', '#ffffff')
    for (let w of H1ALL) {
      // @ts-ignore
      w.style = "color:#000000;"
    }
  }
}


// FIXME  dz 3 ---9999999999999999999999999999999999999999999999999999999999999999999


// TODO  1


function n23() {
  // @ts-ignore
  let line = stringInput3.value
  let countingNumbers = 0
  let countingString = 0
  let countingСount = 0

  if (line.length != 0) {
    for (let i = 0; i != line.length; i++) {
      if (line[i] == "1" || line[i] == "2" || line[i] == "3" || line[i] == "4" || line[i] == "5" || line[i] == "6" || line[i] == "7" || line[i] == "8" || line[i] == "9" || line[i] == "0") {
        countingNumbers++
      }
      else {
        if (line[i] == "/" || line[i] == "*" || line[i] == "-" || line[i] == "+" || line[i] == "=" || line[i] == "_" || line[i] == "|" || line[i] == "(" || line[i] == ")" || line[i] == "}" || line[i] == "{" || line[i] == "[" || line[i] == "]") {
          countingСount++
        }
        else {
          countingString++
        }
      }
    }
    // @ts-ignore
    answer7.innerText = `ответ : числа:${countingNumbers} ; строки:${countingString} ; знаки:${countingСount}`
  }
  else {
    // @ts-ignore
    answer7.innerText = "ответ : строка пустая"
  }
}


// TODO  2

function n24() {
  // @ts-ignore
  let savingNumber = +(stringInput4.value as string)
  let lowercaseNumber = "ответ : "
  if (0 <= savingNumber && savingNumber < 20) {
    switch (savingNumber) {
      case 0:
        lowercaseNumber += "нуль"
        break;
      case 1:
        lowercaseNumber += "один"
        break;
      case 2:
        lowercaseNumber += "два"
        break;
      case 3:
        lowercaseNumber += "три"
        break;
      case 4:
        lowercaseNumber += "четыре"
        break;
      case 5:
        lowercaseNumber += "пять"
        break;
      case 6:
        lowercaseNumber += "шесть"
        break;
      case 7:
        lowercaseNumber += "семь"
        break;
      case 8:
        lowercaseNumber += "восемь"
        break;
      case 9:
        lowercaseNumber += "девять"
        break;
      case 10:
        lowercaseNumber += "десять"
        break;
      case 11:
        lowercaseNumber += "одиннадцать"
        break;
      case 12:
        lowercaseNumber += "двенадцать"
        break;
      case 13:
        lowercaseNumber += "тринадцать"
        break;
      case 14:
        lowercaseNumber += "четырнадцать"
        break;
      case 15:
        lowercaseNumber += "пятнадцать"
        break;
      case 16:
        lowercaseNumber += "шестнадцать"
        break;
      case 17:
        lowercaseNumber += "семнадцать"
        break;
      case 18:
        lowercaseNumber += "восемнадцать"
        break;
      case 19:
        lowercaseNumber += "девятнадцать"
        break;
    }
  }
  else {
    let ssn = savingNumber + ""
    switch (ssn[0]) {
      case "2":
        lowercaseNumber += "двадцать"
        break;
      case "3":
        lowercaseNumber += "тридцать"
        break;
      case "4":
        lowercaseNumber += "сорок"
        break;
      case "5":
        lowercaseNumber += "пятьдесят"
        break;
      case "6":
        lowercaseNumber += "шестьдесят"
        break;
      case "7":
        lowercaseNumber += "семьдесят"
        break;
      case "8":
        lowercaseNumber += "восемьдесят"
        break;
      case "9":
        lowercaseNumber += "девяносто"
        break;

    }
    if (ssn[1] != "0") {
      switch (ssn[1]) {
        case "1":
          lowercaseNumber += " один"
          break;
        case "2":
          lowercaseNumber += " два"
          break;
        case "3":
          lowercaseNumber += " три"
          break;
        case "4":
          lowercaseNumber += " четыре"
          break;
        case "5":
          lowercaseNumber += " пять"
          break;
        case "6":
          lowercaseNumber += " шесть"
          break;
        case "7":
          lowercaseNumber += " семь"
          break;
        case "8":
          lowercaseNumber += " восемь"
          break;
        case "9":
          lowercaseNumber += " девять"
          break;
      }
    }
  }
  // @ts-ignore
  answer8.innerText = lowercaseNumber
  if (savingNumber > 99) {
    // @ts-ignore
    answer8.innerText = "ответ : слишком большое число только двузначное"
  }
}


// TODO  3


function n25() {
  // @ts-ignore
  let str = stringInput5.value
  let array = "ответ : "
  console.log(str.codePointAt())
  for (let i in str) {
    if (1072 <= str[i].codePointAt() && str[i].codePointAt() <= 1103 || 97 <= str[i].codePointAt() && str[i].codePointAt() <= 122) {
      array += str[i].toUpperCase()
    }
    else if (1040 <= str[i].codePointAt() && str[i].codePointAt() <= 1071 || 65 <= str[i].codePointAt() && str[i].codePointAt() <= 90) {
      array += str[i].toLowerCase()
    }
    else if (48 <= str[i].codePointAt() && str[i].codePointAt() <= 57) {
      array += "_"
    }
    else {
      array += str[i]
    }
  }
  // @ts-ignore
  answer9.innerText = array
}


// TODO  4


function n26() {
  // @ts-ignore
  let str = stringInput6.value
  let str2 = "ответ : "
  let memory = ""
  for (let i in str) {
    if (str[i] == "-") {
      memory = str[i + 1]
    }
    else {
      if (memory == "") {
        str2 += str[i]
      }
      else {
        memory = ""
        str2 += str[i].toUpperCase()
      }
    }
  }
  // @ts-ignore
  answer10.innerText = str2

}


// TODO  5


function n27() {
  // @ts-ignore
  let arr = stringInput7.value.split(' ')
  let abbreviation = "ответ : "

  for (let i of arr) {
    abbreviation += i[0].toUpperCase()
  }

  // @ts-ignore
  answer11.innerText = abbreviation
}


// TODO  7


function n28() {
  // @ts-ignore
  let str = stringInput8.value
  let str2 = ""
  let variable
  let reply = "ответ : "

  for (let i of str) {
    if (i == '*') {
      variable = i
    }
    if (i == '^') {
      variable = i
    }
    if (i == '/') {
      variable = i
    }
    if (i == '+') {
      variable = i
    }
    if (i == '-') {
      variable = i
    }
    if (i != " ") {
      str2 += i
    }
  }
  let num = str2.split(variable)

  if (variable == '*') {
    reply += +(num[0]) * +(num[1])
  }
  if (variable == '^') {
    reply += Math.pow(+(num[0]), +(num[1]))
  }
  if (variable == '/') {
    reply += +(num[0]) / +(num[1])
  }
  if (variable == '+') {
    reply += +(num[0]) + +(num[1])
  }
  if (variable == '-') {
    reply += +(num[0]) - +(num[1])
  }

  // @ts-ignore
  answer12.innerText = reply
}


// FIXME  pz 1 ---9999999999999999999999999999999999999999999999999999999999999999999


// TODO  1


let rectangle = {
  topLeftY: 1,
  topLeftX: 1,
  bottomRightY: 3,
  bottomRightX: 4,
} as any

function n7() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }
  let str = `ответ : `
  for (let i in rectangle) {
    str += `${i} : ${rectangle[i]} / `
  }
  // @ts-ignore
  answer3.innerText = str
}

function n8() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }
  // @ts-ignore
  answer3.innerText = 'ответ : ширина - ' + ((rectangle.bottomRightX - rectangle.topLeftX) + 1)
}

function n9() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }
  // @ts-ignore
  answer3.innerText = 'ответ : высота - ' + ((rectangle.bottomRightY - rectangle.topLeftY) + 1)
}
function n10() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }



  // @ts-ignore
  answer3.innerText = 'ответ : площадь - ' + (((rectangle.bottomRightY - rectangle.topLeftY) + 1) * ((rectangle.bottomRightX - rectangle.topLeftX) + 1))
}
function n11() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }
  // @ts-ignore
  answer3.innerText = 'ответ : периметр - ' + (((rectangle.bottomRightY - rectangle.topLeftY) + 1) * 2 + ((rectangle.bottomRightX - rectangle.topLeftX) + 1) * 2)
}
function n12() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }
  let width = parseInt(prompt('введите ширину') as string)
  if (width >= 0) {
    rectangle.bottomRightX = (rectangle.topLeftX + width) - 1
    localStorage.objRectangle = JSON.stringify(rectangle)
    // @ts-ignore
    answer3.innerText = 'ответ : действие выполнено'
  }
  else {
    alert("ошибка::минусовая ширина")
    // @ts-ignore
    answer3.innerText = 'ответ : ошибка действия'
  }
}


function n13() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }
  let height = parseInt(prompt('введите высоту') as string)
  if (height >= 0) {
    rectangle.bottomRightY = (rectangle.topLeftY + height) - 1
    localStorage.objRectangle = JSON.stringify(rectangle)
    // @ts-ignore
    answer3.innerText = 'ответ : действие выполнено'
  }
  else {
    alert("ошибка::минусовая высота")
    // @ts-ignore
    answer3.innerText = 'ответ : ошибка действия'
  }
}


function n14() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }

  let height = parseInt(prompt('введите высоту') as string)
  let width = parseInt(prompt('введите ширину') as string)
  if (height >= 0 && width >= 0) {
    rectangle.bottomRightY = (rectangle.topLeftY + height) - 1
    localStorage.objRectangle = JSON.stringify(rectangle)

    rectangle.bottomRightX = (rectangle.topLeftX + width) - 1
    localStorage.objRectangle = JSON.stringify(rectangle)
    // @ts-ignore
    answer3.innerText = 'ответ : действие выполнено'
  }
  else {
    alert("ошибка::минусовая высота")
    // @ts-ignore
    answer3.innerText = 'ответ : ошибка действия'
  }
}


function n15() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }

  let movementX = parseInt(prompt('на сколько передвинуть прямоугольник по оси X') as string)
  rectangle.topLeftX += movementX
  rectangle.bottomRightX += movementX
  localStorage.objRectangle = JSON.stringify(rectangle)
  // @ts-ignore
  answer3.innerText = 'ответ : ты передвинул прямоугольник'
}


function n16() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }


  let movementY = parseInt(prompt('на сколько передвинуть прямоугольник по оси Y') as string)
  rectangle.topLeftY += movementY
  rectangle.bottomRightY += movementY
  localStorage.objRectangle = JSON.stringify(rectangle)
  // @ts-ignore
  answer3.innerText = 'ответ : ты передвинул прямоугольник'
}


function n17() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }

  let movementX = parseInt(prompt('на сколько передвинуть прямоугольник по оси X') as string)
  let movementY = parseInt(prompt('на сколько передвинуть прямоугольник по оси Y') as string)
  rectangle.topLeftX += movementX
  rectangle.bottomRightX += movementX
  rectangle.topLeftY += movementY
  rectangle.bottomRightY += movementY
  localStorage.objRectangle = JSON.stringify(rectangle)
  // @ts-ignore
  answer3.innerText = 'ответ : ты передвинул прямоугольник'
}


function n18() {
  if (localStorage.objRectangle) {
    rectangle = JSON.parse(localStorage.objRectangle)
  }
  else {
    localStorage.objRectangle = JSON.stringify(rectangle)
  }


  let dotX = parseInt(prompt('введите точку X') as string)
  let dotY = parseInt(prompt('введите точку Y') as string)
  if ((dotX >= rectangle.topLeftX && dotX <= rectangle.bottomRightX) && (dotY >= rectangle.topLeftY && dotY <= rectangle.bottomRightY)) {
    // @ts-ignore
    answer3.innerText = 'ответ : точка в прямоугольнике'
  }
  else {
    // @ts-ignore
    answer3.innerText = 'ответ : точки нет в прямоугольнике'
  }
}


// FIXME  pz 2 ---9999999999999999999999999999999999999999999999999999999999999999999


// TODO  1


let randomArray = [] as any
for (let root = 0; root <= 8; root++) {
  randomArray[root] = Math.round(Math.random() * (1000 - -1000) + -1000)
  console.log(root)
}

function n29() {
  if (localStorage.objRandomArray) {
    randomArray = JSON.parse(localStorage.objRandomArray)
  }
  else {
    localStorage.objRandomArray = JSON.stringify(randomArray)
  }
  // @ts-ignore
  answer13.innerText = 'ответ : ' + randomArray
}
function n30() {
  if (localStorage.objRandomArray) {
    randomArray = JSON.parse(localStorage.objRandomArray)
  }
  else {
    localStorage.objRandomArray = JSON.stringify(randomArray)
  }

  let arr2 = []
  for (let i of randomArray) {
    if (i % 2 == 0) {
      arr2.push(i)
    }
  }
  // @ts-ignore
  answer13.innerText = 'ответ : четные - ' + arr2
}
function n31() {
  if (localStorage.objRandomArray) {
    randomArray = JSON.parse(localStorage.objRandomArray)
  }
  else {
    localStorage.objRandomArray = JSON.stringify(randomArray)
  }

  let summ = 0
  for (let i of randomArray) {
    summ += i
  }
  // @ts-ignore
  answer13.innerText = 'ответ : сумма - ' + summ
}
function n32() {
  if (localStorage.objRandomArray) {
    randomArray = JSON.parse(localStorage.objRandomArray)
  }
  else {
    localStorage.objRandomArray = JSON.stringify(randomArray)
  }

  let max = randomArray[0]
  randomArray.forEach((item: any) => {
    if (max < item) {
      max = item
    }
  });
  // @ts-ignore
  answer13.innerText = 'ответ : max - ' + max
}
function n33() {
  if (localStorage.objRandomArray) {
    randomArray = JSON.parse(localStorage.objRandomArray)
  }
  else {
    localStorage.objRandomArray = JSON.stringify(randomArray)
  }

  let prom = +(prompt(`напишите индекс в который нужно вписать с 0 по ${randomArray.length}`) as string)
  let save = randomArray[prom]
  randomArray[prom] = +(prompt(`напишите само число`) as string)
  randomArray.push(save)
  localStorage.objRandomArray = JSON.stringify(randomArray)
  // @ts-ignore
  answer13.innerText = 'ответ : вы изменили массив'
}
function n34() {
  if (localStorage.objRandomArray) {
    randomArray = JSON.parse(localStorage.objRandomArray)
  }
  else {
    localStorage.objRandomArray = JSON.stringify(randomArray)
  }

  randomArray.splice(+(prompt(`напишите индекс который нужно удалить с 0 по ${randomArray.length}`) as string), 1);
  localStorage.objRandomArray = JSON.stringify(randomArray)
  // @ts-ignore
  answer13.innerText = 'ответ : вы изменили массив'
}

// ANCHOR  .0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0




function a1() {
  alert(`Задание 1
  Создать объект, описывающий автомобиль (производитель, 
    модель, год выпуска, средняя скорость), и следующие функции 
    для работы с этим объектом.
    1. Функция для вывода на экран информации об автомобиле.
    2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
    Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час`)
}
const itemJ1 = document.querySelector('.block1 #item')
itemJ1?.addEventListener('click', a1)
const executor1 = document.querySelector('.block1 #b1')
executor1?.addEventListener('click', n1)
const executor2 = document.querySelector('.block1 #b2')
executor2?.addEventListener('click', n2)

function a2() {
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
itemJ2?.addEventListener('click', a2)
const executor3 = document.querySelector('.block2 #b1')
executor3?.addEventListener('click', n3)
const executor4 = document.querySelector('.block2 #b2')
executor4?.addEventListener('click', n4)
const executor5 = document.querySelector('.block2 #b3')
executor5?.addEventListener('click', n5)
const executor6 = document.querySelector('.block2 #b4')
executor6?.addEventListener('click', n6)


function a3() {
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
function a4() {
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
itemJ3?.addEventListener('click', a3)
const itemJ4 = document.querySelector('.block3 #item2')
itemJ4?.addEventListener('click', a4)
const executor7 = document.querySelector('.block3 #b1')
executor7?.addEventListener('click', n7)
const executor8 = document.querySelector('.block3 #b2')
executor8?.addEventListener('click', n8)
const executor9 = document.querySelector('.block3 #b3')
executor9?.addEventListener('click', n9)
const executor10 = document.querySelector('.block3 #b4')
executor10?.addEventListener('click', n10)
const executor11 = document.querySelector('.block3 #b5')
executor11?.addEventListener('click', n11)
const executor12 = document.querySelector('.block3 #b6')
executor12?.addEventListener('click', n12)
const executor13 = document.querySelector('.block3 #b7')
executor13?.addEventListener('click', n13)
const executor14 = document.querySelector('.block3 #b8')
executor14?.addEventListener('click', n14)
const executor15 = document.querySelector('.block3 #b9')
executor15?.addEventListener('click', n15)
const executor16 = document.querySelector('.block3 #b10')
executor16?.addEventListener('click', n16)
const executor17 = document.querySelector('.block3 #b11')
executor17?.addEventListener('click', n17)
const executor18 = document.querySelector('.block3 #b12')
executor18?.addEventListener('click', n18)


function a5() {
  alert(`Задание 1
Создать массив «Список покупок». Каждый элемент массива 
является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
1. Вывод всего списка на экран таким образом, чтобы сначала 
шли некупленные продукты, а потом – купленные.
2. Добавление покупки в список. Учтите, что при добавлении 
покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, 
а не добавлять новую. 
3. Покупка продукта. Функция принимает название продукта 
и отмечает его как купленный.`)
}
const itemJ5 = document.querySelector('.block4 #item')
itemJ5?.addEventListener('click', a5)
const executor19 = document.querySelector('.block4 #b1')
executor19?.addEventListener('click', n19)
const executor20 = document.querySelector('.block4 #b2')
executor20?.addEventListener('click', n20)
const executor21 = document.querySelector('.block4 #b3')
executor21?.addEventListener('click', n21)

function a6() {
  alert(`Создать массив css-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. 
Написать функцию, которая принимает массив стилей и 
текст, и выводит этот текст с помощью document.write() в тегах 
<p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.`)
}
const itemJ6 = document.querySelector('.block5 #item')
itemJ6?.addEventListener('click', a6)
const executor22 = document.querySelector('.block5 #b1')
executor22?.addEventListener('click', n22)

function a7() {
  alert(`Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
названия факультета, для которого она предназначена. 
Написать несколько функций для работы с ним.
1. Вывод на экран всех аудиторий. 
2. Вывод на экран аудиторий для указанного факультета.
3. Вывод на экран только тех аудиторий, которые подходят для 
переданной группы. Объект-группа состоит из названия, 
количества студентов и названия факультета. 
4. Функция сортировки аудиторий по количеству мест.
5. Функция сортировки аудиторий по названию (по алфавиту).`)
}
const itemJ7 = document.querySelector('.block6 #item')
itemJ7?.addEventListener('click', a7)

function a8() {
  alert(`Написать функцию, которая принимает строку и выводит 
статистику о ней: количество букв, количество цифр и 
количество других знаков.`)
}
const itemJ8 = document.querySelector('.block7 #item')
itemJ8?.addEventListener('click', a8)
const executor23 = document.querySelector('.block7 #b1')
executor23?.addEventListener('click', n23)

function a9() {
  alert(`Написать функцию, которая принимает двузначное число 
и возвращает его в текстовом виде. 
Например: 35 – тридцать пять, 89 – восемьдесят девять, 
12 – двенадцать.`)
}
const itemJ9 = document.querySelector('.block8 #item')
itemJ9?.addEventListener('click', a9)
const executor24 = document.querySelector('.block8 #b1')
executor24?.addEventListener('click', n24)

function a10() {
  alert(`Написать функцию, которая заменяет в полученной строке 
большие буквы на маленькие, маленькие – на большие, а 
цифры – на знак нижнего подчеркивания.`)
}
const itemJ10 = document.querySelector('.block9 #item')
itemJ10?.addEventListener('click', a10)
const executor25 = document.querySelector('.block9 #b1')
executor25?.addEventListener('click', n25)

function a11() {
  alert(`Написать функцию, которая преобразует названия cssстилей с дефисом в название в СamelСase стиле: font-size
в fontSize, background-color в backgroundColor, textalign в textAlign.`)
}
const itemJ11 = document.querySelector('.block10 #item')
itemJ11?.addEventListener('click', a11)
const executor26 = document.querySelector('.block10 #b1')
executor26?.addEventListener('click', n26)

function a12() {
  alert(`Написать функцию, которая принимает словосочетание 
и превращает его в аббревиатуру. 
Например: cascading style sheets в CSS, объектноориентированное программирование в ООП`)
}
const itemJ12 = document.querySelector('.block11 #item')
itemJ12?.addEventListener('click', a12)
const executor27 = document.querySelector('.block11 #b1')
executor27?.addEventListener('click', n27)

function a13() {
  alert(`Написать функцию – калькулятор. Функция принимает 
строку с примером, определяет, какое действие необходимо 
выполнить (+ - * / ^), переводит операнды в числа, решает 
пример и возвращает результат.`)
}
const itemJ13 = document.querySelector('.block12 #item')
itemJ13?.addEventListener('click', a13)
const executor28 = document.querySelector('.block12 #b1')
executor28?.addEventListener('click', n28)

function a14() {
  alert(`Создать массив из 10 случайных чисел и написать несколько 
функций для работы с ним.
1. Функция принимает массив и выводит его на экран.
2. Функция принимает массив и выводит только четные 
элементы.
3. Функция принимает массив и возвращает сумму всех 
элементов массива.
4. Функция принимает массив и возвращает его максимальный элемент.
5. Функция добавления нового элемента в массив по указанному индексу.
6. Функция удаления элемента из массива по указанному 
индексу`)
}
const itemJ14 = document.querySelector('.block13 #item')
itemJ14?.addEventListener('click', a14)
const executor29 = document.querySelector('.block13 #b1')
executor29?.addEventListener('click', n29)
const executor30 = document.querySelector('.block13 #b2')
executor30?.addEventListener('click', n30)
const executor31 = document.querySelector('.block13 #b3')
executor31?.addEventListener('click', n31)
const executor32 = document.querySelector('.block13 #b4')
executor32?.addEventListener('click', n32)
const executor33 = document.querySelector('.block13 #b5')
executor33?.addEventListener('click', n33)
const executor34 = document.querySelector('.block13 #b6')
executor34?.addEventListener('click', n34)

// FIXME  dz 4 ---9999999999999999999999999999999999999999999999999999999999999999999
// TODO 1
function a15() {
  alert(`Задание 1
  Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
1 ■ поле, хранящее радиус окружности;
2 ■ get-свойство, возвращающее радиус окружности;
3 ■ set-свойство, устанавливающее радиус окружности;
4 ■ get-свойство, возвращающее диаметр окружности;
5 ■ метод, вычисляющий площадь окружности;
6 ■ метод, вычисляющий длину окружности.
Продемонстрировать работу свойств и методов.`)
}

class CircleRadius {
  rad = 1
  constructor(r: number = 1) {
    this.rad = r
  }
  get radius() {
    return this.rad
  }
  set radius(r: number) {
    this.rad = r
  }
  get diameter() {
    return this.rad * 2
  }
  square() {
    return Math.PI * this.rad ** 2
  }
  length() {
    return 2 * Math.PI * this.rad
  }


}
let circleRadius = new CircleRadius(3)


const itemJ15 = document.querySelector('.block14 #item')
itemJ15?.addEventListener('click', a15)
const executor35 = document.querySelector('.block14 #b1')

executor35?.addEventListener('click', () => { if (answer14) answer14.innerHTML = "ответ: " + circleRadius.radius })
const executor36 = document.querySelector('.block14 #b2')
executor36?.addEventListener('click', () => { circleRadius.radius = +(prompt("введите новый радиус") as string) })
const executor37 = document.querySelector('.block14 #b3')

executor37?.addEventListener('click', () => { if (answer14) answer14.innerHTML = 'ответ: ' + circleRadius.diameter })
const executor38 = document.querySelector('.block14 #b4')

executor38?.addEventListener('click', () => { if (answer14) answer14.innerHTML = 'ответ: ' + circleRadius.square() })
const executor39 = document.querySelector('.block14 #b5')

executor39?.addEventListener('click', () => { if (answer14) answer14.innerHTML = 'ответ: ' + circleRadius.length() })

// TODO 2

function a16() {
  alert(`Задание 2
Реализовать класс, описывающий html элемент. 
Класс HtmlElement должен содержать внутри себя:
  ■ название тега;
  ■ самозакрывающийся тег или нет;
  ■ текстовое содержимое;
  ■ массив атрибутов;
  ■ массив стилей;
  ■ массив вложенных таких же тегов;
1 ■ метод для установки атрибута;
2 ■ метод для установки стиля;
3 ■ метод для добавления вложенного элемента в конец текущего элемента;
4 ■ метод для добавления вложенного элемента в начало текущего элемента;
5 ■ метод getHtml(), который возвращает html код в виде 
строки, включая html код вложенных элементов.`)
}

class HtmlElement {
  tagName = ""
  selfClosing = false
  textContent = ""
  attributes = [] as string[]
  styles = [] as string[]
  nestedTags = [] as HtmlElement[]


  constructor(textContentZ: string, tagNameZ: string = "span", stylesZ: string = "", attributesZ: string = "", selfClosingZ: any = true) {
    if (tagNameZ == "") {
      tagNameZ = "span"
    }
    if (selfClosingZ == "") {
      selfClosingZ = true
    }
    this.tagName = tagNameZ
    this.textContent = textContentZ
    this.selfClosing = selfClosingZ
    this.attributes = attributesZ.split(' ')
    this.styles = stylesZ.split(';')
    this.nestedTags.unshift({
      tagName: this.tagName,
      selfClosing: this.selfClosing,
      textContent: this.textContent,
      attributes: this.attributes,
      styles: this.styles,
    } as any)
  }
  attributeSetting(attributesZ: string) {
    this.attributes.push(attributesZ)
  }

  styleSetting(stylesZ: string) {
    this.styles.push(stylesZ)
  }

  prepend(el: HtmlElement) {
    this.nestedTags.unshift(el)
  }
  append(el: HtmlElement) {
    console.log(el)
    this.nestedTags.push(el)
  }

  getHtml(x: any = this.nestedTags, n: number = 0, str: string = ""): any {
    // if (answer15) answer15.innerHTML =
    str += "<" + x[n].tagName + ' style="'
    x[n].styles.find(function (item: any) {
      str += item + ";"
    })
    str += '" '
    x[n].attributes.find(function (item: any) {
      str += item
    })
    if (x[n].selfClosing) {
      str += '>' + x[n].textContent + "</" + x[n].tagName + ">"
    }
    else {
      str += ">"
    }
    console.log(str)
    if (n == x.length - 1) {
      return str
    } else {
      return this.getHtml(x, n + 1, str)
    }
  }
}

let span = new HtmlElement("uuu", "span", "color:red; background:blye")
let div = new HtmlElement("uuu", "div", "color:red; background:blye")
// let div2 = new HtmlElement("uuu", "div", "color:blye; background:blye")
div.attributeSetting('class="sf sdf sdf"')
div.append(span)
// console.log(div)



// div.getHtml()

// ()=>{if (answer15) answer15.innerHTML = "ответ: " + circleRadius.radius}
const itemJ16 = document.querySelector('.block15 #item')
itemJ16?.addEventListener('click', a16)
const executor40 = document.querySelector('.block15 #b1')
// @ts-ignore     
executor40?.addEventListener('click', () => { if (answer15) answer15.innerHTML = "&#10004;"; div.attributeSetting(prompt('введите атрибут\nпример:\nhref="/link-element-example.ru"')) })
const executor41 = document.querySelector('.block15 #b2')
// @ts-ignore     
executor41?.addEventListener('click', () => { if (answer15) answer15.innerHTML = "&#10004;"; div.styleSetting(prompt('введите style можно несколько через точку с запятой ( ; ) \nпример:\ncolor:blye ; background:blye')) })
const executor42 = document.querySelector('.block15 #b3')
// @ts-ignore     
executor42?.addEventListener('click', () => { if (answer15) answer15.innerHTML = "&#10004;"; div.append(new HtmlElement(prompt('добавления элемента в конец\nвведите текстовое содержимое   !! обязательно !!'), prompt('введите название тега по умолчанию = span'), prompt('введите стили не обязательно'), prompt('введите название атрибута не обязательно'), prompt('введите самозакрывающийся тег или false по умолчанию = true'))) })
const executor43 = document.querySelector('.block15 #b4')
// @ts-ignore     
executor43?.addEventListener('click', () => { if (answer15) answer15.innerHTML = "&#10004;"; div.prepend(new HtmlElement(prompt('добавления элемента в конец\nвведите текстовое содержимое   !! обязательно !!'), prompt('введите название тега по умолчанию = span'), prompt('введите стили не обязательно'), prompt('введите название атрибута не обязательно'), prompt('введите самозакрывающийся тег или false по умолчанию = true'))) })
const executor44 = document.querySelector('.block15 #b5')
executor44?.addEventListener('click', () => {
  if (answer15) answer15.innerHTML = div.getHtml()
})

// TODO 3

function a17() {
  alert(`Задание 3
Реализовать класс, который описывает css класс. 
Класс CssClass должен содержать внутри себя:
■ название css класса;
■ массив стилей;
■ метод для установки стиля;
■ метод для удаления стиля;
■ метод getCss(), который возвращает css код в виде строки`)
}
class CssClass {
  name: string
  cls: boolean
  styles = [] as string[]
  constructor(name: string, ic: string = "class") {
    this.name = name
    ic = ic.toLowerCase()
    if (ic == "class") {
      this.cls = true
    }
    else {
      this.cls = false
    }
  }
  styleSetting(x: string) {
    let y = x.split(';')
    for (let i of y) {
      if (i != "") {
        this.styles.push(i)
      }
    }
    console.log(this.styles)
  }
  removeStyle(x: string) {
    if (this.styles.indexOf(x) != -1) {
      this.styles.splice(this.styles.indexOf(x), 1)
    }
    console.log(this.styles)
  }
  get getCss() {
    let str = ""
    if (this.cls) {
      str += "."
    }
    else {
      str += "#"
    }
    str += this.name + " {\n"
    if (this.styles.length == 0) {
      return "массив пуст"
    }
    for (let i of this.styles) {
      str += i + ";\n"
    }
    str += "}"
    return str
  }
}
let styleDiv = new CssClass('sdf')

const itemJ17 = document.querySelector('.block16 #item')
itemJ17?.addEventListener('click', a17)
const executor48 = document.querySelector('.block16 #b1')
executor48?.addEventListener('click', () => { styleDiv.styleSetting(prompt('введите стили которые нужно добавить, можно несколько разделяя их через точку с запятой ( ; )') as string) })
const executor49 = document.querySelector('.block16 #b2')
executor49?.addEventListener('click', () => { styleDiv.removeStyle(prompt('введите стили которые нужно удалить') as string) })
const executor50 = document.querySelector('.block16 #b3')
executor50?.addEventListener('click', () => { alert(styleDiv.getCss); console.log() })

// TODO 4

function a18() {
  alert(`Реализовать класс, описывающий блок html документ. 
Класс HtmlBlock должен содержать внутри себя:
■ коллекцию стилей, описанных с помощью класса CssClass;
■ корневой элемент, описанный с помощью класса 
HtmlElement;
■ метод getCode(), который возвращает строку с html кодом (сначала теги style с описанием всех классов, а потом 
все html содержимое из корневого тега и его вложенных 
элементов).`)
}

class HtmlBlock {
  сssClass: CssClass[]
  htmlElement: HtmlElement
  constructor(a: any, b: CssClass[]) {
    this.htmlElement = a
    this.сssClass = b
  }
  getCode() {
    document.head.innerHTML += `<style>${this.сssClass.map(el => el.getCss).join('')}</style>`
    const bl17 = document.querySelector('.block17')
    if (bl17) bl17.innerHTML += this.htmlElement.getHtml()
  }
}


const itemJ18 = document.querySelector('.block17 #item')
itemJ18?.addEventListener('click', a18)
const executor45 = document.querySelector('.block17 #b1')
executor45?.addEventListener('click', () => { new HtmlBlock(div, [styleDiv]).getCode() })


// FIXME  learn.javascript ---9999999999999999999999999999999999999999999999999999999999999999999


// TODO календарь

let answer18 = document.querySelector('.block18 #s1 table') as HTMLTableElement
let tableDateNow = new Date()
let table = `<tr><th colspan="7">`
switch (tableDateNow.getMonth()) {
  case 0:
    table += `январь`
    break;
  case 1:
    table += `февраль`
    break;
  case 2:
    table += `март`
    break;
  case 3:
    table += `апрель`
    break;
  case 4:
    table += `май`
    break;
  case 5:
    table += `июнь`
    break;
  case 6:
    table += `июль`
    break;
  case 7:
    table += `август`
    break;
  case 8:
    table += `сентябрь`
    break;
  case 9:
    table += `октябрь`
    break;
  case 10:
    table += `ноябрь`
    break;
  case 11:
    table += `декабрь`
    break;

}

table += `</th></tr>`
let arrayThTable = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
table += `<tr>`
for (let i = 0; i != 7; i++) {
  table += `<td>${arrayThTable[i]}</td>`
}
table += `</tr>`


let tableDateOne = new Date((new Date).setDate(1))
let tableDateStart = 99
let tableDateDay = [1, 2, 3, 4, 5, 6, 0] as any
for (let i in tableDateDay) {
  if (tableDateDay[i] == tableDateOne.getDay()) {
    tableDateStart = +(i) + 1
    console.log(tableDateStart)
  }
}
let rangeTable = 0
let dayTable = 1
let exitInfinityTable = true
let tableDateNowNow = new Date()
let trimTableHTML = 0

table += "<tr>"
while (exitInfinityTable) {
  rangeTable += 1
  trimTableHTML += 1
  if (rangeTable < tableDateStart) {
    table += "<td></td>"
  }
  else {
    if (dayTable == tableDateNowNow.getDate()) {
      table += `<td style="background-color: #dd5959;">${dayTable}</td>`
    }
    else {
      table += `<td>${dayTable}</td>`
    }
    dayTable += 1
    if (new Date((new Date).setDate(dayTable)).getDate() == 1) {
      exitInfinityTable = false
      while (trimTableHTML < 7) {
        table += "<td></td>"
        trimTableHTML += 1
      }
    }
  }
  if (rangeTable % 7 == 0 && exitInfinityTable) {
    table += "</tr><tr>"
    trimTableHTML = 0
  }
}
table += "</tr>"
answer18.insertAdjacentHTML('beforeend', table)

// TODO футбольное поле

let gameBallRotation = 0
const foregroundTranslucent = document.querySelector('.foregroundTranslucent') as HTMLDivElement
foregroundTranslucent.style.display = "none"
const executor52 = document.querySelector('.SVG-close') as HTMLDivElement
executor52?.addEventListener('click', () => {
  foregroundTranslucent.classList.remove('on')
  foregroundTranslucent.classList.add('off')
  document.body.style.overflow = ""
})
const footballFieldGame = document.querySelector("#field div") as HTMLDivElement //  field
// const rect = footballFieldGame.getBoundingClientRect()
const playBall = document.querySelector("#field div div") as HTMLDivElement
const executor51 = document.querySelector('.block19 #b1') as HTMLButtonElement
const gravityBall = document.querySelector('.checkGravity') as HTMLInputElement


let ballCoordinatesY = 0
executor51?.addEventListener('click', () => {
  foregroundTranslucent.classList.remove('off')
  foregroundTranslucent.style.display = "inline-block"
  foregroundTranslucent.classList.add('on')
  document.body.style.overflow = "hidden"
  const rect = footballFieldGame.getBoundingClientRect()



  // TODO анимация js v1



  // gravityBall?.addEventListener('click', () => {
  //   if (gravityBall.checked) {
  //     console.log(rect);
  //     playBall.style.transition = "all 0.2s linear 0s"


  //     playBall.style.top = `${(rect.height + rect.y) - 51}px`
  //     if (ballCoordinatesY < (rect.height + rect.y - 51)/2){ 
  //       setTimeout(() => {
  //         if (ballCoordinatesY + ballCoordinatesY / 3 < rect.height + rect.y - 51) {
  //         playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 3}px`
  //       }
  //       else if (ballCoordinatesY + ballCoordinatesY / 6 < rect.height + rect.y - 51) {
  //         playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 6  }px`
  //       }
  //       ballCoordinatesY = ballCoordinatesY + ballCoordinatesY / 2
  //       setTimeout(() => {
  //         playBall.style.top = `${(rect.height + rect.y) - 51}px`
  //         setTimeout(() => {
  //           if (ballCoordinatesY + ballCoordinatesY / 2 < rect.height + rect.y - 51) {
  //             playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 2}px`
  //           }
  //           else if (ballCoordinatesY + ballCoordinatesY / 4 < rect.height + rect.y - 51) {
  //             playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 4  }px`
  //           }
  //           setTimeout(() => {
  //             playBall.style.top = `${(rect.height + rect.y) - 51}px`
  //           }, 200)
  //         }, 200)
  //       }, 200)
  //     }, 200)
  //   }
  //     setTimeout(() => {
  //       if (ballCoordinatesY + ballCoordinatesY / 2 < rect.height + rect.y - 51) {
  //         playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 2}px`
  //       }
  //       else if (ballCoordinatesY + ballCoordinatesY / 4 < rect.height + rect.y - 51) {
  //         playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 4  }px`
  //       }
  //       else if (ballCoordinatesY + ballCoordinatesY / 12 < rect.height + rect.y - 51) {
  //         playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 12  }px`
  //       }
  //       ballCoordinatesY = ballCoordinatesY + ballCoordinatesY / 2
  //       setTimeout(() => {
  //         playBall.style.top = `${(rect.height + rect.y) - 51}px`
  //         setTimeout(() => {
  //           if (ballCoordinatesY + ballCoordinatesY / 2 < rect.height + rect.y - 51) {
  //             playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 2}px`
  //           }
  //           else if (ballCoordinatesY + ballCoordinatesY / 4 < rect.height + rect.y - 51) {
  //             playBall.style.top = `${ballCoordinatesY + ballCoordinatesY / 4  }px`
  //           }
  //           setTimeout(() => {
  //             playBall.style.top = `${(rect.height + rect.y) - 51}px`
  //           }, 200)
  //         }, 200)
  //       }, 200)
  //     }, 200)

  //   }
  // })



  // TODO анимация js v2

  
  
  gravityBall?.addEventListener('click', ()=>{
    if(gravityBall.checked){
      anime({
        targets: '#field div div',
        translateY: (rect.bottom - rect.top)-51,
        duration: 1000,
        easing: 'easeOutBounce'
        })
    }
  })
  
  
  
  if (playBall) { 
    // ballCoordinatesY = (rect.bottom - rect.top) / 2 + rect.y - 25
      // playBall.style.top = (rect.bottom - rect.top) + 'px'
      // playBall.style.left = ((rect.right - rect.left)) + 'px'

      playBall.style.transform = `translateX(${((rect.right - rect.left)/2)-25}px)`
      playBall.style.transform += `translateY(${((rect.bottom - rect.top)/2)-25}px)`
      // playBall.style.transform = `translate(${((rect.right - rect.left)/2)-25}px, ${((rect.bottom - rect.top)/2)-25}px)`
    }
  })
  



footballFieldGame?.addEventListener('click', (event) => {
  
  if (!gravityBall.checked) {
    // playBall.style.transition = "1.3s"
    let definitionBallRotation = Math.floor(Math.random() * (3 - 1)) + 1
    switch (Math.floor(Math.random() * (3 - 1)) + 1) {
      case 1:
        gameBallRotation -= 50
        break;
      case 2:
        gameBallRotation += 50
        break;
    }
    // playBall.style.transform = `rotate(${gameBallRotation}deg)`
    // playBall.style.transition = `3s`

    const rect = footballFieldGame.getBoundingClientRect()


    // старый код  логика управлением мячом
    // if (rect.right <= event.clientX+25){
    //   playBall.style.left = `${rect.right-51}px`
    //   if (rect.bottom <= event.clientY+25){
    //     playBall.style.top = `${rect.bottom-51}px`
    //   }
    //   else if (rect.y >= event.clientY-25){
    //     playBall.style.top = `${rect.y}px`
    //   }
    //   else{
    //     playBall.style.top = `${event.clientY - 25}px`
    //   }
    // }
    // else if (rect.x >= event.clientX-25){
    //   playBall.style.left = `${rect.x}px`
    //   if (rect.bottom <= event.clientY+25){
    //     playBall.style.top = `${rect.bottom-51}px`
    //   }
    //   else if (rect.y >= event.clientY-25){
    //     playBall.style.top = `${rect.y}px`
    //   }
    //   else{
    //     playBall.style.top = `${event.clientY - 25}px`
    //   }
    // }
    // else if (rect.bottom <= event.clientY+25){
    //   playBall.style.left = `${event.clientX - 25}px`
    //   playBall.style.top = `${rect.bottom-51}px`
    // }
    // else if (rect.y >= event.clientY-25){
    //   playBall.style.left = `${event.clientX - 25}px`
    //   playBall.style.top = `${rect.y}px`
    // }
    // else{
    //   playBall.style.top = `${event.clientY - 25}px`
    //   playBall.style.left = `${event.clientX - 25}px`
    // }


    // новый код  логика управлением мячом
    let x = event.clientX
    let y = event.clientY
    x = x - rect.left
    y = y - rect.top
    console.log(x,y);
    console.log(rect.right - rect.left);
    
    if (rect.left > x) x = x + 20
    if (rect.right - rect.left < x + 25) x = x - 20
    
    if (rect.top > y) y = y + 20
    if (rect.bottom - rect.top < y + 25) y = y - 20

    // playBall.style.top = `${y}px`
    // ballCoordinatesY = y
    // playBall.style.left = `${x}px`

    // playBall.style.transform = `translate(${(x)-25}px, ${(y)-25}px)`

    anime({
      targets: '#field div div',
      translateY: y-25,
      translateX: x-25,
      duration: 700,
      easing: 'easeOutBounce'
      })
  }
})


// TODO список


const body = document.querySelector('body') as HTMLBodyElement
body.addEventListener('click', (event: any) => {
  let target = event.target // где был клик?
  // console.log(target.tagName.style.color);
})

const lists = document.querySelector('#torsion') as HTMLDivElement

const foregroundSemi_transparentLists = document.querySelector('.foregroundSemi-transparentLists') as HTMLDivElement
foregroundSemi_transparentLists.style.display = "none"
const exitFromLists = document.querySelector('.SVG-close2') as HTMLDivElement
exitFromLists?.addEventListener('click', () => {
  foregroundSemi_transparentLists.classList.remove('on')
  foregroundSemi_transparentLists.classList.add('off')
  document.body.style.overflow = ""
})
const executor53 = document.querySelector('.block20 #b1') as HTMLButtonElement
executor53?.addEventListener('click', () => {
  if (localStorage.objGroceryList) {
    groceryList = JSON.parse(localStorage.objGroceryList)
  }
  else {
    localStorage.objGroceryList = JSON.stringify(groceryList)
  }
  lists.innerHTML = ``
  for (let i in groceryList) {
    if (groceryList[i].bought != "куплен") lists.innerHTML += `<div data-id=${groceryList[i].id} class="myclass"><span>${groceryList[i].name + "  " + groceryList[i].quantity}<br>${groceryList[i].bought}</span><div class="closeList"></div></div>`
  }
  foregroundSemi_transparentLists.classList.remove('off')
  foregroundSemi_transparentLists.style.display = "inline-block"
  foregroundSemi_transparentLists.classList.add('on')
  document.body.style.overflow = "hidden"
})
document.querySelector('#torsion')?.addEventListener('click', function (e) {
  let target = e.target as HTMLElement

  if (target.className != 'closeList') return
  const el = target?.closest('.myclass') as HTMLElement
  if (el) {
    el.style.marginLeft = '600px'
    setTimeout(() => {
      el.style.height = '0'
      el.style.marginTop = '0'
      setTimeout(() => {
        el.remove()
      }, 500)
    }, 500)
  }
  let id = el.dataset
  for (let i in groceryList) {
    //@ts-ignore
    if (groceryList[i].id == id.id) {
      groceryList.splice(+(i), 1);
      localStorage.objGroceryList = JSON.stringify(groceryList)
    }
  }
})


// TODO подсказки для кнопки номер n


const comment = document.querySelector("#comment") as HTMLSpanElement
document.querySelector('body')?.addEventListener('mouseover', function (e) {
  // if https://learn.javascript.ru/event-delegation
  let target = e.target as HTMLElement
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    comment.style.display = "none"
  }
  else {
    if (target.id == 'item' || target.id == 'item1' || target.id == 'item2') {
      const el = target?.closest(`#${target.id}`) as HTMLElement
      const rect = el.getBoundingClientRect()
      if (rect.y > 120) comment.style.top = `${window.scrollY + rect.y - 50}px`
      else comment.style.top = `${window.scrollY + rect.bottom + 20}px`
      setTimeout(() => {
        comment.style.display = "inline-block"
      }, 800)
    }
    else comment.style.display = "none"

  }
})


//TODO: memory game



const divCards2 = document.querySelector(".divCards2") as HTMLDivElement
const gameCards = document.querySelector("#gameCards") as HTMLDivElement
const numberCardsR = document.querySelector("#numberCards") as HTMLInputElement
numberCardsR.addEventListener('mousemove', () => {
  answer16.innerHTML = numberCardsR.value
})

const mapAnimations1a = document.querySelector('.foregroundTranslucentBlock21 #level1a') as HTMLDivElement
const mapAnimations2a = document.querySelector('.foregroundTranslucentBlock21 #level2a') as HTMLDivElement
const mapAnimations3a = document.querySelector('.foregroundTranslucentBlock21 #level3a') as HTMLDivElement
const mapAnimations1b = document.querySelector('.foregroundTranslucentBlock21 #level1b') as HTMLDivElement
const mapAnimations2b = document.querySelector('.foregroundTranslucentBlock21 #level2b') as HTMLDivElement
const mapAnimations3b = document.querySelector('.foregroundTranslucentBlock21 #level3b') as HTMLDivElement

const foregroundTranslucentBlock21 = document.querySelector('.foregroundTranslucentBlock21') as HTMLDivElement
foregroundTranslucentBlock21.style.display = "none"
const frameDifficulty = document.querySelector('.foregroundTranslucentBlock21 #frameDifficulty div') as HTMLDivElement
const description = document.querySelector('.foregroundTranslucentBlock21 #description div') as HTMLDivElement
const victorySignHTML = document.querySelector("#victorySign") as HTMLDivElement
const victoryTransparentHTML = document.querySelector("#victoryTransparent") as HTMLDivElement
const exitForeground21 = document.querySelector('.foregroundTranslucentBlock21 .SVG-exit') as HTMLDivElement
exitForeground21?.addEventListener('click', () => {
  foregroundTranslucentBlock21.classList.remove('on')
  foregroundTranslucentBlock21.classList.add('off')
  document.body.style.overflow = ""
  frameDifficulty.style.width = "0px"
  description.style.width = "0px"
  description.style.padding = "0px"
  frameDifficulty.innerHTML = ""
  frameDifficulty.style.filter = "blur(0px) opacity(1)"
  description.style.filter = "blur(0px) opacity(1)"
  divCards2.style.filter = "blur(10px)"
  divCards2.style.top = "100%"
  victoryTransparentHTML.style.animation = "none"
  victorySignHTML.style.animation = "none"
  setTimeout(() => {
    mapAnimations1b.style.display = "inline-block"
    mapAnimations2b.style.display = "inline-block"
    mapAnimations3b.style.display = "inline-block"
    mapAnimations1b.style.animation = ""
    mapAnimations2b.style.animation = ""
    mapAnimations3b.style.animation = ""
    flipDifficultyCardReset(mapAnimations1a,mapAnimations1b)
    flipDifficultyCardReset(mapAnimations2a,mapAnimations2b)
    flipDifficultyCardReset(mapAnimations3a,mapAnimations3b)
  }, 150)
  function flipDifficultyCardReset(a:any,b:any){
    b.style.filter = "opacity(0) saturate(1)"
    a.style.transform = "rotateY(360deg)"
    b.style.transform = "rotateY(360deg)"
    a.style.transition = "0.2s"
    b.style.transition = "0s"
    a.style.zIndex = "1"
    b.style.zIndex = "0"
  }
})


const executor54 = document.querySelector('.block21 #b1') as HTMLButtonElement
executor54?.addEventListener('click', () => {
  foregroundTranslucentBlock21.classList.remove('off')
  foregroundTranslucentBlock21.style.display = "inline-block"
  foregroundTranslucentBlock21.classList.add('on')
  document.body.style.overflow = "hidden"
  mapAnimations1a.style.display = "none"
  mapAnimations2a.style.display = "none"
  mapAnimations3a.style.display = "none"
  setTimeout(() => {
    mapAnimations1a.style.display = "inline-block"
    // mapAnimations1a.style.left = `calc(25% - ${(mapAnimations1a.scrollWidth-1)/2}px)`
    mapAnimations1a.style.left = `calc(25% - 49px)`
    mapAnimations1a.style.animation = "mapAnimations1 0.4s"
    frameDifficulty.style.width = "162px"
    if (window.innerWidth <= 450){
      description.style.width = "223px"
    }
    else if (window.innerWidth <= 700){
      description.style.width = "400px"
    }
    else{
      description.style.width = "550px"
    }
    setTimeout(() => {
      frameDifficulty.innerHTML = "выбор сложности"
      description.style.padding = "10px"
    }, 550)
    setTimeout(() => {
      mapAnimations2a.style.display = "inline-block"
      // mapAnimations2a.style.left = `calc(50% - ${(mapAnimations1a.scrollWidth-1)/2}px)`
      mapAnimations2a.style.left = `calc(50% - 49px)`
      mapAnimations2a.style.animation = "mapAnimations2 0.4s"
      setTimeout(() => {
        mapAnimations3a.style.display = "inline-block"
        // mapAnimations3a.style.left = `calc(75% - ${(mapAnimations1a.scrollWidth-1)/2}px)`
        mapAnimations3a.style.left = `calc(75% - 49px)`
        mapAnimations3a.style.animation = "mapAnimations3 0.4s"
        setTimeout(() => {
          mapAnimations1b.style.filter = "opacity(1)"
          mapAnimations2b.style.filter = "opacity(1)"
          mapAnimations3b.style.filter = "opacity(1)"
        }, 400)
      }, 400)
    }, 400)
  }, 550)
  
  
})

{
 let numberMoves = 0
 let firstMoveBuffer : any
function flipDifficultyCard(a:any,b:any){
    a.style.transition = "1s"
    b.style.transition = "1s"
    // a.classList.add("beautifulClosingCards")
    // b.classList.add("beautifulClosingCards")
    a.style.transform = "rotateY(180deg)"
    b.style.transform = "rotateY(180deg)"
    // b.style.filter = "blur(10px)"
    a.style.zIndex = "0"
    b.style.zIndex = "1"
}
let difficultySelectionSound = new Audio('audio/eeb97203442250b.mp3');
mapAnimations1a.addEventListener('click', () => {
  flipDifficultyCard(mapAnimations1a,mapAnimations1b)
  flipDifficultyCard(mapAnimations2a,mapAnimations2b)
  flipDifficultyCard(mapAnimations3a,mapAnimations3b)
  mapAnimations1b.style.filter = "saturate(0)"
  difficultySelectionSound.play();
  closingDivCards(mapAnimations1b)
  complexityGeneration(1)
})
mapAnimations2a.addEventListener('click', () => {
  flipDifficultyCard(mapAnimations1a,mapAnimations1b)
  flipDifficultyCard(mapAnimations2a,mapAnimations2b)
  flipDifficultyCard(mapAnimations3a,mapAnimations3b)
  mapAnimations2b.style.filter = "saturate(0)"
  difficultySelectionSound.play();
  closingDivCards(mapAnimations2b)
  complexityGeneration(2)
})
mapAnimations3a.addEventListener('click', () => {
  flipDifficultyCard(mapAnimations1a,mapAnimations1b)
  flipDifficultyCard(mapAnimations2a,mapAnimations2b)
  flipDifficultyCard(mapAnimations3a,mapAnimations3b)
  mapAnimations3b.style.filter = "saturate(0)"
  difficultySelectionSound.play();
  closingDivCards(mapAnimations3b)
  complexityGeneration(3)
})
function closingDivCards(b:any){
  frameDifficulty.innerHTML = ""
  description.innerHTML = ""
  frameDifficulty.style.width = "0px"
  description.style.width = "0px"
  description.style.padding = "0px"
  setTimeout(()=>{
    frameDifficulty.style.filter = "blur(10px) opacity(0)"
    description.style.filter = "blur(10px) opacity(0)"
  },100)
  setTimeout(()=>{
    mapAnimations1a.style.display = "none"
    mapAnimations2a.style.display = "none"
    mapAnimations3a.style.display = "none"
    mapAnimations1b.style.animation = "mapAnimationsChoice_1s 0.5s both"
    mapAnimations2b.style.animation = "mapAnimationsChoice_1s 0.5s both"
    mapAnimations3b.style.animation = "mapAnimationsChoice_1s 0.5s both"
    b.style.animation = "mapAnimationsChoice_2s 1.5s both"
    setTimeout(()=>{
      mapAnimations1b.style.display = "none"
      mapAnimations2b.style.display = "none"
      mapAnimations3b.style.display = "none"
    },1300)
    setTimeout(()=>{
      mapAnimations3b.style.display = "none"
      divCards2.style.transition = "1s"
      divCards2.style.top = "0"
      divCards2.style.filter = "blur(0px)"
    },500)
  },1000)
}
let mapPointingSound = new Audio('audio/2181b19773767a7.mp3');
mapAnimations1a.addEventListener('mouseover', () => {
  description.innerHTML = "лёгкий уровень сложности , карты попадаются только одной масти"
  mapPointingSound.pause();
  mapPointingSound.currentTime = 0.0;
  mapPointingSound.play();
})
mapAnimations1a.addEventListener('mouseout', () => {
  description.innerHTML = ""
})
mapAnimations2a.addEventListener('mouseover', () => {
  description.innerHTML = "средний уровень сложности , карты попадаются разных мастей , но только цифры"
  mapPointingSound.pause();
  mapPointingSound.currentTime = 0.0;
  mapPointingSound.play();
})
mapAnimations2a.addEventListener('mouseout', () => {
  description.innerHTML = ""
})
mapAnimations3a.addEventListener('mouseover', () => {
  description.innerHTML = "сложный уровень сложности , карты попадаются разных мастей , но только валет , дама , король"
  mapPointingSound.pause();
  mapPointingSound.currentTime = 0.0;
  mapPointingSound.play();
})
mapAnimations3a.addEventListener('mouseout', () => {
  description.innerHTML = ""
})



function complexityGeneration(num:number) {
  let arrNum = [] as number[]
  let arrCopy = [] as number[]
  let ran:number
  let maxRan=0
  let strRan = ""
  switch (num) {
    case 1:
      maxRan = 13
      strRan = "url(svg/easy_level/poker_easy_"
      break;
    case 2:
      maxRan = 16
      strRan = "url(svg/average_level/poker_average_"
      break;
      case 3:
        maxRan = 12
        strRan = "url(svg/difficult_level/poker_difficult_"
      break;
  }
  for (let i=1;i!=+(numberCardsR.value)/2+1;i++ ){
    ran = Math.round(Math.random() * (maxRan - 1) + 1)
    if (arrNum.length != 0){
      ran = +(checkingRandomNumbers(ran))
    }
    arrNum.push(ran)
    // arr.push(strRan + ran)
  }
  // gameCards.style.background = arr[1]
  // gameCards.innerHTML="<div>"
  let conclusionHTML = ""
  
  arrCopy = arrNum.slice()
  shuffle(arrCopy)
  shuffle(arrNum)
  shuffle(arrCopy)
  arrNum = arrNum.concat(arrCopy)
  shuffle(arrNum)
  shuffle(arrNum)
  shuffle(arrNum)
  
  
  arrNum.forEach((item, index) => {
    conclusionHTML +='<div style="position: relative;width: 99px;height: 131px;margin: 6px;"><div class="cardButtonFace" data-num="'+index+'" style="background:' + strRan + item +'.svg)center/cover; z-index: 0;transition: 0.5s;position: absolute;"></div><div class="cardButton" data-num="'+index+'" data-id="'+ arrNum[index] +'" style="background:url(svg/poker_am5vxqpezjmq.svg)center/cover;cursor: pointer;transition: 0.5s;z-index: 1;position: absolute;"></div></div>'
  })
  gameCards.innerHTML = conclusionHTML
  



  function shuffle(array:any) {
    array.sort(() => Math.random() - 0.5);
  }
  function checkingRandomNumbers(ran:number){
    arrNum.forEach((item) => {
      if (item==ran){
        ran = +(checkingRandomNumbers(Math.round(Math.random() * (maxRan - 1) + 1)))
      }
    })
    return ran
  }
}
let victorySign = 0
const cardsMatchedAudio = new Audio('audio/d0aff48f9f2bbf7.mp3');
const victoryAudio = new Audio('audio/388d369504aaa1a.mp3');
const closingCards = document.querySelector("#closingCards") as HTMLDivElement
const playCardsAgain = document.querySelector("#playCardsAgain") as HTMLDivElement
gameCards?.addEventListener('click', function (event) {
  var wholeDeckOfCards = document.querySelectorAll('#gameCards div .cardButtonFace') as any //Record<number,HTMLDivElement>
  let target = event.target as HTMLElement
  if (target.className != 'cardButton') return;
  for (let i=0;i !=wholeDeckOfCards.length;i++){
    if (target.dataset.num == wholeDeckOfCards[i].dataset.num){
      wholeDeckOfCards[i].style.transform = "rotateY(360deg)"
      target.style.transform = "rotateY(360deg)"
      target.style.zIndex = "0"
      wholeDeckOfCards[i].style.zIndex = "1"
      numberMoves ++
    }
  }
  if (numberMoves==2){
    numberMoves = 0
    if (firstMoveBuffer.dataset.id != target.dataset.id){
      closingCards.style.zIndex = "20"
      setTimeout(()=>{
        for (let i=0;i !=wholeDeckOfCards.length;i++){
          if (target.dataset.num == wholeDeckOfCards[i].dataset.num){
            wholeDeckOfCards[i].style.transform = "rotateY(180deg)"
            target.style.transform = "rotateY(180deg)"
            target.style.zIndex = "1"
            wholeDeckOfCards[i].style.zIndex = "0"
            closingCards.style.zIndex = "-1"
          }
          if (firstMoveBuffer.dataset.num == wholeDeckOfCards[i].dataset.num){
            wholeDeckOfCards[i].style.transform = "rotateY(180deg)"
            firstMoveBuffer.style.transform = "rotateY(180deg)"
            firstMoveBuffer.style.zIndex = "1"
            wholeDeckOfCards[i].style.zIndex = "0"
            closingCards.style.zIndex = "-1"
          }
        }
      },1000)
    }
    else{
      victorySign+=2
      console.log(victorySign);
      if(victorySign == +(numberCardsR.value)){
        victorySign = 0
        setTimeout(()=>{
          victoryAudio.pause();
          victoryAudio.currentTime = 0.0;
          victoryAudio.play();
          
          for (let i=0;i !=wholeDeckOfCards.length;i++){
            wholeDeckOfCards[i].style.filter = "saturate(0.4)"
          }
          setTimeout(()=>{
            victorySignHTML.style.animation = "0.5s endGame2 both"
            setTimeout(()=>{
              victoryTransparentHTML.style.animation = "0.5s endGame1 both"
            },30)
          },200)
        },250)
        
      }
      else{
        setTimeout(()=>{
          cardsMatchedAudio.pause();
          cardsMatchedAudio.currentTime = 0.0;
          cardsMatchedAudio.play();
          for (let i=0;i !=wholeDeckOfCards.length;i++){
            if (target.dataset.num == wholeDeckOfCards[i].dataset.num || firstMoveBuffer.dataset.num == wholeDeckOfCards[i].dataset.num){
              wholeDeckOfCards[i].style.filter = "saturate(0)"
            }
          }
        },200)
      }
    }
  }
  if (numberMoves==1)firstMoveBuffer = target
})
let rotate = 0
let timer : any
playCardsAgain.addEventListener('mouseover', () => {
    timer = setInterval(()=>{
      rotate+=0.7
      if (rotate >= 360) rotate = 0
      playCardsAgain.style.transform = `rotate(${rotate}deg)`
    })
})
playCardsAgain.addEventListener('mouseout', () => {
      clearInterval(timer)
})
playCardsAgain.addEventListener('click', () => {
  frameDifficulty.style.width = "0px"
  description.style.width = "0px"
  description.style.padding = "0px"
  frameDifficulty.innerHTML = ""
  frameDifficulty.style.filter = "blur(0px) opacity(1)"
  description.style.filter = "blur(0px) opacity(1)"
  divCards2.style.filter = "blur(10px)"
  divCards2.style.top = "100%"
  victoryTransparentHTML.style.animation = "none"
  victorySignHTML.style.animation = "none"
  setTimeout(() => {
    mapAnimations1b.style.display = "inline-block"
    mapAnimations2b.style.display = "inline-block"
    mapAnimations3b.style.display = "inline-block"
    mapAnimations1b.style.animation = ""
    mapAnimations2b.style.animation = ""
    mapAnimations3b.style.animation = ""
    flipDifficultyCardReset(mapAnimations1a,mapAnimations1b)
    flipDifficultyCardReset(mapAnimations2a,mapAnimations2b)
    flipDifficultyCardReset(mapAnimations3a,mapAnimations3b)
    mapAnimations1a.style.display = "none"
    mapAnimations2a.style.display = "none"
    mapAnimations3a.style.display = "none"
    setTimeout(() => {
    mapAnimations1a.style.display = "inline-block"
    mapAnimations1a.style.left = `calc(25% - ${mapAnimations1a.scrollWidth/2}px)`
    mapAnimations1a.style.animation = "mapAnimations1 0.4s"
    frameDifficulty.style.width = "162px"
    if (window.innerWidth <= 450){
      description.style.width = "223px"
    }
    else if (window.innerWidth <= 700){
      description.style.width = "400px"
    }
    else{
      description.style.width = "550px"
    }

    setTimeout(() => {
      frameDifficulty.innerHTML = "выбор сложности"
      description.style.padding = "10px"
    }, 550)
    setTimeout(() => {
      mapAnimations2a.style.display = "inline-block"
      mapAnimations2a.style.left = `calc(50% - ${mapAnimations1a.scrollWidth/2}px)`
      mapAnimations2a.style.animation = "mapAnimations2 0.4s"
      setTimeout(() => {
        mapAnimations3a.style.display = "inline-block"
        mapAnimations3a.style.left = `calc(75% - ${mapAnimations1a.scrollWidth/2}px)`
        mapAnimations3a.style.animation = "mapAnimations3 0.4s"
        setTimeout(() => {
          mapAnimations1b.style.filter = "opacity(1)"
          mapAnimations2b.style.filter = "opacity(1)"
          mapAnimations3b.style.filter = "opacity(1)"
        }, 400)
      }, 400)
    }, 400)
  }, 550)
  }, 150)
  function flipDifficultyCardReset(a:any,b:any){
    b.style.filter = "opacity(0) saturate(1)"
    a.style.transform = "rotateY(360deg)"
    b.style.transform = "rotateY(360deg)"
    a.style.transition = "0.2s"
    b.style.transition = "0s"
    a.style.zIndex = "1"
    b.style.zIndex = "0"
  }
})
}


// width: 63px;
// height: 84px;


//@ts-ignore
console.log("Mobile: " + detect.mobile()); 
console.log(window.innerWidth); 



//ANCHOR a+++++a+++++a+++++a+++++a+++++a+++++a+++++a+++++a