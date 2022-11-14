<script>
	import Header from "$lib/Header.svelte";
</script>

<div class="page">
	<Header />
	<div class="content">
		<slot />
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Marhey:wght@600&family=Prompt:wght@300&display=swap');

	div.page {
		width: 100%;
		height: 100vh;
		overflow-x: hidden;		
		overflow-y: scroll;
		display: flex;
		flex-direction: column;
	}

	.content {
		flex-grow: 1;
		background-color: #FF698E;
	}
</style>