<script lang="ts">
	// importamos las props para ingreso o salida de la app

	let { estado, admin = false } = $props();

	// Estado para controlar la visibilidad del menú móvil
	import Calendario from '$lib/imagenes/calendar.svg';
	import Salir from '$lib/imagenes/Salir.svelte';
	import Entrar from '$lib/imagenes/Entrar.svelte';
	import { slide } from 'svelte/transition';
	let isMenuOpen = $state(false);

	// Nuevo estado para el dropdown
	let isDropdownOpen = $state(false);
	// Función para alternar el menú móvil
	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
	};

	// Opcional: cerrar el menú al cambiar de ruta
	const closeMenu = () => {
		isMenuOpen = false;
	};

	// Nueva función para manejar clics fuera del dropdown
	function handleClickOutside(event: MouseEvent) {
		if (event.target && !(event.target as Element).closest('.dropdown')) {
			isDropdownOpen = false;
		}
	}
</script>

<svelte:window onclick={handleClickOutside} />

{#snippet ingreso()}
	{#if estado === 'ingreso'}
		<a href="/login" class="ml-1 text-green-500">
			<Entrar /><span class="text-sm">Entrar</span>
		</a>
	{/if}
	{#if estado === 'salida'}
		<form action="/logout?/salir" method="post" class="m-5 flex justify-end text-red-400">
			<button>
				<Salir /><span class="ml-1 text-sm">Salir</span>
			</button>
		</form>
	{/if}
{/snippet}

<nav class="bg-blue-400 p-4">
	<div class="container mx-auto flex items-center justify-between">
		<!-- Logo -->
		<div class="flex-shrink-0">
			<img src={Calendario} alt="Logo" class="h-8 w-8" />
			<!-- Alternativa con texto -->
			<!-- <span class="text-white text-xl font-bold">Logo</span> -->
		</div>

		<!-- Menú principal centrado - visible en desktop -->
		<div class=" hidden flex-1 justify-center space-x-6 md:flex">
			<div class="hidden flex-1 justify-center space-x-6 md:flex">

				<a
					href="/mostrar"
					onclick={closeMenu}
					class="rounded-md px-3 py-2 text-xl font-medium text-white transition duration-150 ease-in-out hover:bg-gray-700 hover:text-gray-300"
				>
				Calendario
				</a>

				<!-- Nuevo menú dropdown -->
				{#if admin}
					<div class="dropdown relative inline-block">
						<button
							onclick={() => (isDropdownOpen = !isDropdownOpen)}
							class="rounded-md px-3 py-2 text-xl font-medium text-white transition duration-150 ease-in-out hover:bg-gray-700 hover:text-gray-300"
						>
							Articulos
						</button>

						{#if isDropdownOpen}
							<div
								transition:slide={{ duration: 200 }}
								class="absolute left-0 z-50 mt-2 w-48 rounded-md bg-gray-800 py-1 shadow-lg"
							>
								<a
									href="/admin/crear"
									class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
								>
									Crear
								</a>
								<a
									href="/admin/editar"
									class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
								>
									Editar
								</a>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		</div>

		<!-- Botón Admin -->
		<div class="flex-shrink-0">
			{@render ingreso()}
		</div>

		<!-- Botón menú móvil -->
		<div class="md:hidden">
			<button
				onclick={toggleMenu}
				class="px-2 text-white hover:text-gray-300"
				aria-label="Toggle menu"
			>
				<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/>
				</svg>
			</button>
		</div>

		<!-- Menú móvil -->
		{#if isMenuOpen}
			<div class="mt-2 transition-all duration-300 ease-in-out md:hidden" transition:slide>
				<div class="flex flex-col space-y-2">

					{#if admin}
						<div class="dropdown relative">
							<button
								onclick={() => (isDropdownOpen = !isDropdownOpen)}
								class="w-full rounded-md px-3 py-2 text-left text-xl font-medium text-white hover:bg-gray-700"
							>
								Articulos
							</button>

							{#if isDropdownOpen}
								<div transition:slide={{ duration: 200 }} class="space-y-2 pl-6">
									<a
										href="/admin/crear"
										class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
										onclick={closeMenu}
									>
										Crear
									</a>
									<a
										href="/admin/editar"
										class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
										onclick={closeMenu}
									>
										Editar
									</a>
								</div>
							{/if}
						</div>
					{/if}
				</div>
			</div>
		{/if}
	</div>
</nav>
