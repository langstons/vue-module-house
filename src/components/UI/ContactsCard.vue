<template>
	<div
		v-for='contact in contacts'
		:key='contact.id'
		class="contacts__wrapper"
	>
		<div class="contacts-card">
			<h3 class="contacts-card__title">
				{{ contact.country }}
			</h3>
			<p class="contacts-card__description">
				{{ contact.phone }}
			</p>
			<p class="contacts-card__description">
				{{ contact.email }}
			</p>
			<p class="contacts-card__description">
				{{ contact.address }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'contacts-card',
	data: () => ({
		country: '',
		phone: '',
		email: '',
		address: ''
	}),
	props: {
		contacts: {
			type: Array,
			default: () => ([]),
			required: true
		}
	}
}
</script>