<template>
	<div class="todo-container">
		<div class="todo-wrap">
				<Header :addTodo="addTodo"></Header>
				<List :todos="todos" :deleteTodo="deleteTodo" :updateTodo="updateTodo"></List>
				<Footer :todos="todos" :selectAll="selectAll" :deleteCompleted="deleteCompleted"></Footer>
		</div>
	</div>
</template>

<script>
import Header from './Header'
import List from './List'
import Footer from './Footer'
export default {
	data () {
		return {
			todos: JSON.parse(localStorage.getItem('todos_key') || '[]')
			// todos: [
			// 	{id: 1, title: '吃饭', complete: false},
			// 	{id: 2, title: '睡觉', complete: true},
			// 	{id: 3, title: '打豆豆', complete: false}
			// ]
		}
	},
	methods: {
		addTodo (todo) {
			this.todos.unshift(todo)
		},
		deleteTodo (index) {
			this.todos.splice(index, 1)
		},
		updateTodo (todo, isCheck) {
			todo.complete = isCheck
		},
		selectAll (isSelect) {
			this.todos.forEach(todo => (todo.complete = isSelect))
		},
		deleteCompleted () {
			this.todos = this.todos.filter(todo => (!todo.complete))
		}
	},
	watch: {
		todos: {
			deep: true, // 深度监视
			handler: function (value) {
				localStorage.setItem('todos_key', JSON.stringify(value))
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
