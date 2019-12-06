// ********************* les variables du premier article "introduction"  ************************
let section = document.querySelector('section');

let btnIntro = document.querySelector('#btnIntro');
let btnIntro1 = document.querySelector('#btnIntro1');
let tabs = document.querySelectorAll('.tablinks');          // les 4 boutons des onglets 
let emprunteur = document.querySelector('#emprunteur');     // un bouton pour ouvrir l'onglet "emprunteur"
let projet = document.querySelector('#projet');             // un bouton pour ouvrir l'onglet "projet"
let piecejoint = document.querySelector('#piecejoint');     // un bouton pour ouvrir l'onglet "pièces jointes"
let introduction = document.querySelector('#introduction'); //un bouton pour ouvrir l'onglet "introduction"
let intoForme = document.querySelector('#introduction form');   // le formulaire de la société
let annuler1 = document.querySelector('#annuler1');
let annuler2 = document.querySelector('#annuler2');
let demarrer = document.querySelector('#demarrer');         // le bouton  de démarrer un projet
let question1 = document.querySelector('#q1');              // le block de la première question
let question2 = document.querySelector('#q2');              // le block de la deuxième question
let oui1 = document.querySelector('#oui1');                 // la réponse "oui" de la première questione
let non1 = document.querySelector('#non1');                 // la réponse "non" de la première questione
let oui2 = document.querySelector('#oui2');                 // la réponse "oui" de la deuxième questione
let non2 = document.querySelector('#non2');                 // la réponse "non" de la deuxième questione
let etape2 = document.querySelector('#etape2');             // le bouton de l'étape suivante
let btn2 = document.querySelector('#btn2');         // la div qui contient le bouton "étape suivante" et "annuler"
let sign = document.querySelector('#ventSign');     // la div qui contient le message au cas où ne pas signer...             
let poursuivre = document.querySelector('#poursuivre'); // bouton après le message pour poursuivre
let ouiImmat = document.querySelector('#ouiImmat'); // le bouton radio "oui" la société immatriculée
let nonImmat = document.querySelector('#nonImmat'); // le bouton radio "non" la société non immatriculée

// ********************* les évènements sur les variables ci-dessus  ************************


// section.style.height='76vh';


// démarrer un projet -- faire apparître la première question et rendre la hauteur de l'article 'auto'
demarrer.addEventListener('click', function () {
    // section.style.height='auto';
    $("#q1").slideDown('slow');
    // question1.style.display = 'inherit';
    btnIntro.style.display = 'none';
    btnIntro1.style.display = 'inherit';
    
});

annuler1.addEventListener('click', function(){
    opentab(event, 'introduction');
    tabs[0].className += ' active';
    $("#q1").slideUp();
    // question1.style.display = 'none';
    $('#btnIntro').slideDown();
    btnIntro.style.display = 'inherit';
    btnIntro1.style.display = 'none';
    oui1.checked=false;
    non1.checked=false;
    // section.style.height='76vh';
});
    


// afficher la deuxième question et masquer le formulaire de la société
oui1.addEventListener('click', function () {
    $('#q2').slideDown('slow');
    // question2.style.display = 'flex';
    intoForme.style.display = 'none';
    btnIntro1.style.display = 'none';
    oui2.checked=false;
    non2.checked=false;
});

// afficher le message et masquer le 2e question et le formulaire
non1.addEventListener('click', function () {
    $('#ventSign').slideDown();
    sign.style.display = 'inherit';
    $('#q1').slideUp('slow');
    $('#q2').slideUp('slow');
    question1.style.display = 'none';
    question2.style.display = 'none';
    intoForme.style.display = 'none';
    btn2.style.display = 'none';
    btnIntro1.style.display = 'none'
    oui2.checked=false;
    non2.checked=false;
});

// bouton dans le block du message - masquer le message et afficher les 2 questions et les boutons
poursuivre.addEventListener('click', function () {
    $('#ventSign').slideUp();
    // sign.style.display = 'none';
    $('#q1').slideDown('slow');
    $('#q2').slideDown('slow');
    // question2.style.display = 'inherit';
    
    // question1.style.display = 'inherit';
    // btn2.style.display = 'inherit';
});

// oui dans la 2e question - afficher le formulaire et le block des bouton 'étape suivante'
oui2.addEventListener('click', function () {
    $('#introduction form').slideDown('slow');
    // intoForme.style.display = 'inherit';
    btn2.style.display = 'inherit';
    // etape2.disabled = false;
    // etape2.style.opacity = 1;
})

// réponse 'non' va activer l'onglet "emprunteur" et afficher le formulaire et 
//le block des bouton 'étape suivante' et 'annuler' et les activer et masquer le message
non2.addEventListener('click', function () {
    tabs[1].disabled = false;
    $('#btn2').slideDown('slow');
    btn2.style.display = 'inherit';
    // etape2.disabled = false;
    // etape2.style.opacity = 1;
    intoForme.style.display = 'none';
});

// appeler la fonction 'opentab' pour passer à l'onglet de l'emprunteur et l'activer
etape2.addEventListener('click', function () {
    // section.style.height='auto';
    opentab(event, 'emprunteur');
    tabs[1].className += ' active';
    
});

annuler2.addEventListener('click', function(){
    opentab(event, 'introduction');
    tabs[0].className += ' active';
    $('#q1').slideUp('slow');
    $('#q2').slideUp('slow');
    // question1.style.display = 'none';
    // question2.style.display = 'none';
    btnIntro.style.display = 'inherit';
    btnIntro1.style.display = 'none';
    btn2.style.display = 'none';
    oui1.checked=false;
    non1.checked=false;
    oui2.checked=false;
    non2.checked=false;
    intoForme.style.display='none';
    // section.style.height='76vh';
});


// réponse 'oui' que la société est immatriculée, puis rendre les 'inputs' activés
ouiImmat.addEventListener('click', function () {
    let immatLabel = document.querySelectorAll('.ouiImmat label');
    for (let i = 0; i < immatLabel.length; i++) {
        immatLabel[i].style.opacity = 1;
    }

    let immatInput = document.querySelectorAll('.ouiImmat input');
    for (let i = 0; i < immatInput.length; i++) {
        immatInput[i].style.opacity = 1;
        immatInput[i].disabled = false;
    }
})

// réponse 'non' va désactiver les 'inputs' du formulaire société
nonImmat.addEventListener('click', function () {
    let immatLabel = document.querySelectorAll('.ouiImmat label');
    for (let i = 0; i < immatLabel.length; i++) {
        immatLabel[i].style.opacity = .3;
    }
});

// ********************* FIN du premier Article 'Introduction'  ************************










// ********************* les variables du deuxième article "emprunteur"  ************************
let profession = document.querySelector('#profession'); // sélectionner la liste contenat les profession
let typecontrat = document.querySelector('#typecontrat'); // une liste contenant les types de contrat
let publicPrive = document.querySelector('#public-prive'); // une div contenant les inputs liés à l'employé
let independant = document.querySelector('#independant');   // une div contenant les inputs liés à l'indépendant
let residence = document.querySelector('#residence'); // selectionner la liste contenant 'propriétaire - loacataire - hébergé
let propr = document.querySelector('#propr');   // une div contenant les inputs liés au propriétaire
let loyer = document.querySelector('#loyer');   // une div contenant les inputs liés au locataire
let proprInput = document.querySelectorAll('#propr div input'); // sélectionner les inputs du propriétaire
let ouiCredit = document.querySelector('#ouiCredit');   // radio button 'oui' ayant un crédit
let nonCredit = document.querySelector('#nonCredit');   // radio button 'non' n'ayant pas un crédit
let mensualite = document.querySelector('#mensualite'); // div contenant les inputs liés au crédit
let ouiInvest = document.querySelector('#ouiInvest'); // radio button 'oui' investissement locatif
let typeInvest = document.querySelector('#typeInvest'); // div contenat les radio button 'type d'investissement'
let nonInvest = document.querySelector('#nonInvest');  // radio button 'non' investissement locatif
let immeuble = document.querySelector('#immeuble');   // radio button - type d'investissemnt 'immeuble'  
let appartement = document.querySelector('#appartement'); // radio button - type d'investissemnt 'appart'
let maison = document.querySelector('#maison'); // // radio button - type d'investissemnt 'maison'
let investImmeuble = document.querySelector('#investImmeuble'); // div contenat les inputs liés à un immeuble
let investMaison = document.querySelector('#investMaison'); // div contenat les inputs liés à un appart ou maison
let investissement = document.querySelector('#investissement');

// afficher la liste 'type contrat' et masquer la div contenant les inputs liés à l'indépendant
profession.addEventListener('click', function () {

    if ((profession[1].selected) || (profession[2].selected)) {
        typecontrat.disabled = false;
        $('#independant').slideUp('slow');
        $('#public-prive').slideDown('slow')
        publicPrive.style.display = 'inherit'
        
        // independant.style.display = 'none'
    }

    if (profession[3].selected) {
        typecontrat.disabled = true;
        $('#independant').slideDown('slow');
        $('#public-prive').slideUp('slow')
        // publicPrive.style.display = 'none'
        independant.style.display = 'inherit'
    }
})


// afficher la div contenant les inputs liés au propriétaire et les activer
residence.addEventListener('click', function () {
    if (residence[1].selected) {
        $('#propr').slideDown('slow');
        propr.style.display = 'inherit'
        for (let i = 0; i < 3; i++) {
            proprInput[i].disabled = false;
            proprInput[i].style.opacity = 1;
        }
        loyer.disabled = true;
        loyer.style.opacity = .3;
    }
    if (residence[2].selected) {
        $('#propr').slideDown('slow');
        propr.style.display = 'inherit'
        for (let i = 0; i < 3; i++) {
            proprInput[i].disabled = true;
            proprInput[i].style.opacity = .3;
        }
        loyer.disabled = false;
        loyer.style.opacity = 1;
    }
    if (residence[3].selected) {
        $('#propr').slideUp('slow');
        // propr.style.display = 'none'
    }
})

typeInvest.addEventListener('click', function () {
    if (typeInvest[1].selected) {
        $('#investImmeuble').slideDown('slow');
        investImmeuble.style.display = 'inherit';
        $('#investMaison').slideUp('slow');
        // investMaison.style.display = 'none';
    }
    if ((typeInvest[2].selected) || (typeInvest[3].selected) || (typeInvest[4].selected)) {
        $('#investMaison').slideDown('slow');
        investMaison.style.display = 'inherit';
        $('#investImmeuble').slideUp('slow');
        // investImmeuble.style.display = 'none';
    }
    if (typeInvest[5].selected) {
        $('#investMaison').slideUp('slow');
        $('#investImmeuble').slideUp('slow');
        // investMaison.style.display = 'none';
        // investImmeuble.style.display = 'none';
    }
})



// réponse 'oui' ayant un crédit et afficher la div 'mensualité'
ouiCredit.addEventListener('click', function () {
    $('#mensualite').slideDown('slow');
    mensualite.style.display = "inherit";
})

//réponse 'non' n'ayant pas un crédit et masquer la div 'mensualité'
nonCredit.addEventListener('click', function () {
    $('#mensualite').slideUp('slow');
    // mensualite.style.display = "none";
})

// réponse oui - il y a un investissement et afficher les radio button 'type d'investissement
ouiInvest.addEventListener('click', function () {
    typeInvest.disabled=false;
    // investissement.style.display = 'flex';
});

// réponse non investissement et masquer les radio button et les inputs liés
nonInvest.addEventListener('click', function () {
    $('#investMaison').slideUp('slow');
    $('#investImmeuble').slideUp('slow');
    typeInvest[0].selected=true;
    typeInvest.disabled=true;
    // $('#investissement').slideUp('slow');
    // investissement.style.display = 'none';
    // investMaison.style.display = 'none';
    // investImmeuble.style.display = 'none';
});



// ********************* FIN du deuxième Article 'Emprunteur'  ************************




// appeler la fonction "opentab" en cliquant sur l'onglet
tabs[0].addEventListener('click', function () { opentab(event, 'introduction') });
tabs[1].addEventListener('click', function () { 
    opentab(event, 'emprunteur');
    // section.style.height='auto';
    $('#divForm').slideDown('slow');
 });
tabs[2].addEventListener('click', function () { opentab(event, 'projet') });
tabs[3].addEventListener('click', function () { opentab(event, 'piecejoint') });





// une fonction masquant tous les tabs (les 4 onglets) et les désactiver et puis activer l'onglet courant
function opentab(e, tabname) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
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

// ouvrir l'ongler introduction et lui donner une hauteur sufisante
$('#introduction').slideDown('slow');
// introduction.style.display = 'inherit';
section.style.height='88vh'
tabs[1].disabled = false;
tabs[2].disabled = false;
tabs[3].disabled = false;


// }


// ====================== PARTIE Article 3 Projet à financer YOYO ================================= 
// tabs[2].disabled = false;

// let immeubleType = document.querySelector('#immeubleType') // reponse immeuble
// let siImmeuble = document.querySelector('#siImmeuble') // div qui contient form poru les immeubles

// immeubleType.addEventListener('click', function() {
//     siImmeuble.style.display ='block'
// })
