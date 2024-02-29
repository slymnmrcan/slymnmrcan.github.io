<script setup>
useHead({
  title: 'özgeçmiş',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Logithing Teknoloji
          </h4>
          <span>2021-2022</span>
          <p class="timeline-item-desc">
            Türkiye/Konya
          </p>
          <p class="timeline-text">
            .Net Developer/Pentester
          </p>
        </li>
        
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Kara yolları bölge müdürlüğü
          </h4>
          <span>From — Until</span>
          <p class="timeline-item-desc">
            Türkiye/Konya
          </p>
          <p class="timeline-text">
            Intern
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">
              Your Skill
            </h5>
            <data value="90">70%</data>
          </div>

          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%;" />
          </div>
        </li>

      </ul>
    </section>
  </article>
</template>
