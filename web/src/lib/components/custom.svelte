<script lang="ts">
  import Button from './Button.svelte';
  import BotCandle from './bot-candle.svelte';
  import CandleItem from './candle-item.svelte';
  import { TextInput } from 'carbon-components-svelte';
</script>

<div id="custom" class="grid grid-cols-3 pl-30 py-20">
  <div>
    <h1 class="font-bold mb-6">Хотите свечу специально для вас?</h1>
    <p class="mb-8">
      Напишите в форму вид искусства, название, дизайн и аромат, и мы сделаем свечу именно по вашему
      запросу.
    </p>
  </div>
  <div class="col-span-2">
    <div class="mx-30">
      <div class=" bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
        <h3>Создайте собственну свечу</h3>

        <TextInput light placeholder="Введите вид искусства (фильм/музыка/картина/книга)" />
        <TextInput light placeholder="Название вида искусства и его автор " />
        <TextInput light placeholder="Опишите желаемый дизайн дизайн" />
        <TextInput light placeholder="Введите желаемый аромат" />
        <div>
          <Button>Заказать</Button>
        </div>
      </div>
    </div>

    <br />
    <BotCandle />
  </div>
</div>
