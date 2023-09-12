let Loaders = {
    loader1: `<div class="hk_loader" id="hk_loader-1"></div>`,
    loader2: `<div class="hk_loader" id="hk_loader-2">
                <span id="hk_loader-2_1" class="loader-span" style="--i: 0.3s;"></span>
                <span id="hk_loader-2_2" class="loader-span" style="--i: 0.7s;"></span>
                <span id="hk_loader-2_3" class="loader-span" style="--i: 1.1s;"></span>
            </div>`
}


let Loader1 = {
    show: function (obj) {
        $(`#${obj.where}`).html(Loaders.loader1)
        let dimensions = obj.dimensions;
        $('#hk_loader-1').css({
            height: dimensions[0],
            width: dimensions[1],
            border: obj.stroke + 'px solid ' + obj.color,
            animation: 'loader1animation ' + obj.duration * 100 + 'ms linear infinite'
        });
        $('#hk_loader-1').addClass('show');
    }
}
let Loader2 = {
    show: function (obj) {
        $(`#${obj.where}`).html(Loaders.loader2)
        let dimensions = obj.dimensions;
        $('#hk_loader-2').css({
            height: dimensions[0],
            width: dimensions[1],
        });
        $('#hk_loader-2_1').css({
            background: obj.colors[0],
            animation: `loader2animation ${(obj.initialSpeed) * 100}ms linear infinite alternate`,
        })
        $('#hk_loader-2_2').css({
            background: obj.colors[1],
            animation: `loader2animation ${(obj.initialSpeed + (obj.initialSpeed / 4)) * 100}ms linear infinite alternate`,
        })
        $('#hk_loader-2_3').css({
            background: obj.colors[2],
            animation: `loader2animation ${(obj.initialSpeed + (obj.initialSpeed / 2)) * 100}ms linear infinite alternate`,
        })
        $('#hk_loader-2').addClass('show');
    }
}