<script setup lang="ts">
import { ref } from 'vue'
import TouchNumbers from '../components/TouchNumbers.vue'

import TitleItem from '@/components/TitleItem.vue'
import TotalFooterPayment from '@/components/TotalFooterPayment.vue'
import PreviousPayments from '@/components/PreviousPayments.vue'
import PaymentsDivision from '@/components/PaymentsDivision.vue'

let amount = ref<string[]>([])

const updateAmount = (newAmount: string[]) => {
  amount.value = newAmount
}
</script>

<template>
  <main>
    <TitleItem title="Pago de Propinas" :amount="amount" />
    <div>
      <PaymentsDivision :amount="amount" />
      <TouchNumbers @update="updateAmount" />
      <PreviousPayments />
    </div>
    <TotalFooterPayment :amount="amount" />
  </main>
</template>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem;
}
main {
  width: 100%;
}
</style>
