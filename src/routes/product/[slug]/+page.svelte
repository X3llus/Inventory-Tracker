<script>
// @ts-nocheck

	import { collection, db, doc, getDoc } from '$lib/firebase';
	import { onMount } from 'svelte';
    import Barcode from 'svelte-barcode';

	/**
	 * @type {any}
	 */
	export let data;

	/**
	 * @type {any}
	 */
	let product;

	onMount(async () => {
		// get firebase document using the slug
		const col = collection(db, 'Products');
		const dc = doc(col, data.slug);
		const docSnap = await getDoc(dc);
        product ={
            _id: docSnap.id,
            ...docSnap.data()
        };
        console.log(product);
	});

</script>

<div class="m-8">
    {#if product}
    <div class="flex">
        <img class="m-4 h-[512px]" src="{product.thumbnail}" alt="{product.title}">
        <div>
            <h1 class="text-3xl">{product.title}</h1>
            <h2 class="text-xl">{product.brand}</h2>
            <p class="text-lg">${product.price}</p>
            <p>Stock {product.stock}</p>
            <p>Discount {product.discountPercentage}%</p>
            <p>Rating {product.rating}</p>
            <p>{product.description}</p>
        </div>
    </div>

    <div class="flex justify-center">
        <Barcode value={product._id} />
    </div>

    {/if}
</div>
