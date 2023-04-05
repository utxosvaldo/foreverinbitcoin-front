<script>
  import {
    Button,
    Dropdown,
    DropdownItem,
    Chevron,
    Span,
    DropdownHeader
  } from 'flowbite-svelte';
  import { inscriptionId } from '../stores';

  $: ordioLink = `https://ord.io/${$inscriptionId}`;
  $: ordinalsWalletLink = `https://ordinalswallet.com/inscription/${$inscriptionId}`;
  $: ordinalsLink = `https://ordinals.com/inscription/${$inscriptionId}`;
</script>

<Button gradient color="purpleToPink" class="mt-2 mb-3 w-2/3"
  ><Chevron>See your inscription</Chevron></Button
>
<Dropdown rounded class="bg-violet-50 rounded py-2">
  <DropdownHeader>
    <span class="block text-sm text-gray-900 dark:text-white">
      Choose your favorite
    </span>
    <span class="block truncate text-sm font-medium">Ordinals explorer </span>
  </DropdownHeader>
  <DropdownItem href={ordioLink} target="_blank">
    <Span class="flex text-lg">
      <img class="h-6 mr-3" id="ord_io" src="/ord_io.png" alt="Ord.io" />Ord.io
    </Span>
  </DropdownItem>
  <!-- <DropdownItem>OrdinalsWallet.com</DropdownItem> -->
  <DropdownItem href={ordinalsLink} target="_blank">
    <Span class="flex text-lg">
      <img
        class="h-6 mr-3"
        id="ordinals_com"
        src="/ordinals.png"
        alt="Ordinals.com"
      />Ordinals.com
    </Span>
  </DropdownItem>
  <!-- <DropdownItem>Magic Eden</DropdownItem> -->
</Dropdown>
