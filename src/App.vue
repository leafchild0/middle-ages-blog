<template>
	<div id="app">
		<img
			alt="Vue logo"
			src="./assets/logo.png"
		>
		<div>Welcome to Your Middle Ages Blog App</div>

		<new-post @add="addPost"></new-post>
		<post-list :posts="posts"></post-list>
	</div>
</template>

<script>
	import NewPost from "./components/NewPost.vue";
	import PostList from "./components/PostList.vue";

	export default {
		name: "App",
		components: {
			NewPost,
			PostList
		},
		data: () => {
			return {
				posts: []
			};
		},
		methods: {
			addPost(p) {
				if (p) this.posts.push(p);
			}
		}
	};
</script>

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
