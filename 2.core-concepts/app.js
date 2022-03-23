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
      totalNumber: 0,
      name: "",
      fullName: "",
      confirmedName: "",
    };
  },
  methods: {
    addGoal() {
      if (!this.enteredValue) {
        alert("таск оруулна уу");
        return;
      }
      this.goals.push(this.enteredValue);
      console.log("adGoals run ...", this.enteredValue);
      this.enteredValue = "";
      this.counter++;
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
    addNumber(num1, num2) {
      console.log(num1 + num2);
      this.totalNumber = num1 + num2;
      return num1 + num2;
    },
    setName(event) {
      this.name = event.target.value;
    },
    setFullName(event, lastName) {
      this.fullName = `${event.target.value} ${lastName}`;
    },
    submitForm(event) {
      console.log("event", event);
      alert("submitted!");
    },
    printText(text) {
      console.log(text);
    },
    confirmInput() {
      this.confirmedName = this.name;
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
