function validateLogIn(checkLoginCredentials)
{
  let regExPassword=/^(?<!.[A-Za-z]*)(?!.*[a-zA-Z])(?=.*[0-9])(?!.*\s).{5,}$/;
  let regExUsername=/^(?<!.[0-9]*)(?!.*[0-9])(?=.*[a-zA-Z])(?!.*\s).{5,}$/
  let flag=true;
  
  let testElement=document.getElementById("inputUsername").value;
  if(regExUsername.test(testElement))
  {
    console.log("username RegEx Passed!");

    $('#inputUsernameHelp').text("looks good!");
    //document.getElementById("inputUsernameHelp").textContent="looks good!";
    $('#inputUsernameHelp').removeClass("wrong");
    //document.getElementById("inputUsernameHelp").classList.remove('wrong');
    $('#inputUsernameHelp').addClass("good");
    //document.getElementById("inputUsernameHelp").classList.add('good');
  }
  else
  {
    flag=false;

    $('#inputUsernameHelp').text("invalid!");
    //document.getElementById("inputUsernameHelp").textContent="invalid!";
    $('#inputUsernameHelp').removeClass('good');
    //document.getElementById("inputUsernameHelp").classList.remove('good');
    $('#inputUsernameHelp').addClass('wrong');
    //document.getElementById("inputUsernameHelp").classList.add('wrong');
  }
  
  testElement=document.getElementById("inputPassword").value;
  if(regExPassword.test(testElement))
  {
   console.log("password RegEx Passed!");

    $('#inputPasswordHelp').text("looks good!");
    //document.getElementById("inputPasswordHelp").textContent="looks good!";
    $('#inputPasswordHelp').removeClass('wrong');
    //document.getElementById("inputPasswordHelp").classList.remove('wrong');
    $('#inputPasswordHelp').addClass('good');
    //document.getElementById("inputPasswordHelp").classList.add('good');
  }
  else
  {
    flag=false;

    $('#inputPasswordHelp').text("invalid!");
    //document.getElementById("inputPasswordHelp").textContent="invalid!";
    $('#inputPasswordHelp').removeClass('good');
    //document.getElementById("inputPasswordHelp").classList.remove('good');
    $('#inputPasswordHelp').addClass('wrong');
    //document.getElementById("inputPasswordHelp").classList.add('wrong');
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
    return true;    //window.location.href("index.html")
  }
  else
  {
    $('#inputUsernameHelp').text("incorrect username or password!");
    //document.getElementById("inputUsernameHelp").textContent="incorrect username or password!";
    $('#inputPasswordHelp').text("incorrect username or password!");
    //document.getElementById("inputPasswordHelp").textContent="incorrect username or password!";
    $('#inputUsernameHelp').removeClass('good');
    //document.getElementById("inputUsernameHelp").classList.remove('good');
    $('#inputUsernameHelp').addClass('wrong');
    //document.getElementById("inputUsernameHelp").classList.add('wrong');
    $('#inputPasswordHelp').removeClass('good');
    //document.getElementById("inputPasswordHelp").classList.remove('good');
    $('#inputPasswordHelp').addClass('wrong');
    //document.getElementById("inputPasswordHelp").classList.add('wrong');
    
    return false;
  }
}