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
      this.goals.splice(id, 1);
      this.enteredValue = "";
      this.counter--;
    },
    outputGoal() {
      let randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.goalA;
      }
      return this.goalB;
    },

    displayFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Washington";
    },

    setName(event) {
      console.log("ene function ajillalaa ...");
      this.name = event.target.value;
    },
    setFullName(event, lastName) {
      this.fullName = `${event.target.value} ${lastName}`;
    },
    submitForm(event) {
      console.log("event", event);
      alert("submitted!");
    },
    resetInput(inputname) {
      switch (inputname) {
        case "confirmedName":
          this.confirmedName = "";
          break;
        case "userName":
          this.user.name = "";
          break;
        default:
          alert("input name - ийг оруулна уу");
      }
    },
    setValue(event) {
      this.confirmedName = event.target.value;
    },
    setUsername(event) {
      this.user.name = event.target.value;
    },
  },
}).mount("#app2");

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
