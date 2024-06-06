<template>
	<div class="header">
		<div class="header-menu">
			<div class="logo">
				<img src="../assets/logo.pic.jpg" alt="" />
			</div>
			<div class="menu_list">
				<ul>
					<li
						:class="
							item.name === route.name
								? 'bottom_line'
								: '' || item.name === 'serviceItems'
								? 'menuli-hover'
								: ''
						"
						v-for="item in listMenu"
						@click="toLink(item)"
					>
						{{ item.title }}
						<div class="fixed_caidan">服务项目栏 悬浮显示的内容, 省略不写...</div>
					</li>
				</ul>
			</div>
			<div class="contact_box">
				<span class="left_line">|</span>
				<img src="../assets/search.pic.jpg" alt="" />
				<img src="../assets/phone.pic.jpg" alt="" />
				<span>400&nbsp;690&nbsp;0031 </span>
			</div>
			<div class="log_btn">
				<button>登录</button>
				<button>注册</button>
			</div>
		</div>
	</div>
</template>

<script setup>
	import { ref } from "vue";
	import { useRouter, useRoute } from "vue-router";
	const listMenu = ref([
		{ name: "home", title: "首页" },
		{ name: "serviceItems", title: "服务项目" },
		{ name: "law", title: "法律法规" },
		{ name: "q&a", title: "Q & A" },
		{ name: "about", title: "关于我们" },
		{ name: "contact", title: "联系我们" },
	]);
	const router = useRouter();
	const route = useRoute();
	function toLink(params) {
		router.replace({ name: params.name });
	}
</script>
<style lang="less">
	.header-menu {
		width: 100%;
		max-width: 1920px;
		min-width: 1200px;
		height: 100px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		top: 0;
		position: absolute;
		z-index: 999;
		background-color: #fff;
		.menu_list {
			ul {
				display: flex;
				flex-direction: row;
				list-style: none;
				width: 500px;
				justify-content: space-around;
				.menuli-hover:hover {
					.fixed_caidan {
						display: block;
					}
				}
				li {
					display: flex;
					align-items: center;
					cursor: pointer;
					height: 29px;
					font-weight: 600;
					padding-left: 9px;
					padding-right: 9px;
					color: #658db4;
					.fixed_caidan {
						display: none;
						text-align: center;
						position: fixed;
						width: 100%;
						height: 100px;
						top: 100px;
						left: 0;
						background-color: #fff;
					}
				}
				.bottom_line {
					color: #083072;
					border-bottom: 1px solid #083072;
					border-bottom-width: 3px;
				}
			}
		}
		.contact_box {
			display: flex;
			align-items: center;
			width: 251px;
			justify-content: space-around;
			.left_line {
				font-size: 25px;
				color: #083072;
			}
			img {
				width: 27px;
			}
		}
		.log_btn {
			width: 159px;
			display: flex;
			justify-content: space-between;
			button {
				width: 73px;
				height: 37px;
				margin: 0;
				padding: 0;
				border: 1px solid #083072;
				background-color: #fff;
				color: #083072;
				border-radius: 5px;
				cursor: pointer;
			}
			button:hover {
				background-color: #083072;
				color: #fff;
			}
		}
	}
</style>
