// Loaders Start
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
        let speed = (obj.initialSpeed ? obj.initialSpeed : 4);
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
            background: (obj.colors[2] ? obj.colors[2] : "blue"),
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
            animation: `loader3animation ${obj.speed * 100}ms linear 0.7s forwards`
        })
        $('#hk_loader-3').addClass('show');
    },
    hide: function () {
        $('#hk_loader-3').removeClass('show');
    }
}
// Loaders Ends

// Time ago starts
let TimeAgo = {
    process: function (obj) {
        let dateString = obj.date;
        let res = "";
        try {
            const providedDate = new Date(dateString);
            if (isNaN(providedDate)) {
                throw new Error('Invalid date');
            }
            const now = new Date();
            const seconds = Math.floor((now - providedDate) / 1000);
            if (seconds < 60) {
                res = seconds + 's ago';
            } else if (seconds < 3600) {
                const minutes = Math.floor(seconds / 60);
                res = minutes + 'm ago';
            } else if (seconds < 86400) {
                const hours = Math.floor(seconds / 3600);
                res = hours + 'h ago';
            } else {
                const days = Math.floor(seconds / 86400);
                res = days + 'd ago';
            }
        } catch (error) {
            res = 'Invalid date format';
        }

        $(`#${obj.where}`).html(res)
    }
}
// Time ago ends


// Clock Starts
let Clock = {
    show: function (obj) {
        function updateTime() {
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            let timeString;
            if (obj.ampm) {
                const ampm = hours >= 12 ? 'PM' : 'AM';
                const displayHours = (hours % 12 || 12).toString().padStart(2, '0');
                timeString = `${displayHours}:${minutes}:${seconds} ${ampm}`;
            } else {
                timeString = `${hours}:${minutes}:${seconds}`;
            }
            $(`#${obj.where}`).html(timeString);
        }
        setInterval(updateTime, 1000);
        updateTime();
    }
}
// Clock Ends

// Happyfy Starts
let Happyfy = {

    show : function(obj) {
            let dimensions = obj.dimensions;
            let heading = obj.heading ? `<div class="happyfy-header"><span>${obj.heading}</span> <hr></div>` : ``;
            let content = `<div class="happyfy-body">${obj.content}</div>`
            let footer =  obj.footer ? `<div class="happyfy-footer"><hr><span>${obj.footer}</span></div>` : `<div class="happyfy-footer"><hr><span>Happyfy Notification</span></div>`;
            let closeIcon = obj.closeIcon ? `<div class="happyfy-close"><i class="fa fa-times"></i></div>` : ""

            let data = `<div id="happyfy">${closeIcon} ${heading} ${content} ${footer}</div>`
            $('body').append(data)

            $('#happyfy').css({
                height: dimensions[0],
                width: dimensions[1],
                backgroundColor: obj.bg,
                color: obj.color,
                borderRadius: obj.radius + 'px',
                right: (obj.right ? obj.right : ""),
                left: (obj.left ? obj.left : ""),
                top: (obj.top ? obj.top : ""),
                bottom: (obj.bottom ? obj.bottom : ""),
                zIndex: (obj.index ? obj.index : 1)
            })
            if(obj.autoClose) {
                setTimeout(() => {
                    if(obj.closeEffect == "fade" || obj.closeEffect == ""){
                        $('#happyfy').fadeOut();
                    }
                    else if(obj.closeEffect == "slide") {
                        $('#happyfy').slideUp();
                    }
                }, obj.autoCloseTime * 1000);
            }

            $('.happyfy-close').click(function() {
                if(obj.closeEffect == "fade" || obj.closeEffect == ""){
                    $('#happyfy').fadeOut();
                }
                else if(obj.closeEffect == "slide") {
                    $('#happyfy').slideUp();
                }
            })
            
    }
}
// Happyfy Ends


// Greet Starts
let greets = {
    greet1 : `<div id="greet"><div id="greet-1"><div class="loadingpercenttext"><span class="loadingpercent">5</span>%</div><div class="loadingbar"><span class="loadingprogress"></span></div></div></div>`
}


let Greet = {
    show: function (obj) {
        // Check if the message has been displayed before
        if (!localStorage.getItem('greet1Displayed') || obj.everytime == true) {
            $('body').append(greets.greet1)
            let loadingpercent = Number($('.loadingpercent').html());
            console.log(loadingpercent);
            let loadingInterval = setInterval(() => {
                $('.loadingpercent').html(loadingpercent);
                $('.loadingprogress').css({ width: `${loadingpercent}%` });
                if (loadingpercent < 50) {
                    loadingpercent += 10;
                }
                if (loadingpercent < 80) {
                    loadingpercent += 5;
                }
                if (loadingpercent < 90) {
                    loadingpercent += 3;
                }
                else if (loadingpercent < 100) {
                    loadingpercent += 1;
                }
                else {
                    clearInterval(loadingInterval);
                    localStorage.setItem('greet1Displayed', 'true');
                    $('#greet-1').remove();
                }
            }, 1000);
        }
    }
}
// Greet Ends

