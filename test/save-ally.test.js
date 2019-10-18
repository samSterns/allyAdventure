import { getAlly, saveAlly } from '../data/save-ally.js';
const test = QUnit.test;
QUnit.module('save ally profile');
QUnit.testStart(() => {
    window.localStorage.clear();
});
test('saveAlly sets ally and returns on getAlly', (assert) => {
    const ally = {
        name: null,
        animal: 'raccoon',
        wp: 35,
        sc: 20
    };
  
    saveAlly(ally);
    const result = getAlly();
  
    assert.deepEqual(result, ally);
});