function diff(num1,num2){
    if(num1>num2){
        return num1-num2;
    }else{
        return num2-num1;
    }
}

function calcDisance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(diff(x1,x2),2)+Math.pow(diff(y1,y2),2))
}

console.log(`la distance est de ${calcDisance(2,4,1,3)}`);
