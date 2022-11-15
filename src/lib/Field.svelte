<script>
	export let label = "Field";
	export let placeholder = "Type here...";
	export let value = "";
</script>

<div class="input">
	<input bind:value class="input__field" type="text" placeholder={placeholder} />
	<span class="input__label">{label}</span>
</div>

<style>
	div.input {
		position: relative;
		color: #FFEBF0;
		margin-top: 24px;
		padding-top: 8px;
		width: 100%;
	}
	
	input.input__field {
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
	}
	
	input.input__field:focus + .input__label {
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

	input:focus {outline:none;}
</style>
