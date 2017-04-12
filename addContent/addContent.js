/**
 * Created by Administrator on 2017/4/6 0006.
 */

$(document).ready(function(){
    $("#b1").click(function(){
        $("#p1").append("hello");
    })
    $("#b2").click(function(){
        $("#p1").prepend("hello");
    })
    $("#b3").click(function(){
        $("#p1").after("hello");
    })
    $("#b4").click(function(){
        $("#p1").before("hello");
    })
})

function add(){
    var a="<p>hello world</p>"
    var b=$("<p></p>").text("hello world");
    var c=document.createElement("p").innerHTML="hello world";
    $("body").append(a,b,c);
}