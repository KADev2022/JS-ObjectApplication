// Array containing objects
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
    },

    {
        first_name: "John", 
        last_name: "Smith", 
        age: 37,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    },

    {
        first_name: "James", 
        last_name: "Anderson", 
        age: 31,
        fullname: function () {
            return this.first_name + " " + this.last_name;
        }
    }
];

// Creating HTML elements for objects
let listHolder = document.querySelector("#listHolder");

// Function to render data dynamically
function renderRecord() {
    // For each loop to loop through the data as an item
    myData.forEach((item, index) => {
        // Creates a tr element
        let tr = document.createElement("tr");

        // Adds data to the table
        tr.innerHTML = 
            `<td>${index + 1}</td>
            <td>${item.fullname()}</td>
            <td>${item.age}</td>`;

        // It is appended to the table using the listHolder ID
        listHolder.appendChild(tr);
    });
}

renderRecord();