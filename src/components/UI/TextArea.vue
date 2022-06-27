<template>
	<textarea
		@input="resizeTextarea"
		:class="textareaClass"
		:placeholder="textareaPlaceholder"
	/>
</template>

<script>
export default {
	name: "s-text-area",
	props: {
		textareaClass: {
			type: String,
			default: '',
			required: true
		},
		textareaPlaceholder: {
			type: String,
			default: '',
			required: true
		}
	},
	methods: {
		resizeTextarea (event) {
			event.target.style.height = 'auto'
			event.target.style.height = (event.target.scrollHeight) + 'px'
		},
	},
	mounted () {
		this.$nextTick(() => {
			this.$el.setAttribute('style', 'height:' + (this.$el.scrollHeight) + 'px;overflow-y:hidden;')
		})
	},
}
</script>