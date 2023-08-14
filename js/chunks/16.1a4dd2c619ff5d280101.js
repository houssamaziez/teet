(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/profile/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tabs_General_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/General.vue */ "./resources/js/src/views/profile/tabs/General.vue");
/* harmony import */ var _tabs_Password_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs/Password.vue */ "./resources/js/src/views/profile/tabs/Password.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BTabs: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTabs"],
    BTab: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BTab"],
    General: _tabs_General_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    Password: _tabs_Password_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      user: null,
      loader: null
    };
  },
  mounted: function mounted() {
    this.getUser();
  },
  beforeCreate: function beforeCreate() {
    var _this = this;
    this.$http.get("/account-setting/data").then(function (res) {
      _this.options = res.data;
    });
  },
  methods: {
    getUser: function getUser() {
      var _this2 = this;
      this.loader = this.$loading.show();
      return new Promise(function (resolve, reject) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/auth/user").then(function (result) {
          _this2.loader.hide();
          _this2.user = result.data;
          resolve(result);
        })["catch"](function (err) {
          _this2.loader.hide();
          reject(err);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/General.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/profile/tabs/General.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/ToastificationContent.vue */ "./resources/js/src/components/ToastificationContent.vue");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BForm"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BImg"],
    BFormFile: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormFile"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCard"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BCardText"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BMediaBody"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__["BLink"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_10__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_10__["ValidationObserver"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  mounted: function mounted() {
    this.reset();
  },
  data: function data() {
    var _ref;
    return _ref = {
      image: null,
      firstname: "",
      lastname: "",
      email: "",
      phone: ""
    }, Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "image", null), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "imageToDisplay", null), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "required", _validations__WEBPACK_IMPORTED_MODULE_9__["required"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "alpha", _validations__WEBPACK_IMPORTED_MODULE_9__["alpha"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "image", _validations__WEBPACK_IMPORTED_MODULE_9__["image"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "numeric", _validations__WEBPACK_IMPORTED_MODULE_9__["numeric"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "min", _validations__WEBPACK_IMPORTED_MODULE_9__["min"]), Object(C_Users_Expert_Info_Desktop_formadziri_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "max", _validations__WEBPACK_IMPORTED_MODULE_9__["max"]), _ref;
  },
  computed: {
    displayedImage: function displayedImage() {
      return this.imageToDisplay ? this.imageToDisplay : this.user.image ? this.user.image : "/assets/images/placeholders/user.png";
    }
  },
  methods: {
    save: function save() {
      var _this = this;
      this.$refs.userUpdateValidation.validate().then(function (success) {
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
          return new Promise(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("/api/users/update/" + _this.user.id, formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(function (result) {
              _this.$toast({
                component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
                props: {
                  title: _this.$t("User_updated_successufully"),
                  icon: "CheckIcon",
                  variant: "success"
                }
              });
              resolve(result);
            })["catch"](function (err) {
              _this.$toast({
                component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
                props: {
                  title: _this.$t("Cannot_update_user"),
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
    reset: function reset() {
      this.firstname = this.user.firstname;
      this.lastname = this.user.lastname;
      this.email = this.user.email;
      this.phone = this.user.phone;
      this.image = this.user.image;
      this.$refs.userUpdateValidation.reset();
    },
    chooseImage: function chooseImage(image) {
      this.imageToDisplay = URL.createObjectURL(image);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/Password.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/profile/tabs/Password.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ToastificationContent.vue */ "./resources/js/src/components/ToastificationContent.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCard"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BInputGroup"],
    BInputGroupAppend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BInputGroupAppend"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"]
  },
  mounted: function mounted() {
    this.reset();
  },
  data: function data() {
    return {
      passwordValueOld: "",
      newPasswordValue: "",
      RetypePassword: "",
      passwordFieldTypeOld: "password",
      passwordFieldTypeNew: "password",
      passwordFieldTypeRetype: "password",
      required: _validations__WEBPACK_IMPORTED_MODULE_3__["required"],
      alpha: _validations__WEBPACK_IMPORTED_MODULE_3__["alpha"],
      image: _validations__WEBPACK_IMPORTED_MODULE_3__["image"],
      numeric: _validations__WEBPACK_IMPORTED_MODULE_3__["numeric"],
      min: _validations__WEBPACK_IMPORTED_MODULE_3__["min"],
      max: _validations__WEBPACK_IMPORTED_MODULE_3__["max"]
    };
  },
  computed: {
    passwordToggleIconOld: function passwordToggleIconOld() {
      return this.passwordFieldTypeOld === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    passwordToggleIconNew: function passwordToggleIconNew() {
      return this.passwordFieldTypeNew === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    passwordToggleIconRetype: function passwordToggleIconRetype() {
      return this.passwordFieldTypeRetype === "password" ? "EyeIcon" : "EyeOffIcon";
    }
  },
  methods: {
    save: function save() {
      var _this = this;
      this.$refs.changePasswordValidation.validate().then(function (success) {
        if (success) {
          var data = {
            current_password: _this.passwordValueOld,
            new_password: _this.newPasswordValue,
            new_password_confirmation: _this.RetypePassword
          };
          return new Promise(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/auth/change-password/", data).then(function (result) {
              _this.$toast({
                component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
                props: {
                  title: _this.$t("Password_changed_successufully"),
                  icon: "CheckIcon",
                  variant: "success"
                }
              });
              _this.reset();
              _this.$store.dispatch("auth/logout").then(function () {
                _this.$router.push("/login");
              });
              resolve(result);
            })["catch"](function (err) {
              _this.$toast({
                component: _components_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
                props: {
                  title: _this.$t("Cannot_change_password"),
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
    reset: function reset() {
      this.passwordValueOld = "";
      this.newPasswordValue = "";
      this.RetypePassword = "";
      this.passwordFieldTypeOld = "password";
      this.passwordFieldTypeNew = "password";
      this.$passwordFieldTypeRetype = "password";
      this.$refs.changePasswordValidation.reset();
    },
    togglePasswordOld: function togglePasswordOld() {
      this.passwordFieldTypeOld = this.passwordFieldTypeOld === "password" ? "text" : "password";
    },
    togglePasswordNew: function togglePasswordNew() {
      this.passwordFieldTypeNew = this.passwordFieldTypeNew === "password" ? "text" : "password";
    },
    togglePasswordRetype: function togglePasswordRetype() {
      this.passwordFieldTypeRetype = this.passwordFieldTypeRetype === "password" ? "text" : "password";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.profile-image {\r\n  object-fit: cover;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=style&index=0&id=796f5932&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/Index.vue?vue&type=template&id=6cae6c32&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/profile/Index.vue?vue&type=template&id=6cae6c32& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    "b-tabs",
    {
      attrs: {
        vertical: "",
        "content-class": "col-12 col-md-9 mt-1 mt-md-0",
        pills: "",
        "nav-wrapper-class": "col-md-3 col-12",
        "nav-class": "nav-left",
      },
    },
    [
      _c(
        "b-tab",
        {
          attrs: { active: "" },
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "UserIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$t("General"))),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [
          _vm._v(" "),
          _vm.user ? _c("general", { attrs: { user: _vm.user } }) : _vm._e(),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-tab",
        {
          scopedSlots: _vm._u([
            {
              key: "title",
              fn: function () {
                return [
                  _c("feather-icon", {
                    staticClass: "mr-50",
                    attrs: { icon: "LockIcon", size: "18" },
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "font-weight-bold" }, [
                    _vm._v(_vm._s(_vm.$t("ChangePassword"))),
                  ]),
                ]
              },
              proxy: true,
            },
          ]),
        },
        [_vm._v(" "), _c("password")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/General.vue?vue&type=template&id=796f5932&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/profile/tabs/General.vue?vue&type=template&id=796f5932& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-media",
        { staticClass: "d-flex align-items-center", attrs: { "no-body": "" } },
        [
          _c(
            "b-media-aside",
            [
              _c(
                "b-link",
                [
                  _c("b-img", {
                    ref: "previewEl",
                    staticClass: "profile-image",
                    attrs: {
                      rounded: "",
                      src: _vm.displayedImage,
                      height: "80",
                      width: "80",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-media-body",
            [
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { 400: true },
                    },
                  ],
                  attrs: { variant: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.$refs.refInputEl.$el.click()
                    },
                  },
                },
                [_vm._v("\n        " + _vm._s(_vm.$t("Upload")) + "\n      ")]
              ),
              _vm._v(" "),
              _c("b-form-file", {
                ref: "refInputEl",
                attrs: {
                  accept: ".jpg, .png, .webp, .jpeg",
                  hidden: true,
                  plain: "",
                },
                on: { input: _vm.chooseImage },
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-form",
        { staticClass: "mt-2" },
        [
          _c(
            "validation-observer",
            { ref: "userUpdateValidation" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6" } },
                    [
                      _c("validation-provider", {
                        attrs: { name: "FirstName", rules: "required|max:25" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
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
                                _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0])),
                                ]),
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
                    { attrs: { sm: "6" } },
                    [
                      _c("validation-provider", {
                        attrs: { name: "LastName", rules: "required|max:25" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
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
                                _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0])),
                                ]),
                              ]
                            },
                          },
                        ]),
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  this.email.length
                    ? _c(
                        "b-col",
                        { attrs: { sm: "6" } },
                        [
                          _c("validation-provider", {
                            attrs: { name: "Email", rules: "required|email" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function (ref) {
                                    var errors = ref.errors
                                    return [
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
                                    ]
                                  },
                                },
                              ],
                              null,
                              false,
                              1333551726
                            ),
                          }),
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6" } },
                    [
                      _c("validation-provider", {
                        attrs: { name: "Phone", rules: "required|numeric" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
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
                                _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0])),
                                ]),
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
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "b-button",
                    {
                      directives: [
                        {
                          name: "ripple",
                          rawName: "v-ripple.400",
                          value: "rgba(255, 255, 255, 0.15)",
                          expression: "'rgba(255, 255, 255, 0.15)'",
                          modifiers: { 400: true },
                        },
                      ],
                      staticClass: "mt-2 mr-1",
                      attrs: { variant: "primary" },
                      on: { click: _vm.save },
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.$t("Save_Changes")) +
                          "\n        "
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/Password.vue?vue&type=template&id=71add8ac&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/profile/tabs/Password.vue?vue&type=template&id=71add8ac& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-form",
        [
          _c(
            "validation-observer",
            { ref: "changePasswordValidation" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6" } },
                    [
                      _c("validation-provider", {
                        attrs: {
                          name: "Old Password",
                          rules: "required|min:8",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: _vm.$t("Old_Password"),
                                      "label-for": "account-old-password",
                                    },
                                  },
                                  [
                                    _c(
                                      "b-input-group",
                                      { staticClass: "input-group-merge" },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "account-old-password",
                                            name: "old-password",
                                            type: _vm.passwordFieldTypeOld,
                                            placeholder: _vm.$t("Old_Password"),
                                          },
                                          model: {
                                            value: _vm.passwordValueOld,
                                            callback: function ($$v) {
                                              _vm.passwordValueOld = $$v
                                            },
                                            expression: "passwordValueOld",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-input-group-append",
                                          { attrs: { "is-text": "" } },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "cursor-pointer",
                                              attrs: {
                                                icon: _vm.passwordToggleIconOld,
                                              },
                                              on: {
                                                click: _vm.togglePasswordOld,
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
                                ),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0])),
                                ]),
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
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6" } },
                    [
                      _c("validation-provider", {
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
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-for": "account-new-password",
                                      label: _vm.$t("New_Password"),
                                    },
                                  },
                                  [
                                    _c(
                                      "b-input-group",
                                      { staticClass: "input-group-merge" },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "account-new-password",
                                            type: _vm.passwordFieldTypeNew,
                                            name: "new-password",
                                            placeholder: _vm.$t("New_Password"),
                                          },
                                          model: {
                                            value: _vm.newPasswordValue,
                                            callback: function ($$v) {
                                              _vm.newPasswordValue = $$v
                                            },
                                            expression: "newPasswordValue",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-input-group-append",
                                          { attrs: { "is-text": "" } },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "cursor-pointer",
                                              attrs: {
                                                icon: _vm.passwordToggleIconNew,
                                              },
                                              on: {
                                                click: _vm.togglePasswordNew,
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
                                ),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0])),
                                ]),
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
                    { attrs: { sm: "6" } },
                    [
                      _c("validation-provider", {
                        attrs: {
                          vid: "confirmation",
                          name: "Password Confirmation",
                          rules: "required|min:8",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var errors = ref.errors
                              return [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      "label-for":
                                        "account-retype-new-password",
                                      label: _vm.$t("Retype_New_Password"),
                                    },
                                  },
                                  [
                                    _c(
                                      "b-input-group",
                                      { staticClass: "input-group-merge" },
                                      [
                                        _c("b-form-input", {
                                          attrs: {
                                            id: "account-retype-new-password",
                                            type: _vm.passwordFieldTypeRetype,
                                            name: "retype-password",
                                            placeholder: _vm.$t("New_Password"),
                                          },
                                          model: {
                                            value: _vm.RetypePassword,
                                            callback: function ($$v) {
                                              _vm.RetypePassword = $$v
                                            },
                                            expression: "RetypePassword",
                                          },
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-input-group-append",
                                          { attrs: { "is-text": "" } },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "cursor-pointer",
                                              attrs: {
                                                icon: _vm.passwordToggleIconRetype,
                                              },
                                              on: {
                                                click: _vm.togglePasswordRetype,
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
                                ),
                                _vm._v(" "),
                                _c("small", { staticClass: "text-danger" }, [
                                  _vm._v(_vm._s(errors[0])),
                                ]),
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
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-1 mr-1",
                          attrs: { variant: "primary" },
                          on: { click: _vm.save },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("Save_Changes")) +
                              "\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "mt-1",
                          attrs: {
                            type: "reset",
                            variant: "outline-secondary",
                          },
                          on: { click: _vm.reset },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.$t("Reset")) +
                              "\n          "
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-ripple-directive/src/ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-ripple-directive/src/ripple.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Ripple = {
    bind: function(el, binding){

        // Default values.
        var props = {
            event: 'mousedown',
            transition: 600
        };

        setProps(Object.keys(binding.modifiers),props);

        el.addEventListener(props.event, function(event) {
            rippler(event, el, binding.value);
        });

        var bg = binding.value || Ripple.color || 'rgba(0, 0, 0, 0.35)';
        var zIndex = Ripple.zIndex || '9999';

        function rippler(event, el) {
            var target = el;
            // Get border to avoid offsetting on ripple container position
            var targetBorder = parseInt((getComputedStyle(target).borderWidth).replace('px', ''));

            // Get necessary variables
            var rect        = target.getBoundingClientRect(),
                left        = rect.left,
                top         = rect.top,
                width       = target.offsetWidth,
                height      = target.offsetHeight,
                dx          = event.clientX - left,
                dy          = event.clientY - top,
                maxX        = Math.max(dx, width - dx),
                maxY        = Math.max(dy, height - dy),
                style       = window.getComputedStyle(target),
                radius      = Math.sqrt((maxX * maxX) + (maxY * maxY)),
                border      = (targetBorder > 0 ) ? targetBorder : 0;

            // Create the ripple and its container
            var ripple = document.createElement("div"),
                rippleContainer = document.createElement("div");
                rippleContainer.className = 'ripple-container';
                ripple.className = 'ripple';

            //Styles for ripple
            ripple.style.marginTop= '0px';
            ripple.style.marginLeft= '0px';
            ripple.style.width= '1px';
            ripple.style.height= '1px';
            ripple.style.transition= 'all ' + props.transition + 'ms cubic-bezier(0.4, 0, 0.2, 1)';
            ripple.style.borderRadius= '50%';
            ripple.style.pointerEvents= 'none';
            ripple.style.position= 'relative';
            ripple.style.zIndex= zIndex;
            ripple.style.backgroundColor  = bg;

            //Styles for rippleContainer
            rippleContainer.style.position= 'absolute';
            rippleContainer.style.left = 0 - border + 'px';
            rippleContainer.style.top = 0 - border + 'px';
            rippleContainer.style.height = '0';
            rippleContainer.style.width = '0';
            rippleContainer.style.pointerEvents = 'none';
            rippleContainer.style.overflow = 'hidden';

            // Store target position to change it after
            var storedTargetPosition =  ((target.style.position).length > 0) ? target.style.position : getComputedStyle(target).position;
            // Change target position to relative to guarantee ripples correct positioning
            if (storedTargetPosition !== 'relative') {
                target.style.position = 'relative';
            }

            rippleContainer.appendChild(ripple);
            target.appendChild(rippleContainer);

            ripple.style.marginLeft   = dx + "px";
            ripple.style.marginTop    = dy + "px";

            // No need to set positioning because ripple should be child of target and to it's relative position.
            // rippleContainer.style.left    = left + (((window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0)) || 0) + "px";
            // rippleContainer.style.top     = top + (((window.pageYOffset || document.scrollTop) - (document.clientTop || 0)) || 0) + "px";
            rippleContainer.style.width   = width + "px";
            rippleContainer.style.height  = height + "px";
            rippleContainer.style.borderTopLeftRadius  = style.borderTopLeftRadius;
            rippleContainer.style.borderTopRightRadius  = style.borderTopRightRadius;
            rippleContainer.style.borderBottomLeftRadius  = style.borderBottomLeftRadius;
            rippleContainer.style.borderBottomRightRadius  = style.borderBottomRightRadius;

            rippleContainer.style.direction = 'ltr';

            setTimeout(function() {
                ripple.style.width  = radius * 2 + "px";
                ripple.style.height = radius * 2 + "px";
                ripple.style.marginLeft   = dx - radius + "px";
                ripple.style.marginTop    = dy - radius + "px";
            }, 0);

            function clearRipple() {
                setTimeout(function() {
                    ripple.style.backgroundColor = "rgba(0, 0, 0, 0)";
                }, 250);

                // Timeout set to get a smooth removal of the ripple
                setTimeout(function() {
                    rippleContainer.parentNode.removeChild(rippleContainer);
                }, 850);

                el.removeEventListener('mouseup', clearRipple, false);

                // After removing event set position to target to it's original one
                // Timeout it's needed to avoid jerky effect of ripple jumping out parent target
                setTimeout(function () {

                    var clearPosition = true;
                    for(var i = 0; i < target.childNodes.length; i++) {
                        if(target.childNodes[i].className === 'ripple-container') {
                            clearPosition = false;
                        }
                    }

                    if(clearPosition) {
                        if(storedTargetPosition !== 'static') {
                            target.style.position = storedTargetPosition;
                        } else {
                            target.style.position = '';
                        }
                    }

                }, props.transition + 250)
            }

            if(event.type === 'mousedown') {
                el.addEventListener('mouseup', clearRipple, false);
            } else {
                clearRipple();
            }
        }
    }
};

function setProps(modifiers,props) {
    modifiers.forEach(function(item) {
        if(isNaN(Number(item)))
            props.event = item;
        else
            props.transition = item;
    });
}

/* harmony default export */ __webpack_exports__["default"] = (Ripple);

/***/ }),

/***/ "./resources/js/src/views/profile/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/profile/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_6cae6c32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=6cae6c32& */ "./resources/js/src/views/profile/Index.vue?vue&type=template&id=6cae6c32&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/src/views/profile/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_6cae6c32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_6cae6c32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/profile/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/profile/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/profile/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/profile/Index.vue?vue&type=template&id=6cae6c32&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/profile/Index.vue?vue&type=template&id=6cae6c32& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6cae6c32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=6cae6c32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/Index.vue?vue&type=template&id=6cae6c32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6cae6c32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_6cae6c32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/profile/tabs/General.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/profile/tabs/General.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _General_vue_vue_type_template_id_796f5932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./General.vue?vue&type=template&id=796f5932& */ "./resources/js/src/views/profile/tabs/General.vue?vue&type=template&id=796f5932&");
/* harmony import */ var _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./General.vue?vue&type=script&lang=js& */ "./resources/js/src/views/profile/tabs/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _General_vue_vue_type_style_index_0_id_796f5932_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./General.vue?vue&type=style&index=0&id=796f5932&lang=css& */ "./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _General_vue_vue_type_template_id_796f5932___WEBPACK_IMPORTED_MODULE_0__["render"],
  _General_vue_vue_type_template_id_796f5932___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/profile/tabs/General.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/profile/tabs/General.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/profile/tabs/General.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/General.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_796f5932_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=style&index=0&id=796f5932&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/General.vue?vue&type=style&index=0&id=796f5932&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_796f5932_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_796f5932_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_796f5932_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_style_index_0_id_796f5932_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/views/profile/tabs/General.vue?vue&type=template&id=796f5932&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/profile/tabs/General.vue?vue&type=template&id=796f5932& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_796f5932___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./General.vue?vue&type=template&id=796f5932& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/General.vue?vue&type=template&id=796f5932&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_796f5932___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_General_vue_vue_type_template_id_796f5932___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/profile/tabs/Password.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/profile/tabs/Password.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Password_vue_vue_type_template_id_71add8ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Password.vue?vue&type=template&id=71add8ac& */ "./resources/js/src/views/profile/tabs/Password.vue?vue&type=template&id=71add8ac&");
/* harmony import */ var _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Password.vue?vue&type=script&lang=js& */ "./resources/js/src/views/profile/tabs/Password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Password_vue_vue_type_template_id_71add8ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Password_vue_vue_type_template_id_71add8ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/profile/tabs/Password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/profile/tabs/Password.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/profile/tabs/Password.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/Password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/profile/tabs/Password.vue?vue&type=template&id=71add8ac&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/profile/tabs/Password.vue?vue&type=template&id=71add8ac& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_71add8ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Password.vue?vue&type=template&id=71add8ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/profile/tabs/Password.vue?vue&type=template&id=71add8ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_71add8ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Password_vue_vue_type_template_id_71add8ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);