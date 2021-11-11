<template>
  <div class="row">
    <div class="col-md-6">
      <h5>
      {{blogpost.title}}
      </h5>
    </div>
    <div class="row">
      <div class="col mt-3">
        {{blogpost.body}}
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
export default {
  props: {blogpost: {type: Object, required: true}},
  setup(props){
    return {
      blogposts: computed(()=> AppState.allBlogs),
    }
  }
}
</script>


<style lang="scss" scoped>

</style>