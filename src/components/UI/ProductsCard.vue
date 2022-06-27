<template>
	<div class="products-card">
		<div class="products-card__image">
			<img :src="cardImage" alt="Product preview">
		</div>
		<div class="products-card__text">
			<h3 class="products-card__title">
				{{ cardTitle }}
			</h3>
			<p class="products-card__description">
				{{ cardText }}
			</p>
			<div class="products-card__info">
				<span class="products-card__price">
					{{ cardPrice }} / m<sup>2</sup>
				</span>
				<btn-primary
					button-type="button"
					buttonText="More info"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import BtnPrimary from '@/components/UI/ButtonPrimary';

export default {
	name: 'products-card',
	components: {
		BtnPrimary,
	},
	props: {
		cardImage: {
			type: String,
			default: '',
			required: true
		},
		cardTitle: {
			type: String,
			default: '',
			required: true
		},
		cardText: {
			type: String,
			default: '',
			required: true
		},
		cardPrice: {
			type: String,
			default: '',
			required: true
		}
	}
}
</script>