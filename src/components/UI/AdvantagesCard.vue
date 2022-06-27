<template>
	<div
		v-for='advantage in advantages'
		:key='advantage.id'
		:class="{
			'accordion_open': advantage.isOpen
		}"
		class="advantages-card accordion"
	>
		<button
			@click="advantage.isOpen = !advantage.isOpen"
			class="advantages-card__title accordion__trigger"
		>
			<span class="advantages-card__number">
				{{ advantage.number }}
			</span>
			{{ advantage.title }}
			<svg-sprite
				spriteClass="advantages-card__icon"
				spriteName="plus"
			/>
		</button>
		<div class="advantages-card__body accordion__body">
			<p class="advantages-card__description">
				{{ advantage.text }}
			</p>
		</div>
	</div>
</template>

<script>

export default {
	name: 'advantages-card',
	data: () => ({
		isOpen: false,
		number: '',
		title: '',
		time: '',
		text: ''
	}),
	props: {
		advantages: {
			type: Array,
			default: () => ([]),
			required: true
		}
	},
}
</script>