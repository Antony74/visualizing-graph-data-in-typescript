import { createMachine } from 'xstate';

const machine = createMachine({
    states: {
        '@babel/runtime': { on: { 1: 'redux' } },
        'loose-envify': { on: { 1: 'react', 2: 'react-dom' } },
        react: { on: { 1: 'react-redux' } },
        'react-dom': { on: { 1: 'react-redux' } },
        'react-redux': {},
        redux: { on: { 1: 'react-redux' } },
        'regenerator-runtime': { on: { 1: '@babel/runtime' } },
        scheduler: { on: { 1: 'react-dom' } },
    },
});

export default machine;
