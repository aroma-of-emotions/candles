import { goto } from '$app/navigation';

export function reloadPage() {
  const thisPage = window.location.pathname;

  console.log('goto ' + thisPage);

  goto('/').then(() => goto(thisPage));
}

export interface Candle {
  id: number;
  name: string;
  price: number;
  description: string;
  artStyle: string;
  imageUrl: string;
}

export interface CartItem {
  id: number;
  userId: number;
  candleId: number;
  quantity: number; // Consider adding quantity if users can order multiple of the same candle
  candle: Candle;
}
