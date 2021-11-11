<template>
  <div class="search row px-5">
    <div class="col-12">
      <form @submit.prevent="searchBlogs" class="input-group">
        <input
          @keypress="searchBlogs"
          v-model="searchText"
          class="form-control"
          placeholder="Search text..."
          type="text"
          name=""
          id=""
        />
        <button class="btn btn-outline-primary">search</button>
      </form>
    </div>
  </div>
</template>


<script>
import { ref } from "@vue/reactivity";
import { allBlogsService } from "../services/AllBlogsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
export default {
  setup(){
    const searchText = ref("");
    return {
      searchText,
      async searchBlogs() {
        try {
          await allBlogsService.getAll("?title=" + searchText.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message + "WTF?!", 'error')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>