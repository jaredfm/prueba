<script setup lang="ts">
import AmountItem from '@/components/AmountItem.vue'
import IconPencil from './icons/IconPencil.vue'
defineProps<{
  amount: string[]
}>()
</script>
<template>
  <article>
    <p>Total de Propinas</p>
    <div>
      <AmountItem :amount="amount.join('')" />
      <IconPencil />
    </div>
  </article>
</template>

<style scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.icon {
  width: 2rem;
  height: 2rem;
}
div {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
p {
  color: #ed6959;
  font-weight: 700;
}
</style>
