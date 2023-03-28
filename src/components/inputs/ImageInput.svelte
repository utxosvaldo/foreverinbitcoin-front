<script>
  import { Tabs, TabItem, Button } from 'flowbite-svelte';
  import { Fileupload, Label } from 'flowbite-svelte';
</script>

<div class="grid justify-items-center">
  <Label class="mb-2 py-2" for="larg_size">Large file input</Label>
  <Fileupload id="larg_size" size="lg" />
  <Button outline gradient color="purpleToPink" class="mt-2"
    >Preview Inscription</Button
  >
</div>
