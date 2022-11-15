<script lang="ts">
	import PostListItem from "$lib/PostListItem.svelte";
	import PaginationTab from "$lib/PaginationTab.svelte";
	export let posts = []
	export let totalPosts = 0;

	$: pages = Math.ceil(totalPosts / 4);
	$: console.log("Pages: ", pages, ", posts: ", posts.length, ", total: ", totalPosts);
	$: page = 1;
	$: start = (page * 4) - 4;
	$: stop = (page * 4);
	$: postSlice = posts.slice(start, stop);
</script>

{#each postSlice as post}
	<PostListItem {...post} height="8rem" />
	<br />
{/each}

<PaginationTab bind:current={page} pages={pages} />

<style>
	br {
		margin: 24px;
	}
</style>
