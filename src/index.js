module.exports = function check(str, bracketsConfig) {
  let brackets = {}; 
  bracketsConfig.forEach((el)=> {
        let key = el[1];
        let value = el[0]; 
        brackets[key] = value;
  })
    
  let stack = [];
  for (let i = 0; i < str.length; i++){
    let current = str[i];
    let top = stack[stack.length - 1];
    if ((brackets[current]!=undefined)&&(brackets[current] === top)){
      stack.pop();
    } else {
      stack.push(current);        
    }
  }  
  
  return stack.length === 0; 
  
  
}