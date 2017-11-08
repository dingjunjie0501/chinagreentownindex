layui.use('element', function () {
    var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
    //监听导航点击
    element.on('nav(demo)', function (elem) {
        console.log(elem)
        $('.layui-nav-item').removeClass('layui-this');
        $(elem).addClass('layui-this');

        var data = $(elem).children('.header-item-a').attr('data-href');
        loadNav(data);
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

function loadNav(data) {
    layui.use('flow', function () {
        var flow = layui.flow;

        var elem = '#main-body';
        $(elem).html('');

        flow.load({
            elem: elem, //流加载容器
            end: ' ',
            done: function (page, next) { //执行下一页的回调
                //模拟数据插入
                setTimeout(function () {
                    var lis = [];
                    lis.push('<h2>' + data + '</h2>')
                    for (var i = 0; i < 8; i++) {
                        lis.push('<li>' + ((page - 1) * 8 + i + 1) + '</li>')
                    }

                    //执行下一页渲染，第二参数为：满足“加载更多”的条件，即后面仍有分页
                    //pages为Ajax返回的总页数，只有当前页小于总页数的情况下，才会继续出现加载更多
                    next(lis.join(''), page < 10); //假设总页数为 10
                }, 500);
            }
        });
    });
}