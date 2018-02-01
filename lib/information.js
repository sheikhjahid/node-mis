var information = [ "This is the unofficial website of Medical Information System", ];
exports.getInformation = function()
{
	var idx = Math.floor(Math.random()*information.length);
	return  information[idx];
}//end of function