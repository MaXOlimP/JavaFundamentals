//Zadanie 1 (Hello JavaScript)

function zadanie1() {
    alert('«Я JavaScript!»');

    alert("Я JavaScript!");
}



// Zadanie 2 (variables)

function zadanie2() {
    let name = "Jon";
    let admin;
    admin = name;

    alert(admin);
    console.log(admin)
}

//Zadanie 3 (Data types)  co bd pokazywac ten alert?

function zadanie3() {
    let name2 = "Ilya";

    alert(`hello ${1}`); //  hello 1

    alert(`hello ${"name2"}`); // hello name2

    alert(`hello ${name2}`); // hello Ilya
}


//Zadanie 4 (alert, prompt, confirm) 

function zadanie4() {
    let howYourName = prompt("How your name");
    alert(`Your name ${howYourName}`)
}

//Zadanie 5 (Basic operators, mathematics)

function zadanie5() {
    let a = 1, b = 1;// a = b =2
    let c = ++a; //  c = 2
    let d = b++; //  d = 1


    let z = 2;
    let x = 1 + (z *= 2); // x = 5 сначал делаем операции в скробках потом приступаем к остальным;


    let a = prompt("Первое число?", 1);// исправить ошибку
    let b = prompt("Второе число?", 2);
    alert(+a + +b);



    "" + 1 + 0 // 1
    "" - 1 + 0// -1
    true + false // 1
    6 / "3" // 2
    "2" * "3"// 6
    4 + 5 + "px"// 9px
    "$" + 4 + 5// $9
    "4" - 2 // 2
    "4px" - 2 // Nan
    7 / 0 //Infinity
    "  -9  " + 5 // -90
    "  -9  " - 5 // -14
    null + 1 // 1
    undefined + 1 //Nan
    " \t \n" - 2 // -2

}

//Zadanie 6 (Comparison operators)

function zadanie6() {
    5 > 4 // true
    "ананас" > "яблоко" // true - (false)
    "2" > "12" // true
    undefined == null //true
    undefined === null // false
    null == "\n0\n" //false
    null === +"\n0\n"//false
}

//Zadanie 7(if else ?)

function zadanie7() {
    let quesion = prompt("Какое «официальное» название JavaScript?");
    let message = (quesion == "ECMAScript") ? alert("COrrect") : alert("NiePrawda");


    let sido = prompt("take your number");
    let mesage = alert();
    if (sido > 0) {
        mesage = "1"
    } else if (sido < 0) {
        mesage = "-1";
    } else {
        mesage = "0";
    }

    let login = prompt("write your Login");
    let message = (login == "Sos") ? alert("Privet") :
        (login == "Dur") ? alert("Zdrastwujte") :
            (login == "") ? alert("NieMasz") :
                alert("");
}