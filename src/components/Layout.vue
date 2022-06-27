<template>
	<s-header/>
	<main>
		<slot name="content"></slot>
	</main>
	<s-footer/>
</template>

<script>
import sHeader from '@/components/Header';
import sFooter from '@/components/Footer';

export default {
	name: 's-layout',
	components: {
		sHeader,
		sFooter
	}
}
</script>