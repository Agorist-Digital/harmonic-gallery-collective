<script>
	export let label = "Text Area";
	export let placeholder = "Type here...";
	export let value = "";
	export let maxHeight = "default";
	export let defaultHeight = "auto";
	export let maxLength = 240;
	$: if (value.length > 240) {
		value = value.substring(0, 240);
	}
</script>

<div class="input input__message">
	<textarea 
		bind:value 
		class="input__field"  
		style={`max-height: ${maxHeight}; height: ${defaultHeight};`}
		placeholder=" " />
	<span class="input__label">Message</span>
</div>

<style>
	div.input {
		position: relative;
		color: #FFEBF0;
		margin-top: 24px;
		padding-top: 8px;
		width: 100%;
		max-width: 100%;
	}
	
	textarea.input__field {
		width: calc(100% - 32px);
		background-color: #FF698E;
		color: #FFEBF0;

		border: 3px solid #FFEBF0;
		border-radius: 8px;

		padding: 12px;
		height: auto;

		font-family: "Prompt";
		font-size: 14px;
		font-weight: bold;
		max-width: calc(100% - 32px);
	}
	
	textarea.input__field:focus + .input__label {
		translate: 0px -100% !important;
		transition: translate 0.2s ease;
	}
	
	span.input__label {
		position: absolute;
		left: 12px;
		bottom: top;
		z-index: 2;
		translate: 0px -50%;

		transition: translate 0.2s ease;

		border-radius: 4px;
		padding-left: 4px;
		padding-right: 4px;

		font-family: 'Marhey', cursive;
		font-weight: bold;

		background-color: #FF698E;
	}

	textarea:focus {outline:none;}
</style>
