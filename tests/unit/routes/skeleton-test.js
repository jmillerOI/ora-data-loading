import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | skeleton', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:skeleton');
    assert.ok(route);
  });
});
