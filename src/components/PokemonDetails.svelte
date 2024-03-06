
<script>
	const getPokemon = async () => {
		var response = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
		var result = await response.json();
		return result;
	}
	
	let pokemonPromise = getPokemon();
</script>

{#await pokemonPromise}
		<h2>Loading....</h2>
{:then pokemon}
	<h2>"There are NO shortcuts to any place worth going"</h2>
{/await}

