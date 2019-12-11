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
let annuler3 = document.querySelector('#annuler3');
let demarrer = document.querySelector('#demarrer');         // le bouton  de démarrer un projet
let question1 = document.querySelector('#question1');              // le block de la première question
let question2 = document.querySelector('#question2');              // le block de la deuxième question
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
    $("#question1").slideDown('slow');
    question1.style.display = 'inherit';
    btnIntro.style.display = 'none';
    btnIntro1.style.display = 'inherit';

});

annuler1.addEventListener('click', function () {
    opentab(event, 'introduction');
    tabs[0].className += ' active';
    $("#question1").slideUp();
    // question1.style.display = 'none';
    $('#btnIntro').slideDown();
    btnIntro.style.display = 'inherit';
    btnIntro1.style.display = 'none';
    oui1.checked = false;
    non1.checked = false;
    // section.style.height='76vh';
});

annuler3.addEventListener('click', function () {
    opentab(event, 'introduction');
    tabs[0].className += ' active';
    $('#question1').slideUp('slow');
    $('#question2').slideUp('slow');
    // question1.style.display = 'none';
    // question2.style.display = 'none';
    btnIntro.style.display = 'inherit';
    btnIntro1.style.display = 'none';
    btnIntro2.style.display = 'none';
    btn2.style.display = 'none';
    oui1.checked = false;
    non1.checked = false;
    oui2.checked = false;
    non2.checked = false;
    intoForme.style.display = 'none';
    // section.style.height='76vh';
});



// afficher la deuxième question et masquer le formulaire de la société
oui1.addEventListener('click', function () {
    $('#question2').slideDown('slow');
    question2.style.display = 'inherit';
    btnIntro2.style.display = 'inherit';
    intoForme.style.display = 'none';
    btnIntro1.style.display = 'none';
    oui2.checked = false;
    non2.checked = false;
});

// afficher le message et masquer le 2e question et le formulaire
non1.addEventListener('click', function () {
    $('#ventSign').slideDown();
    sign.style.display = 'inherit';
    $('#question1').slideUp('slow');
    $('#question2').slideUp('slow');
    question1.style.display = 'none';
    question2.style.display = 'none';
    intoForme.style.display = 'none';
    btn2.style.display = 'none';
    btnIntro1.style.display = 'none';
    btnIntro2.style.display = 'none';
    oui2.checked = false;
    non2.checked = false;
});

// bouton dans le block du message - masquer le message et afficher les 2 questions et les boutons
poursuivre.addEventListener('click', function () {
    $('#ventSign').slideUp();
    // sign.style.display = 'none';
    $('#question1').slideDown('slow');
    $('#question2').slideDown('slow');
    question1.style.display = 'inherit';
    question2.style.display = 'inherit';
    btnIntro2.style.display = 'inherit';

    // question1.style.display = 'inherit';
    // btn2.style.display = 'inherit';
});

// oui dans la 2e question - afficher le formulaire et le block des bouton 'étape suivante'
oui2.addEventListener('click', function () {
    $('#introduction form').slideDown('slow');
    // intoForme.style.display = 'inherit';
    btn2.style.display = 'inherit';
    btnIntro2.style.display = 'none';
    // etape2.disabled = false;
    // etape2.style.opacity = 1;
})

// réponse 'non' va activer l'onglet "emprunteur" et afficher le formulaire et 
//le block des bouton 'étape suivante' et 'annuler' et les activer et masquer le message
non2.addEventListener('click', function () {
    tabs[1].disabled = false;
    btn2.style.display = 'inherit';
    btnIntro2.style.display = 'none';
    // etape2.disabled = false;
    // etape2.style.opacity = 1;
    $('#introduction form').slideUp('slow');
    // intoForme.style.display = 'none';
});

// appeler la fonction 'opentab' pour passer à l'onglet de l'emprunteur et l'activer
etape2.addEventListener('click', function () {
    // section.style.height='auto';
    opentab(event, 'emprunteur');
    tabs[1].className += ' active';
    $('#divForm').hide();
    $('#divForm').slideDown('slow');

});

annuler2.addEventListener('click', function () {
    opentab(event, 'introduction');
    tabs[0].className += ' active';
    $('#question1').slideUp('slow');
    $('#question2').slideUp('slow');
    // question1.style.display = 'none';
    // question2.style.display = 'none';
    btnIntro.style.display = 'inherit';
    btnIntro1.style.display = 'none';
    btn2.style.display = 'none';
    oui1.checked = false;
    non1.checked = false;
    oui2.checked = false;
    non2.checked = false;
    intoForme.style.display = 'none';
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
let hideBtn = document.querySelector('#hideBtn');
let showBtn = document.querySelector('#showBtn');
let infoPersonnel = document.querySelector('#infoPersonnel')
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
let ouiAddLot = document.querySelector('#ouiAddLot');
let nonAddLot = document.querySelector('#nonAddLot');
let addLot = document.querySelector('#addLot');
let creditMensuelImm = document.querySelector('#creditMensuelImm');
let nomImmeuble = document.querySelector('#nomImmeuble');
let unAutreLot = document.querySelector('#unAutreLot');
let unAutreBien = document.querySelector('#unAutreBien');
let ouiUnautreBien = document.querySelector('#ouiUnautreBien');
let nonUnautreBien = document.querySelector('#nonUnautreBien');
let ouiautreRevenu = document.querySelector('#ouiautreRevenu');
let nonautreRevenu = document.querySelector('#nonautreRevenu');
let unAutreRevenu=document.querySelector('#unAutreRevenu');
let allocations=document.querySelector('#allocations');
let epargne=document.querySelector('#epargne');
let ouiEpargne=document.querySelector('#ouiEpargne');
let nonEpargne=document.querySelector('#nonEpargne');
let allEpargne=document.querySelector('#allEpargne');
let etapePrecedent=document.querySelector('#etapePrecedent');
let etapesuivant=document.querySelector('#etapesuivant');



hideBtn.addEventListener('click', function () {
    $('#infoPersonnel').slideUp('slow');
    hideBtn.style.display = 'none';
    showBtn.style.display = 'inherit';
})

showBtn.addEventListener('click', function () {
    $('#infoPersonnel').slideDown('slow');
    hideBtn.style.display = 'inherit';
    showBtn.style.display = 'none';
})


// afficher la liste 'type contrat' et masquer la div contenant les inputs liés à l'indépendant
profession.addEventListener('click', function () {

    if ((profession[1].selected) || (profession[2].selected)) {
        typecontrat.disabled = false;
        $('#independant').slideUp('slow');
        $('#public-prive').slideDown('slow')
        publicPrive.style.display = 'inherit'
    }

    if (profession[3].selected) {
        typecontrat.disabled = true;
        $('#independant').slideDown('slow');
        $('#public-prive').slideUp('slow')
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
    }
})

function hide1(investImmeuble, nomImmeuble, investMaison, addLot) {
    document.getElementById(investImmeuble).style.display = 'inherit';
    document.getElementById(nomImmeuble).style.display = 'inherit';
    document.getElementById(investMaison).style.display = 'none';
    document.getElementById(addLot).style.display = 'inherit';
}

function hide2(investImmeuble, nomImmeuble, creditMensuelImm, investMaison, addLot, nonAddLot) {
    document.getElementById(investImmeuble).style.display = 'none';
    document.getElementById(nomImmeuble).style.display = 'none';
    document.getElementById(creditMensuelImm).style.display = 'none';
    document.getElementById(investMaison).style.display = 'inherit';
    document.getElementById(addLot).style.display = 'none';
    document.getElementById(nonAddLot).checked = false;
}

function hide3(investImmeuble, nomImmeuble, creditMensuelImm, investMaison, addLot) {
    document.getElementById(investImmeuble).style.display = 'none';
    document.getElementById(nomImmeuble).style.display = 'none';
    document.getElementById(creditMensuelImm).style.display = 'none';
    document.getElementById(investMaison).style.display = 'none';
    document.getElementById(addLot).style.display = 'none';
}

typeInvest.addEventListener('click', function () {
    if (typeInvest[1].selected) {
        hide1('investImmeuble', 'nomImmeuble', 'investMaison', 'addLot');
        
    }

    if ((typeInvest[2].selected) || (typeInvest[3].selected) || (typeInvest[4].selected)) {
        hide2('investImmeuble', 'nomImmeuble', 'creditMensuelImm', 'investMaison', 'addLot', 'nonAddLot');
        unAutreBien.style.display = 'inherit';
    }

    if (typeInvest[5].selected) {
        hide3('investImmeuble', 'nomImmeuble', 'creditMensuelImm', 'investMaison', 'addLot');
        unAutreBien.style.display = 'none';
    }
});



// réponse 'oui' ayant un crédit et afficher la div 'mensualité'
ouiCredit.addEventListener('click', function () {
    $('#mensualite').slideDown('slow');
    mensualite.style.display = "inherit";
})

//réponse 'non' n'ayant pas un crédit et masquer la div 'mensualité'
nonCredit.addEventListener('click', function () {
    $('#mensualite').slideUp('slow');
    // mensualite.style.display = "none";
    revenu.style.display='block';
})

// réponse oui - il y a un investissement et afficher les radio button 'type d'investissement
ouiInvest.addEventListener('click', function () {
    typeInvest.disabled = false;
    typeInvest.focus();
});

// réponse non investissement et masquer les radio button et les inputs liés
nonInvest.addEventListener('click', function () {
    $('#investMaison').slideUp('slow');
    $('#investImmeuble').slideUp('slow');
    typeInvest[0].selected = true;
    typeInvest.disabled = true;
    $('#addLot').slideUp('slow');
    $('#nomImmeuble').slideUp('slow');
    $('#creditMensuelImm').slideUp('slow');
    nonAddLot.checked = false;
    $('#unAutreLot').slideUp('slow');
    unAutreBien.style.display = 'none';
   
});

ouiAddLot.addEventListener('click', function () {
    lot('unAutreLot');
    $('#unAutreLot').slideDown('slow');
    unAutreLot.style.display = 'inherit'
    ouiAddLot.checked = false;
});

nonAddLot.addEventListener('click', function () {
    $('#creditMensuelImm').slideDown('slow');
    creditMensuelImm.style.display = 'inherit';
    addLot.style.display = 'none';
    unAutreBien.style.display = 'inherit';
});

ouiUnautreBien.addEventListener('click', function () {

});

nonUnautreBien.addEventListener('click', function () {

});

ouiautreRevenu.addEventListener('click',function(){
    $('#allocations').slideDown('slow');
    allocations.style.display='inherit';
});

nonautreRevenu.addEventListener('click',function(){
    $('#allocations').slideUp('slow');
});

ouiEpargne.addEventListener('click',function(){
    $('#allEpargne').slideDown('slow');
    allEpargne.style.display='inherit';
});

nonEpargne.addEventListener('click',function(){
    $('#allEpargne').slideUp('slow');
});

etapePrecedent.addEventListener('click',function(){
    opentab(event, 'introduction');
    tabs[0].className += ' active';
});

etapeSuivant.addEventListener('click',function(){
    opentab(event, 'projet');
    tabs[2].className += ' active';
});

// appeler la fonction "opentab" en cliquant sur l'onglet
tabs[0].addEventListener('click', function () {
    opentab(event, 'introduction');
    $('#introduction').hide();
    $('#introduction').slideDown('slow');
});
tabs[1].addEventListener('click', function () {
    opentab(event, 'emprunteur');
    $('#divForm').hide();
    $('#divForm').slideDown('slow');
});
tabs[2].addEventListener('click', function () { opentab(event, 'projet') });
tabs[3].addEventListener('click', function () {
    opentab(event, 'piecejoint');
    $('#situationPerso').hide();
    $('#situationPerso').slideDown('slow');
});





// ********************* fonction pour créer un autre lot  ************************
let j = 2;
function lot(e) {

    let selectOption = ['', 'T1', 'T2', 'T3', 'T4', 'T5', 'maison', 'local', 'autre'];
    let select = document.createElement('select');
    for (let i = 0; i < selectOption.length; i++) {
        let option = document.createElement('option');
        option.value = selectOption[i];
        option.text = selectOption[i];
        select.appendChild(option);
        if (selectOption[i] == '') {
            option.selected = true;
            option.hidden = true;
            // option.setAttribute('selected','selected');
            // option.setAttribute('hidden',true);
        }

    }

    let labels = ['Type de Lot', 'Loyer charges comprises', 'Date de début du bail', 'Commentaire'];
    for (let i = 0; i < labels.length; i++) {

        let label = document.createElement('label');
        let div = document.createElement('div');
        label.innerHTML = labels[i];
        if (labels[i] == 'Type de Lot') {
            div.appendChild(label);
            div.appendChild(select);
            label.innerHTML = label.innerHTML + ' ' + j
            j++
        }
        if (labels[i] == 'Loyer charges comprises') {
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            div.appendChild(label);
            div.appendChild(input);
        }
        if (labels[i] == 'Date de début du bail') {
            let input = document.createElement('input');
            input.setAttribute('type', 'date');
            div.appendChild(label);
            div.appendChild(input);
        }
        if (labels[i] == 'Commentaire') {
            let input = document.createElement('input');
            input.setAttribute('type', 'text');
            div.appendChild(label);
            div.appendChild(input);
        }
        document.getElementById(e).appendChild(div);
        $(e).slideDown('slow');

    }

}




// ********************* FIN du deuxième Article 'Emprunteur'  ************************


// ********************* DEBUT du TROISIEME Article 'Projet'  ************************

let typeInvest1 = document.querySelector('#typeInvest1');
let nomImmeuble1 = document.querySelector('#nomImmeuble1');
let investImmeuble1 = document.querySelector('#investImmeuble1');
let creditMensuelImm1 = document.querySelector('#creditMensuelImm1');
let investMaison1 = document.querySelector('#investMaison1');
let addLot1 = document.querySelector('#addLot1');
let nonAddLot1 = document.querySelector('#nonAddLot1');
let ouiAddLot1 = document.querySelector('#ouiAddLot1');
let unAutreLot1 = document.querySelector('#unAutreLot1');
let ouiLouer = document.querySelector('#ouiLouer');
let nonLouer = document.querySelector('#nonLouer');
let appartLouerBail = document.querySelector('#appartLouerBail');
let ouiAppLouer = document.querySelector('#ouiAppLouer');
let nonAppLouer = document.querySelector('#nonAppLouer');
let appartLouerBail1 = document.querySelector('#appartLouerBail1');
let estimationLocative = document.querySelectorAll('.estimationLocative');
let unAutreBien1 = document.querySelector('#unAutreBien1');
let ouiUnautreBien1 = document.querySelector('#ouiUnautreBien1');
let nonUnautreBien1 = document.querySelector('#nonUnautreBien1');
let frais = document.querySelector('#frais');
let etapePrecedent1=document.querySelector('#etapePrecedent1');
let etapesuivant1=document.querySelector('#etapesuivant1');


typeInvest1.addEventListener('click', function () {
    if (typeInvest1[1].selected) {
        hide1('investImmeuble1', 'nomImmeuble1', 'investMaison1', 'addLot1');
        unAutreBien1.style.display = 'none';
        ouiAddLot1.checked = false;
        nonAddLot1.checked = false;
        frais.style.display = 'none';
        ouiUnautreBien1.checked = false;
        nonUnautreBien1.checked = false;
    }

    if ((typeInvest1[2].selected) || (typeInvest1[3].selected) || (typeInvest1[4].selected)) {
        hide2('investImmeuble1', 'nomImmeuble1', 'creditMensuelImm1', 'investMaison1', 'addLot1', 'nonAddLot1');
        unAutreBien1.style.display = 'inherit';
        ouiAddLot1.checked = false;
        nonAddLot1.checked = false;
        frais.style.display = 'none';
        ouiUnautreBien1.checked = false;
        nonUnautreBien1.checked = false;
    }

    if (typeInvest1[5].selected) {
        hide3('investImmeuble1', 'nomImmeuble1', 'creditMensuelImm1', 'investMaison1', 'addLot1');
        unAutreBien1.style.display = 'none';
        frais.style.display = 'none';
        ouiUnautreBien1.checked = false;
        nonUnautreBien1.checked = false;
        ouiAddLot1.checked = false;
        nonAddLot1.checked = false;

    }
});

ouiAddLot1.addEventListener('click', function () {
    lot('unAutreLot1');
    $('#unAutreLot1').slideDown('slow');
    unAutreLot1.style.display = 'inherit';
    ouiAddLot1.checked = false;
});

nonAddLot1.addEventListener('click', function () {
    // $('#creditMensuelImm1').slideDown('slow');
    // creditMensuelImm1.style.display = 'inherit';
    addLot1.style.display = 'none';
    $('unAutreBien1').slideDown('slow');
    unAutreBien1.style.display = 'inherit';
});

ouiUnautreBien1.addEventListener('click', function () { })

nonUnautreBien1.addEventListener('click', function () {
    $('#frais').slideDown('slow');
    frais.style.display = 'inherit';
})

ouiLouer.addEventListener('click', function () {
    appartLouerBail.disabled = false;
});

nonLouer.addEventListener('click', function () {
    appartLouerBail.disabled = true;
});

ouiAppLouer.addEventListener('click', function () {
    appartLouerBail1.disabled = false;
    estimationLocative[1].style.display = 'none';
    estimationLocative[0].style.display = 'inherit';
});

nonAppLouer.addEventListener('click', function () {
    appartLouerBail1.disabled = false;
    estimationLocative[0].style.display = 'none';
    estimationLocative[1].style.display = 'inherit';
});


etapePrecedent1.addEventListener('click',function(){
    opentab(event, 'emprunteur');
    tabs[1].className += ' active';
});

etapeSuivant1.addEventListener('click',function(){
    opentab(event, 'piecejoint');
    tabs[3].className += ' active';
});


// ********************* FIN du TROISIEME Article 'Projet'  ************************


// une fonction masquant tous les tabs (les 4 onglets) et les désactiver et puis activer l'onglet courant
function opentab(e, tabname) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
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
section.style.height = '88vh';
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
