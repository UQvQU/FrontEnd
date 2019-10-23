<template>
  <div class="container">
    <div class="display-1">
      <!-- http://localhost:3000/posts/2  --  Post 2 -->
      Post {{ $route.params.id }}
    </div>
  </div>
</template>
<script>
export default {
  // 验证参数
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>
