const { createApp } = Vue;

createApp({
  data() {
    return {
      user: ""
    }
  },

  created() {
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(data => {
        this.user = data.results[0].name.first;
        console.log(data);
      })
      .catch(err => console.log(err));
  },
  methods: {
    cambiar() {
      fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => {
          this.user = data.results[0].name.first;
          console.log(data);
        })
        .catch(err => console.log(err));
    }
  }

}).mount("#app");
