<script lang="ts">
  import CandelsArt from '$lib/components/candes-art.svelte';
  import Button from './Button.svelte';
</script>

<div id="welcome" class="h-screen grid grid-cols-3 items-center pl-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Вдохните искусство!</h1>
    <p class="mb-8 w-70%">
      Добро пожаловать на сайт "Аромат ваших эмоций"! Наши свечи — это не просто источник света, но
      и уникальный способ восприятия искусства. Здесь вы найдете эксклюзивные ароматические свечи,
      вдохновленные различными искусствами, музыкой, картинами и фильмами.
    </p>
    <p class="mb-8 w-70%">
      Откройте для себя наш каталог и погрузитесь в мир изысканных ароматов и неповторимых дизайнов.
    </p>
    <!-- Catalog button -->
    <div class="mt-8">
      <Button>
        <a href="#catalog">Каталог</a>
      </Button>
    </div>
  </div>
  <div class="col-span-2 h-full w-full grid place-items-center overflow-hidden">
    <CandelsArt />
  </div>
</div>
