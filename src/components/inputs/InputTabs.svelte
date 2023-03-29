<script>
  import { Tabs, TabItem } from 'flowbite-svelte';
  import ImageInput from './ImageInput.svelte';
  import SatsInput from './SatsInput.svelte';
  import TextInput from './TextInput.svelte';
  import { Photo, PencilSquare, Tag } from 'svelte-heros-v2';
</script>

<Tabs style="underline">
  <TabItem open>
    <div slot="title" class="flex items-center gap-2">
      <Photo variation="solid" />
      Image
    </div>
    <ImageInput />
  </TabItem>
  <TabItem>
    <div slot="title" class="flex items-center gap-2">
      <PencilSquare variation="solid" />
      Text
    </div>
    <TextInput />
  </TabItem>
  <TabItem>
    <div slot="title" class="flex items-center gap-2">
      <Tag variation="solid" />
      .sats
    </div>
    <SatsInput />
  </TabItem>
</Tabs>
