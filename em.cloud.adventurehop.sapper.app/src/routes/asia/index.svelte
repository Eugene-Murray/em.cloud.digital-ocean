<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`asia.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>asia</title>
</svelte:head>

<h1>asia</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>
			<span><a rel='prefetch' href='asia/{post.slug}'>{post.title}</a></span>
			<div>{@html post.image}</div>
		</li>
	{/each}
</ul>