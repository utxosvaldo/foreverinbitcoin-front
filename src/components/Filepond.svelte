<script>
  import FilePond, { registerPlugin, supported } from 'svelte-filepond';

  // Import the Image EXIF Orientation and Image Preview plugins
  // Note: These need to be installed separately
  // `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
  import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
  import FilePondPluginImagePreview from 'filepond-plugin-image-preview';

  // Import the File Type Validation plugin
  import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

  import {
    feePriority,
    feeRate,
    fileName,
    loadingEstimateFees,
    priorityFees,
    rateUSD
  } from '../stores';
  import { ConvertPF } from '../interfaces/priorityFees';

  // Register the plugins
  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview,
    FilePondPluginFileValidateType
  );

  // a reference to the component, used to call FilePond methods
  let pond;

  // pond.getFiles() will return the active files

  // the name to use for the internal file input
  let name = 'file';

  // handle filepond events
  function handleInit() {
    console.log('FilePond has initialised');
  }

  async function handleAddFile(err, fileItem) {
    console.log('fileItem when added', fileItem.filename);
  }

  async function handleProcessFile(err, fileItem) {
    console.log('Handling process file: ', fileItem.filename);
    console.log('Server id: ', fileItem.serverId);

    fileName.set(fileItem.serverId);

    await estimateFees();
  }

  async function estimateFees() {
    $loadingEstimateFees = true;
    console.log('loading', $loadingEstimateFees);
    const requestData = {
      filename: $fileName
    };

    console.log(requestData);
    const response = await fetch('/api/estimatefees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData)
    });
    // console.log(await response.json());

    const data = ConvertPF.toPriorityFees(await response.text());
    // console.log(data);

    priorityFees.set(data);
    feePriority.set('high');
    feeRate.set(data.high.feeRate);
    rateUSD.set(data.rateUSD);
    $loadingEstimateFees = false;
    // console.log('setting priority fees to', $feePriority, $feeRate);
  }
</script>

<div class="app w-full">
  <FilePond
    bind:this={pond}
    {name}
    server="/api/upload"
    allowMultiple={false}
    oninit={handleInit}
    onaddfile={handleAddFile}
    onprocessfile={handleProcessFile}
    acceptedFileTypes={'image/*'}
  />
</div>

<style global>
  @import 'filepond/dist/filepond.css';
  @import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

  /* the background color of the filepond drop area */
  .filepond--panel-root {
    background-color: #ddd6fe;
  }

  .filepond--credits {
    display: none;
  }
</style>
