import React from 'react'
import Price from './Price'
import Form from './Form'

export default function ShopCart() {
  return (
    <div id='shopCart'  class="grid grid-cols-[2fr_1.3fr] gap-4 mt-16 max-[650px]:grid-cols-1">
      <div>
				<h2 class=" text-[32px] font-semibold pb-8">Моя корзина</h2>
				<Price />
				<Form />
			</div>
    </div>
  )
}