<script>
  import { Button, Card } from 'flowbite-svelte';
  import { Spinner } from 'flowbite-svelte';
  import { CheckCircle } from 'svelte-heros-v2';
  import { checkoutLink } from '../stores';
</script>

<Card class="w-full">
  <div class=" w-full flex justify-around">
    <Spinner size="12" color="purple" class="text-center mr-3 " />
    <div class="w-full grid justify-items-stretch">
      <strong>Waiting on payment...</strong>
      <Button gradient color="purpleToPink" class="mt-2" href={$checkoutLink}>
        Pay in checkout
      </Button>
    </div>
  </div>
</Card>

<Card class="w-full">
  <div class=" w-full flex justify-around">
    <Spinner size="12" color="purple" class="text-center mr-3" />
    <div class="w-full grid justify-items-stretch">
      <strong>Payment detected, waiting confirmation...</strong>
      <Button gradient color="purpleToPink" class="mt-2" href={$checkoutLink}>
        See your receipts
      </Button>
    </div>
  </div>
</Card>

<Card class="w-full">
  <div class=" w-full flex justify-around">
    <!-- <Spinner size="12" color="purple" class="text-center mr-3" /> -->
    <CheckCircle size="50" class="text-purple-700 mr-3" />
    <div class="w-full grid justify-items-stretch">
      <strong>Payment confirmed.</strong>
      <Button outline color="purple" class="mt-2" href={$checkoutLink}>
        See your receipt
      </Button>
    </div>
  </div>
</Card>

<Card class="w-full">
  <div class=" w-full flex justify-around">
    <Spinner size="12" color="purple" class="text-center mr-3" />
    <div class="w-full grid justify-items-stretch">
      <strong>Processing Inscription...</strong>
    </div>
  </div>
</Card>

<Card class="w-full">
  <div class=" w-full flex justify-around">
    <!-- <Spinner size="12" color="purple" class="text-center mr-3" /> -->
    <CheckCircle size="50" class="text-purple-700 mr-3" />
    <div class="w-full grid justify-items-stretch">
      <strong>Inscription sent to your receive address.</strong>
      <Button outline color="purple" class="mt-2" href={$checkoutLink}>
        See sent transaction
      </Button>
    </div>
  </div>
</Card>
