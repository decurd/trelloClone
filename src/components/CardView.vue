<template>
    <div>
        Card
        <div>
            cid : {{ cid }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cid: null
        }
    },
    watch: {
        '$route'() {
            this.cid = this.$route.params.cid
        }
    },
    created() {
        this.cid = this.$route.params.cid
    }
}
</script>

<style>

</style>
