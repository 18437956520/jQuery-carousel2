setTimeout(function () {
    $('.images>img:nth-child(1)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-100%)'
    })
    $('.images>img:nth-child(1)').on('transitionend', function(e){
        $(e.currentTarget).addClass('right').css({ transform: 'none' })
    }) //监听1结束后回到右边
}, 2000)


setTimeout(function () {
    $('.images>img:nth-child(2)').css({
        transform: 'translateX(-200%)'
    })
    $('.images>img:nth-child(3)').css({
        transform: 'translateX(-100%)'
    })
}, 4000)








































// setTimeout(function () {
//     $('.images>img:nth-child(3)').css({
//         transform: 'translateX(-200%)'
//     })
//     $('.images>img:nth-child(4)').css({
//         transform: 'translateX(-100%)'
//     })
// }, 6000)
// setTimeout(function () {
//     $('.images>img:nth-child(4)').css({
//         transform: 'translateX(-200%)'
//     })
//     $('.images>img:nth-child(5)').css({
//         transform: 'translateX(-100%)'
//     })
// }, 8000)
// setTimeout(function () {
//     $('.images>img:nth-child(5)').css({
//         transform: 'translateX(-200%)'
//     })
//     $('.images>img:nth-child(6)').css({
//         transform: 'translateX(-100%)'
//     })
// }, 10000)