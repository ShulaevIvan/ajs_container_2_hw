import ErrorRepository from '../js/errorRepository.js';

test('test errorRepository Class container', () => {
  const repo = new ErrorRepository();
  const result = new Map();
  expect(repo.container).toEqual(result);
});

test('test errorRepository Class method addErr', () => {
  const repo = new ErrorRepository();
  const result = new Map().set('2', 'testset2');
  repo.addErr('2', 'testset2');
  expect(repo.container).toEqual(result);
});

test('test errorRepository Class method translate Err', () => {
  const repo = new ErrorRepository();
  const result = 'Unknown error';
  repo.addErr('1', 'testset1');
  repo.addErr('2', 'testset2');
  expect(result).toBe('Unknown error');
});
