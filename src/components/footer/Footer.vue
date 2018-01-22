<template>
  <div class='footer'>
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    message: 'This is Footer!'
  })
}
</script>

<style lang="css">
.footer {
  height: 60px;
  width: 100%;
  font-size: 24px;
  color: red;
}
</style>
