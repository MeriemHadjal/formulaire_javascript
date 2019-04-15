document.getElementById("formulaire_content").addEventListener("submit", function (e) {
    e.preventDefault();

    var erreur;

    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var rue = document.getElementById("rue");
    var codepostal = document.getElementById("codepostal");
    var ville = document.getElementById("ville");
    
    var errornom = document.getElementById("errornom");
    var errorprenom = document.getElementById("errorprenom");
    var erroremail = document.getElementById("erroremail");
    var errortel = document.getElementById("errortel");
    var errorrue = document.getElementById("errorrue");
    var errorcp = document.getElementById("errorcp");
    var errorville = document.getElementById("errorville");


    if(!nom.value){
        document.getElementById("errornom").innerText = "veuillez renseigner un nom";
    }

    if(!prenom.value){
        errorprenom.innerText="veuillez renseigner un prenom";
    }

    if(!email.value){
        erroremail.innerText="veuillez renseigner un email";
    }

    if(!tel.value){
        errortel.innerText="veuillez renseigner un numero de telephone";
    }

    if(!rue.value){
        errorrue.innerText="veuillez renseigner une rue";
    }

    if(!codepostal.value){
        errorcp.innerText="veuillez renseigner un code postal";
    }

    if(!ville.value){
        errorville.innerText="veuillez renseigner une ville";
    }

    if (erreur){
        document.getElementById("error").innerHTML = erreur;
        return false;
    } else{
            alert('formulaire envoyé !');
    }
});

document.getElementById("formulaire_content").addEventListener("blur",myFunctionsurligne);

function myFunctionsurligne(champ, erreur)
{
    if(erreur)
        champ.style.backgroundColor = "red";
    else
        champ.style.backgroundColor = "";
}