define('growlapse-client/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/create.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/create.js should pass ESLint\n\n6:15 - \'$\' is not defined. (no-undef)\n7:17 - \'$\' is not defined. (no-undef)\n8:19 - \'$\' is not defined. (no-undef)\n21:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n22:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n23:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n24:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n24:37 - \'response\' is defined but never used. (no-unused-vars)\n25:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n26:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n27:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n28:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n29:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n30:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('controllers/timelapses.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/timelapses.js should pass ESLint\n\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n18:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n30:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n31:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('models/timelapses.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/timelapses.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/create.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/create.js should pass ESLint\n\n');
  });

  QUnit.test('routes/timelapses.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/timelapses.js should pass ESLint\n\n');
  });
});