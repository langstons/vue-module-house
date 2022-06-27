<template>
	<div
		v-for='stage in stages'
		:key='stage.id'
		class="stages__wrapper"
	>
		<div class="stages-card">
			<h3 class="stages-card__title">
				<span class="stages-card__number">
					{{ stage.number }}
				</span>
				{{ stage.title }}
				<span class="stages-card__time">
					{{ stage.time }}
				</span>
			</h3>
			<p class="stages-card__description">
				{{ stage.text }}
			</p>
		</div>
	</div>
</template>

<script>

export default {
	name: 'stages-card',
	data: () => ({
		number: '',
		title: '',
		time: '',
		text: ''
	}),
	props: {
		stages: {
			type: Array,
			default: () => ([]),
			required: true
		}
	},
}
</script>