<template>
    <div class="h-screen  bg-pink-300 flex-col flex p-2  relative text-white" >

      <div class="px-2 py-1 text-right flex flex-row justify-between items-center bg-pink-600 ">


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
          this.show = true
        },
        methods: {

        },

    }
</script>

<style scoped lang="scss">

</style>
