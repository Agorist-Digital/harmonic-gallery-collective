<script>
	import { page } from '$app/stores';
</script>

<header>
	<img src="/hgc logo.png" class="logo" />
	<nav>
		<a class:current={$page.url.pathname == "/"} href="/">HOME</a>
		<a class:current={$page.url.pathname == "/news"} href="/news">NEWS</a>
		<a class:current={$page.url.pathname == "/artists"} href="/artists">ARTISTS</a>
	</nav>
</header>

<style>
	img.logo {
		height: 75%;
		width: auto;		
	}

	header {
		width: 100vw;
		height: 72px;

		padding-left: 16px;
		padding-right: 16px;

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

		border-bottom: solid 1px #0002;
		background-color: #FFEBF0;
		
		position: sticky;
		top: 0;
		left: 0;
		z-index: 2;
		
		box-shadow: 0px 0px 5px 0px rgba(123,123,123,0.75);
	}
	
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 32px;
		flex-basis: auto;
		justify-content: space-between;
		min-width: max-content;
	}
	
	nav > a {
		text-decoration: none;
		font-family: 'Marhey', cursive;
		font-weight: bold;
		margin-right: 8px;
		margin-left: 8px;
		font-weight: bold;
		color: black;
	}
	
	a.current {
		color: #D90368;
		pointer-events: none;
	}
	
	nav > a:hover {
		opacity: 0.5;
		
	}
	
	header > h1 {
		font-family: mono;	
		color: #002;
		margin: 0px;
	}
	
</style>