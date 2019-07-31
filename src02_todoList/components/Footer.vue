<template>
    <div class="todo-footer">
        <label>
          <!--<input type="checkbox" v-model="isCheck"/>-->
          <slot name='left'></slot>
        </label>
        <!--<span>
          <span>已完成{{finishCount}}</span> / 全部{{todos.length}}
        </span>-->
        <slot name='middle'></slot>
        <!--<button class="btn btn-danger" v-if="finishCount" @click="deleteFinish">清除已完成任务</button>-->
          <slot name='right'></slot>
      </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      todos: {
        type: Array,
        required: true
      },
      selectAll: {
        type: Function,
        required: true
      },
      deleteFinish: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped>
    .todo-footer {
        height: 40px;
        line-height: 40px;
        padding-left: 6px;
        margin-top: 5px;
    }

    .todo-footer label {
        display: inline-block;
        margin-right: 20px;
        cursor: pointer;
    }

    .todo-footer label input {
        position: relative;
        top: -1px;
        vertical-align: middle;
        margin-right: 5px;
    }

    .todo-footer button {
        float: right;
        margin-top: 5px;
    }
</style>
