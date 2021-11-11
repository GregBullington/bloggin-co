<template>
<div class="row justify-content-center">
  <div class="col-md-8 mt-2">
    <Search />
  </div>
</div>
  <div class="row justify-content-center">
    <div v-for="b in allBlogs" :key="b.id" class="col-md-10 card selectable elevation-3 mt-5">
      <BlogPost :blogpost="b" />
    </div>
  </div>
</template>


<script>
import { computed, onMounted, reactive } from "@vue/runtime-core"
import { AppState } from '../AppState'
import { allBlogsService } from "../services/AllBlogsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"

export default {
  name: 'AllBlogs',
   setup() {
    onMounted(async () => {
      try {
        await allBlogsService.getAll()
      } catch (error) {
        logger.log(error)
        Pop.toast('Something went wrong', 'error')
      }
    })
    return {
      allBlogs: computed(() => AppState.allBlogs)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>