<template>
	<button :type="buttonType" class="btn-primary">
		<span class="btn-primary__text">
			{{ buttonText }}
		</span>
	</button>
</template>

<script>
export default {
	name: "btn-primary",
	props: {
		buttonType: {
			type: String,
			default: '',
			required: true
		},
		buttonText: {
			type: String,
			default: '',
			required: true
		},
	}
}
</script>