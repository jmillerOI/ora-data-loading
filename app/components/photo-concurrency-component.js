import Component from '@ember/component';
import {task, timeout} from 'ember-concurrency';
import {get, set} from '@ember/object';
import {inject as service} from '@ember/service';

export default Component.extend({
  tagName: '',
  classNames: ['card', 'photo-card', 'skeleton'],
  data: null,
  store: service(),

  init() {
    this._super(...arguments);
    this.data = [];

    get(this, 'fetchData').perform();
  },

  fetchData: task(function* () {
    let users = yield get(this, 'store').findAll('photo', {include: 'user'});
    return set(this, 'data', users);
  }).restartable()
});
