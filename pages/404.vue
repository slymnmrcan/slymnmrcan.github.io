<script setup>
const router = useRouter()
useHead({
  title: 'Ooups!',
})
</script>

<template>
  <article class="active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        Page Not Found 
        <p>Bir sorun oluştu ama kontrolümüzde </p> 
      </h2>
    </header>

    <div class="grid grid-cols-1 text-center mb-20 md:mb-0">
      <div class="text-[5rem] text-[#f39c12] font-bold">
        404
      </div>

      <div class="text-xl text-[#fafafa]">
        <span>The Page you are looking for doesn't exist or an other error occured./Aradığın sayfa mevcut değil veya başka bir hata oluştu. 😞</span>
        <span class="mx-auto w-40 py-2 mt-5 cursor-pointer font-semibold bg-ranko-500 text-[#1e1e1f] rounded text-sm" @click="router.back()">
          Go back/Geri dön
        </span>
      </div>
    </div>
  </article>
</template>
