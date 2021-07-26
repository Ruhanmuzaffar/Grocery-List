import "./table.css";
export function Rows(props) {
  let key = 0;

  return (
    <tbody id="tableBody">
      {props.data.items.map((item) => {
        return (
          <tr key={key++}>
            <td
              contentEditable="true"
              onInput={props.editContent}
              id="changeItem"
            >
              {item.itemName}
            </td>
            <td
              contentEditable="true"
              onInput={props.editContent}
              id="changeUnits"
            >
              {item.noOfUnits}
            </td>
            <td
              contentEditable="true"
              onInput={props.editContent}
              id="changePrice"
            >
              {item.pricePerUnit}
            </td>
            <td>{item.noOfUnits * item.pricePerUnit}</td>
            <td>
              <button onClick={() => props.saveChangeHandler(item.id)}>
                <span className="material-icons">save</span>
              </button>
            </td>
            <td>
              <button
                className="delete"
                onClick={() => props.deleteRowHandler(item.id)}
              >
                <span className="material-icons">delete</span>
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
