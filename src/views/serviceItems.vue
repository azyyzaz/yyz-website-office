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
					<div class="logo_box box" v-for="item in 30">
						<img src="../assets/1695106814875.png" alt="" />
						<i></i>
						<span>SA80000</span>
					</div>
				</div>
				<div class="right_box">
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
					<div class="info">
						<div class="title">
							<span>SA8000 社会责任组成要素</span>
						</div>
						<el-carousel height="240px">
							<el-carousel-item v-for="item in 4" :key="item">
								<div class="info_box">
									<div class="carousel_info" v-for="item in 4">
										<img src="" alt="" />
										<span>健康与安全</span>
									</div>
								</div>
							</el-carousel-item>
						</el-carousel>
					</div>
					<div class="menu_list">
						<div class="menu_li" v-for="item in 10">
							<span>认证简介</span>
						</div>
					</div>

					<div class="text_box">
						<span class="title"> 什么是SA8000社会责任管理体系认证？ </span>
						<span class="info_data">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SA8000即Social
							Accountability 8000，社会责任管理体系。
							其主要内容包括：童工、强迫性或强制性劳动、健康与安全、结社自由和集体谈判的权利、歧视、惩戒性措施、工作时间、薪酬福利、管理体系。SA8000
							衡量组织在工作场所社会责任重要方面的社会表现，同时配合使用管理体系要素来推进本标准在各方面的持续改进提升。本标准做法严格，确保在不影响商业利益的前提下让供应链达到最高标准的社会责任要求，因此备受各品牌及行业领军企业好评。
							随着社会的发展，人权意识的提高，社会责任终将会成为企业的重要竞争力之一；目前SA8000，认可程度相对比较高。获得SA8000证书的工厂，沃尔玛给与两年有效期。Tesco,
							Lidl 与Aldi等零售商给与三年有效期。
							我国早期的SA8000认证主要是在跨国公司采购商要求下进行的，认证数量较少，集中在东南沿海地区。随着世界各地对企业社会责任的呼声日益加大，SA8000对企业的经营活动和外贸出口的影响也开始显现。近几年，企业社会责任活动在中国达到新的高峰，越来越多的内陆企业也加入了认证行列。
						</span>

						<span class="title"> SA8000审核标准</span>
						<span class="info_data">
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SA
							8000认证审核是依据该标准的要求审核、评价企业是否与保护员工基本权益的要求相符，在全球所有的工商领域均可应用和实施SA
							8000体系，SA 8000认证审核范围包括：
						</span>
						<span class="title"> 影响SA8000结果的问题 </span>
						<ul class="data_box">
							<li>月加班超过36小时、周工时超过60小时</li>
							<li>没有社保或者社保覆盖比例不足、但有持续的改善情况</li>
							<li>工资与工作时间存在不一致，工资支付低于法规要求</li>

							<li>营业执照与实际运营地不符或生产区域未覆盖营业执照范围内</li>
							<li>宿舍与厂房、仓库三合一、安全出口数量不够</li>
							<li>
								没有SPT社会绩效团队、有SPT社会绩效团队，但社会绩效团队及健康安全委员会未有效运行，比如社会绩效团队成员完全不清楚其职责及其参与的活动
							</li>
							<li>员工未接受关于SA8000知识的任何培训</li>
						</ul>
					</div>

					<div class="vip_list">
						<div class="title">
							<span>SA8000会员名单</span>
						</div>
						<div class="vip_one_list">
							<div class="vip_li">
								<img src="../assets/1695876064303.png" alt="" />
								<span>WOOLWORTHS</span>
							</div>
							<div class="vip_li">
								<img src="../assets/1695876064303.png" alt="" />
								<span>WOOLWORTHS</span>
							</div>
							<div class="vip_li">
								<img src="../assets/1695876064303.png" alt="" />
								<span>WOOLWORTHS</span>
							</div>
							<div class="vip_li">
								<img src="../assets/1695876064303.png" alt="" />
								<span>WOOLWORTHS</span>
							</div>
							<div class="vip_li">
								<img src="../assets/1695876064303.png" alt="" />
								<span>WOOLWORTHS</span>
							</div>
						</div>
						<el-pagination background layout="prev, pager, next" :total="1" />
					</div>
				</div>
			</div>

			<div class="change_we">
				<div class="title_box">
					<span class="tit1">SERVICE ITEM</span>
					<span class="tit2">服务项目</span>
					<span class="tit3"></span>
				</div>
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
				.right_box {
					display: flex;
					flex-direction: column;

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
					.info {
						width: 911px;
						margin-top: 70px;
						.title {
							width: 100%;
							height: 37px;
							border-bottom: 1px solid #888;
							display: flex;
							justify-content: center;
							span {
								color: #002f78;
								border-bottom: 1px solid #002f78;
							}
						}
						.info_box {
							width: 100%;
							height: 240px;
							padding-top: 40px;
							display: flex;
							flex-direction: row;
							justify-content: space-around;
							.carousel_info {
								width: 211px;
								height: 190px;
								position: relative;

								img {
									position: absolute;
									width: 100%;
									height: 100%;
									border: 1px solid #ccc;
								}
								span {
									position: absolute;
									bottom: 0;
									background-color: #ccc;
									display: flex;
									width: 100%;
								}
							}
						}
					}
					.menu_list {
						display: flex;
						flex-wrap: wrap;
						margin-top: 40px;
						border-bottom: 1px solid #ccc;
						.menu_li {
							width: 19%;
							height: 40px;
							text-align: center;

							span {
								color: #002f78;
								font-size: 17px;
								line-height: 37px;
								cursor: pointer;
							}
						}
					}
					.text_box {
						display: flex;
						flex-direction: column;
						padding: 15px;
						margin: 10px;
						border: 1px solid #ccc;
						.title {
							font-size: 17px;
							line-height: 70px;
						}
						.info_data {
							font-size: 15px;
							line-height: 23px;
							color: #666;
						}
						.data_box {
							li {
								font-size: 15px;
								color: #666;
								line-height: 23px;
							}
						}
					}

					.vip_list {
						width: 911px;
						margin: 10px;
						padding: 20px;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						.title {
							display: flex;
							width: 100%;
							justify-content: center;
							border-bottom: 1px solid #ccc;
							span {
								color: #002f78;
								font-size: 17px;
								line-height: 70px;
								border-bottom: 1px solid #002f78;
							}
						}
						.vip_one_list {
							width: 100%;
							display: flex;
							flex-direction: row;
							flex-wrap: wrap;
							padding: 1%;
							padding-top: 50px;
							.vip_li {
								width: 28%;
								height: 270px;
								margin-right: 2%;
								margin-bottom: 30px;
								border: 1px solid #ccc;
								display: flex;
								flex-direction: column;
								text-align: center;
								align-items: center;
								justify-content: center;
								position: relative;
								img {
									width: 120px;
								}
								span {
									position: absolute;
									top: 230px;
									font-size: 13px;
									color: #002f78;
								}
							}
						}
					}
				}
			}

			.change_we {
				max-width: 1920px;
				min-width: 1200px;
				background: url("../assets/1131717572848_.pic.jpg") center center / cover
					no-repeat;
				height: auto;
				min-height: 560px;
				padding-top: 50px;
				.title_box {
					position: relative;
					text-align: center;
					.tit1 {
						font-size: 48px;
						color: #def2f9;
						opacity: 0.2;
					}
					.tit2 {
						font-size: 40px;
						color: #fff;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
						z-index: 1;
						opacity: 0.8;
					}
					.tit3 {
						display: block;
						height: 30px;
						margin: auto;
						background-color: #def2f9;
						width: 200px;
						border-radius: 15px;
						transform: translateY(-10px);
						opacity: 0.2;
					}
				}
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
			// margin-top: 40px;
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
