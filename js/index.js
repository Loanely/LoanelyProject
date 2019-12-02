let x = document.getElementsByClassName("slide");
document.getElementById('btn-left').addEventListener('click', function () {
    for (let i = 0; i < x.length; i++) {
        x[i].style.transform = 'translateX(0)';
    }

    document.getElementById('btn-right').style.visibility = 'visible';
    document.getElementById('btn-left').style.visibility = 'hidden';

})

document.getElementById('btn-right').addEventListener('click', function () {
    for (let i = 0; i < x.length; i++) {
        x[i].style.transform = 'translateX(-100%)';
    }

    document.getElementById('btn-left').style.visibility = 'visible';
    document.getElementById('btn-right').style.visibility = 'hidden';

})