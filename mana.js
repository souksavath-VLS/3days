let z = 5;


function Calculator(x, y) {
  setTimeout(() => {

    
    z = x + y;
    console.log('Z =' ,z)
  }, 2000);
}

Calculator(5 , 5);
console.log('==================================== Display ========================================')
