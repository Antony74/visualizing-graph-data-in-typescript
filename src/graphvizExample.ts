import fs from 'fs/promises';
import path from 'path';

import graphviz from 'graphviz';
import { graphviz as nodegraphviz } from 'node-graphviz';

const graph = graphviz.digraph('Example');

graph.addEdge('loose-envify', 'react', { label: 1 });
graph.addEdge('loose-envify', 'react-dom', { label: 2 });
graph.addEdge('scheduler', 'react-dom', { label: 1 });
graph.addEdge('regenerator-runtime', '@babel/runtime', { label: 1 });
graph.addEdge('@babel/runtime', 'redux', { label: 1 });
graph.addEdge('react', 'react-redux', { label: 1 });
graph.addEdge('react-dom', 'react-redux', { label: 1 });
graph.addEdge('redux', 'react-redux', { label: 1 });

const filename = path.join(__dirname, 'graphvizExample.svg');

nodegraphviz.layout(graph.to_dot(), 'svg').then(svg => fs.writeFile(filename, svg));
