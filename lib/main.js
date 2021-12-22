'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {

    atom.commands.add('atom-workspace', {
      'barebone:owo': () => this.owo()
    });
  },

  owo() {
    console.log('Owo');
  }

};
