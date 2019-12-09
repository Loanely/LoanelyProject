


function checkForm(form)
{
 
  

  if(form.motdepasse.value != "" && form.motdepasse.value == form.cmdp.value) {
    if(form.motdepasse.value.length < 8) {
       
      
      form.motdepasse.focus();
      return false;
    }
     re = /[A-Z]/;
    if(!re.test(form.motdepasse.value)) {
      alert("Error: le Mot de passe doit contenir des majuscule");
      form.motdepasse.focus();
      return false;
    }
    re = /[a-z]/;
    if(!re.test(form.motdepasse.value)) {
      alert("Error: le mot de passe doit contenir des lettres");
      form.motdepasse.focus();
      return false;
    }
    re = /[0-9]/;
    if(!re.test(form.motdepasse.value)) {
      alert("Error: Le mot de passe doit contenir des chiffres");
      form.motdepasse.focus();
      return false;
    }
    
   
  } else {
    form.cmdp.style.color = "red";
   
    form.cmdp.focus();
    return false;
  }
  form.motdepasse.backgroundColor = "green";
  form.cmdp.style.color = "green";
  return true;
}


