function containsNumber(n) {
	return /\d/.test(n);
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function validateEmail(emailID)
{
	atpos = emailID.indexOf("@");
	dotpos = emailID.lastIndexOf(".");

	if (atpos < 1 || ( dotpos - atpos < 2 )) 
	{
		return false;
	}
	return true;
}

function validateForm(fname, lname, mob, email, address)
{
	if(fname == "")
	{
		alert("Please enter your first name.");
		document.getElementsByName('fname')[0].focus();
		return false;
	}
	if(containsNumber(fname))
	{
		alert("First name cannot contain numbers.");
		document.getElementsByName('fname')[0].focus();
		return false;
	}
	if(lname == "")
	{
		alert("Please enter your last name.");
		document.getElementsByName('lname')[0].focus();
		return false;
	}
	if(containsNumber(lname))
	{
		alert("Last name cannot contain numbers.");
		document.getElementsByName('lname')[0].focus();
		return false;
	}
	if(mob == "")
	{
		alert("Please enter your mobile number.");
		document.getElementsByName('mob')[0].focus();
		return false;
	}
	if(!isNumeric(mob))
	{
		alert("Please enter a valid mobile number");
		document.getElementsByName('mob')[0].focus();
		return false;
	}
	if(email == "")
	{
		alert("Please enter your email address.");
		document.getElementsByName('email')[0].focus();
		return false;
	}
	if(!validateEmail(email))
	{
		alert("Please enter a valid email address.");
		document.getElementsByName('email')[0].focus();
		return false;
	}
	if(address == "")
	{
		alert("Please enter your address");
		document.getElementsByName('address')[0].focus();
		return false;
	}

	return true;
}