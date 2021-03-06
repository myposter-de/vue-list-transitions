// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Velocity from 'velocity-animate';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#staggered-list-demo',
  name: 'App',
  data() {
    return {
      query: '',
      list: [
        { msg: 'Thomas' },
        { msg: 'Dave Klingeberg' },
        { msg: 'Berni Leitzke' },
        { msg: 'Toni D\'Angelo' },
        { msg: 'Dimitri Reifschneider' },
        { msg: 'Sebastian Appelt' },
        { msg: 'Sergei Kulichkov' },
        { msg: 'Jakob Hirscheider' },
        { msg: 'Claus Gehrke' },
        { msg: 'Axel Klemm' },
        { msg: 'Thomas' },
        { msg: 'Berit Haak' },
        { msg: 'Bernd Feldmayer' },
        { msg: 'Selina Kuinn' },
        { msg: 'Walter Jenner' },
        { msg: 'Adnan Mujkanovic' },
        { msg: 'Lilia Kraft' },
        { msg: 'Aleksey Razbakov' },
        { msg: 'Dominik Arnoldi' },
        { msg: 'Peter Dickten' },
        { msg: 'Robert Hostlowsky' },
        { msg: 'Michael Westrich' },
        { msg: 'Karlheinz Kleinhenz' },
        { msg: 'kelyane' },
        { msg: 'Fabian Klose' },
        { msg: 'Valentin Schellhaas' },
        { msg: 'Simon Ittmann' },
        { msg: 'Karthikeyan Palaniswamy' },
        { msg: 'Miloš Sutanovac' },
        { msg: 'Joe Flo' },
        { msg: 'Philipp Renoth' },
        { msg: 'Daniel Schleindlsperger' },
        { msg: 'Markus Heer' },
        { msg: 'Örsan' },
        { msg: 'Thomas Zolynski' },
        { msg: 'Max Langer' },
        { msg: 'Martin Straub' },
        { msg: 'Alex Gretschann' },
        { msg: 'Andreas' },
        { msg: 'leif' },
        { msg: 'Dejan Dujmovic' },
        { msg: 'Alexander' },
        { msg: 'Mario Lemke' },
        { msg: 'Carlos Blas C' },
        { msg: 'Alexander Koenig' },
        { msg: 'Robert Kaiser' },
        { msg: 'Vladimir Kalenyuk' },
        { msg: 'Marcus S.' },
        { msg: 'Jonas Albrecht' },
        { msg: 'plusgut' },
        { msg: 'Anton Caceres' },
        { msg: 'Marc' },
        { msg: 'ray Qin' },
        { msg: 'Constantin Bahlmann' },
        { msg: 'Benedict B.' },
        { msg: 'Hyunjoo' },
        { msg: 'Basti' },
        { msg: 'Jiří Chára' },
        { msg: 'Orhan' },
        { msg: 'Valery Mikhnevich' },
        { msg: 'Flo' },
        { msg: 'Ines Akrap' },
        { msg: 'Ping Chen' },
        { msg: 'Carsten Rösnick-Neugebauer' },
        { msg: 'Le Tu Luong' },
        { msg: 'Habtom' },
        { msg: 'Florian Schinagl' },
        { msg: 'Lorincz Csaba' },
        { msg: 'David Lutkin' },
        { msg: 'Pu Bär' },
        { msg: 'Luisa Ruppert' },
        { msg: 'Thiemo Antonczyk' },
        { msg: 'Lanei L' },
        { msg: 'Xa Javier' },
        { msg: 'Philipp Neugebauer' },
        { msg: 'Adelina Gerdt' },
        { msg: 'Dominic Frei' },
        { msg: 'Matheus Lisboa de Barros' },
        { msg: 'Francesco' },
        { msg: 'Admir Mustafic' },
        { msg: 'Dominic' },
        { msg: 'Lasse' },
        { msg: 'Stefan Oblinger' },
        { msg: 'Sebastian Feldmann' },
        { msg: 'Kai S. Huxmann' },
        { msg: 'Sebastian Schwaiger' },
        { msg: 'Max Tafelmayer' },
        { msg: 'Oliver Wahl' },
        { msg: 'Sebastian Sellmeier' },
        { msg: 'B. R.' },
        { msg: 'Michael Haeuslmann' },
        { msg: 'Achim Rohn' },
        { msg: 'Tobias Stadler' },
        { msg: 'Ben Otto' },
        { msg: 'oli' },
        { msg: 'Vanessa Böhner' },
        { msg: 'David S.' },
        { msg: 'Kiki Sergel' },
        { msg: 'Stefan' },
        { msg: 'Elaine B.' },
      ],
    };
  },
  computed: {
    computedList() {
      const vm = this;
      return this.list.filter(item =>
        item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1);
    },
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      const delay = el.dataset.index * 5;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 1, height: '1.6em' },
          { complete: done },
        );
      }, delay);
    },
    leave(el, done) {
      const delay = el.dataset.index * 5;
      setTimeout(() => {
        Velocity(
          el,
          { opacity: 0, height: 0 },
          { complete: done },
        );
      }, delay);
    },
  },
});
