TweenMax.staggerFrom($('div'),1,{
    y:1000
},0.2)

function downA() {
    TweenMax.from($('.a'),1,{
        y:-1000
    },0.5)
}
function downIO() {
    TweenMax.from($('.io'),2,{
        y:-1000
    },0.5)
}