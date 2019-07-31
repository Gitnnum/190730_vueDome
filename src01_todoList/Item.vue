<template>
    <li :style="{background:bgColor}"
				@mouseenter="handelEnter(true)"
				@mouseleave="handelEnter(false)">
        <label>
            <input type="checkbox" v-model="isCheck"/>
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" v-show="isShow" @click="deletItem">删除</button>
    </li>
</template>

<script type="text/ecmascript-6">
  export default {
		props: {
			todo: {
				type: Object,
				required: true
			},
			deleteTodo: {
				type: Function,
				required: true
			},
			index: {
				type: Number,
				required: true
			},
			updateTodo: {
				type: Function,
				required: true
			}
		},
		data () {
			return {
				bgColor: 'white',
				isShow: false
			}
		},
		methods: {
			handelEnter (isEnter) {
				if (isEnter) {
					this.bgColor = '#cccccc'
					this.isShow = true
				} else {
					this.bgColor = 'white'
					this.isShow = false
				}
			},
			deletItem () {
				if (confirm('确定要删除吗？')) {
					this.deleteTodo(this.index)
				}
			}
		},
		computed: {
			// 此时需要进行set监听，isCheck改变后，需要去更新app的data
			isCheck: {
				get () {
					return this.todo.complete
				},
				set (value) {
					this.updateTodo(this.todo, value)
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
