<template>
  <div class="profile container-fluid text-center">
    <div class="row">
      <div class="col-4 bg-primary elevation-2 ms-2">
        <h1>{{ profile.name }}</h1>
        <img class="rounded" :src="profile.picture" alt="" />
        <p>{{ profile.email }}</p>
      </div>
    </div>
    <CreateProject v-if="account.id == profile.id" />
    <Thread />
  </div>
</template>


<script>
import { computed } from "vue";
import { AppState } from "../AppState";
import { onMounted, watchEffect } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
import  Pop  from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";
import { useRoute } from "vue-router";
import { allBlogsService } from "../services/AllBlogsService";
export default {
  name: "Profile",
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      try {
        if (route.name == "Profile") {
          await profilesService.getProfile(route.params.id);
          await allBlogsService.getAll("?creatorId=" + route.params.id);
        }
      } catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    });
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
    };
  },
};
</script>


<style lang="scss" scoped>

</style>