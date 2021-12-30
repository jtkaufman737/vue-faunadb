<template>
  <div class="home">
    <h3>Pokemon</h3>
    <section class="grid">
      <div v-for="p in pokemon" :key="p.id">
        <h6>{{ p.name }}</h6>
        <img :src="p.imageUrl" :alt="p.name" class="pokemon"/>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
<style>
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
}

</style>
