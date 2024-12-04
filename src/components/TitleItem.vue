<script setup lang="ts">
defineProps<{
  title: string
  amount: string[]
}>()

import AmountItem from './AmountItem.vue'
import IconBack from './icons/IconBack.vue'
</script>

<template>
  <section>
    <aside>
      <p><IconBack /> Atrás</p>
      <h2>{{ title }}</h2>
    </aside>
    <div>
      <p>Efectivo en Caja</p>
      <AmountItem :amount="amount.join('')" />
    </div>
  </section>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: end;
  margin-right: 2rem;
  margin-top: 1rem;
}
section {
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #d3d3d3;
}
aside {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}
p {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ed6959;
  font-weight: 700;
}

h2 {
  color: #3d3d3d;
  font-size: 2.5rem;
}
</style>
