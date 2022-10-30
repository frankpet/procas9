<template>
  <Head title="Test pagina" />
  <div class="text-blue-100 hover:text-indigo-200  bg-pink-400 flex justify-center h-full items-center w-full">
    <div>
      <div class=" flex test "></div>
      <div class="test pl-4">
        <Link :href="route('tests')"><img src="images/problue.png"></Link>

      </div>
    </div>

  </div>
</template>

<script>
import {Head, Link } from '@inertiajs/inertia-vue3';
import BaseLayout from '@/Layouts/BaseLayout.vue';
export default {
  components: {
    Link, Head
  },
  layout: BaseLayout,
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
