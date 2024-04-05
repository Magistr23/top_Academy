import { src, dest } from "gulp";

const 
    SRC = './src/',
    DEST = './dest/';



export function html() {
    return src(SRC+'*.html').pipe(dest(DEST));
}



// export function task1(cb) {
//     console.log('task 1');
//     cb();
//   }
   
//   export async function task2() {
//     console.log('task 2');
//   }
   
//   export const task3 = cb => { console.log('task 3'); cb() };
//   export const task4 = async () => console.log('task 4');