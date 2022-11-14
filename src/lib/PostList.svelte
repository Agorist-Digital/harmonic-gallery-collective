<script lang="ts">
	import PostListItem from "$lib/PostListItem.svelte";
	import PaginationTab from "$lib/PaginationTab.svelte";

	export let items = [
		{
			title: "Krew", 
			description: "Krew is a stinky four piece Indie rock band based in Colorado. Combining various genres and styles, they have created a unique sound.",
			imgSrc: "krew_sample.jpg",
		},
		{
			title: "Krew", 
			description: "Krew is a stinky four piece Indie rock band based in Colorado. Combining various genres and styles, they have created a unique sound.",
			imgSrc: "krew_sample.jpg",
		},
		{
			title: "Krew", 
			description: "Krew is a stinky four piece Indie rock band based in Colorado. Combining various genres and styles, they have created a unique sound.",
			imgSrc: "krew_sample.jpg",
		},
		{
			title: "Krew", 
			description: "Krew is a stinky four piece Indie rock band based in Colorado. Combining various genres and styles, they have created a unique sound.",
			imgSrc: "krew_sample.jpg",
		},
		{
			title: "Krew", 
			description: "Krew is a stinky four piece Indie rock band based in Colorado. Combining various genres and styles, they have created a unique sound.",
			imgSrc: "krew_sample.jpg",
		},
	];
	
	$: page = 1;
</script>

{#each items.slice(0, page) as item}
	<PostListItem {...item} height="8rem" />
	<br />
{/each}

<PaginationTab bind:current={page} pages=5 />

<style>
	br {
		margin: 24px;
	}
</style>
