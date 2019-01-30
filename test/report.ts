import { test } from 'beater';
import { fixture } from 'beater-helpers';
import assert from 'power-assert';
import sinon, { SinonStub } from 'sinon';
import reporter from '../src/';

interface Context {
  log: SinonStub;
}
const setUp = (): Context => {
  const log = sinon.stub();
  return { log };
};
const tearDown = (_: Context) => void 0;

const category = '/';
const reportTests = [
  test(category + 'empty', fixture(setUp, tearDown, async ({ log }) => {
    await reporter({}, { log });
    assert(log.called === false);
  })),
  test(category + 'one count', fixture(setUp, tearDown, async ({ log }) => {
    await reporter({
      key1: 123
    }, { log });
    assert(log.calledWith('key1:123'));
  })),
  test(category + 'two counts', fixture(setUp, tearDown, async ({ log }) => {
    await reporter({
      key1: 123,
      key2: 456
    }, { log });
    assert(log.firstCall.calledWith('key1:123'));
    assert(log.secondCall.calledWith('key2:456'));
  }))
];

export { reportTests as tests };
