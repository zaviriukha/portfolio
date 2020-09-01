<template>
  <section class="section section--clients" id="clients">
    <div class="section__inner">
      <div class="block">
        <h2>PORTFOLIO</h2>
      </div>
    </div>

    <div class="flex-row">
      <AppCard
          :img="createAcc"
          title="Home bookkeeping"
          desc="Home money accounting system. Bilingual"
          demo-name="Home bookkeeping"
          url='https://home-bookkeeping.netlify.app/'
          git-link="github.com/zaviriukha/vue-crm"
          git-href="https://github.com/zaviriukha/vue-crm"
      />

    </div>
  </section>
</template>

<script>
import AppCard from "@/components/app/AppCard";

export default {
  name: "Portfolio",
  components: {AppCard},
  computed: {
    createAcc() {
      return require('@/assets/img/24m.jpg')
    },
  }
}
</script>

<style scoped lang="scss">
.flex-row {
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  flex-flow: row wrap;
  // overflow: hidden;
}

</style>