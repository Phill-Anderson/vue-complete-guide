Vue.createApp({
  data() {
    return {
      courseGoal: "My course Goal",
      goals: [],
      enteredValue: "",
      user: {
        name: "Phill Anderson",
        email: "phill@gmail.com",
      },
      isLogin: false,
      linkHref: "https://vuejs.org",
      goalA: "Become Intermediate Level",
      goalB: "<h2>Become Advanced Level</h2>",
      counter: 0,
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
      return;
    },
    deleteGoal(id) {
      this.goals.slice(0, id);
      this.enteredValue = "";
    },
    outputGoal() {
      let randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.goalA;
      }
      return this.goalB;
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
