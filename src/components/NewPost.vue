<template>
	<div class="new-post">
		<h2 class="subheader">Add new shiny post here</h2>
		<div class="main">
			<textarea
				name="message"
				id="message"
				cols="50"
				rows="6"
				placeholder="Add your new post"
				class="message"
				v-model="message"
			>
		</textarea>
			<button
				class="submit"
				:disabled="message === ''"
				@click="addPost"
			>Add</button>
		</div>
	</div>

</template>

<script>
	export default {
		name: "new-post",
		data: () => {
			return {
				message: ""
			};
		},
		methods: {
			addPost() {
				this.$emit("add", this.message);
				this.message = "";
			}
		}
	};
</script>

<style scoped>
	.new-post {
		margin: 10px;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.message {
		border: 3px solid #cccccc;
		padding: 5px;
		border-radius: 4px;
		margin-right: 10px;
	}

	.main {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.submit {
		width: 60px;
		height: 40px;
		padding: 10px 0;
		border-radius: 6px;
		user-select: none;
		cursor: pointer;
		text-align: center;
		font-size: 14px;
		transition: 0.12s ease;
		box-shadow: inset 0 -2px 0 0 rgba(0, 0, 0, 0.2);
		color: #ffffff;
		user-select: none;
		outline: none !important;
		border: 0;
		background: #10bb76;
	}

	.submit:hover {
		background: #0769b4;
	}
</style>