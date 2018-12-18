<template>
    <div v-if="loading">loading . . . </div>
    <div v-else> Card
        <div>
            cid : {{ cid }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cid: null,
            loading: false
        }
    },
    /* = 아래 watch와 같은 로직
    watch: {
        '$route'() {
            this.fetchData()
        }
    },
    created() {
        this.fetchData()
    }, */
    watch: {
        '$route': {
            handler: 'fetchData',
            immediate: true
        }
    },
    methods: {
        fetchData() {
            this.loading = true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading = false
            }, 500)
        }
    }
}
</script>

<style>

</style>
