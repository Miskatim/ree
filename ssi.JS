// for(var i = 100; i > 5; i/= 2){
// console.log(i);
// }

// var j = 0;
// while(j < 10) {
//     console.log(j);
//     j++;
// }

// var x = 100;
// do {
//     console.log(x);
//     x = x -10
// } while(x >= 50)

// for(var i = 10; i <=20; i += 2)  {
//     if(i > 15)
//         break;
        
//     console.log(i);
// }

// for(var i = 10; i <=20; i++){
//     if(i % 2 ==0)
//         continue;
        
//     console.log(i);
// }

// var arr = [5, 7, 3, 8, 9, 91];

// for(var i = 0; i < arr.length; i++)  {
//     arr[i] *= 2;
//     console.log("element " + (i + 1) + ":" + arr[i]);
// }


// alert("weather good");

// var data = confirm("are you in home now?");
// if(data) {
//     alert("good")
// }

// var data = prompt("say how old are you");
// console.log(data);

        // var person = null
        // if(confirm("are you sure"))  {
        //     person = prompt("write your name");
        //     alert("hi, " + person)
        // } else {
        //     alert("you clip escape")
        // }

// function info(word) {
//     console.log(word + "hi");

// }
// function summa (a, b) {
//     var res = a + b;
//     info(res);
// }
// summa(5, 7);

// function summa(arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++)
//     sum += arr[i];
//     return sum;
// }
// var array = [6, 8, 1, 90];
// var array_2 = [6, 8, 1, 7];
// var array_3 = [6, 8, 1, 90];
// var res = summa(array);
// res *= 2;
// console.log("ans:" + res);
// summa(array_2);
// summa(array_3);

// var num = 10
// function info() {
//     var num = 20;
//     console.log(num);
// }
// info();
// console.log(num);

 

// var counter = 0;
// function onClickButton(el) {
//     counter++;
//     el.innerHTML = "you push on button" + counter;
//     el.style.color = "blue"
//     el.style.background = "red";
//     el.style.cssText = "border-radius: 5px; border: 0; font-size: 20px";
// }
// function onInput(el) {
//     if(el.value == "hi")
//     alert("hi to you too");
//     console.log(el.value);
// }




                // function checkForm(el) {
                //     var name = el.name.value;
                //     var pass = el.pass.value;
                //     var repass = el.repass.value;
                //     var state = el.state.value;
                //     var fail = "";
                //     // console.log(name + " - " + state + " - " + pass + " - " + repass);
                //     if(name == "" || pass == "" || state == "" )
                //     fail = "write all";
                //     else if(name.length <= 1 || name.length > 50)
                //     fail = "writw correct name";
                //     else if(pass != repass)
                //     fail = "password must will be same";
                //     else if(pass.split("&").length > 1)
                //     fail = "not corect password";
                //     if(fail != "" ) {
                //         document.getElementById('error').innerHTML = fail;
                //         return false;
                //     } else {
                //         alert("ok");
                //         window.location = 'https://miskatim.github.io/proj4/'
                //         return false;
                        
                //     }
                // }



// var counter = 0;
// var id = setInterval(myfun, 1000);
// function myfun() {
//     counter++;
//     console.log("counter: " + counter);
//     if(counter == 3)
//     clearInterval(id);
// }

// setInterval(function() {
//     counter++
//     console.log("sec:" + counter);
// }, 1000 );

// setTimeout(function() {
//     console.log("timer is workin");
// }, 2000 );



// var date = new Date();
// console.log("time: " + date.getFullYear())

//  var arr = [5, 7, 8, 80, 9,];
//  console.log(arr.join(", "));
// var stroka = arr.reverse().join(", ");
// console.log(stroka.split(", "));


// class Person {
//     constructor(name, age, happiness) {
//         this.name = name;
//         this.age = age;
//         this.happiness = happiness;
//     }
//     info() {
//         console.log("name: " + this.name + ". age: " + this.age);
//     }
// }

// var alex = new Person('Alex', 25, true);
// var bob = new Person('Bob', 45, false);
// alex.info();
// bob.info();

// console.log(alex.name);
// console.log(bob.name);

let num = 1
alert('не выходи с сайта, а то установить вирус');
alert('загрузка 1%');
alert('загрузка 2%');
alert('загрузка 3%');
console.log(num);
alert('загрузка 5%');
alert('загрузка 10%');
alert('загрузка 30%');
alert('загрузка 50%');
alert('загрузка 75%');
alert('загрузка 98%');
alert('загрузка 99%');
alert('загрузка 100%');
alert('загрузка 101%');


