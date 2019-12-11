// $(document).ready(function () {
//     $("#click1").click(function () {
//         $(".hidden1").hide();
//         $(document).ready(function () {
//             $("#click1").click(function () {
//                 $(".hidden1").show();
//             });
//         });
//     });
// });

let hidden1 = document.querySelector('.hidden1');
let click1 = document.querySelector('#click1');
let hidden2 = document.querySelector('.hidden2');
let click2 = document.querySelector('#click2');
let hidden3 = document.querySelector('.hidden3');
let click3 = document.querySelector('#click3');
let btninfos = document.querySelector('.btninfos');
let bloc2 = document.querySelector('#bloc2');
let bloc = document.querySelector('#bloc');

click1.addEventListener('click', function () {
    $('.hidden1').slideDown('slow');
    hidden1.style.display = 'none';
});

// click2.addEventListener('click', function () {
//     $('.hidden2').slideDown('slow');
//     hidden2.style.display = 'none';
// });

// click3.addEventListener('click', function () {
//     $('.hidden3').slideDown('slow');
//     hidden3.style.display = 'none';
// });

btninfos.addEventListener('click', function (){
    $('#bloc2').slideDown('slow');
    bloc2.style.display = 'flex'
    bloc.style.display = 'none';

});

