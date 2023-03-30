<script>
  import { Button, Card } from 'flowbite-svelte';
  import { Spinner } from 'flowbite-svelte';
  import { Wallet } from 'svelte-heros-v2';
  import { checkoutLink } from '../stores';
</script>

<Card>
  <div class="flex items-center">
    <Spinner size="12" color="purple" />
    <div class="w-full">
      <strong>Waiting on payment...</strong>
      <Button gradient color="purpleToPink" class="mt-2" href={$checkoutLink}>
        Pay in checkout
      </Button>
    </div>
  </div>
</Card>
