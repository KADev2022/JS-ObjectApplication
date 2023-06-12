// Array containing object
let myData = [
    {
        first_name: "Paul", 
        last_name: "Lucero", 
        age: 32,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "Kasey", 
        last_name: "Payne", 
        age: 33,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "Lakeisha", 
        last_name: "Rivas", 
        age: 27,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    }
];

console.log(myData[0].first_name);
console.log(myData[0].last_name);
console.log(myData[0].age);
console.log(myData[0].fullname());