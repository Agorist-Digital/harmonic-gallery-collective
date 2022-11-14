<script>
	import { page } from '$app/stores';
	let titleFirstLetter = $page.url.pathname.charAt(1).toUpperCase();
	let restOfTitle = $page.url.pathname.substring(2);
	let title = `${titleFirstLetter}${restOfTitle}`;
</script>

<div class="center-content">
	<h1>{title}</h1>
	<slot />
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