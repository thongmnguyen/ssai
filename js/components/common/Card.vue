<template>
  <div class="card topic" data-topic="1">
    <div class="card-body">
      <h5 class="card-title">Topic 1</h5>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
  </div>
</template>

<script>
module.exports = {
  mounted: function () {
    console.log("Card mounted");
  },
};
</script>

<style scoped>
</style>