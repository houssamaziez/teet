(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_List_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/List.vue */ "./resources/js/src/views/users/list/List.vue");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    List: _list_List_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/List.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/List.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ToastificationContent.vue */ "./resources/js/src/components/ToastificationContent.vue");
/* harmony import */ var _sidebars_Add_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebars/Add.vue */ "./resources/js/src/views/users/list/sidebars/Add.vue");
/* harmony import */ var _sidebars_Details_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebars/Details.vue */ "./resources/js/src/views/users/list/sidebars/Details.vue");
/* harmony import */ var _sidebars_Edit_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebars/Edit.vue */ "./resources/js/src/views/users/list/sidebars/Edit.vue");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BTable"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BAvatar"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BBadge"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormGroup"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormFile"],
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormSelect"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BPagination"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BInputGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BFormInput"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BInputGroupAppend"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BButton"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCard"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BSidebar"],
    VBToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["VBToggle"],
    BIcon: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BIcon"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BDropdownItem"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BModal"],
    // Sidebars
    AddSidebar: _sidebars_Add_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    DetailsSidebar: _sidebars_Details_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    EditSidebar: _sidebars_Edit_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  directives: {
    "b-toggle": bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["VBToggle"],
    "b-modal": bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["VBModal"]
  },
  data: function data() {
    return {
      perPage: 5,
      totalRows: 0,
      currentPage: 1,
      filter: null,
      filterOn: [],
      fields: [{
        key: "image",
        label: this.$t("Image")
      }, {
        key: "firstname",
        label: this.$t("FirstName"),
        sortable: true
      }, {
        key: "lastname",
        label: this.$t("LastName"),
        sortable: true
      }, {
        key: "email",
        label: this.$t("Email"),
        sortable: true
      }, {
        key: "phone",
        label: this.$t("Phone"),
        sortable: true
      }, {
        key: "status",
        label: this.$t("Status"),
        sortable: false
      }, {
        key: "actions",
        label: this.$t("Actions")
      }],
      users: [],
      current: {},
      loader: null
    };
  },
  mounted: function mounted() {
    this.$bus.on("refresh-users", this.getUsers);
    this.totalRows = this.users.length;
    this.getUsers();
  },
  watch: {
    filter: function filter(val) {
      this.handleSearch(val);
    }
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;
      this.loader = this.$loading.show();
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/users", {
          params: {
            perPage: _this.perPage
          }
        }).then(function (result) {
          _this.loader.hide();
          _this.users = result.data.data;
          _this.totalRows = result.data.total;
          resolve(result);
        })["catch"](function (err) {
          _this.loader.hide();
          reject(err);
        });
      });
    },
    handleChangePage: function handleChangePage(page) {
      var _this2 = this;
      this.loader = this.$loading.show();
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/users?page=" + page, {
          params: {
            perPage: _this2.perPage
          }
        }).then(function (result) {
          _this2.loader.hide();
          _this2.users = result.data.data;
          _this2.totalRows = result.data.total;
          resolve(result);
        })["catch"](function (err) {
          _this2.loader.hide();
          reject(err);
        });
      });
    },
    handleSearch: function handleSearch() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/users/search?keyword=" + _this3.filter).then(function (result) {
          _this3.users = result.data;
          _this3.totalRows = result.data.length;
          resolve(result);
        })["catch"](function (err) {
          reject(err);
        });
      });
    },
    openDetailsSidebar: function openDetailsSidebar(user) {
      this.current = user;
      this.$root.$emit("bv::toggle::collapse", "details-user-sidebar");
    },
    openEditSidebar: function openEditSidebar(user) {
      this.current = user;
      this.$root.$emit("bv::toggle::collapse", "edit-user-sidebar");
    },
    openChangeStatusModal: function openChangeStatusModal(user) {
      this.current = user;
      this.$root.$emit("bv::show::modal", "delete-modal");
    },
    changeStatus: function changeStatus() {
      var _this4 = this;
      this.loader = this.$loading.show();
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch("/api/users/changeStatus/" + _this4.current.id).then(function (result) {
          _this4.loader.hide();
          _this4.$toast({
            component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
            props: {
              title: "User status changed successufully",
              icon: "CheckIcon",
              variant: "success"
            }
          });
          _this4.$bus.emit("refresh-users");
          resolve(result);
        })["catch"](function (err) {
          _this4.loader.hide();
          _this4.$toast({
            component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
            props: {
              title: "Cannot change user status",
              icon: "AlertCircleIcon",
              variant: "danger"
            }
          });
          reject(err);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ToastificationContent.vue */ "./resources/js/src/components/ToastificationContent.vue");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormGroup"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormFile"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BButton"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BSidebar"],
    VBToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["VBToggle"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_9__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_9__["ValidationObserver"]
  },
  directives: {
    "b-toggle": bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["VBToggle"]
  },
  data: function data() {
    var _ref;
    return _ref = {
      visible: false,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      passwordConfirmation: "",
      image: null,
      loader: null,
      required: _validations__WEBPACK_IMPORTED_MODULE_8__["required"],
      alpha: _validations__WEBPACK_IMPORTED_MODULE_8__["alpha"]
    }, Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "image", _validations__WEBPACK_IMPORTED_MODULE_8__["image"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "numeric", _validations__WEBPACK_IMPORTED_MODULE_8__["numeric"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "min", _validations__WEBPACK_IMPORTED_MODULE_8__["min"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "max", _validations__WEBPACK_IMPORTED_MODULE_8__["max"]), _ref;
  },
  methods: {
    save: function save() {
      var _this = this;
      this.$refs.userAddValidation.validate().then(function (success) {
        if (success) {
          var formData = new FormData();
          formData.append("firstname", _this.firstname);
          formData.append("lastname", _this.lastname);
          formData.append("email", _this.email);
          formData.append("phone", _this.phone);
          formData.append("password", _this.password);
          formData.append("password_confirmation", _this.passwordConfirmation);
          formData.append("image", _this.image);
          _this.loader = _this.$loading.show();
          return new Promise(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/api/users/add", formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(function (result) {
              _this.loader.hide();
              _this.$toast({
                component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
                props: {
                  title: "User added successufully",
                  icon: "CheckIcon",
                  variant: "success"
                }
              });
              _this.$bus.emit("refresh-users");
              _this.visible = false;
              resolve(result);
            })["catch"](function (err) {
              _this.loader.hide();
              if (err.response.data.errors.email) {
                _this.$toast({
                  component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
                  props: {
                    title: "The email is already taken",
                    icon: "AlertCircleIcon",
                    variant: "danger"
                  }
                });
              }
              if (err.response.data.errors.phone) {
                _this.$toast({
                  component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
                  props: {
                    title: "The phone is already taken",
                    icon: "AlertCircleIcon",
                    variant: "danger"
                  }
                });
              }
              _this.$toast({
                component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
                props: {
                  title: "Cannot add user",
                  icon: "AlertCircleIcon",
                  variant: "danger"
                }
              });
              reject(err);
            });
          });
        }
      });
    },
    displayImage: function displayImage(image) {
      return URL.createObjectURL(image);
    },
    clearData: function clearData() {
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.phone = "";
      this.cardId = "";
      this.password = "";
      this.passwordConfirmation = "";
      this.bio = "";
      this.image = null;
      this.$refs.userAddValidation.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSidebar"],
    VBToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBToggle"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardTitle"],
    BCardSubTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardSubTitle"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  directives: {
    "b-toggle": bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBToggle"]
  },
  data: function data() {
    return {
      visible: false
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/ToastificationContent.vue */ "./resources/js/src/components/ToastificationContent.vue");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BCol"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormGroup"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormFile"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BButton"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["BSidebar"],
    VBToggle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["VBToggle"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_9__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_9__["ValidationObserver"]
  },
  directives: {
    "b-toggle": bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__["VBToggle"]
  },
  watch: {
    visible: function visible(val) {
      if (val) {
        this.firstname = this.user.firstname;
        this.lastname = this.user.lastname;
        this.email = this.user.email;
        this.phone = this.user.phone;
      }
    }
  },
  data: function data() {
    var _ref;
    return _ref = {
      visible: false,
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      image: null,
      loader: null,
      required: _validations__WEBPACK_IMPORTED_MODULE_8__["required"],
      alpha: _validations__WEBPACK_IMPORTED_MODULE_8__["alpha"]
    }, Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "image", _validations__WEBPACK_IMPORTED_MODULE_8__["image"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "numeric", _validations__WEBPACK_IMPORTED_MODULE_8__["numeric"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "min", _validations__WEBPACK_IMPORTED_MODULE_8__["min"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "max", _validations__WEBPACK_IMPORTED_MODULE_8__["max"]), _ref;
  },
  methods: {
    save: function save() {
      var _this = this;
      this.$refs.userEditValidation.validate().then(function (success) {
        if (success) {
          var formData = new FormData();
          formData.append("firstname", _this.firstname);
          formData.append("lastname", _this.lastname);
          formData.append("email", _this.email);
          formData.append("phone", _this.phone);
          if (_this.image) {
            formData.append("image", _this.image);
          }
          formData.append("_method", "PUT");
          _this.loader = _this.$loading.show();
          return new Promise(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/api/users/update/" + _this.user.id, formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(function (result) {
              _this.loader.hide();
              _this.$toast({
                component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
                props: {
                  title: "Student added successufully",
                  icon: "CheckIcon",
                  variant: "success"
                }
              });
              _this.$bus.emit("refresh-users");
              _this.visible = false;
              resolve(result);
            })["catch"](function (err) {
              _this.loader.hide();
              if (err.response.data.errors.email) {
                _this.$toast({
                  component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
                  props: {
                    title: "The email is already taken",
                    icon: "AlertCircleIcon",
                    variant: "danger"
                  }
                });
              }
              if (err.response.data.errors.phone) {
                _this.$toast({
                  component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
                  props: {
                    title: "The phone is already taken",
                    icon: "AlertCircleIcon",
                    variant: "danger"
                  }
                });
              }
              _this.$toast({
                component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
                props: {
                  title: "Cannot add user",
                  icon: "AlertCircleIcon",
                  variant: "danger"
                }
              });
              reject(err);
            });
          });
        }
      });
    },
    displayImage: function displayImage(image) {
      return URL.createObjectURL(image);
    },
    clearData: function clearData() {
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.phone = "";
      this.image = null;
      this.$refs.userEditValidation.reset();
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ "./node_modules/core-js/internals/array-method-uses-to-length.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.action-btns {\r\n  gap: 10px;\n}\n[dir] .action-btn {\r\n  padding: 5px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#add-user-sidebar {\r\n  width: 600px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#details-user-sidebar {\r\n  width: 600px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#edit-user-sidebar {\r\n  width: 600px;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=5ef463a4&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=21edcef9&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=70da913c&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Index.vue?vue&type=template&id=03342151&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/Index.vue?vue&type=template&id=03342151& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("list")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/List.vue?vue&type=template&id=5ef463a4&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/List.vue?vue&type=template&id=5ef463a4& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-card",
    { attrs: { title: _vm.$t("UsersList") } },
    [
      _c("details-sidebar", { attrs: { user: _vm.current } }),
      _vm._v(" "),
      _c("edit-sidebar", { attrs: { user: _vm.current } }),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            id: "delete-modal",
            "cancel-variant": "outline-danger",
            "cancel-title": _vm.$t("Cancel"),
            "ok-variant": "primary",
            "ok-title": _vm.$t("Accept"),
            title: _vm.$t("Change_User_Status"),
            centered: "",
          },
          on: {
            ok: function ($event) {
              return _vm.changeStatus()
            },
          },
        },
        [
          _c("div", [
            _vm._v(
              _vm._s(_vm.$t("Are_you_sure_you_want_to_change_this_user_status"))
            ),
          ]),
        ]
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { md: "4" } },
            [_c("add-sidebar")],
            1
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { md: "4" } }),
          _vm._v(" "),
          _c(
            "b-col",
            { staticClass: "my-1", attrs: { md: "4" } },
            [
              _c(
                "b-form-group",
                { staticClass: "mb-0" },
                [
                  _c(
                    "b-input-group",
                    [
                      _c("b-form-input", {
                        attrs: {
                          id: "filterInput",
                          type: "search",
                          placeholder: _vm.$t("TypeToSearch"),
                        },
                        model: {
                          value: _vm.filter,
                          callback: function ($$v) {
                            _vm.filter = $$v
                          },
                          expression: "filter",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "b-input-group-append",
                        [
                          _c(
                            "b-button",
                            {
                              attrs: {
                                disabled: !_vm.filter,
                                variant: "danger",
                              },
                              on: {
                                click: function ($event) {
                                  _vm.filter = ""
                                },
                              },
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(_vm.$t("Clear")) +
                                  "\n            "
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c("b-table", {
                attrs: {
                  striped: "",
                  hover: "",
                  responsive: "sm",
                  items: _vm.users,
                  fields: _vm.fields,
                  "show-empty": "",
                },
                scopedSlots: _vm._u([
                  {
                    key: "empty",
                    fn: function () {
                      return [
                        _c("h4", { staticClass: "text-center" }, [
                          _vm._v(_vm._s(_vm.$t("There_is_no_data"))),
                        ]),
                      ]
                    },
                    proxy: true,
                  },
                  {
                    key: "cell(image)",
                    fn: function (data) {
                      return [
                        _c("b-avatar", {
                          attrs: {
                            src: data.item.image ? data.item.image : "",
                          },
                        }),
                      ]
                    },
                  },
                  {
                    key: "cell(firstname)",
                    fn: function (data) {
                      return [
                        _vm._v(
                          "\n          " +
                            _vm._s(data.item.firstname) +
                            "\n        "
                        ),
                      ]
                    },
                  },
                  {
                    key: "cell(lastname)",
                    fn: function (data) {
                      return [
                        _vm._v(
                          "\n          " +
                            _vm._s(data.item.lastname) +
                            "\n        "
                        ),
                      ]
                    },
                  },
                  {
                    key: "cell(email)",
                    fn: function (data) {
                      return [
                        _vm._v(
                          "\n          " +
                            _vm._s(data.item.email) +
                            "\n        "
                        ),
                      ]
                    },
                  },
                  {
                    key: "cell(phone)",
                    fn: function (data) {
                      return [
                        _vm._v(
                          "\n          " +
                            _vm._s(data.item.phone) +
                            "\n        "
                        ),
                      ]
                    },
                  },
                  {
                    key: "cell(status)",
                    fn: function (data) {
                      return [
                        _c(
                          "b-badge",
                          {
                            attrs: {
                              variant: data.item.status
                                ? "light-success"
                                : "light-danger",
                            },
                          },
                          [
                            _vm._v(
                              "\n            " +
                                _vm._s(
                                  data.item.status
                                    ? _vm.$t("Active")
                                    : _vm.$t("Blocked")
                                ) +
                                "\n          "
                            ),
                          ]
                        ),
                      ]
                    },
                  },
                  {
                    key: "cell(actions)",
                    fn: function (data) {
                      return [
                        _c(
                          "div",
                          {
                            staticClass:
                              "d-flex justify-content-center align-items-center action-btns",
                          },
                          [
                            _c(
                              "span",
                              [
                                _c(
                                  "b-dropdown",
                                  {
                                    attrs: {
                                      variant: "link",
                                      "toggle-class": "text-decoration-none",
                                      "no-caret": "",
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "button-content",
                                          fn: function () {
                                            return [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "text-body align-middle mr-25",
                                                attrs: {
                                                  icon: "MoreVerticalIcon",
                                                  size: "16",
                                                },
                                              }),
                                            ]
                                          },
                                          proxy: true,
                                        },
                                      ],
                                      null,
                                      true
                                    ),
                                  },
                                  [
                                    _vm._v(" "),
                                    _vm.$store.state.auth.user.id !==
                                    data.item.id
                                      ? _c(
                                          "b-dropdown-item",
                                          {
                                            on: {
                                              click: function ($event) {
                                                return _vm.openEditSidebar(
                                                  data.item
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "text-success mr-50",
                                              attrs: { icon: "Edit2Icon" },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "text-success" },
                                              [_vm._v(_vm._s(_vm.$t("Edit")))]
                                            ),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "b-dropdown-item",
                                      {
                                        on: {
                                          click: function ($event) {
                                            return _vm.openDetailsSidebar(
                                              data.item
                                            )
                                          },
                                        },
                                      },
                                      [
                                        _c("feather-icon", {
                                          staticClass: "text-info mr-50",
                                          attrs: { icon: "InfoIcon" },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          { staticClass: "text-info" },
                                          [_vm._v(_vm._s(_vm.$t("Info")))]
                                        ),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _vm.$store.state.auth.user.id !==
                                    data.item.id
                                      ? _c(
                                          "b-dropdown-item",
                                          {
                                            on: {
                                              click: function ($event) {
                                                return _vm.openChangeStatusModal(
                                                  data.item
                                                )
                                              },
                                            },
                                          },
                                          [
                                            _c("feather-icon", {
                                              class: data.item.status
                                                ? "text-danger mr-50"
                                                : "text-success mr-50",
                                              attrs: {
                                                icon: data.item.status
                                                  ? "EyeOffIcon"
                                                  : "EyeIcon",
                                              },
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                class: data.item.status
                                                  ? "text-danger"
                                                  : "text-success",
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    data.item.status
                                                      ? _vm.$t("Block")
                                                      : _vm.$t("Unblock")
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        )
                                      : _vm._e(),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c("b-pagination", {
                staticClass: "my-0",
                attrs: {
                  "total-rows": _vm.totalRows,
                  "per-page": _vm.perPage,
                  align: "right",
                  size: "sm",
                },
                on: {
                  input: function (page) {
                    return _vm.handleChangePage(page)
                  },
                },
                model: {
                  value: _vm.currentPage,
                  callback: function ($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage",
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=template&id=21edcef9&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=template&id=21edcef9& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "sidebar" },
    [
      _c(
        "b-button",
        {
          directives: [
            {
              name: "b-toggle",
              rawName: "v-b-toggle.add-user-sidebar",
              modifiers: { "add-user-sidebar": true },
            },
          ],
          attrs: { variant: "outline-primary" },
        },
        [_vm._v("\n    " + _vm._s(_vm.$t("Add_User")) + "\n  ")]
      ),
      _vm._v(" "),
      _c(
        "b-sidebar",
        {
          attrs: {
            id: "add-user-sidebar",
            "bg-variant": "white",
            title: _vm.$t("Add_User"),
            right: "",
            backdrop: "",
            shadow: "",
          },
          on: { hidden: _vm.clearData },
          scopedSlots: _vm._u([
            {
              key: "footer",
              fn: function () {
                return [
                  _c(
                    "div",
                    { staticClass: "p-2" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { variant: "primary" },
                          on: { click: _vm.save },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Save")) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.add-user-sidebar",
                              modifiers: { "add-user-sidebar": true },
                            },
                          ],
                          attrs: { variant: "outline-danger" },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Close")) +
                              "\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              },
              proxy: true,
            },
          ]),
          model: {
            value: _vm.visible,
            callback: function ($$v) {
              _vm.visible = $$v
            },
            expression: "visible",
          },
        },
        [
          _c(
            "div",
            { staticClass: "w-100 p-2" },
            [
              _c(
                "validation-observer",
                { ref: "userAddValidation" },
                [
                  _c(
                    "b-row",
                    [
                      _vm.image
                        ? _c(
                            "b-col",
                            { staticClass: "mb-2", attrs: { cols: "12" } },
                            [
                              _c("img", {
                                staticClass: "w-100 rounded sidebar-image",
                                attrs: {
                                  src: _vm.displayImage(_vm.image),
                                  height: "300",
                                  alt: "",
                                },
                              }),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: {
                          name: "FirstName",
                          rules: "required|alpha|max:25",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("FirstName"),
                                          "label-for": "v-firstname",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "v-firstname",
                                            placeholder: _vm.$t("FirstName"),
                                          },
                                          model: {
                                            value: _vm.firstname,
                                            callback: function ($$v) {
                                              _vm.firstname = $$v
                                            },
                                            expression: "firstname",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: {
                          name: "LastName",
                          rules: "required|alpha|max:25",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("LastName"),
                                          "label-for": "v-lastname",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "v-lastname",
                                            placeholder: _vm.$t("LastName"),
                                          },
                                          model: {
                                            value: _vm.lastname,
                                            callback: function ($$v) {
                                              _vm.lastname = $$v
                                            },
                                            expression: "lastname",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: { name: "Email", rules: "required|email" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Email"),
                                          "label-for": "v-email",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "v-email",
                                            placeholder: _vm.$t("Email"),
                                            type: "email",
                                          },
                                          model: {
                                            value: _vm.email,
                                            callback: function ($$v) {
                                              _vm.email = $$v
                                            },
                                            expression: "email",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: { name: "Phone", rules: "required|numeric" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Phone"),
                                          "label-for": "v-phone",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "v-phone",
                                            placeholder: _vm.$t("Phone"),
                                            type: "email",
                                          },
                                          model: {
                                            value: _vm.phone,
                                            callback: function ($$v) {
                                              _vm.phone = $$v
                                            },
                                            expression: "phone",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: {
                          name: "Password",
                          rules: "required|confirmed:confirmation|min:8",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Password"),
                                          "label-for": "v-password",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "v-password",
                                            placeholder: _vm.$t("Password"),
                                            type: "password",
                                          },
                                          model: {
                                            value: _vm.password,
                                            callback: function ($$v) {
                                              _vm.password = $$v
                                            },
                                            expression: "password",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: {
                          vid: "confirmation",
                          name: "Password confirmation",
                          rules: "required|min:8",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("PasswordConfirmation"),
                                          "label-for":
                                            "v-password-confirmation",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "v-password-confirmation",
                                            placeholder: _vm.$t(
                                              "PasswordConfirmation"
                                            ),
                                            type: "password",
                                          },
                                          model: {
                                            value: _vm.passwordConfirmation,
                                            callback: function ($$v) {
                                              _vm.passwordConfirmation = $$v
                                            },
                                            expression: "passwordConfirmation",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: { name: "Image", rules: "required|image" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Image"),
                                          "label-for": "v-image",
                                        },
                                      },
                                      [
                                        _c("b-form-file", {
                                          attrs: {
                                            accept: ".jpg, .jpeg, .png, .webp",
                                            placeholder:
                                              _vm.$t("Choose_an_image"),
                                            "drop-placeholder":
                                              _vm.$t("Drop_file_here"),
                                          },
                                          model: {
                                            value: _vm.image,
                                            callback: function ($$v) {
                                              _vm.image = $$v
                                            },
                                            expression: "image",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=template&id=9a151fcc&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=template&id=9a151fcc& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "sidebar" },
    [
      _c(
        "b-sidebar",
        {
          attrs: {
            id: "details-user-sidebar",
            "bg-variant": "white",
            title: _vm.$t("User_Details"),
            right: "",
            backdrop: "",
            shadow: "",
          },
          scopedSlots: _vm._u([
            {
              key: "footer",
              fn: function () {
                return [
                  _c(
                    "div",
                    { staticClass: "p-2" },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.details-user-sidebar",
                              modifiers: { "details-user-sidebar": true },
                            },
                          ],
                          attrs: { variant: "outline-danger" },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Close")) +
                              "\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              },
              proxy: true,
            },
          ]),
          model: {
            value: _vm.visible,
            callback: function ($$v) {
              _vm.visible = $$v
            },
            expression: "visible",
          },
        },
        [
          _c(
            "div",
            { staticClass: "w-100 p-2" },
            [
              _c(
                "b-card",
                { attrs: { "no-body": "" } },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-content-center" },
                    [
                      _c("b-img", {
                        staticClass: "ratio-1x1",
                        attrs: {
                          src: _vm.user.image
                            ? _vm.user.image
                            : __webpack_require__(/*! @/assets/images/placeholders/user.png */ "./resources/js/src/assets/images/placeholders/user.png"),
                          width: "300",
                          height: "300",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-card-body",
                    { staticClass: "p-0 pt-2" },
                    [
                      _c("b-card-title", { staticClass: "mb-1" }, [
                        _vm._v(
                          _vm._s(_vm.user.firstname + " " + _vm.user.lastname)
                        ),
                      ]),
                      _vm._v(" "),
                      _c("b-card-sub-title", { staticClass: "mb-2" }, [
                        _vm._v(_vm._s(_vm.$t("Name"))),
                      ]),
                      _vm._v(" "),
                      _c("b-card-title", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.user.email) +
                            "\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("b-card-text", [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(_vm._s(_vm.$t("Email"))),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c("b-card-title", { staticClass: "mb-0" }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.user.phone) +
                            "\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c("b-card-text", [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v(_vm._s(_vm.$t("Phone"))),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=template&id=70da913c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=template&id=70da913c& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "sidebar" },
    [
      _c(
        "b-sidebar",
        {
          attrs: {
            id: "edit-user-sidebar",
            "bg-variant": "white",
            title: _vm.$t("Edit_User"),
            right: "",
            backdrop: "",
            shadow: "",
          },
          on: { hidden: _vm.clearData },
          scopedSlots: _vm._u([
            {
              key: "footer",
              fn: function () {
                return [
                  _c(
                    "div",
                    { staticClass: "p-2" },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "mr-1",
                          attrs: { variant: "primary" },
                          on: { click: _vm.save },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Save")) +
                              "\n        "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-toggle",
                              rawName: "v-b-toggle.edit-user-sidebar",
                              modifiers: { "edit-user-sidebar": true },
                            },
                          ],
                          attrs: { variant: "outline-danger" },
                        },
                        [
                          _vm._v(
                            "\n          " +
                              _vm._s(_vm.$t("Close")) +
                              "\n        "
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                ]
              },
              proxy: true,
            },
          ]),
          model: {
            value: _vm.visible,
            callback: function ($$v) {
              _vm.visible = $$v
            },
            expression: "visible",
          },
        },
        [
          _c(
            "div",
            { staticClass: "w-100 p-2" },
            [
              _c(
                "validation-observer",
                { ref: "userEditValidation" },
                [
                  _c(
                    "b-row",
                    [
                      _vm.image
                        ? _c(
                            "b-col",
                            { staticClass: "mb-2", attrs: { cols: "12" } },
                            [
                              _c("img", {
                                staticClass: "w-100 rounded sidebar-image",
                                attrs: {
                                  src: _vm.displayImage(_vm.image),
                                  height: "300",
                                  alt: "",
                                },
                              }),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: {
                          name: "FirstName",
                          rules: "required|alpha|max:25",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("FirstName"),
                                          "label-for": "b-firstname",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "b-firstname",
                                            placeholder: _vm.$t("FirstName"),
                                          },
                                          model: {
                                            value: _vm.firstname,
                                            callback: function ($$v) {
                                              _vm.firstname = $$v
                                            },
                                            expression: "firstname",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: {
                          name: "LastName",
                          rules: "required|alpha|max:25",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("LastName"),
                                          "label-for": "b-lastname",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "b-lastname",
                                            placeholder: _vm.$t("LastName"),
                                          },
                                          model: {
                                            value: _vm.lastname,
                                            callback: function ($$v) {
                                              _vm.lastname = $$v
                                            },
                                            expression: "lastname",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: { name: "Email", rules: "required|email" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Email"),
                                          "label-for": "b-email",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "b-email",
                                            placeholder: _vm.$t("Email"),
                                            type: "email",
                                          },
                                          model: {
                                            value: _vm.email,
                                            callback: function ($$v) {
                                              _vm.email = $$v
                                            },
                                            expression: "email",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: { name: "Phone", rules: "required|numeric" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Phone"),
                                          "label-for": "b-phone",
                                        },
                                      },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "b-phone",
                                            placeholder: _vm.$t("Phone"),
                                            type: "email",
                                          },
                                          model: {
                                            value: _vm.phone,
                                            callback: function ($$v) {
                                              _vm.phone = $$v
                                            },
                                            expression: "phone",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c("validation-provider", {
                        staticClass: "w-100",
                        attrs: { name: "Image", rules: "image" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-col",
                                  {
                                    staticClass: "mb-2",
                                    attrs: { cols: "12" },
                                  },
                                  [
                                    _c(
                                      "b-form-group",
                                      {
                                        attrs: {
                                          label: _vm.$t("Image"),
                                          "label-for": "b-image",
                                        },
                                      },
                                      [
                                        _c("b-form-file", {
                                          attrs: {
                                            id: "b-image",
                                            accept: ".jpg, .jpeg, .png, .webp",
                                            placeholder:
                                              _vm.$t("Choose_an_image"),
                                            "drop-placeholder":
                                              _vm.$t("Drop_file_here"),
                                          },
                                          model: {
                                            value: _vm.image,
                                            callback: function ($$v) {
                                              _vm.image = $$v
                                            },
                                            expression: "image",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/assets/images/placeholders/user.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/placeholders/user.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/formadziri/resources/js/src/assets/images/placeholders/user.png";

/***/ }),

/***/ "./resources/js/src/views/users/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/users/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_03342151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=03342151& */ "./resources/js/src/views/users/Index.vue?vue&type=template&id=03342151&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/users/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_03342151___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_03342151___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/users/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/users/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/users/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/users/Index.vue?vue&type=template&id=03342151&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/users/Index.vue?vue&type=template&id=03342151& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_03342151___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=03342151& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/Index.vue?vue&type=template&id=03342151&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_03342151___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_03342151___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/users/list/List.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/views/users/list/List.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_5ef463a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=5ef463a4& */ "./resources/js/src/views/users/list/List.vue?vue&type=template&id=5ef463a4&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/src/views/users/list/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _List_vue_vue_type_style_index_0_id_5ef463a4_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./List.vue?vue&type=style&index=0&id=5ef463a4&lang=css& */ "./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_5ef463a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_5ef463a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/users/list/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/users/list/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/views/users/list/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_5ef463a4_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=style&index=0&id=5ef463a4&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/List.vue?vue&type=style&index=0&id=5ef463a4&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_5ef463a4_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_5ef463a4_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_5ef463a4_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_style_index_0_id_5ef463a4_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/users/list/List.vue?vue&type=template&id=5ef463a4&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/users/list/List.vue?vue&type=template&id=5ef463a4& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5ef463a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=5ef463a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/List.vue?vue&type=template&id=5ef463a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5ef463a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_5ef463a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Add.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Add.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_21edcef9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=21edcef9& */ "./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=template&id=21edcef9&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_21edcef9_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=21edcef9&lang=css& */ "./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_21edcef9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_21edcef9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/users/list/sidebars/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_21edcef9_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=21edcef9&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=style&index=0&id=21edcef9&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_21edcef9_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_21edcef9_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_21edcef9_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_21edcef9_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=template&id=21edcef9&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=template&id=21edcef9& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_21edcef9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=21edcef9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Add.vue?vue&type=template&id=21edcef9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_21edcef9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_21edcef9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Details.vue":
/*!****************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Details.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Details_vue_vue_type_template_id_9a151fcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Details.vue?vue&type=template&id=9a151fcc& */ "./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=template&id=9a151fcc&");
/* harmony import */ var _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Details.vue?vue&type=script&lang=js& */ "./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Details_vue_vue_type_style_index_0_id_9a151fcc_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css& */ "./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Details_vue_vue_type_template_id_9a151fcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Details_vue_vue_type_template_id_9a151fcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/users/list/sidebars/Details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_9a151fcc_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=style&index=0&id=9a151fcc&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_9a151fcc_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_9a151fcc_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_9a151fcc_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_style_index_0_id_9a151fcc_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=template&id=9a151fcc&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=template&id=9a151fcc& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_9a151fcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Details.vue?vue&type=template&id=9a151fcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Details.vue?vue&type=template&id=9a151fcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_9a151fcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Details_vue_vue_type_template_id_9a151fcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Edit.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Edit.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_70da913c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=70da913c& */ "./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=template&id=70da913c&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_70da913c_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=70da913c&lang=css& */ "./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_70da913c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_70da913c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/users/list/sidebars/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_70da913c_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=70da913c&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=style&index=0&id=70da913c&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_70da913c_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_70da913c_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_70da913c_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_70da913c_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=template&id=70da913c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=template&id=70da913c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_70da913c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=70da913c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/users/list/sidebars/Edit.vue?vue&type=template&id=70da913c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_70da913c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_70da913c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);