<script>
	import Header from '../components/Header.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		width: 100%;
		
		background-color: #fff;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		position: absolute;
		bottom: 0;
		height: 60x;
		width: 100%;
		background-color: orange;
		display: -webkit-flex;
		display: flex;
		-webkit-flex-wrap: wrap;
		flex-wrap: wrap;
		-webkit-align-content: center;
		align-content: center;
		align-content: center;
	}

</style>

<Header />
<!-- <Nav {segment}/> -->

<main>
	<slot></slot>
</main>

<Footer />