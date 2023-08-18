<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue'  // === @Ç…ïœçX

import SideBarLink from '@/components/atoms/links/SideBarLink.vue'
import Facebook from '@/components/atoms/social/Facebook.vue'
import Line from '@/components/atoms/social/Line.vue'
import Linkedin from '@/components/atoms/social/Linkedin.vue'
import Twitter from '@/components/atoms/social/Twitter.vue'
import H3SideBarText from '@/components/atoms/texts/H3SideBarText.vue'

</script>

<template>

  <div class="container">
      <Facebook />
      <Line />
      <Linkedin />
      <Twitter />
      <SideBarLink href="Ç†" text="Ç†" />
      <H3SideBarText text="SNSã§óL" />
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
