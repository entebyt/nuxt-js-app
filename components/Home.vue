<template>
  <Dashboard>
    <template slot="dashboard-right">
      <form>
        <input v-model="title" type="text" required placeholder="Title">
        <input v-model="description" type="text" required placeholder="Description">
        <button>Submit</button>
      </form>
    </template>
  </Dashboard>
</template>
<script lang="ts">
import Dashboard from './Dashboard.vue'
export default {
  components: { Dashboard },
  data() {
    return {
      title: '',
      description: '',
    }
  },
}
</script>

