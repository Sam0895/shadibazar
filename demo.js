// Advance Araay methed 

// forEach(),filter(),find(),some(),every(),->  Higher Order

let arr=[{"id":1},{"id":2},{"id":3},{"id":4},{"id":5},{"id":6}];
//forEach():void 
// arr.forEach(function(item){
//     console.log(item);
// })
//==============================================================

//filter():Array

   const filterArray=arr.filter(function(item){
    if(item.id=="2"){
        return item;

    }
})
console.log(filterArray);

//----------------------------------------------------------------------
//map  








//----------------------------------------------------------------------------
// find():element
 const findArray=arr.find(function(item){
     if(item.id=="2"){
         return item 
     }
 })