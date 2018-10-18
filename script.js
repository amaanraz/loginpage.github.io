var database = [
	{
		username: "amaan",
		password: "Tamanna01"
	},
	{
		username: "givon",
		password: "Tamanna01"
	},
	{
		username: "Tasneem",
		password: "Tamanna01"
	}
];

var newsfeed = [
	{
		username : "bob",
		timeline: "somethinf"
	},
	{
		username: "tasneem",
		timeline: "i took english litrutrue"
	}
];





// function RegisterOrLogin(){
// 	var RorL = prompt("Register or Login?")
// 	if(RorL == "login"){
// 		var userPrompt = prompt("Username : ");
// 		var passPrompt = prompt("Password : ");
// 		Login(userPrompt,passPrompt);
// 	}else if(RorL == "register"){
// 		var registerUser = prompt("Register Username");
// 		var registerPass = prompt("Register Password");
// 		database.push({username:registerUser,password: registerPass})
// 		console.log(database);
// 		var userPrompt = prompt("Username : ");
// 		var passPrompt = prompt("Password : ");
// 		Login(userPrompt,passPrompt)
// 	}
// }
// RegisterOrLogin();


function register(form){
	
	database.push({username: form.ruser.value,password:form.rpswrd.value});
	console.log(database);
	alert("successfully added")
	
}





function isUserValid(user,pass){
	for (var i = 0; i < database.length; i++ ){
		if(database[i].username===user &&
			database[i].password===pass){
			return true;
		}
		
	}
	return false;	
}



function Login(user,pass){
	if(isUserValid(user,pass)){
		console.log(newsfeed)
		window.location.assign = 'http://www.google.com';	}
		else{
		alert("Username or Password was incorrect")
	}
}

function check(form)
{
 	Login(form.userid.value,form.pswrd.value)
}















