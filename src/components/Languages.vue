<template>
  <section class="section section--Streaming" id="Streaming">
    <div class="section__inner">
      <div class="block">
        <h2>Languages</h2>
        <div class="lang">
          <div class="left">
            <div class="first-row">
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
            </div>
            <div class="second-row">
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
            </div>
            <div class="third-row">
              <div class="square"></div>
              <div class="square"></div>
              <div class="square"></div>
            </div>
          </div>

          <div class="right">
            <div>Ukrainian – native</div>
            <div>Russian – fluent</div>
            <div>English - upper intermediate</div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Languages"
}
</script>

<style lang="scss">
.lang {
  display: flex;

  .left {
    margin-right: 15px;
  }
}
</style>