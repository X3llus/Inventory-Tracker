<script>
// @ts-nocheck

	import { goto } from '$app/navigation';
	import { collection, db, doc, getDoc, getDocs } from '$lib/firebase';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let products = [];
	$: console.log(products);

	onMount(async () => {
		const querySnapshot = await getDocs(collection(db, 'Products'));
		querySnapshot.forEach((doc) => {
			products.push({
				_id: doc.id,
				...doc.data()
			});
			products = products;
		});
	});
</script>

<svelte:head>
	<title>All Products</title>
</svelte:head>

<div>
	<ul class="space-y-4 m-8">
		{#each products as product}
			<li class="w-full hover:bg-slate-400 hover:cursor-pointer rounded-xl p-4 flex" on:click={goto('product/' + product._id)} on:keypress={goto('product/' + product._id)}>
				<img class="h-24 m-4" src="{product.thumbnail}" alt="{product.title}">
				<div>
					<h1 class="text-xl">{product.title}</h1>
					<h2 class="text-lg">{product.brand}</h2>
					<p>{product.description}</p>
					<p>${product.price}</p>
				</div>
            </li>
		{:else}
			Loading...
		{/each}
        </ul>
</div>
