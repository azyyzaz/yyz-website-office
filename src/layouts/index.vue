<template>
	<div>
		<el-affix :offset="0"><Header /></el-affix>
		<GoTop />
		<router-view class="router-view" />
	</div>
</template>
<style lang="less">
	.router-view {
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		max-width: 1920px;
		min-width: 1200px;
	}
</style>
<script setup>
	import Header from "./header.vue";
	import GoTop from "./goTop.vue";
</script>
