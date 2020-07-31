import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | entry', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a post title', async function(assert) {

    await render(hbs`<Entry />`);

    assert.dom('.post').exists();
    assert.dom('.post').hasText('Title:');
  });
});
