export function chunk() {
  let result = [];
  //遍历输出成员
  this.forEach((item,index) => {
    //
    let temp = Math.floor(index / count);
    //检验数组是否初始化
    if(!(result[temp] instanceof Array)){
      result[temp] = new Array;
    }
    result[temp].push(item);
  })
  return result;
}
