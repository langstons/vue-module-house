<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__table">
				<div class="footer__wrapper md-full">
					<div class="footer-info">
						<h2 class="footer-info__title">
							MODULAR MOBILE HOUSES
						</h2>
						<p class="footer-info__description">
							Innovative technology, exclusive architecture,
							contemporary interior design
						</p>
					</div>
				</div>
				<div class="footer__wrapper">
					<ul class="footer__list">
						<li class="footer__item">
							<h3 class="footer__title">
								Contact us
							</h3>
						</li>
						<li class="footer__item">
							<a href="mailto:inf@modulemobile.house" class="footer__link">
								inf@modulemobile.house
							</a>
						</li>
						<li class="footer__item">
							<a href="tel:+491626677774" class="footer__link">
								+49 162 66 7777 4
							</a>
						</li>
					</ul>
				</div>
				<div class="footer__wrapper">
					<ul class="footer__list">
						<li class="footer__item">
							<h3 class="footer__title">
								Our offices
							</h3>
						</li>
						<li class="footer__item">
							<p class="footer__link footer__address">
								Germany, 65549 Limburg Am Fleckenberg 21
							</p>
						</li>
						<li class="footer__item">
							<router-link to="/contacts" class="footer__more underline">
								See more
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer__interactions">
				<router-link to="/" class="logo">
					<img class="logo__image" src="/assets/img/logo.svg" alt="Logo Of Module House">
				</router-link>
				<div class="footer__copyright">
					Module House 2021
					<p class="footer__authors">
						<span>Design by langstons.project</span>
						<span>Created  by Nikita Maketryuk</span>
					</p>
				</div>
				<ul class="social__list">
					<li class="social__item">
						<a href="/" class="social__link">
							<svg-sprite
								spriteClass="social__icon"
								spriteName="instagram"
							/>
						</a>
					</li>
					<li class="social__item">
						<a href="/" class="social__link">
							<svg-sprite
								spriteClass="social__icon"
								spriteName="facebook"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 's-footer',
	components: {}

}
</script>