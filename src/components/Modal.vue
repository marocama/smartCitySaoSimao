<template>
	<div v-if="isOpen" class="flex modal-overlay" :class="isActive ? 'modal-overlay--active content-flex' : ''">
		<div class="modal-wrapper flex flex-col" :class="bg" :style="`max-height: ${full ? '100%' : maxheight}; margin: ${full ? '0' : '1'}rem; width: ${full ? '100%' : width}; height: ${full ? '100%' : height}; border-radius: ${full ? '0' : '8'}px;`">
			<!-- Header -->
			<slot v-if="hiddenheader" name="header" />
			<div v-else class="px-3 flex justify-between items-center text-gray-800">
				<span class="font-semibold">{{ title }}</span>
				<button @click="close()" class="p-1 h-9 w-9 hover:bg-gray-200 duration-500 rounded-full focus:outline-none focus:shadow-solid"><svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></button>
			</div>
			<!-- Exception -->
			<slot name="exception" />
			<!-- Main -->
			<main class="flex-grow pl-3 pr-1 overflow-y-scroll scrollbar">
				<slot />
			</main>
			<!-- Actions -->
			<footer class="px-3">
				<slot name="actions" />
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	props: { 
		id: { type: String, required: true },
		title: { type: String, default: '' },
		width: { type: String, default: 'auto' },
		bg: { type: String, default: 'bg-white' },
		height: { type: String, default: 'auto' },
		maxheight: { type: String, default: '100%' },
		fullscreen: { type: Boolean, default: false },
		hiddenheader: { type: Boolean, default: false },
		fixfullscreen: { type: Boolean, default: false },
	},

	computed: {
		isOpen() { return this.$store.getters['modals/allOpen'].includes(this.id) },
		full() { return this.fixfullscreen || (this.fullscreen && this.$store.state.window.width <= 640) ? true : false },
		isActive() { document.body.classList.add('is-nav-open'); return this.$store.getters['modals/active'] === this.id },
	},

	methods: { close() { this.$store.dispatch("modals/close", this.id) } },

	beforeDestroy() { if (this.isOpen) this.close() }
}
</script>

<style scoped>
.modal-overlay {
	-webkit-box-align: center;
	-webkit-align-items: center;
	-ms-flex-align: center;
	align-items: center;
	bottom: 0;
	right: 0;
	left: 0;
	top: 0;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	-webkit-flex-direction: column;
	-ms-flex-direction: column;
	flex-direction: column;
	overflow-y: auto;
	position: fixed;
	z-index: 50;
	-webkit-overflow-scrolling: touch;
	-webkit-tap-highlight-color: transparent;
}
.modal-overlay--active {
	background-color: rgba(0, 0, 0, 0.65);
}
.modal-wrapper {
	padding: 0.4rem 0rem 0.7rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	-webkit-animation: ModalShow .1s ease-out;
	animation: ModalShow .1s ease-out;
}
.content-flex {
	-webkit-justify-content: space-around;
	justify-content: space-around;
	-ms-flex-pack: distribute;
	display: flex;
}

@-webkit-keyframes ModalShow {
	0% {
		opacity: 0;
		-webkit-transform: scale(1.2);
		transform: scale(1.2)
	}
	to {
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1)
	}
}

@keyframes ModalShow {
	0% {
		opacity: 0;
		-webkit-transform: scale(1.2);
		transform: scale(1.2)
	}
	to {
		opacity: 1;
		-webkit-transform: scale(1);
		transform: scale(1)
	}
}
</style>