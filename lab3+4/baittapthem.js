var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
    ];


    var group = voters.reduce(function (a,voter){
        var age = voter.age;
 
    if (age >= 20 && age <= 30) {
        a.from20to29  = (a.from20to29  || 0) + 1;
      } else if (age >= 30 && age <= 40) {
        a.from30to39   = (a.from30to39  || 0) + 1;
      } else if (age >= 40) {
        a.from40up   = (a.from40up   || 0) + 1;
      }
      return a;

    },{});
    console.log(group);
    // dùng hàm reduce
    // 1. trả về một đối tượng
    // Số lượng người vote từ 20-30 tuổi
    // Số lượng người vote từ 30-40 tuổi
    // Số lượng người vote từ 40 trở lên