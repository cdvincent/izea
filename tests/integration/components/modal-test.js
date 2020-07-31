import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | modal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a modal the displays all post info with collapsible button for author info', async function(assert) {

    await render(hbs`<Modal />`);

    assert.dom('.button').hasText('Learn More');
    await click('.button')

    assert.dom('.modal').exists();
    assert.dom('.authBtn').hasText('About the author');
    await click('.authBtn')
    assert.dom('.authBtn').hasText('Hide');
    await click('.authBtn')
    assert.dom('.authBtn').hasText('About the author');
  });
});
