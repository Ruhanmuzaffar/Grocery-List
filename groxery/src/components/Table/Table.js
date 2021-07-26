import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import "./table.css";
export function Table(props) {
  return (
    <div>
      <table className="table" id="fullTable">
        <TableHead />
        <TableBody
          data={props.data}
          deleteRowHandler={props.deleteRowHandler}
          editContent={props.editContent}
          saveChangeHandler={props.saveChangeHandler}
        />
      </table>
    </div>
  );
}
