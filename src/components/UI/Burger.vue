<template>
	<button
		@click="$emit('clickHandler')"
		:class="{
			'burger_active': navOpen
		}"
		class="burger"
	></button>
</template>

<script>
export default {
	name: 's-burger',
	props: {
		navOpen: {
			type: Boolean,
			default: false,
			required: true
		}
	}
}
</script>