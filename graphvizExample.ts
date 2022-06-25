import fs from 'fs/promises';
import graphviz from 'graphviz';
import { graphviz as nodegraphviz } from 'node-graphviz';

const graph = graphviz.digraph('Example');

graph.addEdge('loose-envify', 'react');
graph.addEdge('loose-envify', 'react-dom');
graph.addEdge('scheduler', 'react-dom');
graph.addEdge('regenerator-runtime', '@babel/runtime');
graph.addEdge('@babel/runtime', 'redux');
graph.addEdge('react', 'react-redux');
graph.addEdge('react-dom', 'react-redux');
graph.addEdge('redux', 'react-redux');

nodegraphviz.layout(graph.to_dot(), 'svg').then(svg => fs.writeFile('graphvizExample.svg', svg));
