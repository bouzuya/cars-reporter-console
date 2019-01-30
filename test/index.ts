import { Test, run } from 'beater';
import { tests as reportTests } from './report';

const tests = ([] as Test[])
  .concat(reportTests);

run(tests).catch(() => process.exit(1));
