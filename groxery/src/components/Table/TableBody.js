import { Rows } from "./Rows";
import "./table.css";
export function TableBody(props) {
  const data = props.data;

  return (
    <Rows
      data={data}
      deleteRowHandler={props.deleteRowHandler}
      editContent={props.editContent}
      saveChangeHandler={props.saveChangeHandler}
    />
  );
}
