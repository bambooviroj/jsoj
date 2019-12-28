const assert = require('assert');
var mocha = require('mocha')
var describe = mocha.describe

import L from 'mnemonist/linked-list'

let list = L.from([1, 2, 3]);

for (let i = 0; i < 10; i++) {
	i |> console.log
}

list |> console.log

describe('Array', () => {
	describe('#indexOf1()', () => {
		it('should return -1 when the value is not present', () => {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});
