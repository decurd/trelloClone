<template>
  <div class="home">
    HOME
    <div>
      Board List:
      <div v-if="loading">Loading ...</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">
          {{ b }}
        </div>
      </div>
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {board} from '../api'

export default {
  name: 'home',
  data() {
    return {
      loading: false,
      boards: [],
      error: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
      board.fetch()
      .then(data => {
        this.boards = data
      })
      .then(() => {
        this.loading = false
        console.log("실행된다")
      })
    }
  }
}
</script>
