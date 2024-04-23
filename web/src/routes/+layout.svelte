<script lang="ts">
  import 'uno.css';
  import 'carbon-components-svelte/css/white.css';
  import '@fontsource/yeseva-one';
  import './global.scss';
  import Logo from '$lib/components/logo.svelte';
</script>

<header class=" py-4 my-0 bg-#ffe6d5 fixed top-0 w-full z-50">
  <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
    <div>
      <Logo />
    </div>

    <nav>
      <ul class="flex space-x-4">
        <li>
          <a
            href="#about"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            О нас
          </a>
        </li>
        <li>
          <a
            href="#catalog"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Каталог
          </a>
        </li>
        <li>
          <a
            href="#partners"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Партнерам
          </a>
        </li>
        <li>
          <a
            href="#delivery"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Доставка и оплата
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>

    <div class="flex items-center space-x-4">
      <a
        href="#welcome"
        class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        Корзина
      </a>
      <a
        href="#welcome"
        class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        История заказов
      </a>
      <a
        href="#welcome"
        class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
      >
        Вход
      </a>
    </div>
  </div>
</header>

<main class=" bg-#ffe6d5 mx-0 px-0">
  <slot />
</main>

<footer class="bg-beige-100 text-gray-800 p-4 w-full">
  <div class="mx-20 flex justify-between items-center">
    <div class="flex flex-col items-center">
      <Logo />
      <br />
      © 2024
    </div>
    <div class="flex space-x-4">
      <a href="#about" class="hover:text-gray-600">О НАС</a>
      <a href="#catalog" class="hover:text-gray-600">КАТАЛОГ</a>
      <a href="#partners" class="hover:text-gray-600">ПАРТНЁРАМ</a>
      <a href="#delivery" class="hover:text-gray-600">ДОСТАВКА И ОПЛАТА</a>
      <a href="#contacts" class="hover:text-gray-600">КОНТАКТЫ</a>
    </div>
    <div class="flex flex-col items-end">
      <span class="text-xs"><a href="tel:+7(812)233-00-89">+7 (812) 233-00-89</a></span>
      <span class="text-xs"
        ><a href="mailto: karinakrasuk05@gmail.com">karinakrasuk05@gmail.com</a></span
      >
      <span class="text-xs"><a href="https://t.me/karinakrasyuk">@karinakrasyuk</a></span>
    </div>
  </div>
</footer>

<style>
  :global(header) {
    margin-bottom: 2rem;
  }
  :global(.bx--header__name) {
    cursor: pointer;
  }

  :global(body) {
    font-family: 'Yeseva One', system-ui;
  }
</style>
