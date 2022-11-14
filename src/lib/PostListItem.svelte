<script lang="ts">
	export let title: String = "";
	export let description: String = "";
	export let imgSrc = "";
	export let height = "";
	export let artistId = 0;
</script>

<a href={`/artist/${artistId}`}>
	<div class="card flex" style={`height: ${height};`}>
		<img src={imgSrc} />
		<div class="card-left">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
		width: 100%;
		max-width: 65ch;
	}

	div.card {
		width: 100%;
		max-width: 65ch;
 		padding: 16px;
		background-color: #FFEBF0;
		color: #022B3A;
		font-family: 'Prompt', sans-serif;
		box-shadow: -0px 0px 16px 0px rgba(100,100,100,0.60);
		border-radius: 4px;
		transition: transform 0.2s ease;
		margin: 0;
		cursor: pointer;
	}
	
	div.card:hover {
		transform: scale(1.03);
		transition: transform 0.2s ease;
	}
	
	div.card-left {
		width: 100%;
		height: 100%;
	}
	
	div.flex {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
	
	img {
		height: 100%;
		width: auto;
		margin-right: 16px;
		pointer-events: none;
	}
	
	h2 {
		font-weight: bold;
		font-family: 'Marhey', cursive;
		margin: 0;
		margin-bottom: 8;
	}

	p {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		margin: 0;
	}
</style>
