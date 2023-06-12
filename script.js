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

let listHolder = document.querySelector("#listHolder");
let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let age = document.querySelector("#age");
let btnSubmit = document.querySelector("#btnSubmit");

// Submit button functionality
btnSubmit.addEventListener("click", function () {
    // Alert message will show if the firstname, lastname and age are empty
    if (firstName.value.trim() == "" || lastName.value.trim() == "" || age.value.trim() == "") {
        alert("Fill out the form completely");
    } else {
        // Otherwise new data is processed
        let copyData = [...myData];
        let newEntry = {
            first_name: firstName.value.trim(),
            last_name: lastName.value.trim(),
            age: age.value.trim(),
            fullname: function () {
                return this.first_name + " " + this.last_name;
            }
        };

        copyData.push(newEntry); // Adds a new entry to the copyData array
        myData.splice(0, myData.length, ...copyData); // Overwrites the original array
        console.log(myData);
        listHolder.innerHTML = "";

        renderRecord(); // Renders the data on the browser
        firstName.value = "";
        lastName.value = "";
        age.value = "";
    }
});

// Function to render data dynamically
function renderRecord() {
    // For each loop to create elements as an object
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