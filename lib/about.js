var about = [ "About Page is coming soon shortly!!", ];
exports.getAbout = function()
{
	var idx = Math.floor(Math.random()*about.length);
	return about[idx];
}//end of function