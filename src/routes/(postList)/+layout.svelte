<script>
	import { page } from '$app/stores';
	import PostList from "$lib/PostList.svelte";

	$: titleFirstLetter = $page.url.pathname.charAt(1).toUpperCase();
	$: restOfTitle = $page.url.pathname.substring(2);
	$: title = `${titleFirstLetter}${restOfTitle}`;
	let artistPosts = [
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
	let newsPosts = [
		{
			title: "Krew Single Release", 
			description: "Krew Show at Vultures Single Release 'Nocturnal'",
			imgSrc: "krew_sample.jpg",
		},
		{
			title: "Krew Single Release", 
			description: "Krew Show at Vultures Single Release 'Nocturnal'",
			imgSrc: "krew_sample.jpg",
		},
		{
			title: "Krew Single Release", 
			description: "Krew Show at Vultures Single Release 'Nocturnal'",
			imgSrc: "krew_sample.jpg",
		},
		{
			title: "Krew Single Release", 
			description: "Krew Show at Vultures Single Release 'Nocturnal'",
			imgSrc: "krew_sample.jpg",
		},
		{
			title: "Krew Single Release", 
			description: "Krew Show at Vultures Single Release 'Nocturnal'",
			imgSrc: "krew_sample.jpg",
		},
	];

	let posts = {
		"Artists": artistPosts,
		"News": newsPosts,
	};
</script>

<div class="center-content">
	<h1>{title}</h1>
	<PostList posts={posts[title]} totalPosts={posts[title].length}/>
</div>

<style>
	div.center-content {
		width: calc(100% - 16px);
		margin-left: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: auto;
		overflow-y: scroll;
	}
	
	div.center-content > * {
		max-width: 60ch;
	}
	
	h1 {
		font-family: 'Marhey', cursive;
		font-weight: bold;
		font-size: 48px;
		color: #FFEBF0;
	}
</style>