var edit = document.getElementById('#contact-edit');
var indexToEdit = JSON.parse(localStorage.getItem("editKey"));

$(edit).ready(function(){

	var userData = [];
	userData = newUser.getUserDataByIndex(indexToEdit);


	if(document.getElementById('editFname'))	document.getElementById('editFname').value = userData.firstName;
	if(document.getElementById('editLname'))	document.getElementById('editLname').value = userData.lastName;
	if(document.getElementById('editMob'))	document.getElementById('editMob').value = userData.mobile;
	if(document.getElementById('editEmail'))	document.getElementById('editEmail').value = userData.email;
	if(document.getElementById('editAddress'))	document.getElementById('editAddress').value = userData.address;

});

function updateAction()
{

	var updatedInfo = {};
	fName = document.getElementById('editFname').value;
	lName = document.getElementById('editLname').value;
	mob = document.getElementById('editMob').value;
	em = document.getElementById('editEmail').value;
	add = document.getElementById('editAddress').value;

	if(validateForm(fName, lName, mob, em, add))
	{
		var serial = -1;
		if(newUser.getUserDataByMobile(mob)) serial = newUser.getUserDataByMobile(mob).serial;
		var indexToEdit = JSON.parse(localStorage.getItem("editKey"));


		if(serial == -1 || serial == indexToEdit)
		{
			updatedInfo = { 'firstName' : fName, 'lastName' : lName, 'mobile' : mob, 'email' : em, 'address' : add };

			var indexToEdit = JSON.parse(localStorage.getItem("editKey"));

			newUser.updateInfo(indexToEdit, updatedInfo);

			alert("Data has been updated!");
		}
		else
		{
			alert("Contact with same mobile number already exists!");
		}
	}


}

if(document.getElementById('updateContact'))
	document.getElementById('updateContact').addEventListener("click",updateAction);