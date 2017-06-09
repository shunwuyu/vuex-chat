<template lang="html">
  <div class="thread-section">
    <div class="thread-count">
      <span v-show="unreadCount">
        未读消息:{{unreadCount}}
      </span>
    </div>
    <ul class="thread-list">
      <thread v-for="thread in threads"
        :key="thread.id"
        :thread=thread>
      </thread>
    </ul>
  </div>
</template>

<script>
import Thread from './Thread.vue'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'threads'
    ]),
    unreadCount () {
      const threads = this.threads
      return threads.reduce((count, thread) => {
        return thread.read ? count : count + 1
      }, 0)
    }
  },
  components: {
    Thread
  }
}
</script>

<style lang="css">
</style>
