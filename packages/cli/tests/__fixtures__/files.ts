import { FileType } from '@esmbly/types';

export const files = [
  {
    content: 'function foo() { return 1; }',
    dir: '/',
    name: 'fileA',
    type: FileType.JavaScript,
  },
  {
    content: 'function test() { return 2; }',
    dir: '/dir',
    name: 'fileB',
    type: FileType.JavaScript,
  },
];
