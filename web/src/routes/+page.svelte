<script>
  import { Button, Column, Grid, Row } from 'carbon-components-svelte';
  import About from '$lib/components/about.svelte';
  import Welcome from '$lib/components/welcome.svelte';
  import Catalog from '$lib/components/catalog.svelte';
  import Partners from '$lib/components/partners.svelte';
  import Custom from '$lib/components/custom.svelte';
  import Gpt from '$lib/components/gpt.svelte';
  import Delivery from '$lib/components/delivery.svelte';
  import Contacts from '$lib/components/contacts.svelte';
  import Pay from '$lib/components/pay.svelte';
</script>

<Welcome />
<About />
<Catalog />

<Custom />
<Gpt />
<Partners />
<Delivery />
<Pay />
<Contacts />
