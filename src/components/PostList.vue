<template>
<div class="post-list">
	<h2 class="header">Your posts</h2>
	<post :key="p" v-for="p in posts" :value="p"></post>

</div>
  
</template>

<script>

import Post from './Post.vue';

export default {
	name: 'post-list',
	props: {'posts': Array},
	components: {
		Post
	}
}
</script>

<style>

	.post-list {
		min-height: 300px;
		border: 1px solid #5ff1c1;
	}

</style>