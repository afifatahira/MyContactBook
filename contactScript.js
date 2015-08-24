var newUser = new User();
newUser.showData();

function saveAction()
{
	var fname = document.getElementsByName('fname')[0].value;
	var lname = document.getElementsByName('lname')[0].value;
	var mob = document.getElementsByName('mob')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var address = document.getElementsByName('address')[0].value;

	if(validateForm(fname, lname, mob, email, address))
	{
		var sameContactExists = newUser.getUserDataByMobile(mob);

		if(!sameContactExists)
		{
			newUser.pushInfo(fname, lname, mob, email, address);

			newUser.showData();

			document.getElementsByName('fname')[0].value = "";
			document.getElementsByName('lname')[0].value = "";
			document.getElementsByName('mob')[0].value = "";
			document.getElementsByName('email')[0].value = "";
			document.getElementsByName('address')[0].value = "";

			alert("New contact successfully added!");
		}
		else
		{
			alert("Contact with same mobile number already exists!");
		}
	}

}

function deleteAction(index)
{
	var confirmation = confirm('Are you sure you want to delete the contact?');

	if(confirmation)
	{
		newUser.deleteInfo(index);
	}

}

function editAction(index)
{

	localStorage.setItem("editKey", index);
}

function searchAction()
{ 
	var mob = document.getElementById('searchMob').value;
	if(isNumeric(mob))
	{
		var searchResult = newUser.getUserDataByMobile(mob);
		document.getElementById('searchMob').value = "";

		$('.show table').empty();

		var output = '<tr><th>Sl.</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Mobile</th><th>Address</th><th>Action</th></tr>';

		if(searchResult)
		{	

			output+= 	'<tr>'
						+'<td>'+(searchResult.serial+1)+'</td>'
						+'<td>'+searchResult.firstName+'</td>'
						+'<td>'+searchResult.lastName+'</td>'
						+'<td>'+searchResult.email+'</td>'
						+'<td>'+searchResult.mobile+'</td>'
						+'<td>'+searchResult.address+'</td>'
						+'<td><a href="contactEdit.html" onclick = editAction('+searchResult.serial+') >Edit</a> / <a href="" onclick = deleteAction('+searchResult.serial+')>Delete</a></td>'
						+'</tr>';

			$('.show table').append(output);

			$('.show').show();
			alert('Data Found!');

		}
		else
		{
			alert('No data found!');
			newUser.showData();
		}
	}
	else
	{
		alert('Please enter a valid mobile number.');
	}
	
}	

function refreshAction()
{
	document.getElementById('searchMob').value = "";
	$('.show table').empty();
	newUser.showData();
}


if(document.getElementById('saveButton'))
	document.getElementById('saveButton').addEventListener("click",saveAction);

if(document.getElementById('searchButton'))
	document.getElementById('searchButton').addEventListener("click",searchAction);

if(document.getElementById('refreshButton'))
	document.getElementById('refreshButton').addEventListener("click",refreshAction);