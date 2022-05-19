<script lang="ts">
	import Navbar from './lib/Navbar.svelte';
	import Navdrawer from './lib/Navdrawer.svelte';
	import Intro from './lib/Intro.svelte';
	import About from './lib/About.svelte';
	import Technologies from './lib/Technologies.svelte';
	import History from './lib/History.svelte';

	let outerWidth;
</script>

<svelte:window bind:outerWidth />

<svelte:head>
	<title>hexbun | Alex Betts</title>
</svelte:head>

<main>
	{#if outerWidth >= 1024}
		<Navbar />
	{:else}
		<Navdrawer />
	{/if}
	<Intro />
	<About />
	<Technologies />
	<History />
</main>

<style type="text/scss">
	@import './main';
</style>
