<script>
  import { Tabs, TabItem, Heading } from 'flowbite-svelte';
  import FeeTab from './FeeTab.svelte';
  import {
    Square3Stack3d,
    Square2Stack,
    ArrowUpOnSquare
  } from 'svelte-heros-v2';
</script>

<Heading class="text-xl">Inscription Priority</Heading>
<Tabs style="underline">
  <TabItem open>
    <div slot="title" class="flex items-center gap-2">
      <Square3Stack3d variation="solid" />

      Low
    </div>

    <!-- <div class="flex"> -->
    <FeeTab />
    <!-- </div> -->
  </TabItem>
  <TabItem>
    <div slot="title" class="flex items-center gap-2">
      <Square2Stack variation="solid" />
      Medium
    </div>
    <FeeTab />
  </TabItem>
  <TabItem>
    <div slot="title" class="flex items-center gap-2">
      <ArrowUpOnSquare variation="solid" />
      High
    </div>
    <FeeTab />
  </TabItem>
</Tabs>
