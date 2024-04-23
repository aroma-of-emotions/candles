<script lang="ts">
  import Button from './Button.svelte';
  import BotCandle from './bot-candle.svelte';
  import CandleItem from './candle-item.svelte';
  import ChevronDown from 'carbon-icons-svelte/lib/ChevronDown.svelte';
</script>

<div id="catalog" class="px-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Каталог</h1>
    <p class="mb-8">
      Откройте для себя наш широкий ассортимент ароматических свечей. Используйте фильтры по виду
      искусства и аромату для поиска идеальной свечи.
    </p>
  </div>
  <br />
  <br />
  <div class="col-span-2">
    <div class="grid grid-cols-2 gap-x-30 gap-y-20">
      <CandleItem
        img="c1.png"
        price="1599 ₽"
        name="Титаник"
        description="Запах: нежный аромат розы и мускуса. <br/>Вид искусства: фильм"
      />
      <CandleItem
        img="c1.png"
        price="1599 ₽"
        name="Титаник"
        description="Запах: нежный аромат розы и мускуса. <br/>Вид искусства: фильм"
      />
      <CandleItem
        img="c1.png"
        price="1599 ₽"
        name="Титаник"
        description="Запах: нежный аромат розы и мускуса. <br/>Вид искусства: фильм"
      />
      <CandleItem
        img="c1.png"
        price="1599 ₽"
        name="Титаник"
        description="Запах: нежный аромат розы и мускуса. <br/>Вид искусства: фильм"
      />
    </div>
    <br />
    <br />
    <div class="grid items-center justify-items-center">
      <Button>
        <div class="flex gap-5px items-center">
          Еще <ChevronDown />
        </div>
      </Button>
    </div>
    <BotCandle />
  </div>
</div>
