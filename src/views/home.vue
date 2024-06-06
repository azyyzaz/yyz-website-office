<template>
	<div class="home">
		<div class="el1">
			<el-carousel :autoplay="false" height="559px">
				<el-carousel-item>
					<div class="home_bg1 home_bg">
						<img class="home_bg" src="../assets/1703041894570.jpg" alt="" />
					</div>
				</el-carousel-item>
				<el-carousel-item>
					<div class="home_bg2 home_bg">
						<div class="text_box">
							<div class="text">
								<h1>为什么选择CTS</h1>
								<span
									>肯达信企业管理顾问有限公司成立于2000年,专业从事ISO9001、ISO14001、OHSAS18001、IATF16949、AS/EN9100、AS9110、AS9120、ISO22163、TL9000、ISO27001、ISO20000、ISO13485、MDSAP、ISO22000、BRC、IFS、FSSC22000、HACCP、ISO22716（GMPC)、GMP、FDA、GMI、ISO12647、G7、QC080000、FSC/COC、PEFC、ICTI、SA8000、WRAP、SMETA（SEDEX)、BSCI、ICS、RBA、CSC9000T等国际认证咨询以及客户验厂咨询、企业管理咨询、管理培训及职业技术职称资格考核培训…</span
								>
							</div>
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="serviceItems">
			<div class="title_box">
				<span class="tit1">SERVICE ITEM</span>
				<span class="tit2">服务项目</span>
				<span class="tit3"></span>
			</div>
			<el-carousel
				indicator-position="outside"
				height="800px"
				style="width: 1300px; margin: auto"
			>
				<el-carousel-item v-for="(items, index) in 4" :key="index">
					<div class="server_flex">
						<div class="server_box" v-for="(item, index) in 8" :key="index">
							<div class="img">
								<img src="../assets/1695106814875.png" alt="" />
							</div>

							<div class="span_title">
								<div class="span_top">
									<span class="title">SA8000</span>
									<span class="details">
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SA8000即“社会责任标准”，是Social
										Accountability
										8000的英文简称，是全球首个道德规范国际标准。其宗旨是：确保供应商所供应的产品，皆符合社会责任标准的要求。SAI经过18个月的公开咨询和深入研究，
										于2001年12月12日发表了SA8000标准第一个修订版，即SA8000:2001。
										经历2004、2008两次修改，目前SA8000 标准的第四版于2014年6月发布。SA8000
										是可供第三方认证审计的的自愿性标准，规定组织必须达到要求，包括建立或改善工人的权利、工作环境和有效的管理体系。SA8000
										认证只适用于每个特定的工作场所。</span
									>
									<br />
									<span class="details details2">
										SA8000
										标准的制定是基于联合国人权宣言、国际劳工组织公约，国际人权规范和国家劳动法律的规定。规范性的
										SA8000 认证审计参考文件包含 SA8000：2014 标准和 SA8000
										的执行绩效指标附件，以及促进了解如何符合此标准 SA8000
										指南文件。作为规范性文件，SA8000 执行绩效指标附件为已获取 SA8000
										证书的组织设定了最低的执行绩效指标。绩效指标附件可以从 SAI
										网站上获得。</span
									>
								</div>
								<div class="span_other">
									<span>了解更多</span>
									<img src="../assets/下载.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="renzheng">
			<div class="title_bos">
				<span class="tit1">Certification process</span>
				<span class="tit2"></span>
				<span class="tit3">认证流程</span>
			</div>
		</div>
		<div class="renzhengchat">
			<div class="title_bos">
				<span class="tit1">Certification consultation process</span>
				<span class="tit2"></span>
				<span class="tit3"> 认证咨询服务流程 </span>
			</div>
			<img class="renzhengchat_bg" src="../assets/1698379934957.jpg" alt="" />
		</div>

		<div class="server_point">
			<div class="title_bos">
				<span class="tit1">Service characteristics</span>
				<span class="tit2"></span>
				<span class="tit3">服务特点</span>
			</div>
			<img src="../assets/1698379942840.jpg" alt="" />
		</div>
		<div class="change_me">
			<div class="title_bos">
				<span class="tit1">Why choose us?</span>
				<span class="tit2"></span>
				<span class="tit3">为什么选择我们？</span>
			</div>
			<img src="../assets/1698379948894.jpg" alt="" />
		</div>

		<div class="custom_list">
			<div class="title_bos">
				<span class="tit1">CLIENT LIST</span>
				<span class="tit2"></span>
				<span class="tit3">客户名单</span>
			</div>
			<div class="this_list">
				<div class="four_li">
					<div class="one_li" v-for="item in 4">
						<div>
							<img src="../assets/1695111418549.png" alt="" />
						</div>
						<span>Asiatan International Ltd / TecTuff Ltd</span>
					</div>
				</div>
				<el-pagination background layout="prev, pager, next" :total="1" />
			</div>
		</div>
		<div class="common_problem">
			<div class="common_title">
				<p>常见问题</p>
				<i></i>
			</div>
			<div class="list_1">
				<el-radio-group @change="thisProblemG" v-model="radio2">
					<el-radio-button
						v-for="item in listCommon"
						:label="item.name"
						:value="item.name"
					/>
				</el-radio-group>
			</div>

			<div v-show="showTitle" class="this_problem" style="margin-top: 20px">
				<span class="show_span" @click="showThisProblem">1、SA8000常见问题</span>
				<el-collapse-transition>
					<div v-show="thisProblem">
						<div class="transition-box">SA8000常见问题测试</div>
					</div>
				</el-collapse-transition>
			</div>

			<el-pagination
				style="margin-top: 30px"
				background
				layout="prev, pager, next"
				:total="1"
			/>
		</div>
		<div class="server_earnest">
			<div class="title_bos">
				<span class="tit1">Take seriously · Professional services</span>
				<span class="tit2"></span>
				<span class="tit3">认真对待·专业服务</span>
			</div>
			<img src="../assets/1698379954241.jpg" alt="" />
		</div>
		<div class="bottom_info">
			<img class="top_bg" src="../assets/dibulan.54adfe9d.jpg" alt="" />
			<div class="bottom_box">
				<div class="box_left">
					<img src="../assets/logo.pic.jpg" alt="" />
					<span>主体单位:深圳市肯达信企业管理顾问管理有限公司</span>
					<span>运营维护单位：深圳市肯达信企业管理顾问管理有限公司</span>
					<span>版权所有：深圳市肯达信企业管理顾问管理有限公司</span>
				</div>
				<div class="box_right">
					<div class="ab_renz">
						<span class="title">认证服务项目</span>
						<span>SA8000</span>
						<span>SA8000</span>
						<span>SA8000</span>
						<span>SA8000</span>
					</div>
					<div class="ab_renz">
						<span class="title">认证服务项目</span>
						<span>SA8000</span>
						<span>SA8000</span>
						<span>SA8000</span>
						<span>SA8000</span>
					</div>
					<div class="ab_renz">
						<span class="title">扫描关注, 了解更多</span>
						<img src="" alt="" />
					</div>
				</div>
			</div>
			<div class="beian">
				<span>粤ICP备09058788号</span>
				<span>违法/不良信息举报邮箱：kevin@cts1983.com</span>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.home {
		.el1 {
			// 关闭指示器显示
			.el-carousel__indicators {
				display: none;
			}
			.text_box {
				width: 1200px;
				margin: 0 auto;
				.text {
					width: 525px;
					height: 351px;
					position: absolute;
					top: 50%;
					transform: translateY(-50%);
					h1 {
						color: #002f78;
						font-size: 44px;
						font-weight: 400;
					}
					span {
						color: #002f78;
						font-size: 14px;
						font-weight: 400;
						line-height: 20px;
					}
				}
			}

			.home_bg {
				width: 100%;
				height: 560px;
			}
			.home_bg1 {
				background: url(../assets/1703041894570.jpg) center center / cover no-repeat;
			}
			.home_bg2 {
				position: relative;
				background: url(../assets/1703041902834.jpg) center center / cover no-repeat;
			}
		}
		.serviceItems {
			margin-top: 80px;
			.el-carousel__arrow {
				width: 50px;
				height: 50px;
			}
			.title_box {
				position: relative;
				text-align: center;
				.tit1 {
					font-size: 48px;
					color: #def2f9;
				}
				.tit2 {
					font-size: 40px;
					color: var(--theme_bg_color);
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 1;
				}
				.tit3 {
					display: block;
					height: 30px;
					margin: auto;
					background-color: #def2f9;
					width: 200px;
					border-radius: 15px;
					transform: translateY(-10px);
				}
			}
			.el-carousel__item {
				.server_flex {
					max-width: 1200px;
					height: 730px;
					padding: 20px;
					padding-bottom: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					padding-left: 60px;
					padding-top: 45px;
					flex-wrap: wrap;
					.server_box:hover {
						span {
							color: #0065cf !important;
						}
						.img {
							border-bottom-color: #0065cf !important;
						}
					}
					.server_box {
						width: 270px;
						height: 330px;
						cursor: pointer;
						border-radius: 10px;
						box-shadow: 0 5px 20px 0 rgba(0, 95, 136, 0.1);
						box-sizing: border-box;
						margin-right: 26px;
						.img {
							width: 100%;
							height: 162px;
							border-bottom: 2px solid #e5effa;
							display: flex;
							align-items: center;
							justify-content: center;
							img {
								width: 100%;
							}
						}
						.span_title {
							height: 270px;
							.span_top {
								padding: 10px 20px;
								.title {
									font-size: 24px;
									color: #002f78;
									font-weight: 600;
									text-align: left;

									white-space: nowrap;
									overflow: hidden;
									text-overflow: ellipsis;
									width: 230px;
								}
								.details {
									color: #396ea1 !important;
									font-size: 12px;
									line-height: 17px;
									display: -webkit-box;
									-webkit-box-orient: vertical;
									-webkit-line-clamp: 2;
									overflow: hidden;
									text-overflow: ellipsis;
									margin-top: 10px;
								}
								.details2 {
									display: none;
								}
							}
							.span_other {
								display: flex;
								flex-direction: row;
								align-items: flex-start;
								justify-content: flex-start;
								padding: 0 20px;

								span {
									color: #002f78;
									font-size: 16px;
								}
								img {
									width: 26px;
									height: 16px;
									display: block;
									margin-right: 10px;
								}
							}
						}
					}
				}
			}
		}
		.renzheng {
			background: url("../assets/1131717572848_.pic.jpg") center center / cover
				no-repeat;
			margin: auto;
			max-width: 1920px;
			min-width: 1200px;
			background-color: #fff;
			box-sizing: border-box;
			overflow: hidden;
			position: relative;
			height: auto;
			min-height: 560px;
			.title_bos {
				width: 1200px;
				.tit1 {
					font-size: 48px;
					color: #def2f9;
					font-weight: 400;
					height: 60px;
					opacity: 0.2;
					position: absolute;
					text-align: center;
					top: 90px;
					left: 50%;
					transform: translateX(-50%);
				}
				.tit3 {
					color: #fff;
					font-size: 38px;
					font-weight: 600;
					transform: translateY(-40px);
					opacity: 1 !important;
					position: absolute;
					text-align: center;
					top: 110px;
					left: 50%;
					transform: translateX(-50%);
				}
				.tit2 {
					display: block;
					position: absolute;
					height: 30px;
					border-radius: 5px;
					width: 200px;
					left: 50%;
					margin-top: 150px;
					transform: translateX(-50%);
					background-color: #def2f9;
					border-radius: 20px;
					opacity: 0.2;
				}
			}
		}
		.renzhengchat {
			margin: auto;
			max-width: 1920px;
			min-width: 1200px;
			background-color: #fff;
			box-sizing: border-box;
			overflow: hidden;
			position: relative;
			height: auto;
			min-height: 560px;
			.title_bos {
				width: 1200px;
				position: absolute;
				text-align: center;
				top: 90px;
				left: 50%;
				transform: translateX(-50%);
				.tit1 {
					font-size: 48px;
					color: #def2f9;
					font-weight: 400;
					height: 60px;
				}
				.tit2 {
					display: block;
					position: absolute;
					height: 30px;
					border-radius: 5px;
					width: 200px;
					left: 50%;
					transform: translateX(-50%);
					background-color: #def2f9;
					border-radius: 20px;
				}
				.tit3 {
					width: 1200px;
					position: absolute;
					text-align: center;
					font-size: 38px;
					font-weight: 600;
					opacity: 1 !important;
					display: flex;
					justify-content: center;
					align-items: center;
					top: 20px;
				}
			}
			.renzhengchat_bg {
				width: 100%;
				display: block;
				// margin-left: -21px;
			}
		}
		.server_point {
			margin: auto;
			max-width: 1920px;
			min-width: 1200px;
			background-color: #fff;
			box-sizing: border-box;
			overflow: hidden;
			position: relative;
			height: auto;
			min-height: 560px;
			.title_bos {
				width: 1200px;
				position: absolute;
				text-align: center;
				top: 90px;
				left: 50%;
				transform: translateX(-50%);
				.tit1 {
					font-size: 48px;
					color: #def2f9;
					font-weight: 400;
					height: 60px;
					opacity: 0.2;
				}
				.tit2 {
					display: block;
					position: absolute;
					height: 30px;
					border-radius: 5px;
					width: 200px;
					left: 50%;
					transform: translateX(-50%);
					background-color: #def2f9;
					border-radius: 20px;
					opacity: 0.2;
				}
				.tit3 {
					width: 1200px;
					position: absolute;
					text-align: center;
					font-size: 38px;
					font-weight: 600;
					opacity: 1 !important;
					display: flex;
					justify-content: center;
					align-items: center;
					top: 20px;
					color: #fff;
				}
			}
			img {
				width: 100%;
				display: block;
			}
		}
		.change_me {
			margin: auto;
			max-width: 1920px;
			min-width: 1200px;
			background-color: #fff;
			box-sizing: border-box;
			overflow: hidden;
			position: relative;
			height: auto;
			min-height: 560px;
			.title_bos {
				width: 1200px;
				position: absolute;
				text-align: center;
				top: 90px;
				left: 50%;
				transform: translateX(-50%);
				.tit1 {
					font-size: 48px;
					color: #def2f9;
					font-weight: 400;
					height: 60px;
				}
				.tit2 {
					display: block;
					position: absolute;
					height: 30px;
					border-radius: 5px;
					width: 200px;
					left: 50%;
					transform: translateX(-50%);
					background-color: #def2f9;
					border-radius: 20px;
				}
				.tit3 {
					width: 1200px;
					position: absolute;
					text-align: center;
					font-size: 38px;
					font-weight: 600;
					opacity: 1 !important;
					display: flex;
					justify-content: center;
					align-items: center;
					top: 20px;
					color: #333;
				}
			}
			img {
				width: 100%;
				display: block;
			}
		}

		.custom_list {
			max-width: 1920px;
			min-width: 1200px;
			background-size: cover;
			height: 900px;
			margin: auto;
			background: url(../assets/背景.2b21476c.jpg) 50% no-repeat;
			padding-top: 30px;
			.title_bos {
				margin: auto;
				text-align: center;
				position: relative;
				margin-bottom: 130px;
				.tit1 {
					font-size: 48px;
					color: #def2f9;
					font-weight: 400;
					height: 60px;
					opacity: 0.2;
				}
				.tit2 {
					display: block;
					position: absolute;
					height: 30px;
					border-radius: 5px;
					width: 200px;
					left: 50%;
					transform: translateX(-50%);
					background-color: #def2f9;
					border-radius: 20px;
					opacity: 0.2;
				}
				.tit3 {
					position: absolute;
					color: #fff;
					font-size: 40px;
					top: 0;
					opacity: 1 !important;
					left: 50%;
					font-weight: 600;
					transform: translate(-50%, 50%);
				}
			}
			.this_list {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				.four_li {
					display: flex;
					flex-direction: row;
					justify-content: center;
					.one_li {
						width: 288px;
						margin-bottom: 10px;
						margin-right: 12px;
						border: 1px solid #ddd;
						background-color: #fff;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						div {
							width: 100%;
							height: 200px;
							margin: 17px 0;
							display: flex;
							justify-content: center;
							align-items: center;
							img {
								width: 130px;
							}
						}
						span {
							font-size: 12px;
							text-align: center;
							color: #0070d5;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							padding: 5px 5px;
						}
					}
				}
				.el-pagination {
					margin-top: 30px;
				}
			}
		}
		.common_problem {
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 30px 20px;
			flex-direction: column;
			.common_title {
				width: 1200px;
				display: flex;
				justify-content: center;
				text-align: center;
				flex-direction: column;
				margin-top: 30px;
				border-bottom: 1px solid #ddd;
				padding-bottom: 20px;
				p {
					color: #333;
					font-weight: 600;
					font-size: 30px;
					margin: 10px 0;
				}
				i {
					width: 60px;
					height: 2px;
					display: block;
					background-color: #016533;
					margin: auto;
					transform: translateY(20px);
				}
			}
			.list_1 {
				max-width: 1200px;
				margin-top: 30px;
				display: flex;
				flex-direction: row;
				padding-bottom: 10px;
				flex-wrap: wrap;
				span {
					display: flex;
					cursor: pointer;
					margin-right: 40px;
					margin-bottom: 20px;
				}
			}
			.this_problem {
				width: 1200px;
				border-top: 1px solid #888;
				border-bottom: 1px solid #888;
				.show_span {
					width: 1200px;
					display: flex;
					justify-content: flex-start;
					height: 40px;
					align-items: center;
					cursor: pointer;
					margin: 15px 0;
				}
				.transition-box {
					color: #666;
					display: flex;
					width: 1200px;
					justify-content: center;
					line-height: 30px;
					font-size: 13px;
				}
			}
		}
		.server_earnest {
			margin: auto;
			max-width: 1920px;
			min-width: 1200px;
			background-color: #fff;
			box-sizing: border-box;
			// overflow: hidden;
			position: relative;
			height: auto;
			margin-bottom: 40px;
			.title_bos {
				width: 1200px;
				position: absolute;
				text-align: center;
				top: 90px;
				left: 50%;
				transform: translateX(-50%);
				.tit1 {
					font-size: 48px;
					color: #def2f9;
					font-weight: 400;
					height: 60px;
					opacity: 0.2;
				}
				.tit2 {
					display: block;
					position: absolute;
					height: 30px;
					border-radius: 5px;
					width: 200px;
					left: 50%;
					transform: translateX(-50%);
					background-color: #def2f9;
					border-radius: 20px;
					opacity: 0.2;
				}
				.tit3 {
					width: 1200px;
					position: absolute;
					text-align: center;
					font-size: 38px;
					font-weight: 600;
					opacity: 1 !important;
					display: flex;
					justify-content: center;
					align-items: center;
					top: 20px;
					color: #fff;
				}
			}
			img {
				width: 100%;
				display: block;
				float: left;
			}
		}
		.bottom_info {
			max-width: 1920px;
			min-width: 1200px;
			background-color: #e6fdff;
			margin: auto;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			margin-top: 40px;
			padding-top: 40px;
			.top_bg {
				display: block;
				width: 1200px;
			}
			.bottom_box {
				width: 1200px;
				display: flex;
				justify-content: space-around;
				flex-direction: row;
				padding-top: 77px;
				span {
					font-size: 14px;
				}
				.box_left {
					width: 50%;
					display: flex;
					flex-direction: column;
					img {
						width: 222px;
						display: block;
						margin-bottom: 15px;
					}
					span {
						margin: 10px;
						font-weight: 400;
					}
				}
				.box_right {
					width: 50%;
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-content: space-between;
					.ab_renz {
						display: flex;
						flex-direction: column;
						span {
							cursor: pointer;
							font-size: 16px;
							font-weight: 400;
							line-height: 40px;
						}
						img {
							width: 160px;
							height: 160px;
							border: 1px solid #ccc;
						}
					}
				}
			}
			.beian {
				display: flex;
				width: 1200px;
				margin-top: 40px;
				margin-bottom: 40px;
				flex-direction: column;
				justify-content: center;
				span {
					text-align: center;
					line-height: 40px;
				}
			}
		}
	}
</style>
<script setup>
	import { ref, onMounted } from "vue";
	const listCommon = ref([
		{ name: "SA8000" },
		{ name: "BSCI" },
		{ name: "SMETA" },
		{ name: "ICS" },
		{ name: "WRAP" },
		{ name: "FWF" },
		{ name: "RBA" },
		{ name: "PSCI" },
		{ name: "RJC" },
		{ name: "IRTP(ICTI)" },
		{ name: "FJATA" },
		{ name: "FLA" },
		{ name: "TFS" },
		{ name: "UNIC Code of Conduct and Socia" },
		{ name: "Sustainable Leather Foundation" },
	]);
	const radio2 = ref("SA8000");
	const thisProblem = ref(false);
	const showTitle = ref(false);
	const showThisProblem = () => {
		if (radio2.value === "SA8000") {
			thisProblem.value = !thisProblem.value;
		}
	};
	const thisProblemG = (event) => {
		if (event === "SA8000") {
			showTitle.value = true;
		} else {
			showTitle.value = false;
		}
	};
	onMounted(() => {
		if (radio2.value === "SA8000") {
			showTitle.value = true;
		}
	});
</script>
