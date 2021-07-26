import { React, Component, ReactDOM } from "react";
import { InputFields } from "./components/inputFields/inputFields";
import { Table } from "./components/Table/Table";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [{ id: 0, itemName: "banana", noOfUnits: 2, pricePerUnit: 3 }],
      itemName: "",
      noOfUnits: 0,
      pricePerUnit: 0,
      grandTotal: 6,
      id: 1,
    };
  }
  // delete row handler

  deleteRowHandler(itemToBeDeletedId) {
    let tempItems = JSON.parse(JSON.stringify(this.state.items));

    let currentItem = tempItems.filter((item) => item.id == itemToBeDeletedId);
    currentItem = currentItem[0];

    const totalPriceOfCurrentItem =
      currentItem.noOfUnits * currentItem.pricePerUnit;

    tempItems = tempItems.filter((item) => item.id != itemToBeDeletedId);

    this.setState((prevState) => {
      return {
        items: tempItems,
        grandTotal: (prevState.grandTotal -= totalPriceOfCurrentItem),
      };
    });
  }
  // update Item

  updateItem(event) {
    const inputValue = event.target.value;

    if (event.target.id == "item") {
      this.setState({ itemName: inputValue });
    } else if (event.target.id == "units") {
      this.setState({ noOfUnits: parseInt(inputValue) });
    } else if (event.target.id == "pricePerUnit") {
      this.setState({ pricePerUnit: parseInt(inputValue) });
    }
  }
  // add item handler

  addItemHandler() {
    if (
      this.state.itemName != "" &&
      this.state.noOfUnits != 0 &&
      this.state.pricePerUnit != 0
    ) {
      const tempStateItems = JSON.parse(JSON.stringify(this.state.items));

      const newItem = {
        id: this.state.id++,
        itemName: this.state.itemName,
        noOfUnits: this.state.noOfUnits,
        pricePerUnit: this.state.pricePerUnit,
      };
      const priceAddition = this.state.noOfUnits * this.state.pricePerUnit;

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
          itemName: "",
          noOfUnits: 0,
          pricePerUnit: 0,
          grandTotal: parseInt((prevState.grandTotal += priceAddition)),
          id: prevState.id++,
        };
      });
    }
  }

  // edit contente

  editContent(e) {
    let value = e.target.textContent;
    // value = parseInt(value);
    console.log(value, typeof value);
    const nextSibling = e.target.nextElementSibling.innerHTML;
    console.log("next>", nextSibling);
    console.log("event", e.target);

    if (e.target.id == "changeItem") {
      this.setState({ itemName: value });
    } else if (e.target.id == "changeUnits") {
      this.setState({ noOfUnits: +value });
    } else if (e.target.id == "changePrice") {
      this.setState({ pricePerUnit: +value });
    }
    console.log("state>>>", this.state);
  }
  // save edited changes

  saveChangeHandler(id) {
 

    let tempItems = JSON.parse(JSON.stringify(this.state.items));

    let UpdatedItems = tempItems.map((item) => {
      if (item.id == id) {
        return {
          itemName: this.state.itemName,
          id: item.id,
          noOfUnits:
            this.state.noOfUnits != 0 ? this.state.noOfUnits : item.noOfUnits,
          pricePerUnit:
            this.state.pricePerUnit != 0
              ? this.state.pricePerUnit
              : item.pricePerUnit,
        };
      } else return item;
    });

    console.log("updated items>>>", UpdatedItems);
    this.setState({
      itemsj: UpdatedItems,
    });
  }
  render() {
    return (
      <div id="container">
        <InputFields
          data={this.state}
          updateItem={this.updateItem.bind(this)}
          addItemHandler={this.addItemHandler.bind(this)}
        />
        <hr />
        <Table
          data={this.state}
          deleteRowHandler={this.deleteRowHandler.bind(this)}
          editContent={this.editContent.bind(this)}
          saveChangeHandler={this.saveChangeHandler.bind(this)}
        />
        <span>
          <strong>grandTotal : {this.state.grandTotal}</strong>
        </span>
      </div>
    );
  }
}

export default App;
