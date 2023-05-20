/////////////////chapter35-38/////////////////////


///////////////////////Question1////////////////////
// function timeing(){
//     var date = new Date()
//     document.write(date)
// }
// timeing()

///////////////////////Question2////////////////////

// function greet(first,last){
//     var name = `${first} ${last}`
//     var fullName = `hello ${name} welcome`
//     document.write(fullName)
// }

// var firstName = prompt("enter your first name:")
// var lastName = prompt("enter your last name:")

// greet(firstName,lastName)

///////////////////////Question3////////////////////

// function sum(a,b){
//     return a+b
// }
// let first = +prompt("write a one number")
// let last = +prompt("write a one number")

// var add = sum(first,last)
// console.log(add)

///////////////////////Question4////////////////////

// function calculator(num1,num2,operator){
//     var result ;
//     if(operator == "+"){
//         result = num1+num2
//     }else if(operator == "-"){
//         result = num1-num2
//     }else if(operator == "/"){
//         result = num1/num2
//     }else if(operator == "%"){
//         result = num1%num2
//     }
//     else if(operator == "*"){
//         result = num1*num2
//     }else{
//         alert("invalid operator")
//     }
//     console.log(result)
//     document.write(result)
// }
// var firstnum = parseFloat(prompt("type any number:"))
// var operate = prompt("operator +, _, /, *,%:")
// var lastnum = parseFloat(prompt("last number:"))

// var calc = calculator(firstnum,lastnum,operate)

///////////////////////Question5////////////////////

// function sqrt(a){
//     var result = Math.sqrt(a)
//     console.log(result)

// }
// var value = +prompt("type any number")

// sqrt(value)

///////////////////////Question6////////////////////

// var value = +prompt("type any number")
// function num(n){
//     if(n < 0){
//         return -1
//     }else if(n == 0){
        
//         return 1
//     }else{
//         return n * num(n - 1)
//     }
// }

// console.log(num(value))

///////////////////////Question7////////////////////

// var startcount = +prompt("start counting number")
// var endcount = +prompt("end counting number")
// function counting(str,end){
//     for(i = str;i <= end; i++){
//         console.log(i)
//     }
// }

// counting(startcount,endcount)

///////////////////////Question8////////////////////

// var num1 = +prompt("base")
// var num2 = +prompt("prependicular")
// function pro(base,pre){
//      return Math.sqrt(base*base + pre*pre).toFixed(5)
// }
// console.log(pro(num1,num2))

///////////////////////Question9////////////////////

// var width = +prompt("width")
// var height = +prompt("height")

// function area(widt,heigh){
//    return  widt*heigh
// }

// console.log(area(width,height))

///////////////////////Question10////////////////////

// function palidrom(string){
//     var str = string.split('').reverse().join('')
//     if(string == str){
//         return "it is palidrom"
//     }else{
//         return "it is not palidrom"
//     }
// }
// var user = prompt("palidrom").toLowerCase()
// console.log(palidrom(user))

///////////////////////Question11////////////////////

// var user = prompt("enter any sentence")
// function convert(str){
//     var word = str.split(' ')
//     for( i = 0;i < word.length;i++){
//         console.log(word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1))
//     }
//     return word.join(" ")
// }
// console.log(convert(user))

///////////////////////Question12////////////////////

// var user = prompt("type sny sentence")
// function longest(str){
//     let longestWorld = '';
// var word = str.split(' ')
// for(let i = 0;i < word.length;i++){
//     if(word[i].length > longestWorld.length){
//         longestWorld = word[i]
//     }
// }
// return longestWorld
// }
// console.log(longest(user))

///////////////////////Question13////////////////////

// var string = prompt("write any sentence").toLowerCase()
// var lett = prompt("write any one letter").toLowerCase()
// function foo(str,letter){
// var result = 0; 
// for(i = 0; i < str.length;i++){
//         if(letter.length == 2 || !isNaN(letter)){
//                 alert("Write any one letter")
//                 break
//         }else{
//                 if(str.slice(i,i+1) === letter){
//                 result += 1 
//         }
//         }
        
// }
// return result
// }
// console.log(foo(string,lett))

///////////////////////Question14////////////////////

// var user = prompt("write radius here to know circumference of a circle")
// function circumference(radius){
//     var pi = Math.PI

//     function area(radius){
//        return a = (radius * radius * pi).toFixed(2)
//     }
//     alert("radius " + area(radius))
//     return c = (2 * pi * radius).toFixed(2)
// }
// alert("circumference " + circumference(user))

/////////////////chapter38-48/////////////////////

//////////////////question1//////////////////////////

// function foo(){
//     alert("hello world")
// }

//////////////////question2/////////////////////////

// var modal = document.querySelector('.modal')  
// function foo(value){
// var display = document.getElementById("display")  
//     modal.style.display = "flex"
//     display.innerHTML = value.lastElementChild.innerHTML
// }
//  function hell(){
//     modal.style.display = "none"
//  }

//////////////question3////////////////////////////

// function foo(value){
//     console.log(value.parentElement.parentElement.remove())
// }

/////////////////question4////////////////////////////

// var pic = document.querySelector(".pik")
// function foo(value){
//     if(value == "over"){
//         pic.src ="./Phone-List-Page-product-list-Aurora-427-x-600.png.thumb.webp"
//     }else{
//         pic.src ="./Nokia-C31-Mint-5.png"
//     }
// }

//////////////////question5/////////////////////////////

// var display = document.getElementById("display")
// var minus = document.getElementById("increament")
// var add = document.getElementById("decreament")

// var num = 0

// minus.addEventListener('click',()=>{
//     num--
//     display.innerHTML = num
//     if(num < 0){
//         display.style.color = "red"
//     }else if(num == 0){
//         display.style.color = "black"
//     }
// })

// add.addEventListener('click',()=>{
//     num++
//     display.innerHTML = num
//     if(num > 0){
//         display.style.color = "green"
//     }else if(num == 0){
//         display.style.color = "black"
//     }
// })

/////////////////////////////////49-52///////////////////////////////////

/////////////////////question1////////////////////

// function foo(){
//     var name = document.getElementById('nam')
//     var age = document.getElementById('age')
//     var mail = document.getElementById('mail')
    
//     alert(`Name:${nam.value}\nAge:${age.value}\nMail:${mail.value}`)
//     name.value = ""
//     age.value = ""
//     mail.value = ""
    
// }

//////////////////////question2///////////////////////////////

// function show(){
//     var pera = document.getElementsByTagName("p")
//     if(pera[0].className == "hide"){
//         pera[0].classList.toggle("hide")
//         pera[0].nextElementSibling.innerHTML = "less more"
//     }else{
//         pera[0].nextElementSibling.innerHTML = "see more"
//         pera[0].classList.toggle("hide")
//     }
    
// }

///////////////////////question3///////////////////////////////

// var nameinput = document.getElementById("namedisplay")
// var classinput = document.getElementById("classdisplay")
// var submit = document.getElementById("sub")
// var table = document.getElementById("table")
// var edit;
// submit.addEventListener('click',()=>{
//     if(!nameinput.value || !classinput.value){
//         alert("fill all input fields")
//         return
//     }


//     if(submit.innerHTML == "Edit"){
//       edit.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML = nameinput.value
//       edit.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML = classinput.value
//       submit.innerHTML = "submit"
//       nameinput.value = ""
//       classinput.value = ""
//     }else{
//             // console.log(nameinput.value)
//     // console.log(classinput.value)
// /////////////////createelement///////////////////////////

//     var trElement = document.createElement("tr")
//     var tdElement1 = document.createElement("td")
//     var tdElement2 = document.createElement("td")
//     var tdElement3 = document.createElement("td")
//     var tdElement4 = document.createElement("td")
//     var tdElement5 = document.createElement("td")
//     var delbtn = document.createElement("button")
//     var updbtn = document.createElement("button")
//     var aElement = document.createElement("a")
//     aElement.setAttribute("href","#scroll")
   
//     /////////////////buttonset and append///////////////////////////
//     delbtn.innerHTML = "Delete"
//     updbtn.innerHTML = "update"
//     delbtn.setAttribute("onclick","del(this)")
//     updbtn.setAttribute("onclick","upd(this)")
//     aElement.appendChild(updbtn)
//     tdElement4.appendChild(delbtn)
//     tdElement5.appendChild(aElement)
//     // *************************************************
//         /////////////////////////set name and class in td///////////////////
//     tdElement2.innerHTML = nameinput.value
//     tdElement3.innerHTML = classinput.value
// //    ***********************************************

// ///////////////////////append element//////////////////////////

// trElement.appendChild(tdElement1)
// trElement.appendChild(tdElement2)
// trElement.appendChild(tdElement3)
// trElement.appendChild(tdElement4)
// trElement.appendChild(tdElement5)
// table.appendChild(trElement)
// for(i = 1; i < table.children.length; i++){
    
//     table.children[i].firstElementChild.innerHTML = i
// }
//  nameinput.value = ""
//  classinput.value = ""
//     }

// })

// function del(condition){
// condition.parentNode.parentNode.remove()
// for(i = 1; i < table.children.length; i++){
    
//     table.children[i].firstElementChild.innerHTML = i
// }
// }

// function upd(cnd){
//     edit = cnd
//     submit.innerHTML = "Edit"
//     nameinput.value = cnd.parentNode.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
//     classinput.value = cnd.parentNode.parentNode.previousElementSibling.previousElementSibling.innerHTML
    
// }