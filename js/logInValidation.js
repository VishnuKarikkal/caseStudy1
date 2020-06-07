function validateLogIn(checkLoginCredentials)
{
  let regExPassword=/^(?<!.[A-Za-z]*)(?!.*[a-zA-Z])(?=.*[0-9])(?!.*\s).{5,}$/;
  let regExUsername=/^(?<!.[0-9]*)(?!.*[0-9])(?=.*[a-zA-Z])(?!.*\s).{5,}$/
  let flag=true;
  
  let testElement=document.getElementById("inputUsername").value;
  if(regExUsername.test(testElement))
  {
    console.log("username RegEx Passed!");

    document.getElementById("inputUsernameHelp").textContent="looks good!";
    document.getElementById("inputUsernameHelp").classList.remove('wrong');
    document.getElementById("inputUsernameHelp").classList.add('good');
  }
  else
  {
    flag=false;

    document.getElementById("inputUsernameHelp").textContent="invalid!";
    document.getElementById("inputUsernameHelp").classList.remove('good');
    document.getElementById("inputUsernameHelp").classList.add('wrong');
  }
  
  testElement=document.getElementById("inputPassword").value;
  if(regExPassword.test(testElement))
  {
   console.log("password RegEx Passed!");

   document.getElementById("inputPasswordHelp").textContent="looks good!";
    document.getElementById("inputPasswordHelp").classList.remove('wrong');
    document.getElementById("inputPasswordHelp").classList.add('good');
  }
  else
  {
    flag=false;

    document.getElementById("inputPasswordHelp").textContent="invalid!";
    document.getElementById("inputPasswordHelp").classList.remove('good');
    document.getElementById("inputPasswordHelp").classList.add('wrong');
  }

 if(flag==true)
 {
 flag=checkLoginCredentials();  //callback function to check the credentials entered
 }
 return flag;
}

function checkLoginCredentials()
{
  let testUsername=document.getElementById("inputUsername").value;
  let testPassword=document.getElementById("inputPassword").value;
  if((testPassword=='12345')&&(testUsername=='admin'))
  {
    return true;
  }
  else
  {
    document.getElementById("inputUsernameHelp").textContent="incorrect username or password!";
    document.getElementById("inputPasswordHelp").textContent="incorrect username or password!";
    document.getElementById("inputUsernameHelp").classList.remove('good');
    document.getElementById("inputUsernameHelp").classList.add('wrong');
    document.getElementById("inputPasswordHelp").classList.remove('good');
    document.getElementById("inputPasswordHelp").classList.add('wrong');
    
    return false;
  }
}