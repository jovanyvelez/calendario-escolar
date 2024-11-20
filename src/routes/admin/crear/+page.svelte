<script lang="ts">
	import { goto } from "$app/navigation";
	//import { page } from "$app/stores"
	let {data}:{ data:{categorias:{id:number, nombre:string}[], usuarioId:number } } = $props();
	const {categorias} = data
</script>

<div class="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-2xl">
		<div class="bg-white shadow sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<h1 class="mb-6 text-2xl font-bold text-gray-900">Crear Nuevo Evento </h1>

				<form action="?/guardarEvento" method="post" class="space-y-6">
					<!-- Categoría -->
					<div>
						<label for="category" class="block text-sm font-medium text-gray-700">
							Categoría
						</label>
						<select
							id="category"
							name="categoriaId"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						>
							<option value="">Selecciona una categoría</option>
							{#each categorias as category}
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
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>

					<input type="hidden" name="usuarioId" bind:value={data.usuarioId}>

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
							Crear Evento
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
