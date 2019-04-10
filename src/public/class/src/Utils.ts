interface StringKey {
  [key: string]: any
}

export default class Utils {
  /**
   * @desc 深拷贝
   * @param obj
   */
  static deepClone (obj: StringKey): any {
    if (typeof obj !== 'object') return
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        (newObj as any)[key] = typeof obj[key] === 'object' ? Utils.deepClone(obj[key]) : obj[key]
      }
    }

    return newObj
  }

  /**
   * @desc 合并对象（仅合并目标对象有的属性）
   * @param {object} target
   * @param args
   */
  static mergeOwn (target: StringKey, ...args: StringKey[]) {
    args.forEach(obj => {
      for (let key in obj) {
        if (target.hasOwnProperty(key)) {
          target[key] = obj[key]
        }
      }
    })
  }

  /**
   * @desc 除颤
   * @param func
   * @param wait
   */
  static debounce (func: Function, wait: number): Function {
    let timer: any = null
    return (...args: any[]): any => {
      if (timer) clearTimeout(timer)

      timer = setTimeout(() => {
        func.apply(this, args)
        timer = null
      }, wait)
    }
  }

  /**
   * @desc 节流
   * @param func
   * @param wait
   */
  static throttle (func: Function, wait: number): Function {
    let timer: any = null
    return (...args: any[]): any => {
      if (timer) return

      timer = setTimeout(() => {
        timer = null
        func.apply(this, args)
      }, wait)
    }
  }
}
