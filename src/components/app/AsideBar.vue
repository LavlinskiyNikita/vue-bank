<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <li
        v-for="link in links"
        :key="link.url"
        @click="$router.push(link.url)"
        :class="{
         'active': $route.path === link.url
        }"
      >
      <a class="waves-effect waves-orange pointer">
        {{ link.title }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['isOpen'],
  data: () => ({
    links: [
      {title:'счет', url:'/'},
      {title:'История', url:'/history'},
      {title:'Планирование', url:'/planning'},
      {title:'Новая запись', url:'/Detail-Record'},
      {title:'Категории', url:'/categories'}
    ]
  }),
}
</script>
