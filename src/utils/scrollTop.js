import animate from './animate'

export default function(obj,sp,len){
    /* 获取元素 */
    let el = obj || {};
    let ul = el.querySelector("ul");
    let size = ul.querySelectorAll("li").length;
    let timer = null;

    /* 运动函数 */
    const scroll = ()=>{
        animate(ul,{"margin-top":-sp},10,0.01,function(){
            ul.style.marginTop = 0;
            ul.appendChild(ul.querySelectorAll("li")[0]);
        });
    };
    /* 开始函数 */
    const start = ()=>{
        timer = setInterval(scroll,2000);
    };

    /* 运动条件 */
    if(size>len){
        start();
        el.onmousemove = function(){clearInterval(timer);};
        el.onmouseout = function(){start();}
    }
}