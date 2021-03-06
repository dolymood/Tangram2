module('baidu.dom.setAttrs')

//加载快捷方式
test('老接口：prepareTest',function(){
	expect(1);
	stop();

	//加载快捷方式
	ua.importsrc("baidu.short", function(){
		start();
		ok(true,'ok');
	}, "baidu.trim", "baidu.dom.setAttrs");
});

//新接口
test('老接口：基础测试', function() {
	expect(3);
	var img = document.createElement('img');
	var attrs = {"align":"right", "width":30, "height":20};
	baidu.dom(img).setAttrs(attrs);
	equal(img.getAttribute('align'),'right',"img gets align");
	equal(img.getAttribute('width'),30,"img gets width attribute");
	equal(img.getAttribute('height'),20,"img gets height attribute");
});

test('老接口：shortcut',function(){
	expect(3);
	var img = document.createElement('img');
	var attrs = {"align":"right", "width":30, "height":20};
	baidu.dom(img).setAttrs(attrs);
	equal(img.getAttribute('align'),'right',"img gets align");
	equal(img.getAttribute('width'),30,"img gets width attribute");
	equal(img.getAttribute('height'),20,"img gets height attribute");
})

//老接口
test('老接口：基础测试', function() {
	expect(3);
	var img = document.createElement('img');
	var attrs = {"align":"right", "width":30, "height":20};
	baidu.dom.setAttrs(img,attrs);
	equal(img.getAttribute('align'),'right',"img gets align");
	equal(img.getAttribute('width'),30,"img gets width attribute");
	equal(img.getAttribute('height'),20,"img gets height attribute");
});

test('老接口：shortcut',function(){
	expect(3);
	var img = document.createElement('img');
	var attrs = {"align":"right", "width":30, "height":20};
	baidu.setAttrs(img,attrs);
	equal(img.getAttribute('align'),'right',"img gets align");
	equal(img.getAttribute('width'),30,"img gets width attribute");
	equal(img.getAttribute('height'),20,"img gets height attribute");
})