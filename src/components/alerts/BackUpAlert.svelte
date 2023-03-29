<script>
  import { Alert, Button, Heading, P } from 'flowbite-svelte';
  import { ArrowDownOnSquare } from 'svelte-heros-v2';
</script>

<Alert color="blue">
  <div slot="extra">
    <P
      size="xl"
      weight="bold"
      class="font-medium text-center"
      color="currentColor"
    >
      Back up your order details
    </P>
    <div class="flex gap-2 justify-center mt-2 mb-4 ">
      <Button outline size="xs">
        <ArrowDownOnSquare /> Save my order details
      </Button>
    </div>
    <div class="text-sm">
      For help send your order details to support@foreverinbitcoin.com
    </div>
  </div>
</Alert>
