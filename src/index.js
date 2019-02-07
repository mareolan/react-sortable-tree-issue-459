import React from "react";
import ReactDOM from "react-dom";
import { DragDropContext } from "react-dnd";
import ReactDndHtml5Backend from "react-dnd-html5-backend";
import { SortableTreeWithoutDndContext } from "react-sortable-tree";
import "react-sortable-tree/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [{ title: 'Chicken', children: [{ title: 'Egg' }] }],
    };
  }

  render() {
    return (
      <div>
        There should be a tree here:
        <div style={{ height: 400 }}>
          <SortableTreeWithoutDndContext
            treeData={this.state.treeData}
            onChange={treeData => this.setState({ treeData })}
          />
        </div>
      </div>
    );
  }
}
const DndApp = DragDropContext(ReactDndHtml5Backend)(App);

export function render(element) {
  ReactDOM.render(
    <DndApp>

    </DndApp>,
    element
  );
}