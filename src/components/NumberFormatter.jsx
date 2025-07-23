
export default function numberFormatter(num) {
    const  str = String(num).trim()
    let nums;
    
  switch(String(str).length) {
    case 5: 
       nums =`${str.slice(0, 1)},${str.slice(2)}`;
       console.log(nums);
       
       break; 
    case 6: 
        nums = `${str.slice(0, 3)}, ${str.slice(4)}`;
        break;
    case 7: 
        nums = `${str.slice(0, 2)},${str.slice(3, 5)}, ${str.slice(6)}`;
        break; 
    case 8: 
        nums = `${str.slice(0, 2)},${str.slice(3, 5)}, ${str.slice(6)}`;
        break; 
    case 9: 
        nums =  `${str.slice(0)},${str.slice(1, 3)}, ${str.slice(4, 6)},${str.slice(6)}` 
        break;
    default :
        nums = str
  } 

  return nums
}
