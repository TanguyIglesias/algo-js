let left= 0;
let right= 2;
let call=1;

function elevator(left, right, call){
    if (left<3 && right<3 && call<3){
        if(right==call && left!=call){
            right='right';
            return right;
        }
else if(left==call && right!=call){
    left='left';
    return left;
}
else if(left==call && right==call){
    right='right';
    return right;
}
else if(Math.abs(call-left)<Math.abs(call-right)){
    left='left';
    return left;
}
else if(Math.abs(call-left)>Math.abs(call-right)){
    right='right';
    return right;
}
else if (Math.abs(call-left)==Math.abs(call-right)){
    right='right';
    return right;
}
}
else{
    right='error';
    return right;
}
}

console.log(elevator(left, right, call));