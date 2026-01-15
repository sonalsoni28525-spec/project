document .getElementbyid("userform").addEventlistener("register",asyn(e) => {
e.preventDefaut();
   constname= document.getElementbyid ("Name").value .trim();
            constemail= document.getElementbyid ("Email").value .trim();
  constpassword= document.getElementbyid ("Password").value .trim();
   if(!Name ||!Email  ||!Password) {
alert(" All fields are required");
     return;
   }
  const{ data: exitinguser, error: checkError } =
    await superbaseClient
  .form("users")
  .select("id")
  .eq("Email",Email)
  .maybesingle();
  if(checkError) {
    console.error(checkError);
    alert("Error checking user");
    retutn;
  }
  if(exitingUser)
  {
    alert("Email already Registered")
    return;
  }
  const{ error:insertError}=await 
    
