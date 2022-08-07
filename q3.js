let b=[6,1,3,5,6,3,1];
emp=[];
pro=1;
for(i=1;i<b.length;i++){
    if (!emp.includes(b[i])){
        emp.push(b[i])
        pro=pro*b[i]
        

    }
}
console.log(emp)
console.log(pro)




// var list1 = [1,2,3,4,5,6,6,2,5]
// elements=[]
// for(var i of list1){
//    if (!elements.includes(list1[i])){
//        elements.push(list1[i])
//    }
// }
// console.log(elements);

// console.log(3+4)




// var list1 = [1,2,3,4,5,6]
// // var list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list1){
//    if (!list1.includes(i)){
//        elements.push(list1[i])
//    }
// }
// console.log(elements);