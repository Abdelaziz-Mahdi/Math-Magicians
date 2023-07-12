import { expect, test } from '@jest/globals';
import calculate from '../calculate';

test('AC', () => {
  expect(calculate({ total: null, next: null, operation: null }, 'AC')).toEqual({ total: null, next: null, operation: null });
});
test('0', () => {
  expect(calculate({ total: null, next: null, operation: null }, '0')).toEqual({ next: '0', total: null });
});
test('1', () => {
  expect(calculate({ total: null, next: null, operation: null }, '1')).toEqual({ next: '1', total: null });
});
test('2', () => {
  expect(calculate({ total: null, next: null, operation: null }, '2')).toEqual({ next: '2', total: null });
});
test('3', () => {
  expect(calculate({ total: null, next: null, operation: null }, '3')).toEqual({ next: '3', total: null });
});
test('4', () => {
  expect(calculate({ total: null, next: null, operation: null }, '4')).toEqual({ next: '4', total: null });
});
test('5', () => {
  expect(calculate({ total: null, next: null, operation: null }, '5')).toEqual({ next: '5', total: null });
});
test('6', () => {
  expect(calculate({ total: null, next: null, operation: null }, '6')).toEqual({ next: '6', total: null });
});
test('7', () => {
  expect(calculate({ total: null, next: null, operation: null }, '7')).toEqual({ next: '7', total: null });
});
test('8', () => {
  expect(calculate({ total: null, next: null, operation: null }, '8')).toEqual({ next: '8', total: null });
});
test('9', () => {
  expect(calculate({ total: null, next: null, operation: null }, '9')).toEqual({ next: '9', total: null });
});
test('.', () => {
  expect(calculate({ total: null, next: null, operation: null }, '.')).toEqual({ next: '0.', operation: null, total: null });
});
test('=', () => {
  expect(calculate({ total: null, next: null, operation: null }, '=')).toEqual({ total: undefined, next: undefined, operation: undefined });
});
test('+', () => {
  expect(calculate({ total: null, next: null, operation: null }, '+')).toEqual({ next: undefined, operation: '+', total: undefined });
});
test('-', () => {
  expect(calculate({ total: null, next: null, operation: null }, '-')).toEqual({ next: undefined, operation: '-', total: undefined });
});
test('x', () => {
  expect(calculate({ total: null, next: null, operation: null }, 'x')).toEqual({ next: undefined, operation: 'x', total: undefined });
});
test('÷', () => {
  expect(calculate({ total: null, next: null, operation: null }, '÷')).toEqual({ next: undefined, operation: '÷', total: undefined });
});
test('%', () => {
  expect(calculate({ total: null, next: null, operation: null }, '%')).toEqual({ next: undefined, operation: '%', total: undefined });
});
test('+/-', () => {
  expect(calculate({ total: null, next: null, operation: null }, '+/-')).toEqual({ next: undefined, operation: undefined, total: undefined });
});
export default calculate;
