const container = document.querySelector("#main");
const items = [];
console.log("it works");

// form creation
createForm();

// table header creattion
createTable();

const addItemBtn = document.querySelector("#addItem");
const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { item, units, unitPrice } = event.target;

  const currentItem = {
    name: item.value,
    units: units.value,
    unitPrice: +unitPrice.value,
  };
  insertItem(currentItem);
  form.reset();
});

// for (const button in buttons) {
//   console.log(button);
// }

console.log("here");
// buttons.addEventListener("click", () => {
//   console.log("clicked");
// });

/*---------------functions-------------------- */

function createForm() {
  const inputs = `

  <form id="form">
      <label for="">item</label>
      <input type="text" class="item" id="item"  name="item"/>
      <label for="">no of units</label>
      <input type="text" class="units" id="units" />
      <label for="">price per unit</label>
      <input type="text" class="unitPrice" id="unitPrice" />
      <input type="submit"class="addItem" id="addItem" />

  </form>

  <div class="contaner" id="container">
        <table class="fullTable" id="fullTable"></table>
        <span id="span"></span>
  </div>

  `;
  main.innerHTML = inputs;
}

function createTable() {
  const fullTable = document.querySelector("#fullTable");
  const tableHeader = `
  
      <thead>
          <tr>
                  
                      <th>Item</th>
                      <th>Units</th>
                      <th>Price Per Unit</th>
                      <th>Total Prices</th>
                      <th>Edit</th>
                      <th>Delete</th>
                      
  
           </tr>
      </thead>
    <tbody id="tableBody">
  
  
    </tbody>
    `;

  fullTable.innerHTML = tableHeader;
}

function insertItem(item) {
  items.push(item);
  let tableBody = "";

  let grandTotal = 0;
  items.forEach((item, index) => {
    grandTotal += item.units * item.unitPrice;
    //const deleteButton = `<button ><span class="material-icons">delete</span></button>`;
    const deleteButton = document.createElement("button");
    deleteButton.id = index;
    console.log(deleteButton);

    tableBody += `
  
      
          <tr >
              <td>${item.name}</td>
              <td>${item.units}</td>
              <td>${item.unitPrice}</td>
              <td>${item.units * item.unitPrice}</td>
              <td><button ><span class="material-icons">edit</span></button></td>
              <td><button class="delete" ><span class="material-icons">delete</span></button></td>
  
          </tr>
     
  
      `;
  });

  const tb = document.querySelector("#tableBody");

  tb.innerHTML = tableBody;
  const span = document.querySelector("#span");
  span.innerHTML = `
  <strong>
    Grand Total : ${grandTotal}
  </strong>
  `;

  // /................
  const deleteButtons = Array.from(document.querySelectorAll(".delete"));

  console.log("deleteButtons.>>", deleteButtons);

  const tableBod = document.querySelector("#tableBody");
  const row = document.querySelector("#row");

  deleteButtons.forEach((delButton, index) => {
    delButton.id = index;
    delButton.addEventListener("click", () => {
      console.log("this>>", this);
      console.log("it was clicked", delButton.id);
      // tableBod.removeChild(row);
      const closest = delButton.closest("tr");
      console.log(closest, "<<<closest");

      console.log(tableBod, "tableBod");
      tableBod.removeChild(closest);
    });
    console.log("delete button", delButton);
  });

  let button = document.querySelector("button");
  // console.log("button>>", button);

  button.addEventListener("click", () => {
    console.log("it works");
  });
}
