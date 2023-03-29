<script>
  import { Button, Card, Span } from 'flowbite-svelte';
  import { bech32, bech32m } from 'bech32';
  import { receiveAddress } from '../stores';

  let inputAddress = '';
  // let receiveAddress = '';
  let showInvalidAddressAlert = false;

  $: receiveAddressFirst = $receiveAddress.slice(0, $receiveAddress.length / 2);
  $: receiveAddressSecond = $receiveAddress.slice($receiveAddress.length / 2);

  const validateAddress = () => {
    console.log(inputAddress);
    try {
      bech32.decode(inputAddress);
      console.log('Your segwit address is valid');
      $receiveAddress = inputAddress;
      showInvalidAddressAlert = false;
    } catch (error) {
      try {
        bech32m.decode(inputAddress);
        console.log('Your taproot address is valid');
        $receiveAddress = inputAddress;
        showInvalidAddressAlert = false;
      } catch (error) {
        console.log(error);
        showInvalidAddressAlert = true;
      }
    }
  };
</script>

<div class="mb-6">
  {#if $receiveAddress == ''}
    {#if !showInvalidAddressAlert}
      <div>
        <label
          for="default-input"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Receive address for your inscription:</label
        >
        <input
          type="text"
          id="default-input"
          bind:value={inputAddress}
          on:change={validateAddress}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
    {:else}
      <div>
        <label
          for="error"
          class="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          >Invalid Bitcoin address</label
        >
        <input
          type="text"
          id="error"
          bind:value={inputAddress}
          on:change={validateAddress}
          class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
          placeholder="Error input"
        />
        <p class="mt-2 text-sm text-red-600 dark:text-red-500">
          Please enter a valid segwit (bc1q...) or taproot (bc1p...) address to
          receive your inscription.
        </p>
      </div>
    {/if}
  {:else}
    <div>
      <label
        for="default-input"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Receive address for your inscription:</label
      >
      <!-- <Button color={undefined} shadow={null} class="bg-white border-0"> -->
      <Card>
        <Span class="font-mono text-xs font-light">{receiveAddressFirst}</Span>
        <Span class="font-mono text-xs font-light">{receiveAddressSecond}</Span>
      </Card>
      <!-- </Button> -->
    </div>
  {/if}

  <Button gradient color="purpleToPink" class="mt-2">Preview Inscription</Button
  >
</div>
