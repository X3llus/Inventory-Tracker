<script>
// @ts-nocheck

	import { goto } from '$app/navigation';
    import algoliasearch from 'algoliasearch/lite';
	import { onMount } from 'svelte';

    const client = algoliasearch('1D4S5N8N5Z', '3ff9039d084598dd7904f0ebc792e808');
    const index = client.initIndex('inventory');

    /**
	 * @type {any[]}
	 */
    let _hits = [];

    let query = '';

    onMount(async () => {
        const { hits } = await index.search(query);
        _hits = hits;
    });

    /**
	 * @param {string} query
	 */
    function search(query) {
        index.search(query).then(({ hits }) => {
            _hits = hits;
        });
        console.log(_hits);
    }
</script>

<svelte:head>
	<title>Search Products</title>
</svelte:head>

<!-- search bar -->
<div class="flex justify-center my-4">
    <input class="bg-slate-200 rounded-md border-solid h-10 w-96 text-center" type="text" bind:value={query} on:input={search(query)} />
</div>

<div>
	<ul class="space-y-4 m-8">
		{#each _hits as product}
			<li class="w-full hover:bg-slate-400 hover:cursor-pointer rounded-xl p-4" on:click={goto('product/' + product.objectID)} on:keypress={goto('product/' + product.objectID)}>
				<h1 class="text-xl">{product.title}</h1>
				<h2 class="text-lg">{product.brand}</h2>
				<p>{product.description}</p>
            </li>
		{/each}
        </ul>
</div>