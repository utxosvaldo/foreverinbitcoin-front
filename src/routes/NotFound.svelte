<script lang="ts">
  import {
    Button,
    ButtonGroup,
    DarkMode,
    Input,
    InputAddon,
    Label,
    Span,
    Spinner
  } from 'flowbite-svelte';
  import { Card } from 'flowbite-svelte';
  import Heading from '../components/Heading.svelte';
  import NavBar from '../components/NavBar.svelte';
  import Footer from '../components/Footer.svelte';
  import { MagnifyingGlass } from 'svelte-heros-v2';

  let orderId;

  $: orderIdURL = `/#/orders/${orderId}`;
</script>

<!-- <DarkMode /> -->
<div
  id="main"
  class="relative px-2 sm:px-5 py-4 overflow-auto justify-start text-center"
>
  <NavBar />
  <Heading />
  <div class="flex justify-center pt-8">
    <Card class="items-center gap-2">404 Not Found</Card>
  </div>
  <Footer />
</div>

<style>
  #main {
    /* /* margin: 10px; */
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background-image: url('/violet-blue-bg.jpg');
    background-repeat: no-repeat;
    background-position: center;
  }
</style>
