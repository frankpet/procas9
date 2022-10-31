<template>
  <Head title="Welkom" />
  <div class="text-blue-900 hover:text-indigo-200  bg-blue-400 flex justify-center h-full items-center w-full">
    <transition>
      <div class="p-b-100" v-if="show">
        <div class=" flex test text-blue-700"></div>
        <div class="test pl-4 ">
          <Link class=" fnt-134 text-bold" :href="route('tests')">Welkom</Link>

        </div>
      </div>
    </transition>

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
  data() {
    return {
      show:false
    }
  },
  mounted() {
    console.log('this is welkom')
    this.show = true
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>
