<template>
<div>
  <button
    class="button"
    :style="{ color, borderColor: color }"
    :class="{ rounded }"
    @click="onClick"
    @dblclick="onDoubleClick"
  >
    <slot />!
  </button>

  <button-primary/>
  <button-secondary/>
  <button-tertiary/>
</div>
</template>

<script>
  import {ButtonPrimary} from 'ron-sample-sfc-test'
  import {ButtonSecondary} from 'ron-sample-sfc-test'
  import {ButtonTertiary} from 'ron-sample-sfc-test'

  export default {
    name: 'Button',
    components: {
      ButtonPrimary,
      ButtonSecondary,
      ButtonTertiary
    },
    props: {
      rounded: { 
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: '#42b983'
      }
    },

    methods: {
      onClick($event) {
        /**
         * Emitted when the button is clicked.
         * @event click
         * @type {Event}
         */
        this.$emit('click', $event);
      },
      onDoubleClick($event) {
        /**
         * Emitted when the button is double clicked.
         * @event doubleClick
         * @type {Event}
         */
        this.$emit('double-click', $event);
      }
    }
  }
</script>

<style>
.rounded {
  border-radius: 5px;
}

.button {
  border: 3px solid;
  padding: 10px 20px;
  background-color: white;
  outline: none;
}
</style>