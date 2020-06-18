
            
            $(function() {
                
                $('.send').click(function() {    //设置“发送”按钮点击事件，将弹幕体显示在弹幕墙上
                   
                    var val = $('.content').val();  //获取文本输入框的内容
              
                    
                    var $content = $('<div class="text">' + val + '</div>');//将文本框内容用div包裹起来，便于后续处理
                  
                    $screen = $(document.getElementById("screen"));  //获取弹幕墙对象
                    
                    var top = Math.random() * $screen.height()+40;//设置弹幕体出现时的上边距，为任意值

                    $content.css({      //设置弹幕体的上边距和右边距
                        top: top + "px",
                        right: 80,  
                       "font-size":"150%",
                       "color":"red"
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
     
