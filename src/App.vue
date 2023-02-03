<template>
  <main class="min-h-[100dvh] lg:justify-center lg:align-center flex w-full bg-[#BEE2FD]  relative ">
    <div class="self-center lg:flex lg:bg-white  lg:p-4 mx-auto lg:mx-0">
      <SidebarMenu />
      <div class="w-[100%] max-w-[47rem] lg:px-[100px]">
        <ExactPage />
        <StepsFooter />
      </div>
    </div>
  </main>
</template>

<script>
import './index.css'
import SidebarMenu from './components/SidebarMenu.vue'
import ExactPage from './components/ExactPage.vue'
import StepsFooter from './components/StepsFooter.vue'

export default {
  name: 'App',
  components: {
    SidebarMenu,
    ExactPage,
    StepsFooter,
  }
}
</script>

<style>

</style>
