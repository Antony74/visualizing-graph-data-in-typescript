import Elk from 'elkjs';
import { ElkGraphJsonToSprotty } from './elkgraph-to-sprotty';
import { createContainer } from './di.config';
import { LocalModelSource, TYPES } from 'sprotty1.0.0';

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
    const model = elkToSprotty.transform(laidOutGraph);

    const container = createContainer('blah');
    const modelSource = container.get<LocalModelSource>(TYPES.ModelSource);
    await modelSource.setModel(model);
    console.log('blah');
};

main();
