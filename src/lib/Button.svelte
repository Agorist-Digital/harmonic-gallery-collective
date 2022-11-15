<script>
	import { createEventDispatcher } from "svelte";
	export let label = "";
	export let cls = "";
	
	const dispatch = createEventDispatcher();
	
	function click() {
		dispatch('click')
	}
</script>

<button on:click={click} class={`btn ${cls}`}>
	{#if label == ""}
		<slot />
	{:else}
		{label}
	{/if}
	<slot name="icon" />
</button>

<style>
	button.btn {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		
		padding-top: 8px;
		padding-bottom: 4px;
		padding-left: 12px;
		padding-right: 12px;
		
		font-family: 'Marhey', cursive;
		font-weight: bold;
		font-size: 16px;

		color: #FFEBF0;
		background-color: #FF698E;
		border: 3px solid #FFEBF0;

		border-radius: 4px;
		cursor: pointer;
		transition: all 0.2s ease;
	}
	
	button:hover {
		transition: all 0.2s ease-in-out;
		background-color: #FFEBF0;
		color: #FF698E;

		box-shadow: 0px 0px 8px 0px rgba(123,123,123,0.5);
		border: none;
		border: 3px solid #FFE0;
	}

	button:active {
		box-shadow: inset 0px 0px 8px 0px rgba(123,123,123,0.5);
	}
</style>
