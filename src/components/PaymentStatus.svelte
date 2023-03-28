<script>
  import { Button, Card } from 'flowbite-svelte';
  import { Spinner } from 'flowbite-svelte';
</script>

<Card>
  <div class="flex items-center">
    <Spinner size={12} />
    <div class="w-full">
      <strong>Waiting on payment...</strong>
      <Button gradient color="purpleToPink" class="mt-2">Pay in checkout</Button
      >
    </div>
  </div>
</Card>
