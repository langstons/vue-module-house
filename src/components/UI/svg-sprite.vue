<template>
	<svg class="svg-sprite" :class="spriteClass">
		<use :xlink:href="this.name"></use>
	</svg>
</template>

<script>
export default {
	name: 'svg-sprite',
	data: () => ({
		name: 'lol',
	}),
	props: {
		spriteClass: {
			type: String,
			default: '',
			required: true
		},
		spriteName: {
			type: String,
			default: '',
			required: true
		}
	},
	created: function (){
		this.setSpriteName()
	},
	methods: {
		setSpriteName() {
			this.name = "/assets/img/sprite.svg#" + this.spriteName
		}
	},
	// methods: {
	// }
}
</script>