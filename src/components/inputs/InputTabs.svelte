<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
  // import ImageInput from './ImageInput.svelte';
  import SatsInput from './SatsInput.svelte';
  import TextInput from './TextInput.svelte';
  import { Photo, PencilSquare, Tag } from 'svelte-heros-v2';
  import Filepond from '../Filepond.svelte';
  import { orderType } from '../../stores';

  const setImage = () => {
    $orderType = 'image';
    console.log('setting order type', $orderType);
  };
  const setText = () => {
    $orderType = 'text';
    console.log('setting order type', $orderType);
  };
  const setSatsName = () => {
    $orderType = 'sats';
    console.log('setting order type', $orderType);
  };
</script>

<Tabs
  activeClasses="p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500"
  contentClass="p-4 bg-primary-50 rounded-lg dark:bg-gray-800 mt-4 w-full"
>
  <TabItem open on:click={setImage}>
    <div slot="title" class="flex items-center gap-2">
      <Photo variation="solid" />
      Image
    </div>
    <Filepond />
    <!-- <ImageInput /> -->
  </TabItem>
  <TabItem on:click={setText}>
    <div slot="title" class="flex items-center gap-2">
      <PencilSquare variation="solid" />
      Text
    </div>
    <TextInput />
  </TabItem>
  <TabItem on:click={setSatsName}>
    <div slot="title" class="flex items-center gap-2">
      <Tag variation="solid" />
      .sats
    </div>
    <SatsInput />
  </TabItem>
</Tabs>
