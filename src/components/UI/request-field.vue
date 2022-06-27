<template>
	<input
		:type="fieldType"
		:placeholder="fieldPlaceholder"
		class="request-form__field"
	>
</template>

<script>
export default {
	name: 'request-field',
	props: {
		fieldType: {
			type: String,
			default: '',
			required: true
		},
		fieldPlaceholder: {
			type: String,
			default: '',
			required: true
		},
	}
}
</script>