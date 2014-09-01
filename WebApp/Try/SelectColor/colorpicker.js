var rgbValue;
var v;
  var html = "";
(function($){
$.fn.pickColor=function(callback)
 {
 var itemColors=["#FFFFFF","#E5E4E4","#D9D8D8","#C0BDBD","#A7A4A4","#8E8A8B","#827E7F","#767173","#5C585A","#000000","#FEFCDF","#FEF4C4","#FEED9B","#FEE573","#FFED43","#F6CC0B","#E0B800","#C9A601","#AD8E00","#8C7301","#FFDED3","#FFC4B0","#FF9D7D","#FF7A4E","#FF6600","#E95D00","#D15502","#BA4B01","#A44201","#8D3901","#FFD2D0","#FFBAB7","#FE9A95","#FF7A73","#FF483F","#FE2419","#F10B00","#D40A00","#940000","#6D201B","#FFDAED","#FFB7DC","#FFA1D1","#FF84C3","#FF57AC","#FD1289","#EC0078","#D6006D","#BB005F","#9B014F","#FCD6FE","#FBBCFF","#F9A1FE","#F784FE","#F564FE","#F546FF","#F328FF","#D801E5","#C001CB","#8F0197","#E2F0FE","#C7E2FE","#ADD5FE","#92C7FE","#6EB5FF","#48A2FF","#2690FE","#0162F4","#013ADD","#0021B0","#D3FDFF","#ACFAFD","#7CFAFF","#4AF7FE","#1DE6FE","#01DEFF","#00CDEC","#01B6DE","#00A0C2","#0084A0","#EDFFCF","#DFFEAA","#D1FD88","#BEFA5A","#A8F32A","#8FD80A","#79C101","#3FA701","#307F00","#156200","#D4C89F","#DAAD88","#C49578","#C2877E","#AC8295","#C0A5C4","#969AC2","#92B7D7","#80ADAF","#9CA53B"];
 var $colorBox=$(document.createElement("div")).css({"width":"100px","height":"100px","position":"absolute","border":"1px solid #999999","line-height":"10px"});
 $.each(itemColors,function(n,v)
  {
  rgbValue = HexToRGB(v);
  var $item=$('<a href="" title="'+rgbValue+'"><img src="" width="10" height="10" border="0" style="background-color:'+v+';"/></a>').click(function(){callback(v);$colorBox.remove();return false;}).appendTo($colorBox);
  })
 $colorBox.insertAfter(this).hover(function(){},function(){$colorBox.remove();});
 }
})(jQuery); 

function GiveDec(Hex)
{
   if(Hex == "A")
      Value = 10;
   else
   if(Hex == "B")
      Value = 11;
   else
   if(Hex == "C")
      Value = 12;
   else
   if(Hex == "D")
      Value = 13;
   else
   if(Hex == "E")
      Value = 14;
   else
   if(Hex == "F")
      Value = 15;
   else
      Value = eval(Hex)
   return Value;
}

function HexToRGB(color)
{
   var Input = color;
   a = GiveDec(Input.substring(1, 2));
   b = GiveDec(Input.substring(2, 3));
   c = GiveDec(Input.substring(3, 4));
   d = GiveDec(Input.substring(4, 5));
   e = GiveDec(Input.substring(5, 6));
   f = GiveDec(Input.substring(6, 7));
   x = (a * 16) + b;
   y = (c * 16) + d;
   z = (e * 16) + f;
   rgbValue = x + " " + y +" " + z;
   kn= '"' + rgbValue + '",'
   $("#xxx").append(kn);
  
}

