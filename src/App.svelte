<script lang="ts">
  import { DarkMode } from 'flowbite-svelte';
  import { Card } from 'flowbite-svelte';
  // import FilePond from './components/FilePond.svelte';
  import Heading from './components/Heading.svelte';
  import InputTabs from './components/inputs/InputTabs.svelte';
  import FeeTabs from './components/fees/FeeTabs.svelte';
  import InscriptionPreview from './components/InscriptionPreview.svelte';
  import ReceiveAddressInput from './components/ReceiveAddressInput.svelte';
  import OrderDetails from './components/OrderDetails.svelte';
</script>

<!-- <DarkMode /> -->
<div
  class="p-8 overflow-auto bg-gray-50 dark:bg-gray-900 grid justify-items-center text-center"
>
  <Heading />
  <Card class="flex items-center gap-2">
    <InputTabs />
    <InscriptionPreview />
    <FeeTabs />
    <ReceiveAddressInput />
    <OrderDetails />
  </Card>
</div>

<style>
  div {
    /* /* margin: 10px; */
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: -1;
    /* border: 2px solid black; */
    background: radial-gradient(
        circle at 22% 11%,
        rgba(62, 180, 137, 0.45),
        hsla(0, 0%, 100%, 0) 19%
      ),
      radial-gradient(
        circle at 82% 25%,
        rgba(33, 150, 243, 0.55),
        hsla(0, 0%, 100%, 0) 40%
      ),
      radial-gradient(
        circle at 25% 61%,
        rgba(250, 128, 114, 0.25),
        hsla(0, 0%, 100%, 0) 50%
      );
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
