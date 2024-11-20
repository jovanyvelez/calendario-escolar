<script>
	let { data } = $props();
</script>

<h1 class="my-10 text-center text-3xl font-bold text-gray-900">Click en evento a modificar</h1>

{#each data.eventos as event (event.id)}
	<div class="flex justify-center">
		<div class="my-6 w-1/2 rounded bg-white shadow-md">
			<div class="py-4 text-center">
				<a href={`/admin/editar/evento/${event.id}`} class="text-2xl font-bold text-gray-900 underline">{event.titulo}</a>
			</div>
		</div>
	</div>
{:else}
	No tienes programado eventos
{/each}
