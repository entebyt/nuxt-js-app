<template>
  <Dashboard>
    <template slot="dashboard-right">
      <form @submit="updateTemplate">
        <input v-model="title" type="text" required placeholder="Title">
        <input v-model="description" type="text" required placeholder="Description">
        <button type="submit">Submit</button>
      </form>
    </template>
  </Dashboard>
</template>
<script lang="ts">
import Dashboard from './Dashboard.vue'
import { update } from '../services/template'
export default {
  components: { Dashboard },
  data() {
    return {
      title: '',
      description: '',
    }
  },
  methods: {
    async updateTemplate(e) {
      e.preventDefault()
      await update({
        userId: 1,
        title: this.title,
        description: this.description,
      })
    },
  },
}
</script>

