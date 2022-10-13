function clickMe() {

    let first_name = document.getElementById('first_name').value;
    let html = 'Привет, <b>' + first_name;

    document.getElementById('result').innerHTML = html;
}

function calcSum() {
    let first_number = document.getElementById('first_number').value;
    let second_number = document.getElementById('second_number').value;

    let html = +first_number + +second_number;

    document.getElementById('result2').innerHTML = html;
}

document.getElementById('click_me2').addEventListener('click', calcSum);



function calcMin() {
    let first_number = document.getElementById('first_number2').value;
    let second_number = document.getElementById('second_number2').value;

    let html = +first_number - +second_number;

    document.getElementById('result3').innerHTML = html;
}

document.getElementById('click_me3').addEventListener('click', calcMin);




function calcMult() {
    let first_number = document.getElementById('first_number3').value;
    let second_number = document.getElementById('second_number3').value;

    let html = +first_number * +second_number;

    document.getElementById('result4').innerHTML = html;
}

document.getElementById('click_me4').addEventListener('click', calcMult);



function calcDivis() {
    let first_number = document.getElementById('first_number4').value;
    let second_number = document.getElementById('second_number4').value;

    let html = +first_number / +second_number;

    document.getElementById('result5').innerHTML = html;
}

document.getElementById('click_me5').addEventListener('click', calcDivis);



function select(sender) {
    sender.classList.add("selected");
}




var image = new Array(6)
image[1] = "./image/photo_2021-10-10_19-56-37.jpg"
image[2] = "./image/photo_2022-06-13_21-35-09.jpg"
image[3] = "./image/photo_2022-06-13_21-38-45.jpg"
image[4] = "./image/photo_2021-10-10_19-56-32.jpg"
image[5] = "./image/photo_2022-06-13_21-38-49.jpg"
image[6] = "./image/photo_2022-06-13_21-41-31.jpg"
var num = 1;

document.getElementById('next').addEventListener('click', function (galleryNext) {
    num = num + 1
    if (num == 7) { num = 1 }
    document.getElementById('Trees').src = image[num];
});

document.getElementById('back').addEventListener('click', function (galleryPrevious) {
    num = num - 1
    if (num == 0) { num = 6 }
    document.getElementById('Trees').src = image[num];
});





function select2(sender) {
    sender.classList.add("selected2");
}



function select3(sender) {
    sender.classList.add("selected3");
}



function select4(sender) {
    sender.classList.add("selected4");
}
