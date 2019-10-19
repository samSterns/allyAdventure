import { makeAlly } from '../home/make-ally.js';
const test = QUnit.test;
QUnit.module('make ally character');
test('create ally object from form data', (assert) => {
   
    const formData = new FormData();
    formData.set('animal', 'raccoon');
    const expected = 	 {
        'animal': 'raccoon',
        'bronze': false,
        'completed': {},
        'gold': false,
        'name': null,
        'sc': 20,
        'silver': false,
        'wp': 35
    };
  
    const ally = makeAlly(formData);
   
    assert.deepEqual(ally, expected);
});