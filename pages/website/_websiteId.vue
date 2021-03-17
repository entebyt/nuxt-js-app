<template>
  <div v-html="website"/>
</template>
<script>
export default {
     async asyncData({ params, $http }) {
      console.log(params);
      const response = await $http.get(`https://website-templator-default-rtdb.firebaseio.com/website/${params.websiteId}.json`)
      const website= await response.json()
      return { 
        website:website?website:'<h2>No Result Found</h2>'
        
       }
    }
}
</script>
