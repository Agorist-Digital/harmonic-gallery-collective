<script>
	import ContactForm from "$lib/ContactForm.svelte";
	import { Chasing } from 'svelte-loading-spinners'
	let submitted = false;
</script>

<div class="content">
	<div>
		{#if !submitted}
			<h1>Get In Touch with Us!</h1>
			<ContactForm on:submit={() => {submitted = true;}}/>
		{:else}
				<h1>
					Sending Your Message
			 		<div style="display: inline-block; margin-left: 1em;">
						<Chasing size="32" color="white" />
					</div>
				</h1>
		{/if}
	</div>
</div>

<style>
	h1 {
		font-family: 'Marhey', cursive;
		font-size: 32px;
		color: #FFEBF0;
		margin-bottom: 0px;
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
