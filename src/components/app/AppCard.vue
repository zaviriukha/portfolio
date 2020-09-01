<template>
  <div class="card">
    <div class="flex-wrapper">
      <div class="card-image">
        <img :src="img" :alt="imgAlt">
      </div>

      <div class="text">
        <h4 class="title">{{ title }}</h4>
        <p class="desc">Description: {{ desc }}</p>
        <p>Demo: <a target="_blank" :href="url"> {{ demoName }}</a></p>
        <p>GitHub: <a target="_blank" :href="gitHref"> {{ gitLink }}</a></p>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "AppCard",
  props: ['img', 'imgAlt', 'title', 'demoName', 'gitLink', 'desc', 'url', 'gitHref']
}
</script>

<style lang="scss">
@mixin transition($x, $y, $z) {
  transition: $x $y $z;
  -moz-transition: $x $y $z;
  -ms-transition: $x $y $z;
  -webkit-transition: $x $y $z;
  -o-transition: $x $y $z;
}

@mixin rotate($x) {
  -ms-transform: rotate($x); /* IE 9 */
  -webkit-transform: rotate($x); /* Chrome, Safari, Opera */
  transform: rotate($x);
}

@mixin scale($x) {
  transform: scale($x);
  -moz-transform: scale($x);
  -webkit-transform: scale($x);
  -o-transform: scale($x);
  -ms-transform: scale($x);
}

.card {
  background-color: purple;
  display: inline-block;
  max-width: 305px;
  min-width: 150px;
  min-height: 300px;
  content: "";
  margin: 1rem 1rem 0 0;
  box-shadow: 0 1px 3px 0 rgba(58, 62, 75, 0.25);
  flex: 0 0 25%;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: .2rem;
  @include transition(all, 250ms, ease-in-out);

  .card-image img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: auto;
  }

  &:hover {
    filter: saturate(50%);
  }

  .text {
    padding: 20px;

    .title {
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 1px;
    }

    .desc {
      line-height: 0.9rem;
      padding-bottom: 10px;
    }
  }

}

@media (min-width: 18.75em) {
  .card{
    min-width: 230px;
  }
}

//Use this class as wrapper to keep content INSIDE the card
.flex-wrapper {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>