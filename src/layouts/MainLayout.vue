<template>
  <div class="app-main-layout">

    <Nav @clickAside="isOpen = !isOpen"/>
    <Asid :isOpen="isOpen"/>


    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view/>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/Detail-Record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Nav from '@/components/app/NavBar.vue'
  import Asid from '@/components/app/AsideBar.vue'

  export default {
    name: 'main-layout',
    data: () => ({
      isOpen: true
    }),
    components: {
      Nav, Asid
    }
  }
</script>
