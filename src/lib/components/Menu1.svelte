<script lang="ts">
 	import Calendario from '$lib/imagenes/calendar.svg';
	import Salir from '$lib/imagenes/Salir.svelte';
	import Entrar from '$lib/imagenes/Entrar.svelte';
	import { slide } from 'svelte/transition';

	let { admin = false } = $props();

	const ejecutar = (event: MouseEvent) => {
		if (admin) event.preventDefault();
	};
</script>

<div class="background">
	<nav>
		<ul class="menu">
			<li><a href="/">Inicio</a></li>
			{#if admin}
				<li class="dropdown">
					<a href="/" class="dropbtn">Administrar</a>
					<div class="dropdown-content">
						<a href="deportivas" onclick={() => ejecutar()}>Agregar</a>
						<a href="escolares">Editar</a>
					</div>
				</li>
			{/if}
			<li><a href="/">Novedades</a></li>
		</ul>
	</nav>
</div>

<style>
	nav {
		background-color: #fdfdfd;
		padding: 10px;
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.menu {
		list-style-type: none;
		margin: 0;
		padding: 0;
		display: flex;
	}

	.menu li {
		margin: 0 10px;
	}

	.menu li a,
	.dropbtn {
		display: inline-block;
		color: rgb(0, 0, 0);
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	.menu li a:hover,
	.dropdown:hover .dropbtn {
		background-color: #f8f3f3;
	}

	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}

	.dropdown-content a {
		color: rgb(0, 0, 0);
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
	}

	.dropdown-content a:hover {
		background-color: #ffffff;
	}

	.dropdown:hover .dropdown-content {
		display: block;
	}
</style>
