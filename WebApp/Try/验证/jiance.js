//内置的正则表达式，可自行扩展
var matchExp = new Array();
//matchExp["int"]="^([+-]?)\\d+$";
matchExp["int"]="^([+-]?)\\d{1,9}$";
matchExp["int+"]="^([+]?)\\d+$";
matchExp["int-"]="^-\\d+$";
matchExp["num"]="^([+-]?)\\d*\\.?\\d+$";
matchExp["num+"]="^([+]?)\\d*\\.?\\d+$";
matchExp["num-"]="^-\\d*\\.?\\d+$";
matchExp["float"]="^([+-]?)\\d*\\.\\d+$";
matchExp["float+"]="^([+]?)\\d*\\.\\d+$";
matchExp["float-"]="^-\\d*\\.\\d+$";
matchExp["email"]="^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$";
matchExp["color"]="^#[a-fA-F0-9]{6}";
matchExp["url"]="^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&=]*)?$";
matchExp["chinese"]="^[\\u4E00-\\u9FA5\\uF900-\\uFA2D]{1,9}$";
matchExp["ascii"]="^[\\x00-\\xFF]+$";
matchExp["zipcode"]="^\\d{6}$";
matchExp["mobile"]="^0{0,1}13[0-9]{9}$";
matchExp["ip4"]="^\(([0-1]?\\d{0,2})|(2[0-5]{0,2}))\\.(([0-1]?\\d{0,2})|(2[0-5]{0,2}))\\.(([0-1]?\\d{0,2})|(2[0-5]{0,2}))\\.(([0-1]?\\d{0,2})|(2[0-5]{0,2}))$";
matchExp["notempty"]="^[^ ]+$";
matchExp["picture"]="(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$";
matchExp["rar"]="(.*)\\.(rar|zip|7zip|tgz)$";
matchExp["date"]="^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$";
//缺省消息
var matchMessage =	{
	"int"	:"请输入整数",											//整数
	"int+"	:"请输入正整数",										//正整数
	"int-"	:"请输入负整数",										//负整数
	"num"	:"请输入数字",											//数字
	"num+"	:"请输入正数",											//正数
	"num-"	:"请输入负整数",										//负数
	"float"	:"请输入浮点数",										//浮点数
	"float+":"请输入正浮点数",										//正浮点数
	"float-":"请输入负浮点数",										//负浮点数
	"email"	:"请输入正确的邮箱地址",								//邮件
	"color"	:"请输入正确的颜色",									//颜色
	"url"	:"请输入正确的连接地址",								//联接
	"chinese":"请输入中文",											//中文
	"ascii"	:"请输入ascii字符",										//仅ACSII字符
	"zipcode":"请输入正确的邮政编码",								//邮编
	"mobile":"请输入正确的手机号码",								//手机
	"ip4"	:"请输入正确的IP地址",									//ip地址
	"notempty":"不能有空格",										//非空
	"picture":"请选择图片",											//图片
	"rar"	:"请输入压缩文件",										//压缩文件
	"date"	:"请输入正确的日期"										//日期
}

//数据格式验证器
var FormValidator =
{
    //检查是否为空
    CheckEmpty: function (element, message) {
        if (!element.type) {
            //非法元素
            alert("CheckEmpty:参数使用了非法元素");
            return;
        }
        //失去焦点后验证元素
        element.onblur = function () {
            return FormValidator.IsEmpty(this, message)
        }
    },

    //检查常用格式
    Match: function (element, matchName, message) {
        if (!element.type) {
            //非法元素
            alert("CheckEmpty:参数使用了非法元素");
            return;
        }
        //失去焦点后验证元素
        element.onblur = function () {
            if (!message) {
                message = matchMessage[matchName];
            }
            return FormValidator.IsMatch(this, matchExp[matchName], message);
        }
    },


    //检查自定义格式
    MacthRegExp: function (element, regExp, message) {
        if (!element.type) {
            //非法元素
            alert("CheckEmpty:参数使用了非法元素");
            return;
        }
        //失去焦点后验证元素
        element.onblur = function () {
            return FormValidator.IsMatch(this, regExp, message);
        }
    },

    //不能为空，也不能格式错误
    CheckEmptyAndMatch: function (element, regExp, emptyMessage, errorMessage) {
        if (!element.type) {
            //非法元素
            alert("CheckEmpty:参数使用了非法元素");
            return;
        }
        //失去焦点后验证元素
        element.onblur = function () {
            if (!FormValidator.IsEmpty(this, emptyMessage)) {
                return FormValidator.IsMatch(this, regExp, errorMessage);
            } else {
                return false;
            }
        }
    },

    //比较两输入值
    Compare: function (original, element, message) {
        if (!element.type || !original.type) {
            //非法元素
            alert("Compare:参数使用了非法元素");
            return;
        }
        //失去焦点后验证元素
        element.onblur = function () {
            return FormValidator.IsEqual(original, this, message);
        }
    },

    //检查是否为空
    IsEmpty: function (element, message) {
        if (element.value.trim() == "") {
            FormValidator.Invalid(element, message);
            return true;
        } else {
            FormValidator.Valid(element);
            return false;
        }
    },

    //检查格式是否为正确
    IsMatch: function (element, regExp, message) {
        //如为空值不进行检查
        if (element.value.trim() == "") {
            FormValidator.Valid(element);
            return true;
        }
        try {
            var reg = new RegExp(regExp, "i");
            if (!reg.test(element.value.trim())) {
                FormValidator.Invalid(element, message);
                return false;
            } else {
                FormValidator.Valid(element);
                return true;
            }
        } catch (error) {
            //非法常用格式
            alert("regExp:非法表达式");
            return false;
        }
    },

    //比较两输入值是否一致
    IsEqual: function (original, element, message) {
        //如没指定比如对象，提示错误
        if (!original) {
            alert("Compare:未指定比较对象");
            return false;
        }
        if (element.value.trim() == original.value.trim()) {
            FormValidator.Valid(element);
            return true;
        } else {
            FormValidator.Invalid(element, message);
            return false;
        }
    },

    //控件格式无效
    Invalid: function (element, message) {
        //保存原来的样式
        if (element.getAttribute("OldClassName") == null) {
            element.setAttribute("OldClassName", element.className);
        }
        //输入框显示无效状态
        element.className = "InvalidInput";

        //显示提示文字
        var invalidMsg = document.getElementById(element.id + "_InvalidMsg");
        if (invalidMsg) {
            invalidMsg.style.display = "";
            invalidMsg.innerHTML = message;
        } else {
            invalidMsg = document.createElement("SPAN");
            element.parentNode.appendChild(invalidMsg);
            invalidMsg.id = element.id + "_InvalidMsg";
            invalidMsg.className = "InvalidInputMsg";
            invalidMsg.innerHTML = message;
        }
    },

    //控件格式有效
    Valid: function (element) {
        if (element.getAttribute("OldClassName") != null) {
            //恢复原来的样式
            element.className = element.getAttribute("OldClassName");
            var invalidMsg = document.getElementById(element.id + "_InvalidMsg");
            if (invalidMsg) {
                invalidMsg.style.display = "none";
            }
        }

    },

    //检查表单
    CheckForm: function (form) {
        form.IsValid = true;
        var elements = form.getElementsByTagName("INPUT");
        //循环查找
        for (i = 0; i < elements.length; i++) {
            var elem = elements[i];
            var noEmpty = elem.getAttribute("NotEmpty");
            var matchName = elem.getAttribute("Match");
            var regExp = elem.getAttribute("RegExp");
            var compare = elem.getAttribute("Compare");
            //优先检查空值且有格式的验证
            if (noEmpty == "true" && matchName) {
                //不能空，且须匹配格式
                if (!FormValidator.IsEmpty(elem, elem.getAttribute("EmptyMessage"))) {
                    var errmsg = elem.getAttribute("ErrorMessage");
                    if (!errmsg) {
                        errmsg = matchMessage[matchName];
                    }
                    if (!FormValidator.IsMatch(elem, matchExp[matchName], errmsg)) {
                        //验证格式非法
                        form.IsValid = false;
                    }
                } else {
                    //验证是空值
                    form.IsValid = false;
                }
            }
            //优先检查空值且有格式的验证
            else if (noEmpty == "true" && regExp) {
                //不能空，且须匹配格式
                if (!FormValidator.IsEmpty(elem, elem.getAttribute("EmptyMessage"))) {
                    if (!FormValidator.IsMatch(elem, regExp, elem.getAttribute("ErrorMessage"))) {
                        //验证格式非法
                        form.IsValid = false;
                    }
                } else {
                    //验证是空值
                    form.IsValid = false;
                }
            }
            //验证空值
            else if (noEmpty == "true") {

                if (FormValidator.IsEmpty(elem, elem.getAttribute("EmptyMessage"))) {
                    //验证是空值
                    form.IsValid = false;
                }
            }
            //验证常用格式
            else if (matchName) {
                var errmsg = elem.getAttribute("ErrorMessage");
                if (!errmsg) {
                    errmsg = matchMessage[matchName];
                }
                if (!FormValidator.IsMatch(elem, matchExp[matchName], errmsg)) {
                    //验证格式非法
                    form.IsValid = false;
                }
            }
            //验证自定义格式
            else if (regExp) {
                if (!FormValidator.IsMatch(elem, regExp, elem.getAttribute("ErrorMessage"))) {
                    //验证格式非法
                    form.IsValid = false;
                }
            }
            //验证输入是否一致
            else if (compare) {
                if (!FormValidator.IsEqual(document.getElementById(compare), elem, elem.getAttribute("ErrorMessage"))) {
                    //验证两输入不一致
                    form.IsValid = false;
                }
            }
        }
        return form.IsValid;
    }

}


//扩展String的方法：trim
String.prototype.trim = function String$trim() {
    if (arguments.length !== 0) {alert("String.trim:参数过多");return;};
    return this.replace(/^\s+|\s+$/g, '');
}



//初始化
function InitForm(){
	for(var f=0; f<document.forms.length; f++){
		var form = document.forms[f];
		//初始化需要验证数据的表单元素
		if(form.getAttribute("UseValidator") == "true"){
			var elements = form.getElementsByTagName("INPUT");
			//循环查找
			for(i=0; i<elements.length; i++){
				var elem = elements[i];
				var noEmpty = elem.getAttribute("NotEmpty");
				var matchName = elem.getAttribute("Match");
				var regExp = elem.getAttribute("RegExp");
				var compare = elem.getAttribute("Compare");
				//优先检查空值且有格式的验证
				if(noEmpty == "true" && matchName){
					var errmsg = elem.getAttribute("ErrorMessage");
					if(!errmsg){
						errmsg = matchMessage[matchName];
					}
					FormValidator.CheckEmptyAndMatch(elem, matchExp[matchName], elem.getAttribute("EmptyMessage"), elem.getAttribute("ErrorMessage"));
				}
				//优先检查空值且有格式的验证
				else if(noEmpty == "true" && regExp){
					FormValidator.CheckEmptyAndMatch(elem, regExp, elem.getAttribute("EmptyMessage"), elem.getAttribute("ErrorMessage"));
				}
				//验证空值
				else if(noEmpty == "true"){
					FormValidator.CheckEmpty(elem, elem.getAttribute("EmptyMessage"));
				}
				//验证常用格式
				else if(matchName){
					FormValidator.Match(elem, matchName, elem.getAttribute("ErrorMessage"));
				}
				//验证自定义格式
				else if(regExp){
					FormValidator.MacthRegExp(elem, regExp, elem.getAttribute("ErrorMessage"));
				}
				//验证输入是否一致
				else if(compare){
					FormValidator.Compare(document.getElementById(compare), elem, elem.getAttribute("ErrorMessage"));
				}
				
			}
		}
	}
}	

//初始化表单
InitForm();

