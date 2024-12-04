<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import IconDelete from './icons/IconDelete.vue'
const numbers = ref(['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0', false])
const amount = ref([''])
import IconCircleCheck from './icons/IconCircleCheck.vue'
const emit = defineEmits(['update'])

const handleClick = (number: string | boolean) => {
  if (typeof number === 'string') {
    amount.value.push(number)
  } else {
    // check si la cantidad es correcta para pintar este componente de otro color
  }

  emit('update', amount.value)
}

const handleDelete = () => {
  amount.value.pop()
  emit('update', amount.value)
}
</script>

<template>
  <section :class="{ 'valid-amount': amount.length > 1 }">
    <header>
      <h2>$</h2>
      <h2>{{ amount.join('') }}</h2>
      <IconDelete @click="handleDelete" />
    </header>
    <footer class="numbers">
      <p v-for="number in numbers" :key="number.toString()" @click="handleClick(number)">
        <IconCircleCheck v-if="number === false" />
        <span v-else>{{ number }}</span>
      </p>
    </footer>
    <div :class="{ 'valid-amount': amount.length > 1 }">
      Cantidad Restante
      {{ Number(amount.join('')).toLocaleString('en-US', { minimumFractionDigits: 2 }) }}
    </div>
  </section>
</template>
<style scoped>
div {
  display: none;
  color: #ed6959;
  font-weight: 700;
  justify-content: center;
  padding: 0.3rem 0rem;
}
div.valid-amount {
  display: flex;
  border: 2px solid #ed6959;
  border-color: #ed6959;
  background-color: #fef5f4;
  border-radius: 10px;
}
h2 {
  font-size: 1.5rem;
  font-weight: 700;
}
svg:hover {
  cursor: pointer;
  color: #ed6959;
  transform: scale(1.1);
  transition: transform 0.2s ease;
}
header {
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #d0d0d0;
}
section {
  display: flex;
  flex-direction: column;
  max-width: fit-content;
  background-color: #e7e7e7;
  border-radius: 10px;
  border: 2px solid #e7e7e7;
  gap: 0.4rem;
  padding: 1.5rem 3rem;
  margin: 0 auto;
}

section.valid-amount {
  border-color: #ed6959;
  background-color: #fef5f4;
}

footer {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.6rem;
}

p {
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 1px solid #d0d0d0;
  background-color: #ffffff;
  color: #3d3d3d;
  min-height: 4.2rem;
  min-width: 4.2rem;
  font-size: 1.3rem;
  font-weight: 700;
}
p:hover {
  cursor: pointer;
  background-color: #f5f5f5;
}
</style>
