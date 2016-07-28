/*点击tab栏月份切换*/

    var logDateControl = (function(m){
         var curSelEl;    //当前选中的日期 
         var styleData = [], dataStyle = {};
         //计算指定日期是第几周（默认为当前日期），该计算方法比较严密准确 
         var isIE = isIE || (function () {
             var browser = function (str) { return navigator.userAgent.indexOf(str) > -1 }
             return browser("MSIE") && browser("compatible") && !browser("Opera");
         })();
         //对于非IE浏览器的处理
         if (!isIE) {
             //innerText
             HTMLElement.prototype.__defineSetter__("innerText", function (sText) { this.textContent = sText });
             HTMLElement.prototype.__defineGetter__("innerText", function () { return this.textContent })
         };
         //绑定事件
         var attachEvent = function (evt, handler, obj) {
             obj = obj || window;
             if (obj.addEventListener) {
                 obj.addEventListener(evt, handler, false);
             } else {
                 obj.attachEvent("on" + evt, handler);
             }
         };
         //计算一个月多少天,年份4位数字，月份1-2位数字（应该是js日期格式如1月传入0）,数据非法返回-1 
         var getDaysLen = function (year, month) {
             if (!(/^\d{4}$/.test(year) && /^\d{1,2}$/.test(month))) { return -1 }
             var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
             //存在2月29日 
             if (month == 1 && new Date(year, 1, 29).getMonth() == 1) { monthDays[1] = 29 }
             return monthDays[month]
         }; 

         //显示日期列表,传入年、月(按日常月份传入。如二月传入2)、及显示位置 
         var displayDayList = function (year, month, pos) {
             var myList = document.getElementsByTagName("table");
             var daysList = [];
             var cellsTh = myList[m].rows[1].cells;

             //下面的month-1转换为js月份表示 
             for (var i = 1, l = getDaysLen(year, --month) + 1; i < l; i++) { 
                 cellsTh[i - 1].className = "unSelectDay";
                 cellsTh[i - 1].setAttribute("_oldCls", "unSelectDay");
                 cellsTh[i - 1].innerHTML = i > 9 ? i : "0" + i;  
                 //为周末添加特殊样式 
                 var wd = new Date(year, month, i).getDay();
                 if (wd == 0 || wd == 6) {
                     $(cellsTh[i - 1]).addClass('weekEnd');
                 }  
                 //匹配用户自定义样式 
                 var dtStr = year + "|" + (month + 1) + "|" + i;
                 if (("," + styleData.join() + ",").indexOf("," + dtStr + ",") > -1) {
                     cellsTh[i - 1].className = "unSelectDay " + dataStyle[dtStr];
                     cellsTh[i - 1].setAttribute("_oldCls", "unSelectDay " + dataStyle[dtStr]);
                }
             }
             //如果是当前月则选中当日
             if (new Date().getMonth() == month && new Date().getFullYear() == year) {
                 curSelEl = cellsTh[new Date().getDate() - 1];
                 curSelEl.className = "selectDay";
             };
             for (var j = i - 1; j < 31; j++) {
                 cellsTh[j].className = "";
                 cellsTh[j].innerHTML = "  ";
             }

         };
         //初始化 
         if (window.attachEvent) {
             window.attachEvent("onload", docInit);
         } else {
             window.addEventListener("load", docInit, false);
         }
         function docInit() {
             var curDate = new Date(), curYear = curDate.getFullYear(), curMonth = curDate.getMonth();
             //显示年份
             for(var i = 2010; i<curYear+2; i++){                 
                var addOption = '<option>'+i+'</option>';                  
                $('#yearDrop').append(addOption);
                $('#yearDrop').children().last().prev().attr('selected', true).siblings().removeAttr('selected');
             } ;  
             
             //改变日期或年份更新日期列表 
               var selectYear = curYear ;
              $('#yearDrop').change(function() {  
                     selectYear = $('#yearDrop').val(); 
                     if (selectYear == curYear) {//如果选择当前年份，则自动跳到当前月份
                        displayDayList(selectYear, curMonth+1, "daysList");
                        $('#fadetab li').eq(curMonth).addClass('current').siblings().removeClass('current');
                    }else{                        
                     displayDayList(selectYear, 1, "daysList");
                     $('#fadetab li').first().addClass('current').siblings().removeClass('current');
                    } 
                     return selectYear;
              });
             $('#fadetab li').click(function() {
                 var liIndex = $(this).index()+1;   
                 var tabMonth=liIndex+'月份';
                 $('.currentMonth').html(tabMonth);
                 $(this).addClass('current').siblings().removeClass('current');
                 displayDayList(selectYear, liIndex, "daysList");
                 // window.onload();
             });
             //显示当月日期列表,并高亮当天的日期 
             displayDayList(curDate.getFullYear(), curMonth + 1, "daysList");

             /*默认加载当前月份*/
             $('#fadetab').children('li').eq( curMonth ).addClass('current').siblings().removeClass('current');
             $('.currentMonth').html(curMonth + 1+'月份');
         };
           
    });

    /*遍历页面所有的表格*/
    for(m=0; m<$('table').length; m++){
        logDateControl(m);
    }
/*点击tab栏月份切换*/

/*当月发布版本数合计*/
for(i = 0; i<$('table').length; i++){
    var verTotal = $('table').eq(i).find('.tick').length;
    $('table').eq(i).find('.verTotal').text(verTotal);
    
    var tableHeight = $('.table').eq(i).height();
    $('.shrink').eq(i).css('height', tableHeight);
}
/*当月发布版本数合计*/


// 拼接"已排期"tips字符串 
    var sumPopup = '<span class="sumPopup">'+
        '<div class="aui-inline-dialog" style="left: 0px; top: 0px; display: block">'+
          '<div class="contents" style="width: 200px; padding: 12px;">'+
            '<span style="white-space:normal;" class="smaller-font">'+
                '迭代名称:jhhjhjhjhkhh<br>'+
                '测试实际工作量:2016-04-22<br>'+
                '测试评估工作量:2016-04-21'+
            '</span>'+
          '</div>'+
        '</div>'+
      '</span>';


    /*排期状态是“未评估/ 已评估/ 未排期”，背景置为黄色,添加class=noSchedule*/
    for (var i = 0; i < $('.infoList td.scheduleStatus').length; i++) {
        if ($('.scheduleStatus').eq(i).children('i').html() != '已排期') {    
            $('.scheduleStatus').eq(i).addClass('noSchedule');
        }else{
            // 排期状态为“已排期”，拼接tips字符串
            $('.scheduleStatus').eq(i).css('cursor', 'pointer');
            $('.scheduleStatus').eq(i).addClass('tipsShow').append(sumPopup);            
        }; 
    };
// 拼接"已排期"tips字符串 

/* 颜色数组 length=60 */
var colorArry = ['#1897C4','#F43454','#2C6BB6','#86F3C7','#ACEBAD','#640D31','#317C14','#5D3E02','#A59F22','#16B1AB',
                '#032CA0','#6D1CA3','#97DC2F','#4BBDDF','#D3C437','#29909C','#171A0C','#B958C5','#3BAE63','#F8604F',
                '#BD1F4F','#CF6AAC','#FDC63F','#6A04CD','#F9C680','#7FD5B7','#FA8BD7','#B7CA80','#6BC9AF','#6E0F4A',
                '#99CB63','#497C52','#7A762E','#7CADCD','#5935BC','#ADF9BE','#2D6F8A','#A47612','#E361ED','#51AC33',
                '#1BB5F4','#71CA74','#C34011','#98B4B9','#179F73','#651DEB','#0C362A','#15D7AE','#8E1111','#A0EF1E',
                '#C85971','#64FDCB','#1C16EA','#2883EB','#AC7C0E','#A30D2E','#4A303F','#D49D8F','#38B69E','931245'];

/*产生随机颜色编码*/
    function getRandomColor(){
     return  '#' +  (function(color){
        return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
         && (color.length == 6) ?  color : arguments.callee(color);
         })('');
    }
    function init(){
        for(i=0;i< $('.identification').length; i++){
         // $('.identification').eq(i).css('backgroundColor', getRandomColor());
         $('.identification').eq(i).css('backgroundColor', colorArry[i]);
        }

    };
    init();
/*产生随机颜色编码*/


/*表格侧栏收缩和展开*/

function shrinkClick(ops){
    
        $(ops).parent().nextAll().toggle(); 
        $(ops).parent().parent().parent().parent().find('.verTotal').next().nextAll().toggle();  
        $(ops).toggleClass('shrinkOn'); 
        for(i=0; i<$(ops).parent().parent().parent().parent().find('.infoList').length; i++){
            for(j=0; j<3; j++){
               $(ops).parent().parent().parent().parent().find('.infoList').eq(i)
                    .children('tr').eq(j).children('.editOk').last().next().nextAll().toggle(); 
            }
        }
        
}
/*表格侧栏收缩和展开*/
var thisBgColor ;
$('.identification').click(function(event) {
    thisBgColor = $(this).css('backgroundColor');
    layer.tips('您可以编辑栏目的单元格了！', $(this));
});

/*给当前单元格添加背景色*/
$('.editOk').click(function(event) {
    $(this).css('backgroundColor', thisBgColor)
});


var tdtxt ;
function tdEdit(ops,tdtxt){//编辑
    if ($(ops).hasClass('tdShow')) {
         tdtxt = $(ops).find('.smaller-font').text();
         layer.confirm('<textarea placeholder="请输入内容...">'+tdtxt+'</textarea>', {title:'编辑'}, function(index){
            tdtxt=""
            tdtxt = $('textarea').val();              
            if (tdtxt == "" || tdtxt == null || tdtxt == undefined){
                $(ops).removeClass('tdShow').empty();
            }else{
                $(ops).find('.smaller-font').text(tdtxt);
            }
            layer.close(index);
         });
    }else{
        layer.confirm('<textarea placeholder="请输入内容..."></textarea>', {title:'编辑'}, function(index){
          tdtxt = $('textarea').val();  
          tdtxt = jQuery.trim(tdtxt);//去除字符串当中的空格符
          if (tdtxt!="" && tdtxt.length!=0){
            $(ops).addClass('tdShow').append(sumPopup);  
            tdtxt = tdtxt.replace(/\n/g, "<br />");
            $(ops).find('.smaller-font').text(tdtxt);   
              
            layer.close(index);
          }else{
            layer.tips('输入不能为空！', '.layui-layer-btn0', {
              tips: [1, '#FF9901'],
              time: 1000
            });
          }
          
        }); 
    }

   
}

function overWork(ops){//加班和取消加班    
    $(ops).hover(function() {
       if ($(ops).hasClass('overtime')) {
            $('#overWork').text('取消加班');           
       }
    }, function() {
        if ($(ops).hasClass('overtime')) {
            $('#overWork').text('加班');
       }
    });
    if ($(ops).hasClass('overtime')) {//取消加班
        $(ops).removeClass('overtime').removeClass('triangle');
    }else{//加班
        $(ops).addClass('overtime').addClass('triangle');
    }
}

function deleteBg(ops){/*删除*/
    $(ops).css('backgroundColor','#fff');
}
/*单击右键出现编辑菜单*/
    $('td.editOk').contextMenu('myMenu1',{
        bindings:{
            'edit': function(ops,tdtxt){
                tdEdit(ops,tdtxt)       
            },
            'deleteBg': function(ops){
                deleteBg(ops)
            },
            'overWork': function(ops){                
                overWork(ops)
            }
        }
    });


// 鼠标悬停在三角上时候，出现tips
    $(document).on('mouseover', '.triangle', function(ops) {
        event.preventDefault();
        var opsName = $(this).parents('.infoList').find("[rowspan='3']").text();
        layer.tips(opsName+' :<br/>计划加班',$(this), {
          tips: [1, '#3595CC'],
          time: 1000
        });
    });
