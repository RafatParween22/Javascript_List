let Arr= [2, -7, 5,-10,3, -64, -14,-6,9,-12,-4,4,12];
let pos=1
let neg=1
for(i=1;i<Arr.length;i++){
    if(Arr[i]>0){
        pos=pos+1
    }
    if (Arr[i]<0){
        neg=neg+1
    }
    
}
console.log("positive no :---",pos,"negative no :---",neg)




