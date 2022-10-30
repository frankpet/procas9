<template>
  <Head title="Test pagina" />
  <div class="text-blue-100 hover:text-indigo-200  bg-pink-400 flex justify-center h-screen items-center">
    <div class=" flex test ">Hello world s  {{ getTest }}</div>
    <div class="test pl-4">
      <Link :href="route('home')"><img src="images/problue.png"></Link>

    </div>

  </div>
</template>

<script>
import {Head, Link } from '@inertiajs/inertia-vue3'
export default {
  components: {
    Link, Head
  }
}
</script>

<style scoped lang="scss">

.test {
  color: white ;
  font-size:20px;
  transition: all .3s ease-in-out;
  text-decoration: none;
  &:hover {
    color:orange;
    font-size:20px;
  }
}

</style>
