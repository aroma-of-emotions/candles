<script lang="ts">
  import 'uno.css';
  import 'carbon-components-svelte/css/white.css';
  import './global.scss';
  import {
    Header,
    Content,
    Button,
    Grid,
    Row,
    Column,
    HeaderNav,
    HeaderNavItem,
    HeaderNavMenu,
    HeaderPanelLink,
    SkipToContent,
    Link
  } from 'carbon-components-svelte';
</script>

<Header company="Team 3" platformName="Candles">
  <svelte:fragment slot="skip-to-content">
    <SkipToContent />
  </svelte:fragment>
  <div class="flex gap-10">
    <Link href="/candles">Home</Link>
    <Link href="/candles/login">Login/Register</Link>
    <Link href="/candles/about">About Us</Link>
    <Link href="/candles/products">Catalog</Link>
    <Link href="/candles/partners">Partners</Link>
    <Link href="/candles/delivery-payment">Delivery & Payment</Link>
    <Link href="/candles/contacts">Contacts</Link>
    <Link href="/candles/cart">My Cart</Link>
  </div>
</Header>

<Content>
  <slot />
</Content>

<style>
  :global(header) {
    margin-bottom: 2rem;
  }
  :global(.bx--header__name) {
    cursor: pointer;
  }
</style>
