'use babel';

export default {

  activate() {

    atom.commands.add('atom-workspace', {
      'barebone:owo': () => this.owo()
    });
  },

  owo() {
    console.log('Owo');
  }

};
