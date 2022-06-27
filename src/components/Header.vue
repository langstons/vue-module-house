<template>
	<header class="header">
		<div class="container">
			<router-link to="/" class="logo">
				<img class="logo__image" src="/assets/img/logo.svg" alt="Logo of Module House">
			</router-link>
			<nav
				:class="{
					'nav_active': navOpen
				}"
				class="nav"
			>
				<ul class="nav__list">
					<li class="nav__item">
						<nav-link
							to="/"
							text="About"
						/>
					</li>
					<li class="nav__item">
						<nav-link
							to="/"
							text="Building"
						/>
					</li>
					<li class="nav__item">
						<nav-link
							to="/"
							text="Partnership"
						/>
					</li>
					<li class="nav__item">
						<nav-link
							to="/contacts"
							text="Contacts"
						/>
					</li>
				</ul>
				<a class="nav__email" href="mailto:inf@modulemobile.house">
					inf@modulemobile.house
				</a>
			</nav>
			<a class="header__email" href="mailto:inf@modulemobile.house">
				inf@modulemobile.house
			</a>
			<s-burger
				@clickHandler="navOpen = !navOpen"
				:navOpen="navOpen"
			/>
		</div>
	</header>
</template>

<script>
import sBurger from '@/components/UI/Burger';
import NavLink from '@/components/UI/NavLink';

export default {
	name: 's-header',
	components: {
		NavLink,
		sBurger
	},
	data: () => ({
		navOpen: false
	}),
}
</script>

<style scoped>

</style>