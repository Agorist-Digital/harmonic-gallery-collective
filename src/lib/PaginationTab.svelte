<script lang="ts">
	export let pages = 1;
	export let current = 1;
	$: start = 1;
	$: eachArray = new Array(pages);

	$: for (let i=0; i < 4; i++) {
		if (start + i <= pages) {
			console.log("adding " + (start+i));
			eachArray[i] = start + i; 
		}
	}
	
	$: console.log(start)
</script>

<div class="tabs">
	<div 
		on:click={() => {
			start--;
			current--;
			eachArray = [];
		}}
		class:hidden={start == 1}
		class="tab arrow">{"<"}</div>
	
	{#each eachArray as number}
		<div 
			class="tab" 
			on:click={() => {current = number}}
			class:active={current == number}>
				{number}
		</div>
	{/each}
	
		<div 
			on:click={() => {
				start++;
				current++;
				eachArray = [];
			}}
			class:hidden={start + 3 >= pages}
			class="tab arrow">{">"}</div>
</div>

<style>
	div.hidden {
		opacity: 0;
	}
	div.tabs {
		margin-top: 16px;
		font-family: 'Marhey', cursive;
		display: flex;
		flex-direction: row;
		position: relative;
		bottom: 0;
		margin-bottom: 16px;
		margin-top: 16px;
	}

	div.tab {
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 32px;
		width: 32px;
		border-radius: 32px;
		margin-left: 4px;
		margin-right: 4px;
		vertical-align: middle;
		color: #FFEBF0;
	}
	
	div.tab:hover {
		color: #D90368;
	}
	
	div.tab.active:hover {
		background-color: white;
		color: #D90368;
	}
	
	div.active {
		background-color: white;
		color: #D90368;
		cursor: default;
	}
</style>
