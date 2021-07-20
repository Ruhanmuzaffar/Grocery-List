export function createForm() {
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
