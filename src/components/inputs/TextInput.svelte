<script>
  import { Textarea, Label, Button } from 'flowbite-svelte';
</script>

<div class="grid justify-items-center  w-full">
  <div>
    <Textarea
      id="textarea-id"
      placeholder="Enter your text..."
      rows="4"
      name="message"
      class="w-full"
    />
    <Button outline gradient color="purpleToPink" class="mt-2"
      >Preview Inscription</Button
    >
  </div>
</div>
