<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { loadPost } from "./data.ts";

	let post = {};
	let pathChunks = $page.url.pathname.split('/');

	let postCategory = pathChunks[1];
	let postId = pathChunks[2];

	onMount(async () => {
		post = await loadPost[postCategory](postId)
	})
</script>

<div class="center-content">
	<img src={post.imgUrl} />
	<p>
		<span class="title">{post.title}</span>
		<br />
		{post.description}
	</p>
</div>

<style>
	div.center-content {
		margin-top: 32px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	div.center-content > * {
		max-width: 65ch !important;
		width: 95%;
		color: #FFEBF0;
		font-family: 'Prompt', sans-serif;
		font-weight: bold;
	}

	span.title {
		font-family: 'Marhey', cursive;
		font-size: 36px;
	}
</style>
