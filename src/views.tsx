import React from 'react';
import { injectable } from 'inversify';
import { IView } from 'sprotty1.0.0';
//import { TaskNode } from './models';

@injectable()
export class TaskNodeView implements IView {
    render(node: any): any {
        const position = 50;
        return (
            <g>
                <rect
                    class-sprotty-node={true}
                    class-task={true}
                    width={node.size.width}
                    height={node.size.height}
                ></rect>
                <text x={position} y={position + 5}>
                    node.name
                </text>
            </g>
        );
    }
}
