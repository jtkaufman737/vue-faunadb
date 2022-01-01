<template>
  <div id="app">
    <div class="home">
      <h3>Pokemon</h3>
      <section class="grid">
        <div class="card" v-for="p in pokemon" :key="p.id">
          <div class="header"><h6>{{ p.name }}</h6></div>
          <img :src="p.imageUrl" :alt="p.name" class="pokemon"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: []
    }
  },
  methods: {
    async fetchPokemon() {
      const q = this.$q 

      const response = await this.$db.query(
        q.Map(
          q.Paginate(q.Documents(q.Collection("pokemon"))),
          q.Lambda(item => q.Get(item))
        )
      ) 

      this.pokemon = response.data.map(item => {
        return item.data
      })
    }
  },
  mounted() {
    this.fetchPokemon()
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,h2,h3,h4,h5,h6 {
  font-family: acumin-pro,sans-serif;
  font-weight: 500;
  font-style: normal;
}

h3 {
  font-size:2em;
}

h6 {
  font-size:1.25em;
}

div.card {
  border-radius:30px;
  border:.25px lightgray solid;
  margin:5px;
}

div.header {
  width:100%;
  color:white;
  background: linear-gradient(90deg,#3F00A5 0%,#813EEF 100%);
  display:flex;
  justify-content:space-around;
  align-items:center;
  border-top-left-radius:30px;
  border-top-right-radius:30px;
  height:60px;
}

a {
  color:#3F00A5;
}

a:hover {
  color:#813EEF;
}

div.home {
  width:60%;
  margin:auto;
}

section.grid {
  display:grid;
  grid-template-columns:33.33% 33.33% 33.33%;
  grid-template-rows:auto;
  margin:auto;
  padding:5% 20% 5% 20%;
}

img.pokemon {
  height:100px;
  width:100px;
  padding:25px 10px;
}
</style>
