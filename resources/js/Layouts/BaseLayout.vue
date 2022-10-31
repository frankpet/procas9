<template>
    <div class="h-screen  bg-indigo-300 flex-col flex p-2  relative text-white" >

      <div class="px-2 py-1 text-right flex flex-row justify-between items-center bg-indigo-800 ">
        <div>
          <Link class="px-2 fnt-indie fnt-24 text-bold text-blue-300 hover:text-pink-100" :href="route('home')">Startpagina</Link>
        </div>
        <div class="lex flex-row justify-end">
          <Link class="px-2 fnt-indie fnt-24 text-bold text-blue-300 hover:text-pink-100" :href="route('home2')">Home</Link>
          <Link class="px-2 fnt-indie fnt-24 text-bold text-blue-300 hover:text-pink-100"  :href="route('welcome')">Welkom</Link>
          <Link class="px-2 fnt-indie fnt-24 text-bold text-blue-300 hover:text-pink-100"  :href="route('about')">Over ons</Link>
          <Link class="px-2 fnt-indie fnt-24 text-bold text-blue-300 hover:text-pink-100"  :href="route('contact')">Contact</Link>
        </div>

      </div>



      <div  class="flex-grow flex  bg-indigo-300 ">
        <slot ></slot>
      </div>



    </div>
</template>

<script>
    import { Head, Link } from '@inertiajs/inertia-vue3';


    export default {
        props: {
            //title: String,
        },
        components: {
            Head, Link
        },
        data() {
            return {
              show: false,

            }
        },
        computed: {

        },
        watch: {


        },
        mounted() {
          console.log('this is Layout')
          this.show = true
        },
        methods: {

        },

    }
</script>

<style scoped lang="scss">

</style>
