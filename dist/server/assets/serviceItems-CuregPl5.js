import { ref, resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_3, c as _imports_4 } from "../entry-server.js";
import "vue-router";
import "element-plus";
const _imports_2 = "/assets/1695876064303-CS7PeAd4.png";
const _sfc_main = {
  __name: "serviceItems",
  __ssrInlineRender: true,
  setup(__props) {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = resolveComponent("el-carousel");
      const _component_el_carousel_item = resolveComponent("el-carousel-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_pagination = resolveComponent("el-pagination");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "service-items" }, _attrs))}><div class="el1">`);
      _push(ssrRenderComponent(_component_el_carousel, {
        autoplay: false,
        height: "559px"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_el_carousel_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="home_bg1 home_bg"${_scopeId2}><img class="home_bg"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}></div>`);
                } else {
                  return [
                    createVNode("div", { class: "home_bg1 home_bg" }, [
                      createVNode("img", {
                        class: "home_bg",
                        src: _imports_0,
                        alt: ""
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_el_carousel_item, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="home_bg2 home_bg"${_scopeId2}><div class="text_box"${_scopeId2}><div class="text"${_scopeId2}><h1${_scopeId2}>为什么选择CTS</h1><span${_scopeId2}>肯达信企业管理顾问有限公司成立于2000年,专业从事ISO9001、ISO14001、OHSAS18001、IATF16949、AS/EN9100、AS9110、AS9120、ISO22163、TL9000、ISO27001、ISO20000、ISO13485、MDSAP、ISO22000、BRC、IFS、FSSC22000、HACCP、ISO22716（GMPC)、GMP、FDA、GMI、ISO12647、G7、QC080000、FSC/COC、PEFC、ICTI、SA8000、WRAP、SMETA（SEDEX)、BSCI、ICS、RBA、CSC9000T等国际认证咨询以及客户验厂咨询、企业管理咨询、管理培训及职业技术职称资格考核培训…</span></div></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "home_bg2 home_bg" }, [
                      createVNode("div", { class: "text_box" }, [
                        createVNode("div", { class: "text" }, [
                          createVNode("h1", null, "为什么选择CTS"),
                          createVNode("span", null, "肯达信企业管理顾问有限公司成立于2000年,专业从事ISO9001、ISO14001、OHSAS18001、IATF16949、AS/EN9100、AS9110、AS9120、ISO22163、TL9000、ISO27001、ISO20000、ISO13485、MDSAP、ISO22000、BRC、IFS、FSSC22000、HACCP、ISO22716（GMPC)、GMP、FDA、GMI、ISO12647、G7、QC080000、FSC/COC、PEFC、ICTI、SA8000、WRAP、SMETA（SEDEX)、BSCI、ICS、RBA、CSC9000T等国际认证咨询以及客户验厂咨询、企业管理咨询、管理培训及职业技术职称资格考核培训…")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_el_carousel_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "home_bg1 home_bg" }, [
                    createVNode("img", {
                      class: "home_bg",
                      src: _imports_0,
                      alt: ""
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_el_carousel_item, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "home_bg2 home_bg" }, [
                    createVNode("div", { class: "text_box" }, [
                      createVNode("div", { class: "text" }, [
                        createVNode("h1", null, "为什么选择CTS"),
                        createVNode("span", null, "肯达信企业管理顾问有限公司成立于2000年,专业从事ISO9001、ISO14001、OHSAS18001、IATF16949、AS/EN9100、AS9110、AS9120、ISO22163、TL9000、ISO27001、ISO20000、ISO13485、MDSAP、ISO22000、BRC、IFS、FSSC22000、HACCP、ISO22716（GMPC)、GMP、FDA、GMI、ISO12647、G7、QC080000、FSC/COC、PEFC、ICTI、SA8000、WRAP、SMETA（SEDEX)、BSCI、ICS、RBA、CSC9000T等国际认证咨询以及客户验厂咨询、企业管理咨询、管理培训及职业技术职称资格考核培训…")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="services"><div class="server_project"><div class="left_div"><div class="title_left_box box"><span class="_span">S</span><span class="right _span"><span style="${ssrRenderStyle({ "font-size": "22px" })}">服务项目</span><span style="${ssrRenderStyle({ "font-size": "13px" })}">ervice Items</span></span></div><!--[-->`);
      ssrRenderList(30, (item) => {
        _push(`<div class="logo_box box"><img${ssrRenderAttr("src", _imports_1)} alt=""><i></i><span>SA80000</span></div>`);
      });
      _push(`<!--]--></div><div class="right_box"><div class="sa8000"><div class="img_box"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="data_box"><span class="title_sa8000">SA8000</span><div class="data_span"><span class="${ssrRenderClass(showAllValue.value)}"> SA8000即“社会责任标准”，是Social Accountability 8000的英文简称，是全球首个道德规范国际标准。其宗旨是：确保供应商所供应的产品，皆符合社会责任标准的要求。SAI经过18个月的公开咨询和深入研究， 于2001年12月12日发表了SA8000标准第一个修订版，即SA8000:2001。 经历2004、2008两次修改，目前SA8000 标准的第四版于2014年6月发布。SA8000 是可供第三方认证审计的的自愿性标准，规定组织必须达到要求，包括建立或改善工人的权利、工作环境和有效的管理体系。SA8000 认证只适用于每个特定的工作场所。 SA8000 标准的制定是基于联合国人权宣言、国际劳工组织公约，国际人权规范和国家劳动法律的规定。规范性的 SA8000 认证审计参考文件包含 SA8000：2014 标准和 SA8000 的执行绩效指标附件，以及促进了解如何符合此标准 SA8000 指南文件。作为规范性文件，SA8000 执行绩效指标附件为已获取 SA8000 证书的组织设定了最低的执行绩效指标。绩效指标附件可以从 SAI 网站上获得。</span></div>`);
      _push(ssrRenderComponent(_component_el_button, {
        size: "small",
        onClick: showAll
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(showBtnValue.value)}`);
          } else {
            return [
              createTextVNode(toDisplayString(showBtnValue.value), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="info"><div class="title"><span>SA8000 社会责任组成要素</span></div>`);
      _push(ssrRenderComponent(_component_el_carousel, { height: "240px" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(4, (item) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, { key: item }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="info_box"${_scopeId2}><!--[-->`);
                    ssrRenderList(4, (item2) => {
                      _push3(`<div class="carousel_info"${_scopeId2}><img${ssrRenderAttr("src", "")} alt=""${_scopeId2}><span${_scopeId2}>健康与安全</span></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "info_box" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(4, (item2) => {
                          return createVNode("div", { class: "carousel_info" }, [
                            createVNode("img", {
                              src: "",
                              alt: ""
                            }),
                            createVNode("span", null, "健康与安全")
                          ]);
                        }), 64))
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(4, (item) => {
                return createVNode(_component_el_carousel_item, { key: item }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "info_box" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(4, (item2) => {
                        return createVNode("div", { class: "carousel_info" }, [
                          createVNode("img", {
                            src: "",
                            alt: ""
                          }),
                          createVNode("span", null, "健康与安全")
                        ]);
                      }), 64))
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="menu_list"><!--[-->`);
      ssrRenderList(10, (item) => {
        _push(`<div class="menu_li"><span>认证简介</span></div>`);
      });
      _push(`<!--]--></div><div class="text_box"><span class="title"> 什么是SA8000社会责任管理体系认证？ </span><span class="info_data">          SA8000即Social Accountability 8000，社会责任管理体系。 其主要内容包括：童工、强迫性或强制性劳动、健康与安全、结社自由和集体谈判的权利、歧视、惩戒性措施、工作时间、薪酬福利、管理体系。SA8000 衡量组织在工作场所社会责任重要方面的社会表现，同时配合使用管理体系要素来推进本标准在各方面的持续改进提升。本标准做法严格，确保在不影响商业利益的前提下让供应链达到最高标准的社会责任要求，因此备受各品牌及行业领军企业好评。 随着社会的发展，人权意识的提高，社会责任终将会成为企业的重要竞争力之一；目前SA8000，认可程度相对比较高。获得SA8000证书的工厂，沃尔玛给与两年有效期。Tesco, Lidl 与Aldi等零售商给与三年有效期。 我国早期的SA8000认证主要是在跨国公司采购商要求下进行的，认证数量较少，集中在东南沿海地区。随着世界各地对企业社会责任的呼声日益加大，SA8000对企业的经营活动和外贸出口的影响也开始显现。近几年，企业社会责任活动在中国达到新的高峰，越来越多的内陆企业也加入了认证行列。 </span><span class="title"> SA8000审核标准</span><span class="info_data">          SA 8000认证审核是依据该标准的要求审核、评价企业是否与保护员工基本权益的要求相符，在全球所有的工商领域均可应用和实施SA 8000体系，SA 8000认证审核范围包括： </span><span class="title"> 影响SA8000结果的问题 </span><ul class="data_box"><li>月加班超过36小时、周工时超过60小时</li><li>没有社保或者社保覆盖比例不足、但有持续的改善情况</li><li>工资与工作时间存在不一致，工资支付低于法规要求</li><li>营业执照与实际运营地不符或生产区域未覆盖营业执照范围内</li><li>宿舍与厂房、仓库三合一、安全出口数量不够</li><li> 没有SPT社会绩效团队、有SPT社会绩效团队，但社会绩效团队及健康安全委员会未有效运行，比如社会绩效团队成员完全不清楚其职责及其参与的活动 </li><li>员工未接受关于SA8000知识的任何培训</li></ul></div><div class="vip_list"><div class="title"><span>SA8000会员名单</span></div><div class="vip_one_list"><div class="vip_li"><img${ssrRenderAttr("src", _imports_2)} alt=""><span>WOOLWORTHS</span></div><div class="vip_li"><img${ssrRenderAttr("src", _imports_2)} alt=""><span>WOOLWORTHS</span></div><div class="vip_li"><img${ssrRenderAttr("src", _imports_2)} alt=""><span>WOOLWORTHS</span></div><div class="vip_li"><img${ssrRenderAttr("src", _imports_2)} alt=""><span>WOOLWORTHS</span></div><div class="vip_li"><img${ssrRenderAttr("src", _imports_2)} alt=""><span>WOOLWORTHS</span></div></div>`);
      _push(ssrRenderComponent(_component_el_pagination, {
        background: "",
        layout: "prev, pager, next",
        total: 1
      }, null, _parent));
      _push(`</div></div></div><div class="change_we"><div class="title_box"><span class="tit1">SERVICE ITEM</span><span class="tit2">服务项目</span><span class="tit3"></span></div></div><div class="bottom_info"><img class="top_bg"${ssrRenderAttr("src", _imports_3)} alt=""><div class="bottom_box"><div class="box_left"><img${ssrRenderAttr("src", _imports_4)} alt=""><span>主体单位:深圳市肯达信企业管理顾问管理有限公司</span><span>运营维护单位：深圳市肯达信企业管理顾问管理有限公司</span><span>版权所有：深圳市肯达信企业管理顾问管理有限公司</span></div><div class="box_right"><div class="ab_renz"><span class="title">认证服务项目</span><span>SA8000</span><span>SA8000</span><span>SA8000</span><span>SA8000</span></div><div class="ab_renz"><span class="title">认证服务项目</span><span>SA8000</span><span>SA8000</span><span>SA8000</span><span>SA8000</span></div><div class="ab_renz"><span class="title">扫描关注, 了解更多</span><img${ssrRenderAttr("src", "")} alt=""></div></div></div><div class="beian"><span>粤ICP备09058788号</span><span>违法/不良信息举报邮箱：kevin@cts1983.com</span></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/serviceItems.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
