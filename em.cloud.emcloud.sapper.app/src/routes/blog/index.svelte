<!-- <script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script> -->
<script>
  import { onMount } from "svelte";
  let blogPosts = []; 
  let posts;
  onMount(async () => {
    const apiResponse = await fetch("https://emcloud.solutions/api/blogs");
    blogPosts = await apiResponse.json();
    return () => console.log('Destroyed');
  });
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>api posts</h1>
<ul class="list-group" >
	{#each blogPosts as post}
		<li class="list-group-item">
			<a href='blog/{post.slug}'>{post.title}</a>
		</li>
	{/each}
</ul>