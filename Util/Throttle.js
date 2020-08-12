
/**
  *  节流
  * fn是我们需要包装的事件回调, delay是时间间隔的阈值
  */
export const _throttle = (fn, delay) => {
    let last = 0, timer = null;

    return function () {
        let context = this;
        let args = arguments;
        let now = new Date();

        if (now - last < delay) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fn.apply(context, args)
            }, delay)
        } else {
            last = now;
            fn.apply(context, args)
        }
    }
};