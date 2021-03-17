<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <!-- <div class="menu">
        <img src="https://i.ibb.co/B4Dn7CT/menu.png">
      </div>-->
      <!-- <div class="sidebar-items">
        <img src="https://i.ibb.co/L8D5T60/light.png">
        <img src="https://i.ibb.co/zmDbMVZ/diamond.png">
        <img src="https://i.ibb.co/W5QZ9Fk/envelope.png">
        <img src="https://i.ibb.co/CnKDBxC/flask.png">
        <img src="https://i.ibb.co/MGs4Fyn/sent-mail.png">
        <img src="https://i.ibb.co/zGtDpcp/map.png">
        <font-awesome-icon :icon="['fas', 'adjust']"/>
      </div>-->
      <div class="profile">
        <img
          src="https://www.seekclipart.com/clipng/middle/103-1032140_graphic-transparent-1-vector-flat-small-user-icon.png"
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {}
</script>
<style scoped>
.sidebar {
  width: 80px;
  height: 100%;
  background-image: linear-gradient(
    -225deg,
    #5271c4 0%,
    #b19fff 48%,
    #eca1fe 100%
  );
  display: flex;
}

.sidebar-wrapper {
  padding: 0 25px;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.menu {
  margin-top: 20px;
}
.sidebar-items {
  margin-top: 50px;
}

.sidebar-items > img {
  margin-bottom: 25px;
}
</style>
