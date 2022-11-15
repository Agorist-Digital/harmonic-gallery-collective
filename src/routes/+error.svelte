<script>
	import Button from "$lib/Button.svelte";
</script>

<div class="content">
	<div style="width: auto !important;">
		<h1><p>Sorry we Couldn't Load That :(</p></h1>
	</div>
	<div style="width: auto !important;">
		<a href="/"><Button label="Take Me Home" /></a>
	</div>
</div>

<style>
	h1 {
		font-family: 'Marhey', cursive;
		font-size: 32px;
		color: #FFEBF0;
		margin-bottom: 0px;
	}

	a {
		text-decoration: none;
	}
	
	div.content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	div.content > * {
		width: 95%;
		max-width: 65ch;
	}
</style>
