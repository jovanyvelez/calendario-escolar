<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { page } from '$app/stores';
	import Menu from '$lib/components/Menu.svelte';

	let estado = $state('');
	let admin = $state(false);

	if (!$page.data.user) {
		estado = 'ingreso';
	} else {
		estado = 'salida';
		if($page.data.user.role === "admin") admin = true;
	}
</script>

<Menu {estado} {admin} />

{@render children()}

<!--script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
	import Menu from '$lib/components/Menu.svelte';

	let estado = $state('');
	let admin = $state(false);

	if (!$page.data.user) {
		estado = 'ingreso';
	} else {
		estado = 'salida';
		if($page.data.user.rol === "admin") admin = true;
	}
</script>

<Menu {estado} {admin} />
{@render children()}-->
