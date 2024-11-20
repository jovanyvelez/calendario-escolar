<script>
  let {data} = $props();
  let {id, categoriaId, usuarioId, titulo, descripcion, fechaEvento} = data.evento;
  let fecha = (new Date(Number(fechaEvento))).toISOString().slice(0, 16);

</script>

<div class="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<div class="bg-white shadow sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<h1 class="mb-6 text-2xl font-bold text-gray-900">Crear Nuevo Evento </h1>

				<form action="?/editar" method="post" class="space-y-6">
					<!-- Categoría -->
					<div>
						<label for="category" class="block text-sm font-medium text-gray-700">
							Categoría
						</label>
						<select
							id="category"
							name="categoriaId"
							bind:value={categoriaId}
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						>
							<option value="">Selecciona una categoría</option>
							{#each data.categorias as category}
								<option value={category.id}>{category.nombre}</option>
							{/each}
						</select>
					</div>
					<!-- Título -->
					<div>
						<label for="title" class="block text-sm font-medium text-gray-700"> Título </label>
						<input
							type="text"
							name="titulo"
							id="title"
							bind:value={titulo}
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder="Nombre del evento"
						/>
					</div>

					<!-- Descripción -->
					<div>
						<label for="description" class="block text-sm font-medium text-gray-700">
							Descripción
						</label>
						<textarea
							id="description"
							name="descripcion"
							bind:value={descripcion}
							rows="3"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
							placeholder="Describe el evento"
						></textarea>
					</div>

					<!-- Fecha -->
					<div>
						<label for="date" class="block text-sm font-medium text-gray-700"> Fecha </label>
						<input
							type="datetime-local"
							name="fecha"
							id="date"
							bind:value={fecha}
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>

					<input type="hidden" name="usuarioId" bind:value={usuarioId}>

					<!-- Botones -->
					<div class="flex justify-end space-x-3 pt-4">
						<button
							type="button"
							onclick={() => goto("/")}
							class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Cancelar
						</button>
						<button
							type="submit"
							class="rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Editar
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
