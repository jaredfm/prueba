<script setup lang="ts">
import IconCash from './icons/IconCash.vue'
import IconCreditCard from './icons/IconCreditCard.vue'
</script>
<template>
  <section>
    <h3>Pagos</h3>
    <footer>
      <article>
        <IconCash />
        <p>Efectivo</p>
      </article>
      <article>
        <IconCreditCard />
        <p>Santander 2323</p>
      </article>
    </footer>
  </section>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
svg {
  width: 2rem;
  height: 2rem;
}
h3 {
  color: #3d3d3d;
  font-weight: 700;
}
article {
  display: flex;
  align-items: center;
  min-height: 3rem;
  border-radius: 8px;
  gap: 0.6rem;
  box-shadow: 0 0 5px #3d3d3d;
  font-weight: 700;
  color: #3d3d3d;
  padding: 1rem;
}
</style>
