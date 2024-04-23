<script lang="ts">
  import Button from './Button.svelte';
  export let img: string;
  export let price: string;
  export let name: string;
  export let description: string;
</script>

<div class="gap-10px flex flex-col items-center justify-items-center w-full h-full text-center">
  <img src={img} alt="img" class="w-full h-full object-contain" />
  <p class="font-bold">
    {price}
  </p>
  <p class="font-bold">
    "{name}"
  </p>
  <p>
    {@html description}
  </p>
  <Button>Купить</Button>
</div>
