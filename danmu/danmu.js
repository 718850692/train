$(function() {
                
   $('.send').click(function() {    //设置“发送”按钮点击事件，将弹幕体显示在弹幕墙上
                   
    var val = $('.content').val();  //获取文本输入框的内容 
    $('.content').val('');   //清空文本    
    var $content = $('<div class="text">' + val + '</div>');//将文本框内容用div包裹起来，便于后续处理
                  
        $screen = $(document.getElementById("screen"));  //获取弹幕墙对象

        // 设置字体的随机性质
        var fontColor = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random()) + ")";
        var fontSize = Math.floor((Math.random()* 20) + 15) + "px";
        var right = $(".screen_container").width() + "px";
        var top = Math.floor(Math.random() * 400) + "px";
           top = parseInt(top) > 352 ? "352px" : top;
                   
           
        $content.css({          //设置弹幕出现时的样子
                        "position": 'absolute',
                        "color": fontColor,
                        "font-size": fontSize,
                        "right": 80,
                        "top": top,
                        "whiteSpace": 'nowrap',
                        "display": 'block',
                    });
 
                    $('.dm_show').append($content);    //将弹幕体添加到弹幕墙中
                    
                    $content.animate({      //弹幕体从右到左，出现时间
                        right: $screen.width()+80-$content.width()
                        
                    }, 6000, function() {
                        $(this).remove();
                    });
                });
               
                      
                $('.clear').click(function() {    //清除弹幕墙中的所有内容
                    $('.dm_show').empty();
                });
                
            });
     
