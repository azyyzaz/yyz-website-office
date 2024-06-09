import { useSSRContext, resolveComponent, mergeProps, unref, withCtx, createVNode, ref, onMounted, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, createSSRApp } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrRenderStyle, renderToString } from "vue/server-renderer";
import { useRouter, useRoute, createRouter, createMemoryHistory } from "vue-router";
import ElementPlus, { ID_INJECTION_KEY } from "element-plus";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_routerView = resolveComponent("routerView");
  _push(ssrRenderComponent(_component_routerView, _attrs, null, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_4$1 = "/assets/logo.pic-P0PZSgWq.jpg";
const _imports_1$1 = "data:image/jpeg;base64,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";
const _imports_2$1 = "data:image/jpeg;base64,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";
const _sfc_main$3 = {
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const route = useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header-menu"><div class="logo"><img${ssrRenderAttr("src", _imports_4$1)} alt=""></div><div class="menu_list"><ul><li class="${ssrRenderClass(unref(route).name === "home" ? "bottom_line" : "")}"> 首页 </li><li class="${ssrRenderClass(unref(route).name === "serviceItems" ? "bottom_line" : "")}"> 服务项目 </li><li class="${ssrRenderClass(unref(route).name === "law" ? "bottom_line" : "")}"> 法律法规 </li><li class="${ssrRenderClass(unref(route).name === "q&a" ? "bottom_line" : "")}"> Q &amp; A </li><li class="${ssrRenderClass(unref(route).name === "about" ? "bottom_line" : "")}"> 关于我们 </li><li class="${ssrRenderClass(unref(route).name === "contact" ? "bottom_line" : "")}"> 联系我们 </li></ul></div><div class="contact_box"><span class="left_line">|</span><img${ssrRenderAttr("src", _imports_1$1)} alt=""><img${ssrRenderAttr("src", _imports_2$1)} alt=""><span>400 690 0031 </span></div><div class="log_btn"><button>登录</button><button>注册</button></div></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/header.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_el_backtop = resolveComponent("el-backtop");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "go-top" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_el_backtop, { "visibility-height": 100 }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/goTop.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const GoTop = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_affix = resolveComponent("el-affix");
      const _component_router_view = resolveComponent("router-view");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_el_affix, { offset: 0 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(GoTop, null, null, _parent));
      _push(ssrRenderComponent(_component_router_view, { class: "router-view" }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "/assets/1703041894570-Cz-5SNzi.jpg";
const _imports_1 = "/assets/1695106814875-DUxMH_O3.png";
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAeCAYAAABjTz27AAAAAXNSR0IArs4c6QAAAbJJREFUWEfd2DtLA0EQB/D/nnmhYB7WahV8IRH9OFpcGgurRBFjZ53CBLWyvPMj+DEEQUmsRPARWxtJNiE3snfhcsQzLyx2d+Gq4475Mcvs7DBotphUnrNaDF/YA2MJdOkWFxuvk8YnF+i4nkWHdl0EQxtd3EyKkgu0fxfF3OwBiNLTouQCCUXhPgXETYBSPoo5Ns4338bZfvKBwlAwOGIRG+Xs+yiUnCAX9ZICmv1MCVS3beMyNxQlL0igSg9pcMMEsWQvMxwsYqGy8vFXpuQG+aiICaKxUPKDwlDMaAHcRmXrV6bUAAlUsZYBkQmw+V71ayE6Y6G82ghuP3VAPsowAaeP6nALV9s+Si1QGMpgTTiwUF3/9BoMsQ4fF+FEl0bVeGneM8qAnB0/ngDKAxWfSiAnIU3AUwViNFBdu/ZAhdopgPhU/5HmoyDoqL4MQDxqLAcLIMr9veXUYHhRuuU7UOlCi4IqoEEMQwvKlm2tDla3SQ30c0q3PoMYYGjHLXenIO5E7Duvx/VBqwve4FxB6Sv4yXMSnOf1GJKEjbEmmPj0u21ZDlbtBo3ajYL/Yaf8AIt/2R8eD+lQAAAAAElFTkSuQmCC";
const _imports_3$1 = "/assets/1698379934957-Dy9oblCA.jpg";
const _imports_4 = "/assets/1698379942840-s0MAgVp3.jpg";
const _imports_5 = "/assets/1698379948894-GJmCG3w0.jpg";
const _imports_6 = "/assets/1695111418549-D8EgRKTk.png";
const _imports_7 = "/assets/1698379954241-CYJp10Gj.jpg";
const _imports_3 = "/assets/dibulan.54adfe9d-uY8PXlxb.jpg";
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
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
      { name: "Sustainable Leather Foundation" }
    ]);
    const radio2 = ref("SA8000");
    const thisProblem = ref(false);
    const showTitle = ref(false);
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_carousel = resolveComponent("el-carousel");
      const _component_el_carousel_item = resolveComponent("el-carousel-item");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_radio_button = resolveComponent("el-radio-button");
      const _component_el_collapse_transition = resolveComponent("el-collapse-transition");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "home" }, _attrs))}><div class="el1">`);
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
      _push(`</div><div class="serviceItems"><div class="title_box"><span class="tit1">SERVICE ITEM</span><span class="tit2">服务项目</span><span class="tit3"></span></div>`);
      _push(ssrRenderComponent(_component_el_carousel, {
        "indicator-position": "outside",
        height: "800px",
        style: { "width": "1300px", "margin": "auto" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(4, (items, index) => {
              _push2(ssrRenderComponent(_component_el_carousel_item, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="server_flex"${_scopeId2}><!--[-->`);
                    ssrRenderList(8, (item, index2) => {
                      _push3(`<div class="server_box"${_scopeId2}><div class="img"${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId2}></div><div class="span_title"${_scopeId2}><div class="span_top"${_scopeId2}><span class="title"${_scopeId2}>SA8000</span><span class="details"${_scopeId2}>        SA8000即“社会责任标准”，是Social Accountability 8000的英文简称，是全球首个道德规范国际标准。其宗旨是：确保供应商所供应的产品，皆符合社会责任标准的要求。SAI经过18个月的公开咨询和深入研究， 于2001年12月12日发表了SA8000标准第一个修订版，即SA8000:2001。 经历2004、2008两次修改，目前SA8000 标准的第四版于2014年6月发布。SA8000 是可供第三方认证审计的的自愿性标准，规定组织必须达到要求，包括建立或改善工人的权利、工作环境和有效的管理体系。SA8000 认证只适用于每个特定的工作场所。</span><br${_scopeId2}><span class="details details2"${_scopeId2}> SA8000 标准的制定是基于联合国人权宣言、国际劳工组织公约，国际人权规范和国家劳动法律的规定。规范性的 SA8000 认证审计参考文件包含 SA8000：2014 标准和 SA8000 的执行绩效指标附件，以及促进了解如何符合此标准 SA8000 指南文件。作为规范性文件，SA8000 执行绩效指标附件为已获取 SA8000 证书的组织设定了最低的执行绩效指标。绩效指标附件可以从 SAI 网站上获得。</span></div><div class="span_other"${_scopeId2}><span${_scopeId2}>了解更多</span><img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId2}></div></div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "server_flex" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(8, (item, index2) => {
                          return createVNode("div", {
                            class: "server_box",
                            key: index2
                          }, [
                            createVNode("div", { class: "img" }, [
                              createVNode("img", {
                                src: _imports_1,
                                alt: ""
                              })
                            ]),
                            createVNode("div", { class: "span_title" }, [
                              createVNode("div", { class: "span_top" }, [
                                createVNode("span", { class: "title" }, "SA8000"),
                                createVNode("span", { class: "details" }, "        SA8000即“社会责任标准”，是Social Accountability 8000的英文简称，是全球首个道德规范国际标准。其宗旨是：确保供应商所供应的产品，皆符合社会责任标准的要求。SAI经过18个月的公开咨询和深入研究， 于2001年12月12日发表了SA8000标准第一个修订版，即SA8000:2001。 经历2004、2008两次修改，目前SA8000 标准的第四版于2014年6月发布。SA8000 是可供第三方认证审计的的自愿性标准，规定组织必须达到要求，包括建立或改善工人的权利、工作环境和有效的管理体系。SA8000 认证只适用于每个特定的工作场所。"),
                                createVNode("br"),
                                createVNode("span", { class: "details details2" }, " SA8000 标准的制定是基于联合国人权宣言、国际劳工组织公约，国际人权规范和国家劳动法律的规定。规范性的 SA8000 认证审计参考文件包含 SA8000：2014 标准和 SA8000 的执行绩效指标附件，以及促进了解如何符合此标准 SA8000 指南文件。作为规范性文件，SA8000 执行绩效指标附件为已获取 SA8000 证书的组织设定了最低的执行绩效指标。绩效指标附件可以从 SAI 网站上获得。")
                              ]),
                              createVNode("div", { class: "span_other" }, [
                                createVNode("span", null, "了解更多"),
                                createVNode("img", {
                                  src: _imports_2,
                                  alt: ""
                                })
                              ])
                            ])
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
              (openBlock(), createBlock(Fragment, null, renderList(4, (items, index) => {
                return createVNode(_component_el_carousel_item, { key: index }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "server_flex" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(8, (item, index2) => {
                        return createVNode("div", {
                          class: "server_box",
                          key: index2
                        }, [
                          createVNode("div", { class: "img" }, [
                            createVNode("img", {
                              src: _imports_1,
                              alt: ""
                            })
                          ]),
                          createVNode("div", { class: "span_title" }, [
                            createVNode("div", { class: "span_top" }, [
                              createVNode("span", { class: "title" }, "SA8000"),
                              createVNode("span", { class: "details" }, "        SA8000即“社会责任标准”，是Social Accountability 8000的英文简称，是全球首个道德规范国际标准。其宗旨是：确保供应商所供应的产品，皆符合社会责任标准的要求。SAI经过18个月的公开咨询和深入研究， 于2001年12月12日发表了SA8000标准第一个修订版，即SA8000:2001。 经历2004、2008两次修改，目前SA8000 标准的第四版于2014年6月发布。SA8000 是可供第三方认证审计的的自愿性标准，规定组织必须达到要求，包括建立或改善工人的权利、工作环境和有效的管理体系。SA8000 认证只适用于每个特定的工作场所。"),
                              createVNode("br"),
                              createVNode("span", { class: "details details2" }, " SA8000 标准的制定是基于联合国人权宣言、国际劳工组织公约，国际人权规范和国家劳动法律的规定。规范性的 SA8000 认证审计参考文件包含 SA8000：2014 标准和 SA8000 的执行绩效指标附件，以及促进了解如何符合此标准 SA8000 指南文件。作为规范性文件，SA8000 执行绩效指标附件为已获取 SA8000 证书的组织设定了最低的执行绩效指标。绩效指标附件可以从 SAI 网站上获得。")
                            ]),
                            createVNode("div", { class: "span_other" }, [
                              createVNode("span", null, "了解更多"),
                              createVNode("img", {
                                src: _imports_2,
                                alt: ""
                              })
                            ])
                          ])
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
      _push(`</div><div class="renzheng"><div class="title_bos"><span class="tit1">Certification process</span><span class="tit2"></span><span class="tit3">认证流程</span></div></div><div class="renzhengchat"><div class="title_bos"><span class="tit1">Certification consultation process</span><span class="tit2"></span><span class="tit3"> 认证咨询服务流程 </span></div><img class="renzhengchat_bg"${ssrRenderAttr("src", _imports_3$1)} alt=""></div><div class="server_point"><div class="title_bos"><span class="tit1">Service characteristics</span><span class="tit2"></span><span class="tit3">服务特点</span></div><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="change_me"><div class="title_bos"><span class="tit1">Why choose us?</span><span class="tit2"></span><span class="tit3">为什么选择我们？</span></div><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="custom_list"><div class="title_bos"><span class="tit1">CLIENT LIST</span><span class="tit2"></span><span class="tit3">客户名单</span></div><div class="this_list"><div class="four_li"><!--[-->`);
      ssrRenderList(4, (item) => {
        _push(`<div class="one_li"><div><img${ssrRenderAttr("src", _imports_6)} alt=""></div><span>Asiatan International Ltd / TecTuff Ltd</span></div>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_el_pagination, {
        background: "",
        layout: "prev, pager, next",
        total: 1
      }, null, _parent));
      _push(`</div></div><div class="common_problem"><div class="common_title"><p>常见问题</p><i></i></div><div class="list_1">`);
      _push(ssrRenderComponent(_component_el_radio_group, {
        onChange: thisProblemG,
        modelValue: radio2.value,
        "onUpdate:modelValue": ($event) => radio2.value = $event
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(listCommon.value, (item) => {
              _push2(ssrRenderComponent(_component_el_radio_button, {
                label: item.name,
                value: item.name
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(listCommon.value, (item) => {
                return openBlock(), createBlock(_component_el_radio_button, {
                  label: item.name,
                  value: item.name
                }, null, 8, ["label", "value"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div style="${ssrRenderStyle([
        showTitle.value ? null : { display: "none" },
        { "margin-top": "20px" }
      ])}" class="this_problem"><span class="show_span">1、SA8000常见问题</span>`);
      _push(ssrRenderComponent(_component_el_collapse_transition, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${ssrRenderStyle(thisProblem.value ? null : { display: "none" })}"${_scopeId}><div class="transition-box"${_scopeId}>SA8000常见问题测试</div></div>`);
          } else {
            return [
              withDirectives(createVNode("div", null, [
                createVNode("div", { class: "transition-box" }, "SA8000常见问题测试")
              ], 512), [
                [vShow, thisProblem.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_el_pagination, {
        style: { "margin-top": "30px" },
        background: "",
        layout: "prev, pager, next",
        total: 1
      }, null, _parent));
      _push(`</div><div class="server_earnest"><div class="title_bos"><span class="tit1">Take seriously · Professional services</span><span class="tit2"></span><span class="tit3">认真对待·专业服务</span></div><img${ssrRenderAttr("src", _imports_7)} alt=""></div><div class="bottom_info"><img class="top_bg"${ssrRenderAttr("src", _imports_3)} alt=""><div class="bottom_box"><div class="box_left"><img${ssrRenderAttr("src", _imports_4$1)} alt=""><span>主体单位:深圳市肯达信企业管理顾问管理有限公司</span><span>运营维护单位：深圳市肯达信企业管理顾问管理有限公司</span><span>版权所有：深圳市肯达信企业管理顾问管理有限公司</span></div><div class="box_right"><div class="ab_renz"><span class="title">认证服务项目</span><span>SA8000</span><span>SA8000</span><span>SA8000</span><span>SA8000</span></div><div class="ab_renz"><span class="title">认证服务项目</span><span>SA8000</span><span>SA8000</span><span>SA8000</span><span>SA8000</span></div><div class="ab_renz"><span class="title">扫描关注, 了解更多</span><img${ssrRenderAttr("src", "")} alt=""></div></div></div><div class="beian"><span>粤ICP备09058788号</span><span>违法/不良信息举报邮箱：kevin@cts1983.com</span></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const routes = [
  {
    path: "/",
    component: _sfc_main$1,
    redirect: "/",
    children: [
      {
        name: "home",
        path: "/",
        component: _sfc_main
      },
      {
        name: "serviceItems",
        path: "/serviceItems",
        component: () => import("./assets/serviceItems-CuregPl5.js")
      },
      {
        name: "law",
        path: "/law",
        component: () => import("./assets/law-t0eb0ONi.js")
      },
      {
        name: "q&a",
        path: "/q&a",
        component: () => import("./assets/law-t0eb0ONi.js")
      },
      {
        name: "about",
        path: "/about",
        component: () => import("./assets/about-Y1cXumUT.js")
      },
      {
        name: "contact",
        path: "/contact",
        component: () => import("./assets/contact-DDo5CgQT.js")
      }
    ]
  }
];
createRouter({
  history: createMemoryHistory(),
  routes
});
function createSSRRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes
  });
}
function createApp() {
  const app = createSSRApp(App);
  const router = createSSRRouter();
  app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0
  });
  app.use(ElementPlus);
  app.use(router);
  return { app, router };
}
async function render(url) {
  const { app, router } = createApp();
  await router.push(url);
  await router.isReady();
  const html = await renderToString(app);
  return html;
}
export {
  _imports_0 as _,
  _imports_1 as a,
  _imports_3 as b,
  _imports_4$1 as c,
  _export_sfc as d,
  render
};
