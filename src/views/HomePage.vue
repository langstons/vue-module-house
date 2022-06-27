<template>
	<s-layout>
		<template v-slot:content>
			<section class="hero">
				<div class="container">
					<h1 class="site-title">
				<span class="site-title__full">
					Modular
				</span>
						Mobile Houses
					</h1>
					<div class="site-description">
						Modern architecture, author's interior design, comfortable home space where you want to return - architecture, design and concepts of the Module House architectural bureau.
						<router-link to="/" class="arrow-link">
							<svg-sprite
								spriteClass="arrow-link__icon"
								spriteName="arrow-right-top"
							/>
						</router-link>
					</div>
				</div>
			</section>
			<section class="products">
				<swiper
					:slides-per-view="1"
					:space-between="0"
					:autoplay='{
				"delay": 500,
				"disableOnInteraction": false
			}'
					:navigation="{
				nextEl: '.products-button-next',
				prevEl: '.products-button-prev'
			}"
					class="products-slider"
				>
					<swiper-slide
						v-for="product in products"
						:key="product.id"
					>
						<products-card
							:cardImage="product.image"
							:cardTitle="product.title"
							:cardText="product.text"
							:cardPrice="product.price"
						/>
					</swiper-slide>
					<div class="swiper-navigation products-navigation">
						<button class="swiper-button-prev products-button-prev">
							<svg-sprite
								spriteClass="products-button__icon"
								spriteName="arrow-prev"
							/>
						</button>
						<button class="swiper-button-next products-button-next">
							<svg-sprite
								spriteClass="products-button__icon"
								spriteName="arrow-prev"
							/>
						</button>
					</div>
				</swiper>
			</section>
			<section class="about">
				<div class="container">
					<h2 class="section-title">
						<span>MODERN</span>
						<span>INNOVATIVE</span>
						<span>COMPANY</span>
					</h2>
					<div class="about__text">
						<p class="site-description">
							Module House is a modern innovative company that produces and delivers modular movable fast-deployed houses and buildings and operates in Europe. Module House started operations in 2016, we created a sophisticated team that is involved in architecture, R&D, production and marketing and sales.
						</p>
						<p class="site-description">
							Creative architecture and interior design by Module House burau of architecture provides modern and outstanding solutions that are suitable for modular construction and preserve all the benefits of fabrication of the houses inside the factory.
						</p>
					</div>
					<ul class="stats">
						<li class="stats__item">
							founded in
							<span class="stats__title">
						2016
					</span>
						</li>
						<li class="stats__item">
							more than
							<span class="stats__title">
						60
					</span>
							objects
						</li>
						<li class="stats__item">
							total area
							<span class="stats__title">
						5 500 м<sup>2</sup>
					</span>
						</li>
					</ul>
					<div class="about__image">
						<img src="/assets/img/about-image.png" alt="Decor image">
					</div>
				</div>
			</section>
			<section class="advantages">
				<div class="container">
					<h2 class="section-title">
						Advantages
					</h2>
					<div
						v-if="data.advantages"
						class="advantages__list"
					>
						<advantages-card
							:advantages="data.advantages"
						/>
					</div>
				</div>
				<div class="advantages__image">
					<img src="/assets/img/advantages-decor.png" alt="Decor image">
				</div>
			</section>
			<section class="stages">
				<div class="container">
					<h2 class="section-title">
						Stages of work
					</h2>
					<div
						v-if="data.stages"
						class="stages__table"
					>
						<stages-card
							:stages="data.stages"
						/>
					</div>
				</div>
			</section>
			<section class="request">
				<div class="container">
					<h2 class="section-title">
						<span>Request</span> More Info
					</h2>
					<form action="" class="request-form">
						<request-field
							field-type="text"
							field-placeholder="Name"
						/>
						<request-field
							field-type="email"
							field-placeholder="Email"
						/>
						<request-field
							field-type="tel"
							field-placeholder="Phone"
						/>
						<s-text-area
							textareaClass="request-form__field request-form__message"
							textareaPlaceholder="Message"
						/>
						<btn-primary
							buttonType="submit"
							buttonText="Send"
						/>
					</form>
				</div>
			</section>
		</template>
	</s-layout>
</template>

<script>
import sLayout from '@/components/Layout';
import RequestField from '@/components/UI/request-field';
import BtnPrimary from '@/components/UI/ButtonPrimary';
import sTextArea from '@/components/UI/TextArea';
import StagesCard from '@/components/UI/StagesCard';
import AdvantagesCard from '@/components/UI/AdvantagesCard';
import ProductsCard from '@/components/UI/ProductsCard';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

// Import Data from json
import dataJson from '../../data.json';

export default {
	name: 'HomePage',
	components: {
		sLayout,
		RequestField,
		BtnPrimary,
		sTextArea,
		StagesCard,
		AdvantagesCard,
		ProductsCard,
		Swiper,
		SwiperSlide,
	},
	data: () => ({
		data: dataJson,
		products: dataJson.products
	}),
	mounted() {
		return {
			modules: [Navigation, A11y, Autoplay],
		};
	}
}
</script>

<style lang="scss">
.swiper-slide {
	height: auto;
}

</style>