const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeItem(id) {
      console.log("устгах id:", id);
      this.goals.splice(id, 1);
    },
  },
});

app.mount("#user-goals");
