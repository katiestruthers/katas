const assert = require('chai').assert;
const titleCase = require('../titleCase');

describe("#titleCase", () => {
  it("titleCase('this is an example') should return 'This Is An Example'", () => {
    assert.strictEqual(titleCase('this is an example'), 'This Is An Example');
  });
  it("titleCase('test') should return 'Test'", () => {
    assert.strictEqual(titleCase('test'), 'Test');
  });
  it("titleCase('i r cool') should return 'I R Cool'", () => {
    assert.strictEqual(titleCase('i r cool'), 'I R Cool');
  });
  it("titleCase('WHAT HAPPENS HERE') should return 'What Happens Here'", () => {
    assert.strictEqual(titleCase('WHAT HAPPENS HERE'), 'What Happens Here');
  });
  it("titleCase('') should return ''", () => {
    assert.strictEqual(titleCase(''), '');
  });
  it("titleCase('A') should return 'A'", () => {
    assert.strictEqual(titleCase('A'), 'A');
  });
});