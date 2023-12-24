import Elk from 'elkjs';
import { ElkGraphJsonToSprotty } from './elkgraph-to-sprotty';

const main = async () => {
    const elk = new Elk();

    const graph = {
        id: 'root',
        layoutOptions: { 'elk.algorithm': 'layered' },
        children: [
            { id: 'n1', width: 30, height: 30 },
            { id: 'n2', width: 30, height: 30 },
            { id: 'n3', width: 30, height: 30 },
        ],
        edges: [
            { id: 'e1', sources: ['n1'], targets: ['n2'] },
            { id: 'e2', sources: ['n1'], targets: ['n3'] },
        ],
    };

    const laidOutGraph = await elk.layout(graph);

    const elkToSprotty = new ElkGraphJsonToSprotty();
    const output = elkToSprotty.transform(laidOutGraph as any);

    console.log(output);
};

main();
