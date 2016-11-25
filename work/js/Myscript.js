/**
 * Created by W50J on 2016/11/25.
 */
var input=document.getElementById('input'),
    test=document.getElementById('test'),
    result=document.getElementById("result");
//初始状态
function origin()
{
    result.innerHTML="";
    result.style.color="red";
    input.style.border="2px solid red";
}
//点击验证按钮
test.addEventListener("click",function(e)
{
    origin();
    var length=checkLength(input.value);
    if(length<4||length>16)
    {
        result.innerHTML="字符长度为4~16个，一个汉字算两个字符！";
        result.style.color="red";
        input.style.border="2px solid red";
    }
    if(!/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(input.value))
    {
        result.innerHTML="只能输入中文,字母和数字哦！";
        result.style.color="rgba(12, 234, 81, 0.62)";
        input.style.border="2px solid rgba(12, 234, 81, 0.62)";
    }
    if((/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(input.value))&&length>=4&&length<=16)
    {
        result.innerHTML="名称格式正确";
        result.style.color="rgba(12, 234, 81, 0.62)";
        input.style.border="2px solid rgba(12, 234, 81, 0.62)";
    }
    if(input.value=="")
    {
        result.innerHTML="姓名不能为空";
        result.style.color="red";
        input.style.border="2px solid red";
    }
    e.preventDefault();
    return false;
});
//检验输入的值有多少个字符
function checkLength(str)
{
    var len =0,temp=0;
    for(var j=0;j<str.length;j++)
    {
        temp = 1;
        if(/^[\u2E80-\u9FFF]+$/.test(str[j]))
        {
            temp = 2;
        }
        len += temp;
    }
    return len;
}