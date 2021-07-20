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
  console.log("clicked");
  console.log("tar>>", event.target);
  console.log(event.currentTarget);

  const { item, units, unitPrice } = event.target;
  console.log(">>", item.value);
  console.log(">>", units.value);
  console.log(">>", unitPrice.value);
  const currentItem = {
    name: item.value,
    units: units.value,
    unitPrice: +unitPrice.value,
  };
  insertItem(currentItem);
  form.reset();
});

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
        <span>Grand Total : </span>
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
  
                  
  
          </tr>
      </thead>
    <tbody id="tableBody">
  
  
    </tbody>
    `;

  fullTable.innerHTML = tableHeader;
}

function insertItem(item) {
  console.log("items>>", items);
  console.log(item, "<<<item");

  items.push(item);
  let tableBody = "";
  items.forEach((item) => {
    tableBody += `
  
      <tb>
          <tr>
              <td>${item.name}</td>
              <td>${item.units}</td>
              <td>${item.unitPrice}</td>
              <td>${item.units * item.unitPrice}</td>
  
          </tr>
      </tb>
  
      `;
  });

  const tb = document.querySelector("#tableBody");
  // const tableBody
  console.log("tb>>.", tb);
  tb.innerHTML = tableBody;
}
