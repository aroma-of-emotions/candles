<button class="button" on:click>
  <slot />
</button>

<style>
  .button {
    border: none;
    background-color: #ffbd59;
    padding: 16px 40px;
    transition: background-color 0.3s;
  }

  .button:hover {
    background-color: #d9a048; /* Adjusted for a darker hover effect */
  }

  .button:active {
    background-color: #c48b3a; /* Even darker for the click effect */
  }
</style>
