let Loaders = {
    loader1: `<div class="hk_loader" id="hk_loader-1"></div>`,
    loader2: `<div class="hk_loader" id="hk_loader-2"><span id="hk_loader-2_1" class="loader-span" style="--i: 0.3s;"></span><span id="hk_loader-2_2" class="loader-span" style="--i: 0.7s;"></span><span id="hk_loader-2_3" class="loader-span" style="--i: 1.1s;"></span></div>`,
    loader3: `<div id="hk_loader-3" class="hk_loader"><span></span></div>`
}


let Loader1 = {
    show: function (obj) {
        $(`#${obj.where}`).html(Loaders.loader1)
        let dimensions = obj.dimensions;
        $('#hk_loader-1').css({
            height: dimensions[0],
            width: dimensions[1],
            border: (obj.stroke ? obj.stroke : 2) + 'px solid ' + (obj.color ? obj.color : '#000'),
            animation: 'loader1animation ' + (obj.duration ? obj.duration : 7) * 100 + 'ms linear infinite'
        });
        $('#hk_loader-1').addClass('show');
    },
    hide: function () {
        $('#hk_loader-1').removeClass('show');
    }
}
let Loader2 = {
    show: function (obj) {
        $(`#${obj.where}`).html(Loaders.loader2)
        let dimensions = obj.dimensions;
        let speed = (obj.initialSpeed ? obj.initialSpeed :4);
        $('#hk_loader-2').css({
            height: dimensions[0],
            width: dimensions[1],
        });
        $('#hk_loader-2_1').css({
            background: (obj.colors[0] ? obj.colors[0] : "red"),
            animation: `loader2animation ${(speed) * 100}ms linear infinite alternate`,
        })
        $('#hk_loader-2_2').css({
            background: (obj.colors[1] ? obj.colors[1] : "green"),
            animation: `loader2animation ${(speed + (speed / 4)) * 100}ms linear infinite alternate`,
        })
        $('#hk_loader-2_3').css({
            background:( obj.colors[2] ? obj.colors[2] : "blue"),
            animation: `loader2animation ${(speed + (speed / 2)) * 100}ms linear infinite alternate`,
        })
        $('#hk_loader-2').addClass('show');
    },
    hide: function () {
        $('#hk_loader-2').removeClass('show');
    }
}

let Loader3 = {
    show: function (obj) {
        $(`#${obj.where}`).html(Loaders.loader3)
        let dimensions = obj.dimensions;
        $('#hk_loader-3').css({
            height: dimensions[0],
            width: dimensions[1],
            background: (obj.color ? obj.color : "#000"),
        });
        $('#hk_loader-3 span').css({
            background: (obj.loadingColor ? obj.loadingColor : "#fff"),
            width: (obj.initialProgress ? obj.initialProgress : 10) + '%',
            animation: `loader3animation ${obj.speed*100}ms linear 0.7s forwards`
        })
        $('#hk_loader-3').addClass('show');
    },
    hide: function () {
        $('#hk_loader-3').removeClass('show');
    }
}