suite('Global testS',function()
{
	test('title',function()
	{
		assert(document.title && document.title.match('/\S/') && document.title.toUpperCase()!=='TODO';
	});
});