import operate from "../operate";
import { expect, test} from '@jest/globals';
test('+', () => {
    expect(operate(1, 1, '+')).toEqual('2');
    }
);
test('-', () => {
    expect(operate(2, 1, '-')).toEqual('1');
    }
);
test('x', () => {
    expect(operate(2, 2, 'x')).toEqual('4');
    }
);
test('÷', () => {
    expect(operate(4, 2, '÷')).toEqual('2');
    }
);
test('÷', () => {
    expect(operate(0, 0, '÷')).toEqual(`Can't divide by 0.`);
    }
);
test('%', () => {
    expect(operate(500, 3, '%')).toEqual("2");
    }
);
test('%', () => {
    expect(operate(0, 0, '%')).toEqual(`Can't find modulo as can't divide by 0.`);
    }
);
export default operate;