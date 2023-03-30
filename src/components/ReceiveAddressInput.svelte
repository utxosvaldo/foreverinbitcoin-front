<script lang="ts">
  import { Button, Card, Helper, Span, Label, Input } from 'flowbite-svelte';
  import { bech32, bech32m } from 'bech32';
  import { ArrowLeftOnRectangle, Check } from 'svelte-heros-v2';
  import { receiveAddress, fileName } from '../stores';
  import FocusedAddressInput from './FocusedAddressInput.svelte';

  let inputAddress = '';
  let showInvalidAddressAlert = false;
  let focusedAddressInput = false;
  let isReceiveAddressSet = false;

  $: receiveAddressFirst = $receiveAddress.slice(0, $receiveAddress.length / 2);
  $: receiveAddressSecond = $receiveAddress.slice($receiveAddress.length / 2);

  const validateAddress = () => {
    // focusedAddressInput = false;
    console.log(inputAddress);
    if (inputAddress == '') {
      return;
    }
    try {
      bech32.decode(inputAddress);
      console.log('Your segwit address is valid');
      $receiveAddress = inputAddress;
      showInvalidAddressAlert = false;
      isReceiveAddressSet = true;
    } catch (error) {
      try {
        bech32m.decode(inputAddress);
        console.log('Your taproot address is valid');
        $receiveAddress = inputAddress;
        showInvalidAddressAlert = false;
        isReceiveAddressSet = true;
      } catch (error) {
        console.log(error);
        showInvalidAddressAlert = true;
        isReceiveAddressSet = false;
      }
    }
  };

  const focusReceiveAddress = () => {
    focusedAddressInput = true;
    // addressInput.focus();
  };
</script>

<div class="mb-6">
  {#if !isReceiveAddressSet}
    <!-- Show input field -->
    {#if !showInvalidAddressAlert}
      <!-- Show valid input field -->
      <div>
        <Label class="block space-y-2">
          <span>Receive address for your inscription</span>
        </Label>

        {#if !focusedAddressInput}
          <Input
            let:props
            id="receiveAddress"
            placeholder="bc1p... | bc1q..."
            class="bg-primary-50"
            size="md"
          >
            <ArrowLeftOnRectangle slot="left" />
            <input {...props} on:focus={focusReceiveAddress} />
          </Input>
        {:else}
          <FocusedAddressInput
            bind:input={inputAddress}
            validate={validateAddress}
          />
        {/if}
        <Helper class="text-sm">Use a valid segwit or taproot address.</Helper>
      </div>
    {:else}
      <!-- Show Invalid address input field -->
      <Label
        class="block space-y-2 text-sm font-medium text-red-700 dark:text-red-500"
      >
        <span>Invalid Bitcoin address</span>
      </Label>

      <Input
        let:props
        id="receiveAddress"
        placeholder="bc1p... | bc1q..."
        class="text-center bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
        size="md"
      >
        <ArrowLeftOnRectangle slot="left" class="text-red-700" />
        <input
          {...props}
          on:focus={focusReceiveAddress}
          bind:value={inputAddress}
          on:blur={validateAddress}
        />
        <Check slot="right" class="text-red-700" />
      </Input>
      <Helper class="mt-2 text-sm text-red-600 dark:text-red-500"
        >Please enter a valid segwit (bc1q...) or taproot (bc1p...) address to
        receive your inscription.</Helper
      >
    {/if}
  {:else}
    <!-- Show validated address in button -->
    <Label class="block space-y-2">
      <span class="font-bold">Receive address for your inscription</span>
    </Label>
    <Button
      outline
      gradient
      color="purple"
      class="mt-3"
      on:click={() => (isReceiveAddressSet = false)}
    >
      <div class="font-thin font-mono text-xs">
        <Span class="block">{receiveAddressFirst}</Span>
        <Span class="block">{receiveAddressSecond}</Span>
      </div>
    </Button>
  {/if}
</div>
