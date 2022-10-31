<template>
  <Head title="Over ons" />
  <div class="text-blue-100 hover:text-indigo-200  bg-blue-400 flex justify-center h-full items-center w-full">
    <div class="p-b-100">
      <div class=" flex test text-blue-700"></div>
      <div class="test pl-4 ">
        <Link class=" fnt-134 text-bold" :href="route('tests')">About</Link>

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
