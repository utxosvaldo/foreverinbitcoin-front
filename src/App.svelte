<script lang="ts">
  import Router from 'svelte-spa-router';
  import { routes } from './routes';
  // import { ClientProvider } from '@micro-stacks/svelte';
  // import { mountClient } from '@micro-stacks/svelte';

  // mountClient({
  //   appName: 'ForeverinBitcoin',
  //   appIconUrl: window.location.origin + '/foreverinbitcoin-transp.png'
  // });
</script>

<!-- <ClientProvider
  appName="ForeverinBitcoin"
  appIconUrl="/foreverinbitcoin-trans.png"
/> -->
<body>
  <Router {routes} />
</body>
<!-- <ClientProvider /> -->
