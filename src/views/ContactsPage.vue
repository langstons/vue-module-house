<template>
	<s-layout>
		<template v-slot:content>
			<section class="contacts">
				<div class="container">
					<div class="contacts__text">
						<h1 class="site-title">
							Contacts
						</h1>
						<p class="site-description">
							Professional advice on construction, architecture, development.
						</p>
					</div>
					<div class="contacts__table">
						<contacts-card
							:contacts="data.contacts"
						/>
					</div>
				</div>
				<div class="contacts__image">
					<img src="/assets/img/contacts-image.png" alt="Decor image">
				</div>
			</section>
		</template>
	</s-layout>
</template>

<script>
import sLayout from '@/components/Layout';
import ContactsCard from '@/components/UI/ContactsCard';

// Import Data from json
import dataJson from '../../data.json';

export default {
	name: 'ContactsPage',
	components: {
		ContactsCard,
		sLayout
	},
	data: () => ({
		data: dataJson,
	}),
}
</script>