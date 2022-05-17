<script lang="ts">
	import Intro from './lib/Intro.svelte';
	import History from './lib/History.svelte';
</script>

<svelte:head>
	<title>hexbun | Alex Betts</title>
</svelte:head>

<main>
	<Intro />
	<History />
</main>

<style type="text/scss">
	@import './main';
</style>
