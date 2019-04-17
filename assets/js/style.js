// Dans "formulaire_content" j'ajoute un écouteur d'évèment à ma fonction "submit"(=évènement) pour que le formulaire soit envoyé.
document.getElementById("formulaire_content").addEventListener("submit", function (e) {
    e.preventDefault();
    // e. = event

    console.log("Babar");

    var error;

// initialisation des variables (focus).
    var nom = document.getElementById("nom");                           
    var prenom = document.getElementById("prenom");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var rue = document.getElementById("rue");
    var codepostal = document.getElementById("codepostal");
    var ville = document.getElementById("ville");
    var message = document.getElementById("message");

    var erroralphabet = document.querySelector('.alphabet');
    var errornumerique = document.querySelector('.numerique');
    var errornum_post = document.querySelector('.num_post');
    var errormail = document.querySelector('.errormail');

// initialisation des variables errors (perte de focus).   
    var errornom = document.getElementById("errornom");
    var errorprenom = document.getElementById("errorprenom");
    var erroremail = document.getElementById("erroremail");
    var errortel = document.getElementById("errortel");
    var errorrue = document.getElementById("errorrue");
    var errorcp = document.getElementById("errorcp");
    var errorville = document.getElementById("errorville");
    var errormessage = document.getElementById("errormessage");

    var alphabet=/^[A-Z][A-Za-z' -]+$/;
    var numerique=/^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
    var num_post=/^[0-9]{5,5}$/;
    var errormail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// conditions : si la valeur "nom" n'est pas renseignée alors affiché le texte "veuillez renseigner un nom".
    if(nom){ 

        console.log(nom.value);

        if(!nom.value){
        document.getElementById("errornom").innerText = "veuillez renseigner un nom";
        error = true;
    }   
        else if(!nom.value.match(alphabet)){
            errornom.innerText="veuillez respecter les caractères";
            error = true;
        }
        else{
            errornom.innerText="";
        }
}
    if(prenom){

        console.log(prenom.value);

        if(!prenom.value){
            errorprenom.innerText="veuillez renseigner un prénom";
            error = true;
        }
        else if(!prenom.value.match(alphabet)){
            errorprenom.innerText = "veuillez respecter les caractères";
            error = true ;
            
        }
        else{
            errorprenom.innerText="";
        }
    }

    if(email){
        if(!email.value){
            erroremail.innerText="veuillez renseigner un email";
            error = true;
        }
        else if(!email.value.match(errormail)){  ;
            erroremail.innerText="veuillez respecter les caractères spéciaux";
            error = true;
        }
        else{
            erroremail.innerText="";
        }
    }
        

    if(tel){ 
        if(!tel.value){
        errortel.innerText="veuillez renseigner un numero de téléphone";
        error = true;
    }
        else if(!tel.value.match(numerique)){
            errortel.innerText="veuillez respecter les caractères alphanumériques";
            error = true;
        }
        else{
            errortel.innerText="";
        }

}

    if(rue){ 
        if(!rue.value){
        errorrue.innerText="veuillez renseigner une rue";
        error = true;
    }
    else{
        errorrue.innerText="";
    }
}

    if(codepostal){ 
        if(!codepostal.value){
        errorcp.innerText="veuillez renseigner un code postal";
        error = true;
        }

        else if(!codepostal.value.match(num_post)){
            errorcp.innerText="veuillez respecter les caractères alphanumériques";
            error = true;
        }
        else{
            errorcp.innerText="";
        }

    }

    if(ville){ 

        console.log(ville.value);

        if(!ville.value){
        errorville.innerText="veuillez renseigner une ville";
        error = true ;
    }
        else if(!ville.value.match(alphabet)){
        errorville.innerText="veuillez respecter les caractères";
        error = true ;
        }

        else{
            errorville.innerText="";
        }
        
}

    if(message){
        if(!message.value){
            errormessage.innerText="veuillez renseigner votre message";
            error = true;
        }else{
            errormessage.innerText="";
        }
        
    }
    
    if(error == true){       
            alert('formulaire non envoyé !');
    }else{
            alert('Formulaire envoyé');
    }
});

// // Dans "formulaire_content", où il y a tous les "inputs", j'ajoute un écouteur d'évènement à l'évènement "blur"(=fonction), pour qu'il soit surligné en rouge en cas d'erreur.
// document.getElementById("nom").addEventListener("blur",myFunctionsurligne);

// function myFunctionsurligne(){


// }

// // Dans "formulaire_content", j'ajoute un écouteur d'évènement à l'évènement "blur"(=fonction), pour qu'il n'y est aucun caractères spéciaux ou numériques dans certaines variables (=inputs).
// document.querySelector('.alphabet').addEventListener("blur", myfunctionalphabet){

// };
// var errorblur = document.querySelectorAll("#formulaire_inputs input");



// faire un tableau (=array) terme array remplacé par []
var errorblur = [nom, prenom, email, tel, rue, codepostal, ville, message];
console.log(errorblur);

for(var i=0; i < errorblur.length; i++){
    console.log(errorblur[i]);
    errorblur[i].addEventListener('blur', function (e){
        if(this.getAttribute("id")==="nom"){ 

            console.log(nom.value);
    
            if(!nom.value){
            document.getElementById("errornom").innerText = "veuillez renseigner un nom";
            error = true;
        }   
            else if(!nom.value.match(alphabet)){
                errornom.innerText="veuillez respecter les caractères";
                error = true;
            }
            else{
                errornom.innerText="";
            }
    }
        if(this.getAttribute("id")==="prenom"){
    
            console.log(prenom.value);
    
            if(!prenom.value){
                errorprenom.innerText="veuillez renseigner un prénom";
                error = true;
            }
            else if(!prenom.value.match(alphabet)){
                errorprenom.innerText = "veuillez respecter les caractères";
                error = true ;
                
            }
            else{
                errorprenom.innerText="";
            }
        }
    
        if(this.getAttribute("id")==="email"){
            if(!email.value){
                erroremail.innerText="veuillez renseigner un email";
                error = true;
            }
            else if(!email.value.match(errormail)){  
                erroremail.innerText="veuillez respecter les caractères spéciaux";
                error = true;
            }
            else{
                erroremail.innerText="";
            }
        }
            
    
        if(this.getAttribute("id")==="tel"){ 
            if(!tel.value){
            errortel.innerText="veuillez renseigner un numero de téléphone";
            error = true;
        }
            else if(!tel.value.match(numerique)){
                errortel.innerText="veuillez respecter les caractères alphanumériques";
                error = true;
            }
            else{
                errortel.innerText="";
            }
    
    }
    
        if(this.getAttribute("id")==="rue"){ 
            if(!rue.value){
            errorrue.innerText="veuillez renseigner une rue";
            error = true;
        }
        else{
            errorrue.innerText="";
        }
    }
    
        if(this.getAttribute("id")==="codepostal"){ 
            if(!codepostal.value){
            errorcp.innerText="veuillez renseigner un code postal";
            error = true;
            }
    
            else if(!codepostal.value.match(num_post)){
                errorcp.innerText="veuillez respecter les caractères alphanumériques";
                error = true;
            }
            else{
                errorcp.innerText="";
            }
    
        }
    
        if(this.getAttribute("id")==="ville"){ 
    
            console.log(ville.value);
    
            if(!ville.value){
            errorville.innerText="veuillez renseigner une ville";
            error = true ;
        }
            else if(!ville.value.match(alphabet)){
            errorville.innerText="veuillez respecter les caractères";
            error = true ;
            }
    
            else{
                errorville.innerText="";
            }
            
    }
    
        if(this.getAttribute("id")==="message"){
            if(!message.value){
                errormessage.innerText="veuillez renseigner votre message";
                error = true;
            }else{
                errormessage.innerText="";
            }
            
        }
    });
        // if(error == true){       
        //         alert('formulaire non envoyé !');
        // }else{
        //         alert('Formulaire envoyé');
        // }
    };

        
    







// document.querySelectorAll("#formulaire_inputs").addEventListener("blur", function (){
//     if(error == true){       
//         alert('formulaire non envoyé !');
//     }else{
//         alert('Formulaire envoyé');
// }
// });
