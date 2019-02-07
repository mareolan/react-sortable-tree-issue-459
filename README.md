# react-sortable-tree-issue-459

Simulation for [react-sortable-tree#459](https://github.com/frontend-collective/react-sortable-tree/issues/459).

```sh
yarn install
npm start
```

- App wraps root component into DragDropContext and uses SortableTreeWithoutDndContext.
- react-dnd is loaded from CDN (react and react-dom too, but that's not important).

If the app doesn't use externals, all works fine (just comment out `externals` key in `webpack.config.js` and restart).