/*
 * @Author: douruihuan douruihuan.vendor@sensetime.com
 * @Date: 2023-04-06 12:40:09
 * @LastEditors: douruihuan douruihuan.vendor@sensetime.com
 * @LastEditTime: 2023-04-06 13:01:07
 * @FilePath: /sense-earth-v3/Users/douruihuan.vendor/Desktop/myPro/notes/ts/Qs/1.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface Todo{
    title: string,
    desc:string,
    completed:Boolean
}

type TodoPreview = MyPick<Todo,'title'|'desc'>

const todo:TodoPreview = {
    title:'1234',
    desc:'hdiahf',
}

// 个人理解：
// T:Todo,K:'title'|'desc'
// K应包涵于Todo的key，🏪小key取T中的类型
type MyPick<T,K extends keyof T> = {
   [key in K]:T[key]
}


export{}