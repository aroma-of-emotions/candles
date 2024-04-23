<script lang="ts">
  export let title: string;
  export let expanded: boolean = false;

  function toggle() {
    expanded = !expanded;
  }
</script>

<div class="expandable-container overflow-hidden">
  <button on:click={toggle} class="p-3 px-5 w-full text-left border-none bg-white">
    <div class="flex justify-between items-center">
      <span class="">{title}</span>
      <span class="text-lg">{expanded ? '↑' : '↓'}</span>
    </div>
  </button>

  {#if expanded}
    <div class="mt-2 ml-10">
      <div class="p-3 px-5 bg-white">
        <span>
          <slot />
        </span>
      </div>
    </div>
  {/if}
</div>

<style>
  .expandable-container {
    transition: all 0.3s ease;
    /* Other styles here */
  }
</style>
