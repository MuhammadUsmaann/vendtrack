<template>
    <h1 class="heading-style m-0">
        <slot>{{ content }}</slot>
    </h1>
</template>

<script>
export default {
    name: 'CHeading',
    props: {
        content: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
