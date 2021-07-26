import "./inputFields.css";
export function InputFields(props) {
  return (
    <div className="formContainer">
      <label>item</label>
      <input
        type="text"
        id="item"
        value={props.data.itemName}
        onChange={props.updateItem}
      />
      <label>no of units</label>
      <input
        type="text"
        id="units"
        value={props.data.noOfUnits}
        onChange={props.updateItem}
      />
      <label>price per unit</label>
      <input
        type="text"
        id="pricePerUnit"
        value={props.data.pricePerUnit}
        onChange={props.updateItem}
      />
      <button onClick={props.addItemHandler}>add Item</button>

      <div className="contaner" id="container">
        <span id="span"></span>
      </div>
    </div>
  );
}
