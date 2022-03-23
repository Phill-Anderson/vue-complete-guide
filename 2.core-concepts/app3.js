// computed properties
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
      lastName: "",
      confirmedName: "",
    };
  },
  watch: {
    // watcher function - ууд нь template - д шууд ашиглагдахгүй.
    // this.name өөрчлөгдөх бүрт энэхүү  функц ажиллах болно
    name(value) {
      if (value === "") {
        this.fullName = "";
      }
      this.fullName = value + " " + "Watcher";
    },
    // counter  өөрчлөгдөх бүрт энэхүү  функц ажиллах болно
    counter(value) {
      if (value < 0) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
  },
  computed: {
    computedFullName() {
      // react - ийн useMemo - той төстэй
      // зөвхөн this.name өөрчлөгдөх үед энэхүү функц дахин тооцоологдож ажиллана.
      console.log("computedFullName function dahin tootsoologdloo ...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Washington";
    },
    computedLastName() {
      console.log("computedLastName function dahin tootsoologdloo ...");
      if (this.name === "") {
        return "";
      }
      return this.lastName;
    },
  },
  methods: {
    // тухайн компонэнт рендэр хийгдэх бүрт эдгээр функцууд дахин тооцоологдоно.
    add() {
      console.log("add function rendered...");
      this.counter++;
    },
    sub() {
      console.log("sub function rendered ...");
      this.counter--;
    },

    displayFullName() {
      console.log("ene function dahin tootsoologdloo ...");
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
    setLastName(event) {
      this.lastName = event.target.value;
    },

    setValue(event) {
      this.confirmedName = event.target.value;
    },
    setUsername(event) {
      this.user.name = event.target.value;
    },
  },
}).mount("#app3");
