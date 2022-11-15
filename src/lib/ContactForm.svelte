<script>
	import { createEventDispatcher } from "svelte";
	import { Chasing } from 'svelte-loading-spinners'
	import IoMdSend from 'svelte-icons/io/IoMdSend.svelte'
	import Field from "$lib/Field.svelte";
	import Button from "$lib/Button.svelte";
	import TextArea from "$lib/TextArea.svelte";

	const dispatch = createEventDispatcher();

	let name = "";
	let email = "";
	let message = "";

	function submit() {
		dispatch("submit", {name, email, message})
	}
</script>

<div class="vert">
	<Field bind:value={name} label="Name" placeholder="" />
	<br style="width: 16px;" />
	<Field bind:value={email} label="Email" placeholder="" />
</div>

<br style="height: 16px;" />

<div class="vert">
	<TextArea bind:value={message} label="Message" placeholder="" />
</div>

<br style="height: 32px;" />

<Button on:click={submit} label="Send Message">
	<div slot="icon" class="icon">
		<IoMdSend />
	</div>
</Button>

<style>
	.icon {
		height: 16px;
		width: 16px;
		display: inline-block;
		margin-left: 8px;
		margin-bottom: 8px;
	}

	div.vert {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
