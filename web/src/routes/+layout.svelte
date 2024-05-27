<script lang="ts">
  import 'uno.css';
  import 'carbon-components-svelte/css/white.css';
  import '@fontsource-variable/rubik';
  import './global.scss';
  import Logo from '$lib/components/logo.svelte';
</script>

<header class=" py-4 my-0 bg-#ffe6d5 fixed top-0 w-full z-50 shadow">
  <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
    <div>
      <Logo />
    </div>

    <nav>
      <ul class="flex space-x-4">
        <li>
          <a
            href="/candles#about"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md"
          >
            О нас
          </a>
        </li>
        <li>
          <a
            href="/candles#catalog"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md"
          >
            Каталог
          </a>
        </li>
        <li>
          <a
            href="/candles#partners"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md"
          >
            Партнерам
          </a>
        </li>
        <li>
          <a
            href="/candles#delivery"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md"
          >
            Доставка и оплата
          </a>
        </li>
        <li>
          <a
            href="/candles#contacts"
            class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md"
          >
            Контакты
          </a>
        </li>
      </ul>
    </nav>

    <div class="flex items-center space-x-4">
      <a
        href="/candles/cart"
        class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md"
      >
        Корзина
      </a>
      <a
        href="/candles/history"
        class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md"
      >
        История заказов
      </a>
      <a
        href="/candles/login"
        class="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md"
      >
        Вход
      </a>
    </div>
  </div>
</header>

<main class=" bg-#ffe6d5 mx-0 px-0">
  <slot />
</main>

<footer class="bg-beige-100 text-gray-800 py-4 w-full">
  <div class="mx-30 flex justify-between items-center">
    <div class="flex flex-col items-center">
      <div class="flex items-center gap-3">
        <Logo />
        <p>© 2024</p>
      </div>
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
</style>
