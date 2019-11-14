export default class Utils {
    /**
     * @desc 深拷贝
     * @param obj
     */
    static deepClone(obj) {
        if (typeof obj !== 'object')
            return;
        let newObj = obj instanceof Array ? [] : {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = typeof obj[key] === 'object' ? Utils.deepClone(obj[key]) : obj[key];
            }
        }
        return newObj;
    }
    /**
     * @desc 合并对象（仅合并目标对象有的属性）
     * @param {object} target
     * @param args
     */
    static mergeOwn(target, ...args) {
        args.forEach(obj => {
            for (let key in obj) {
                if (target.hasOwnProperty(key)) {
                    target[key] = obj[key];
                }
            }
        });
    }
    /**
     * @desc 除颤
     * @param func
     * @param wait
     */
    static debounce(func, wait) {
        let timer = null;
        return (...args) => {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, wait);
        };
    }
    /**
     * @desc 节流
     * @param func
     * @param wait
     */
    static throttle(func, wait) {
        let timer = null;
        return (...args) => {
            if (timer)
                return;
            timer = setTimeout(() => {
                timer = null;
                func.apply(this, args);
            }, wait);
        };
    }
}
