<template>
    <div class="container mt-5">
        <h1>Counter - Vuex</h1>
        <hr>
        <h2>Aceso directo <small>($store.state.counter.count)</small>: {{ $store.state.counter.count }}</h2>
        <hr>
        <h2>Computada <small>(return this.$store.state.counter.count)</small>: {{ countCoumputed }}</h2>
        <hr>
        <h1>MapState</h1>
        <hr>
        <button type="button" class="btn btn-primary m-2" @click="increment" :disabled="isLoading">+1</button>
        <button type="button" class="btn btn-primary m-2" @click="incrementBy" :disabled="isLoading">+5</button>
        <button type="button" class="btn btn-primary m-2" @click="incrementRandomInt"
            :disabled="isLoading">Random</button>
        <hr>
        <h2>count: {{ count }}</h2>
        <hr>
        <h2>lastMutation: {{ lastMutation }}</h2>
        <hr>
        <h2>Direct Getter "squareCount" ( {{ count }} x {{ count }} ): {{ $store.getters.squareCount }}</h2>
        <hr>
        <br>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        countCoumputed() {
            return this.$store.state.counter.count 
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
        // ...mapState({
        //     count: state => state.counter.count,
        //     lastMutation: state => state.counter.lastMutation,
        //     isLoading: state => state.counter.isLoading
        // })
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
        },
        incrementBy() {
            this.$store.commit('counter/incrementBy', 5)
        },
        // incrementRandomInt() {
        //     this.$store.dispatch('counter/incrementRandomInt')
        // }
        // ...mapActions('counter', ['incrementRandomInt'])
        ...mapActions('counter', {
            incrementRandomInt: 'incrementRandomInt'
        })
    }
}
</script>

<style scoped>
hr,
h1,
h2 {
    color: #394A5C;
}

.btn:hover {
    color: white;
    background-color: #232d38;
    border-color: #232d38;
}

.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #394A5C;
    --bs-btn-border-color: #394A5C;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #394A5C;
    --bs-btn-hover-border-color: #394A5C;
    --bs-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #394A5C;
    --bs-btn-active-border-color: #394A5C;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #394A5C;
    --bs-btn-disabled-border-color: #394A5C;
}
</style>