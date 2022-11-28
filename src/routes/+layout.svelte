<script>
    import "../app.css";
</script>

<!-- Nav bar -->
<nav class="w-full bg-blue-900 p-6 text-2xl text-white justify-between flex">
    <h1>Inventory Management Tool</h1>
    <ul class="flex gap-x-4">
        <li>
            <a href="/" class="hover:underline hover:text-blue-100">Home</a>
        </li>
        <li>
            <a href="/products" class="hover:underline hover:text-blue-100">Products</a>
        </li>
        <li>
            <a href="/search" class="hover:underline hover:text-blue-100">Search</a>
        </li>
    </ul>
</nav>

<slot />