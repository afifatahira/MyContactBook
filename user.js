//Revealing Prototype Pattern
var User = function(){
	this.userInfo = { 'users' : [] };
};

User.prototype = function(){
	var pushInfo = function(fName, lName, mob, em, add)
		{
			var userData = JSON.parse(localStorage.getItem('userInfo'));
			var temp = [];
			if(userData) temp = userData;
			temp.push({ 'firstName' : fName, 'lastName' : lName, 'mobile' : mob, 'email' : em, 'address' : add });
			localStorage.setItem('userInfo', JSON.stringify(temp));
		},

		deleteInfo = function(itemToDelete)
		{
			var userData = JSON.parse(localStorage.getItem('userInfo'));
			var temp = [];
			var index = 0;
			for(var i=0; i<userData.length; i++)
			{
				if(i != itemToDelete)
				{
					temp[index++] = userData[i];
				}
			}
			localStorage.setItem('userInfo', JSON.stringify(temp));

		},

		updateInfo = function(index, updatedInfo)
		{
			var userData = JSON.parse(localStorage.getItem('userInfo'));
			var temp = [];

			for(var i=0; i<userData.length; i++)
			{
				if(i == index)
				{
					temp[i] = updatedInfo;
				}
				else{

					temp[i] = userData[i];
				}
			}
			localStorage.setItem('userInfo', JSON.stringify(temp));
		},

		getUserDataByMobile = function(mob)
		{
			var userData = JSON.parse(localStorage.getItem('userInfo'));
			var temp;
			if(userData)
			{
				for(var i=0; i<userData.length; i++)
				{
					if(mob == userData[i].mobile)
					{
						temp = userData[i];
						temp.serial = i;
						break;
					}
				}
			}

			return temp;
		},

		getUserDataByIndex = function(index)
		{
			var userData = JSON.parse(localStorage.getItem('userInfo'));
			var temp;
			if(userData)
			{
				for(var i=0; i<userData.length; i++)
				{
					if(i == index)
					{
						temp = userData[i];
						break;
					}
				}
			}

			return temp;
		},

		showData = function()
		{
			var userData = JSON.parse(localStorage.getItem('userInfo'));

			if(userData && userData.length > 0)
			{	
				$('.show table').empty();
				var output = '<tr><th>Sl.</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Mobile</th><th>Address</th><th>Action</th></tr>';

				for(var i=0; i < userData.length; i++)
				{
					output += 	'<tr>'
								+'<td>'+ (i+1) +'</td>'
								+'<td>'+userData[i].firstName+'</td>'
								+'<td>'+userData[i].lastName+'</td>'
								+'<td>'+userData[i].email+'</td>'
								+'<td>'+userData[i].mobile+'</td>'
								+'<td>'+userData[i].address+'</td>'
								+'<td><a href="contactEdit.html" onclick = editAction('+i+') >Edit</a> / <a href="" onclick = deleteAction('+i+')>Delete</a></td>'
								+'</tr>';
					

				}

				$('.show table').append(output);
				$('.show').show();

			}
			else
			{
				$('.show').hide();
			}
		};

	return{
		pushInfo : pushInfo,
		showData : showData,
		deleteInfo: deleteInfo,
		updateInfo : updateInfo,
		getUserDataByMobile : getUserDataByMobile,
		getUserDataByIndex: getUserDataByIndex

	};

}();