<template>
    <li :style="{background: bgColor}"
        @mouseenter="handelEnter(true)"
        @mouseleave="handelEnter(false)"
        >
        <label>
            <input type="checkbox" v-model="isCheck"/>
            <span>{{todo.thing}}</span>
        </label>
        <button class="btn btn-danger" v-if="isShow" @click="deleteItem">删除</button>
    </li>
</template>

<script type="text/ecmascript-6">
import Pubsub from 'pubsub-js'
  export default {
      props: {
          todo: Object,
          index: Number
      },
      data () {
          return {
              bgColor: '#ffffff',
              isShow: false
          }
      },
      methods: {
          handelEnter (isEnter) {
              if (isEnter) {
                  this.bgColor = '#cccccc'
                  this.isShow = true
              } else {
                  this.bgColor = '#ffffff'
                  this.isShow = false
              }
          },
          deleteItem () {
              if (confirm('确定要删除吗')) {
                  Pubsub.publish('deleteTodo', this.index)
              }
          }
      },
      computed: {
          isCheck: {
              get () {
                  return this.todo.finish
              },
              set (value) {
                  // this.updateTodo(this.todo, value)
                  this.$globalEventBus.$emit('updateTodo', {todo: this.todo, finish: value})
              }
          }
      }
  }
</script>

<style scoped>
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
</style>
