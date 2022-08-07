let a= [1, 2, 2, 5, 8, 4, 4, 8];
let emp=[];
let pro=1
for(let i=0;i<a.length;i++){
    if (!emp.includes(a[i])){
        emp.push(a[i])
        

    }
}
console.log(emp)

