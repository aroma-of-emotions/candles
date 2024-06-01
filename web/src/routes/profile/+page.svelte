<script lang="ts">
  import { goto, invalidateAll } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import { reloadPage } from '$lib/utils';

  const user = JSON.parse(localStorage.getItem('user') || '{}');
</script>

<div class="h-[calc(100vh-85px)] grid items-center justify-items-center">
  <div class="grid items-center justify-items-center text-center py-20">
    <div class="">
      <div class="mx-30">
        <div class=" bg-opacity-50 bg-white shadow w-full h-full px-10 py-5 flex flex-col gap-2">
          <div>
            <h1 class="font-bold mb-6">Мой профиль</h1>

            <p>Email: {user.email}</p>
            <p>Логин: {user.username}</p>
          </div>
          <Button
            on:click={async () => {
              localStorage.removeItem('user');
              localStorage.removeItem('email');
              localStorage.removeItem('token');
              // history.replaceState('/candles/login')
              goto('/candles/login');
              reloadPage();
            }}
          >
            Выйти
          </Button>
        </div>
      </div>
    </div>
  </div>
</div>
