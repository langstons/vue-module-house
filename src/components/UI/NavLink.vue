<template>
	<router-link
		:to="to"
		class="nav__link"
	>
		{{ text }}
	</router-link>
</template>

<script>
export default {
	name: 'NavLink',
	props: {
		text: {
			type: String,
			default: '',
			required: true
		},
		to: {
			type: String,
			default: '',
			required: true
		},
	}
}
</script>