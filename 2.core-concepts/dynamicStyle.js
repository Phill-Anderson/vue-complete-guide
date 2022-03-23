const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      boxDSelected: false,
    };
  },
  methods: {
    boxSelected(box) {
      if (box === "A") {
        this.boxASelected = !this.boxASelected;
        this.boxBSelected = false;
        this.boxCSelected = false;
        this.boxDSelected = false;
      } else if (box === "B") {
        this.boxBSelected = !this.boxBSelected;
        this.boxASelected = false;
        this.boxCSelected = false;
        this.boxDSelected = false;
      } else if (box === "C") {
        this.boxCSelected = !this.boxCSelected;
        this.boxASelected = false;
        this.boxBSelected = false;
        this.boxDSelected = false;
      } else if (box === "D") {
        this.boxDSelected = !this.boxDSelected;
        this.boxASelected = false;
        this.boxBSelected = false;
        this.boxCSelected = false;
      }
    },
  },
  computed: {
    boxBClasses() {
      return { active: this.boxBSelected };
    },
  },
});
app.mount("#dynamicStyle");
