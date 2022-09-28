<template>
  <Layout>
    <template #header>
      <Header />
    </template>

    <template #main-content>
      <h6>Holi</h6>
    </template>

    <template #nav-menu>
      <Header />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/layouts/Default.vue";
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
    Layout,
  },
};
</script>
