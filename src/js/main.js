layui.use('element', function () {
    var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    //监听导航点击
    element.on('nav(demo)', function (elem) {
        console.log(elem)
        $('.layui-nav-item').removeClass('layui-this');
        $(elem).addClass('layui-this');
    });
});

layui.use('flow', function () {
    var flow = layui.flow;

    flow.load({
        elem: '#category', //流加载容器
        end: ' ',
        done: function (page, next) { //执行下一页的回调
            //数据插入
            var template = $.ajax({
                url: "category.html",
                async: false
            });
            next(template.responseText, false);
        }
    });

    flow.load({
        elem: '#new', //流加载容器
        end: ' ',
        done: function (page, next) { //执行下一页的回调
            //数据插入
            var template = $.ajax({
                url: "new.html",
                async: false
            });
            next(template.responseText, false);
        }
    });

    flow.load({
        elem: '#tieba', //流加载容器
        end: ' ',
        done: function (page, next) { //执行下一页的回调
            //数据插入
            var template = $.ajax({
                url: "tieba.html",
                async: false
            });
            next(template.responseText, false);
        }
    });

    flow.load({
        elem: '#newspaper', //流加载容器
        end: ' ',
        done: function (page, next) { //执行下一页的回调
            //数据插入
            var template = $.ajax({
                url: "newspaper.html",
                async: false
            });
            next(template.responseText, false);
        }
    });
});