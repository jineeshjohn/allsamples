require(['jquery','message','module-2'],function ($, message, module2) {
	$('#output').html( message + '~' + module2);
})

 

define('module-2', function(){
	return 'This message is from named module';
});