let tabs = document.querySelectorAll('.tablinks');
let emprunteur = document.querySelector('#emprunteur');
let projet = document.querySelector('#projet');
let piecejoint = document.querySelector('#piecejoint');
let introduction = document.querySelector('#introduction');
let intoForme= document.querySelector('#introduction form');

let demarrer = document.querySelector('#demarrer');
let question1 = document.querySelector('#q1');
let question2 = document.querySelector('#q2');
let oui1 = document.querySelector('#oui1');
let non1 = document.querySelector('#non1');
let oui2 = document.querySelector('#oui2');
let non2 = document.querySelector('#non2');
let etape1 = document.querySelector('#etape1');
let etape2 = document.querySelector('#etape2');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let sign = document.querySelector('#ventSign');

let ouiImmat = document.querySelector('#ouiImmat');
let nonImmat = document.querySelector('#nonImmat');

let immeuble = document.querySelector('#immeuble');



demarrer.addEventListener('click', function () {
    question1.style.visibility = 'visible';
    btn1.style.visibility = 'visible';
});

oui1.addEventListener('click', function () {
    etape1.disabled = false;
    etape1.style.opacity = 1;
    non1.disabled = true;
    oui1.disabled = true;
});

non1.addEventListener('click', function () {
    btn1.style.visibility = 'hidden'
    sign.style.display = 'flex';
    question1.style.visibility = 'hidden';
    demarrer.disabled = true;
    demarrer.style.opacity=.5;
    non1.checked=false


});

etape1.addEventListener('click', function () {
    question2.style.visibility = 'visible';
    
});

oui2.addEventListener('click', function(){
    intoForme.style.display='inherit';
    oui2.disabled = true;
    non2.disabled = true;
})

ouiImmat.addEventListener('click', function(){
    let immatLabel = document.querySelectorAll('.ouiImmat label');
    for (let i=0; i<immatLabel.length; i++){
        immatLabel[i].style.opacity=1;
    }

    let immatInput = document.querySelectorAll('.ouiImmat input');
    for (let i=0; i<immatInput.length; i++){
        immatInput[i].style.opacity=1;
        immatInput[i].disabled=false;
    }
})

nonImmat.addEventListener('click', function(){
    let immatLabel = document.querySelectorAll('.ouiImmat label');
    for (let i=0; i<immatLabel.length; i++){
        immatLabel[i].style.opacity=.3;
    }
    

    let immatInput = document.querySelectorAll('.ouiImmat input');
    for (let i=0; i<immatInput.length; i++){
        immatInput[i].style.opacity=.3;
        immatInput[i].disabled=true;
    }
    btn2.style.visibility = 'visible';
    tabs[1].disabled = false;
    etape2.disabled = false;
    etape2.style.opacity = 1;
})

non2.addEventListener('click', function () {
    tabs[1].disabled = false;
    btn2.style.visibility = 'visible';
    etape2.disabled = false;
    etape2.style.opacity = 1;
    oui2.disabled = true;
    non2.disabled = true;
});

etape2.addEventListener('click', function () {
    emprunteur.disabled = false;
})

sign.addEventListener('click', function () {
    demarrer.disabled = false;
    sign.style.display = 'none';
    demarrer.style.opacity=1;

});

immeuble.addEventListener('click', function(){
    let imm= document.querySelectorAll('.investImmeuble');
    for (let i=0; i<imm.length; i++){
        imm[i].style.display='inherit';
    }
})

tabs[0].addEventListener('click', function () { opentab(event, 'introduction') });
tabs[1].addEventListener('click', function () { opentab(event, 'emprunteur') });
tabs[2].addEventListener('click', function () { opentab(event, 'projet') });
tabs[3].addEventListener('click', function () { opentab(event, 'piecejoint') });


function opentab(e, tabname) {

    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("active", "");
        
    }
    document.getElementById(tabname).style.display = "inherit";

    e.currentTarget.className += " active";
}

// window.onload = function () {
//     opentab(event, 'tab');
// }


