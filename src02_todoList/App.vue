<template>
    <div class="todo-container">
        <div class="todo-wrap">
        <!-- <Header @addTodo="addTodo"></Header> -->
        <Header ref="add"></Header>
        <List :todos="todos"></List>
        <Footer :todos="todos" :selectAll="selectAll" :deleteFinish="deleteFinish">
            <input type="checkbox" v-model="isCheck" slot='left'/>
            <span slot="middle">
                <span>已完成{{finishCount}}</span> / 全部{{todos.length}}
            </span>
            <button class="btn btn-danger" v-if="finishCount" @click="deleteFinish" slot="right">清除已完成任务</button>
        </Footer>
        </div>
    </div>
</template>
<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
import Pubsub from 'pubsub-js'
export default {
    data () {
        return {
            todos: JSON.parse(localStorage.getItem('todo_key') || '[]')
        }
    },
    computed: {
      finishCount () {
        return this.todos.reduce((pre, item) => (pre + (item.finish ? 1 : 0)), 0)
      },
      isCheck: {
        get () {
          return this.todos.length === this.finishCount && this.finishCount > 0
        },
        set (value) {
          this.selectAll(value)
        }
      }
    },
    mounted () {
        this.$refs.add.$on('addTodo', this.addTodo)
        // this.$globalEventBus.$on('updateTodo', (data) => {
        //     this.updateTodo(data.todo, data.finish)
        // })
        this.$globalEventBus.$on('updateTodo', this.updateTodo)
        Pubsub.subscribe('deleteTodo', (msg, index) => {
            this.deleteTodo(index)
        })
    },
    methods: {
        addTodo (todo) {
            this.todos.unshift(todo)
        },
        updateTodo ({todo, finish}) {
            todo.finish = finish
        },
        deleteTodo (index) {
            this.todos.splice(index, 1)
        },
        selectAll (isCheck) {
            this.todos.forEach((item) => (item.finish = isCheck))
        },
        deleteFinish () {
            this.todos = this.todos.filter((item) => (!item.finish))
        }
    },
    watch: {
        todos: {
          deep: true,
          handler: function (value) {
            localStorage.setItem('todo_key', JSON.stringify(value))
          }
        }
    },
    components: {
        Header,
        List,
        Footer
    }
}
</script>
<style scoped>
    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>
