function todosList()    //fetches the todos list from the online API
{ 
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange = function()
                                {
                                    if((this.readyState==4)&&(this.status==200))
                                    {
                                        var response=JSON.parse(this.responseText);
                                        var table="<tr align=center><th>Serial No.</th><th>Title</th><th>Completed</th></tr>";
                                        for(let i=0;i<response.length;i++)
                                        {
                                            table += "<tr align=center><td>" +
                                            (i+1) +
                                            "</td><td>" +
                                            response[i].title +
                                            "</td><td>" ;
                                            if(response[i].completed==true) //checking for completed status
                                            {
                                               // console.log("true:checkbox");
                                                table+="<input type='checkbox' checked disabled></td></tr>";  //disabling already completed todos
                                            }
                                            else
                                            {
                                               // console.log("false:checkbox");
                                                table+="<input type='checkbox' class='checkBox'";
                                                table+="onchange='attachCheckBoxHandler().then((e)=>{alert(e)})'></td></tr>";  //adding eventListener to the checkbox
                                            }                           //also added resolve() that 'alerts' the user
 
                                         }
                                         document.getElementById("todosData").innerHTML=table;
                                    }
                                }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();

    document.getElementById('imgDiv').style.display='none';
    document.getElementById('todosData').scrollIntoView();
    return false;       //to restrict the page from 'refresh'
}

function attachCheckBoxHandler()    //fired when any checkbox is -clicked or changed the checked state-
{
   let numberOfSelected=0;  //to hold the number of completed todos
   let todosList=document.getElementsByClassName('checkBox');   //fetching all 'checkable' checkboxes
    for(let i=0;i<todosList.length;i++) //checking for 5 completed todos
    {
         if(todosList[i].checked)
            {
               numberOfSelected+=1;
            }
    }        
    let promise=new Promise(function(resolve)  //Promise that ensures alert at the right moment
                                {
                                if(numberOfSelected==5)
                                {
           resolve("Congrats! 5 Tasks Have been Successfully Completed!!!");
                                }
                                }); 
   return promise;  //returning promise
}