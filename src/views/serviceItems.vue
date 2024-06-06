<template>
	<div class="service-items">
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
		<div class="services">
			<div class="server_project">
				<div class="left_div">
					<div class="title_left_box box">
						<span class="_span">S</span>
						<span class="right _span">
							<span style="font-size: 22px">服务项目</span>
							<span style="font-size: 13px">ervice Items</span>
						</span>
					</div>
					<div class="logo_box box">
						<img src="../assets/1695106814875.png" alt="" />
						<i></i>
						<span>SA80000</span>
					</div>
				</div>
				<div class="sa8000">
					<div class="img_box">
						<img src="../assets/1695106814875.png" alt="" />
					</div>
					<div class="data_box">
						<span class="title_sa8000">SA8000</span>
						<div class="data_span">
							<span :class="showAllValue">
								SA8000即“社会责任标准”，是Social Accountability
								8000的英文简称，是全球首个道德规范国际标准。其宗旨是：确保供应商所供应的产品，皆符合社会责任标准的要求。SAI经过18个月的公开咨询和深入研究，
								于2001年12月12日发表了SA8000标准第一个修订版，即SA8000:2001。
								经历2004、2008两次修改，目前SA8000 标准的第四版于2014年6月发布。SA8000
								是可供第三方认证审计的的自愿性标准，规定组织必须达到要求，包括建立或改善工人的权利、工作环境和有效的管理体系。SA8000
								认证只适用于每个特定的工作场所。 SA8000
								标准的制定是基于联合国人权宣言、国际劳工组织公约，国际人权规范和国家劳动法律的规定。规范性的
								SA8000 认证审计参考文件包含 SA8000：2014 标准和 SA8000
								的执行绩效指标附件，以及促进了解如何符合此标准 SA8000
								指南文件。作为规范性文件，SA8000 执行绩效指标附件为已获取 SA8000
								证书的组织设定了最低的执行绩效指标。绩效指标附件可以从 SAI
								网站上获得。</span
							>
						</div>
						<el-button size="small" @click="showAll">{{ showBtnValue }}</el-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less">
	.service-items {
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
		.services {
			width: 1200px;
			margin: 0 auto;
			margin-top: 67px;
			.server_project {
				display: flex;
				flex-direction: row;
				.left_div {
					.box {
						width: 222px;
						padding: 15px;
					}
					.title_left_box {
						display: flex;
						flex-direction: row;
						border: 1px solid #ccc;

						span {
							color: #002f78;
						}
						._span {
							font-size: 36px;
						}
						.right {
							display: flex;
							flex-direction: column;
						}
					}
					.logo_box {
						display: flex;
						flex-direction: row;
						border: 1px solid #ccc;
						border-top: none;
						padding: 5px 15px;
						align-items: center;
						img {
							width: 109px;
						}
						i {
							height: 25px;
							width: 1px;
							background-color: #ccc;
						}
						span {
							display: block;
							width: 109px;
							text-align: center;
							font-size: 13px;
							color: #002f78;
						}
					}
				}
				.sa8000 {
					width: 911px;
					display: flex;
					flex-direction: row;
					margin-left: 30px;
					.img_box {
						width: 270px;
						height: 311px;
						border: 1px solid #ccc;
						display: flex;
						align-items: center;
						justify-content: center;
						img {
							width: 100%;
						}
					}
					.data_box {
						width: 611px;
						margin-left: 19px;
						.title_sa8000 {
							width: 100%;
							height: 50px;
							display: flex;
							justify-content: flex-start;
							align-items: center;
							color: #002f78;
							font-size: 30px;
							font-weight: 400;
							border-bottom: 1px solid #ccc;
						}
						.data_span {
							padding: 19px;
							display: flex;
							flex-direction: column;
							span {
								font-size: 12px;
								color: #666;
								font-weight: 400;
								line-height: 24px;
								display: -webkit-box;
								-webkit-box-orient: vertical;
								-webkit-line-clamp: 7; /* 定义文本的行数 */
								overflow: hidden;
								text-overflow: ellipsis;
							}
							button {
								font-style: normal;
								width: 40px;
								font-size: 13px;
								float: right;
								cursor: pointer;
								text-decoration: none;
								border: none;
							}
							.show-all {
								-webkit-line-clamp: 100 !important;
							}
						}
					}
				}
			}
		}
	}
</style>
<script setup>
	import { ref } from "vue";
	const showAllValue = ref("");
	const showBtnValue = ref("展开");
	function showAll() {
		if (showAllValue.value === "show-all") {
			showAllValue.value = "";
			showBtnValue.value = "展开";
		} else {
			showAllValue.value = "show-all";
			showBtnValue.value = "收起";
		}
	}
</script>
