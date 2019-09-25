(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n        <mat-form-field>\r\n            <input matInput type=\"email\" ngModel name=\"email\" placeholder=\"Email Address\" #emailInput=\"ngModel\" required email>\r\n            <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email address</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input type=\"password\" matInput ngModel name=\"password\" placeholder=\"Password\" #passwordInput=\"ngModel\" required>\r\n            <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password</mat-error>\r\n        </mat-form-field>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"!isLoading\">Login</button>\r\n    </form>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"onSignUp(signUpForm)\" #signUpForm=\"ngForm\" *ngIf=!isLoading>\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" name=\"name\" ngModel placeholder=\"Full Name\" #nameInput=\"ngModel\" required>\r\n            <mat-error *ngIf=\"nameInput.invalid\">Please enter your Name.</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"email\" name=\"email\" ngModel placeholder=\"Email Address\" #emailInput=\"ngModel\" required\r\n                email>\r\n            <mat-error *ngIf=\"emailInput.invalid\">Please enter a Valid Email Address</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"password\" name=\"password\" ngModel placeholder=\"Password\" #passwordInput=\"ngModel\"\r\n                required>\r\n            <mat-error *ngIf=\"passwordInput.invalid\">Please enter a Password</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"password\" name=\"confirmPassword\" ngModel placeholder=\"Confirm Password\"\r\n                #confirmPasswordInput=\"ngModel\" required>\r\n            <mat-error *ngIf=\"confirmPasswordInput.invalid\">Invalid Password</mat-error>\r\n        </mat-form-field>\r\n        <mat-card-content>\r\n            <label *ngIf=\"confirmPasswordValidator\">Password Should Match</label>\r\n        </mat-card-content>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" *ngIf=\"!isLoading\">SignUp</button>\r\n    </form>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash/dash.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash/dash.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card *ngIf=\"!isLoading\">\r\n    <google-chart #chart [title]=\"title\" [type]=\"type\" [data]=\"data\" [columnNames]=\"columnNames\" [options]=\"options\"\r\n        [width]=\"width\" [height]=\"height\">\r\n    </google-chart>\r\n    <p>crowd Funding = {{(crowdfunding/total)*100}}%</p>\r\n  <p>Success = {{(success/total)*100}}%</p>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card *ngIf=\"!isLoading\">\r\n    <mat-card-title>\r\n        <h2>{{ name }}</h2>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        <p>Balance in Your Wallet</p>\r\n        <h1>{{userWallet}}</h1>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"onDonation(postForm)\" #postForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n        <mat-form-field>\r\n            <input matInput type=\"number\" name=\"donation\" placeholder=\"Donation\" ngModel required minlength=\"3\"\r\n                #donationInput=\"ngModel\">\r\n            <mat-error *ngIf=\"donationInput.invalid\">Please fill Donation</mat-error>\r\n        </mat-form-field>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">Donate</button>\r\n    </form>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>An Error Occured !</h1>\r\n<div mat-dialog-content>\r\n    <p class=\"mat-body-1\">{{ data.message }}</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button mat-dialog-close>Okay</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar fixed-top navbar-expand-lg navbar-dark bg-dark\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\">The Starter</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" mat-button routerLink=\"/\">Projects</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\r\n                <a class=\"nav-link\" mat-button routerLink=\"/create\">Create</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\r\n                <a class=\"nav-link\" mat-button routerLink=\"/myProjects\">My Projects</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\r\n                <a class=\"nav-link\" mat-button routerLink=\"/myDonations\">My Donations</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\r\n                <a class=\"nav-link\" mat-button routerLink=\"/wallet\">Wallet</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" mat-button routerLink=\"/dash\">Stats</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!userIsAuthenticated\">\r\n                <a class=\"nav-link\" mat-button routerLink=\"/login\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"!userIsAuthenticated\">\r\n                <a class=\"nav-link\" mat-button routerLink=\"/signUp\">Sign Up</a>\r\n            </li>\r\n            <li class=\"nav-item\" *ngIf=\"userIsAuthenticated\">\r\n                <button class=\"nav-link\" mat-button (click)=\"onLogOut()\">Log Out</button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"onAddProject(postForm)\" #postForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n        <mat-form-field>\r\n            <input matInput type=\"text\" name=\"title\" placeholder=\"Project Title\" [ngModel]=\"post[0]?.title\" required minlength=\"3\" #title=\"ngModel\">\r\n            <mat-error *ngIf=\"title.invalid\">Please enter a Title to your Project</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea matInput rows=\"6\" name=\"content\" placeholder=\"Project Content\" [ngModel]=\"post[0]?.content\" required minlength=\"3\" #content=\"ngModel\"></textarea>\r\n            <mat-error *ngIf=\"content.invalid\">Please enter content to your Project</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"number\" name=\"cost\" placeholder=\"Estimated Cost\" [ngModel]=\"post[0]?.cost\" required #cost=\"ngModel\">\r\n            <mat-error *ngIf=\"cost.invalid\">Please enter Estimated Cost to carry out this project</mat-error>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput type=\"number\" name=\"minDonation\" placeholder=\"Minimum Accepted Donation\" [ngModel]=\"post[0]?.minDonation\" required #minAmount=\"ngModel\">\r\n            <mat-error *ngIf=\"minAmount.invalid\">Please enter a minimum amount to be accepted as donation</mat-error>\r\n        </mat-form-field>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\">SAVE PROJECT</button>\r\n    </form>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"isLoading\">\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n</mat-card>\r\n<main *ngIf=\"posts.length > 0 && !isLoading\">\r\n    <mat-card *ngFor=\"let post of posts\">\r\n        <mat-card-content>\r\n            <mat-card-title>{{ post.creatorName }}</mat-card-title>\r\n            <mat-card-subtitle>Project Creator</mat-card-subtitle>\r\n        </mat-card-content>\r\n        <mat-card-content>\r\n            <mat-card-title>\r\n                <h1>{{ post.title }}</h1>\r\n            </mat-card-title>\r\n            <mat-card-title></mat-card-title>\r\n            <h4>{{ post.content }}</h4>\r\n            <hr color=\"accent\">\r\n            <mat-card-subtitle>\r\n                <h3>Project Status</h3><span>\r\n                    <h1 style=\"color: red;\">{{ post.projectStatus }}</h1>\r\n                </span>\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Estimated Budget</h3><span>\r\n                    <h1>{{ post.cost }}</h1>\r\n                </span>\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Collected</h3><span>\r\n                    <h1>{{ post.collectedMoney }}</h1>\r\n                </span>\r\n                <hr color=\"accent\">\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Liked by</h3><span>\r\n                    <h1>{{ post.likes.length }}</h1>\r\n                </span>\r\n                <hr color=\"accent\">\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Donated by</h3><span>\r\n                    <h1>{{ post.donation.length }}</h1>\r\n                </span>\r\n                <hr color=\"accent\">\r\n            </mat-card-subtitle>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-button color=\"accent\" (click)=\"onLike(post._id)\">LIKE</button>\r\n            <button mat-button color=\"warn\" [routerLink]=\"['/donate',post._id]\">DONATE</button>\r\n            <a mat-button color=\"accent\" [routerLink]=\"['/edit', post._id]\"\r\n                *ngIf=\"userIsAuthenticated && userId == post.creatorId\">EDIT</a>\r\n            <button mat-button color=\"warn\" (click)=\"onDelete(post._id)\"\r\n                *ngIf=\"userIsAuthenticated && userId == post.creatorId\">DELETE</button>\r\n        </mat-card-actions>\r\n        <mat-card-title>\r\n            <h1>Comments</h1>\r\n        </mat-card-title>\r\n        <mat-list role=\"list\" *ngFor=\"let user of post.comment\">\r\n            <mat-list-item role=\"listitem\">\r\n                <h3>{{ user.name }}</h3>\r\n            </mat-list-item>\r\n            <mat-list-item role=\"listitem\">\r\n                <h4>{{ user.commented }}</h4>\r\n            </mat-list-item>\r\n        </mat-list>\r\n        <form (submit)=\"onComment(commentForm,post._id)\" #commentForm=\"ngForm\">\r\n            <mat-form-field>\r\n                <input matInput type=\"text\" ngModel placeholder=\"Comments\" #commentInput=\"ngModel\" name=\"comment\"\r\n                    required minlength=\"5\">\r\n                <mat-error *ngIf=\"commentInput.invalid\">Please fill Comment</mat-error>\r\n            </mat-form-field>\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">COMMENT</button>\r\n        </form>\r\n    </mat-card>\r\n</main>\r\n<p class=\"mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No projects Added Yet!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-donations/my-donations.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-donations/my-donations.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"isLoading\">\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n</mat-card>\r\n<main *ngIf=\"posts.length > 0 && !isLoading\">\r\n    <mat-card *ngFor=\"let post of posts\">\r\n        <mat-card-content>\r\n            <mat-card-title>{{ post.creatorName }}</mat-card-title>\r\n            <mat-card-subtitle>Project Creator</mat-card-subtitle>\r\n        </mat-card-content>\r\n        <mat-card-content>\r\n            <mat-card-title>\r\n                <h1>{{ post.title }}</h1>\r\n            </mat-card-title>\r\n            <mat-card-title></mat-card-title>\r\n            <h4>{{ post.content }}</h4>\r\n            <hr color=\"accent\">\r\n            <mat-card-subtitle>\r\n                <h3>Project Status</h3><span>\r\n                    <h1 style=\"color: red;\">{{ post.projectStatus }}</h1>\r\n                </span>\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Estimated Budget</h3><span>\r\n                    <h1>{{ post.cost }}</h1>\r\n                </span>\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Collected</h3><span>\r\n                    <h1>{{ post.collectedMoney }}</h1>\r\n                </span>\r\n                <hr color=\"accent\">\r\n            </mat-card-subtitle>\r\n        </mat-card-content>\r\n       \r\n        <mat-card-title>\r\n            <h1>My Donation</h1>\r\n        </mat-card-title>\r\n        <mat-list role=\"list\" *ngFor=\"let user of post.donation\">\r\n            <mat-list-item role=\"listitem\">\r\n                <h3>{{ user.donated }}</h3>\r\n            </mat-list-item>\r\n        </mat-list>\r\n       \r\n    </mat-card>\r\n</main>\r\n<p class=\"mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No projects Added Yet!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-projects/my-projects.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-projects/my-projects.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card *ngIf=\"isLoading\">\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n</mat-card>\r\n<main *ngIf=\"posts.length > 0 && !isLoading\">\r\n    <mat-card *ngFor=\"let post of posts\">\r\n        <mat-card-content>\r\n            <mat-card-title>{{ post.creatorName }}</mat-card-title>\r\n            <mat-card-subtitle>Project Creator</mat-card-subtitle>\r\n        </mat-card-content>\r\n        <mat-card-content>\r\n            <mat-card-title>\r\n                <h1>{{ post.title }}</h1>\r\n            </mat-card-title>\r\n            <mat-card-title></mat-card-title>\r\n            <h4>{{ post.content }}</h4>\r\n            <hr color=\"accent\">\r\n            <mat-card-subtitle>\r\n                <h3>Project Status</h3><span>\r\n                    <h1 style=\"color: red;\">{{ post.projectStatus }}</h1>\r\n                </span>\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Estimated Budget</h3><span>\r\n                    <h1>{{ post.cost }}</h1>\r\n                </span>\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Collected</h3><span>\r\n                    <h1>{{ post.collectedMoney }}</h1>\r\n                </span>\r\n                <hr color=\"accent\">\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Liked by</h3><span>\r\n                    <h1>{{ post.likes.length }}</h1>\r\n                </span>\r\n                <hr color=\"accent\">\r\n            </mat-card-subtitle>\r\n            <mat-card-subtitle>\r\n                <h3>Donated by</h3><span>\r\n                    <h1>{{ post.donation.length }}</h1>\r\n                </span>\r\n                <hr color=\"accent\">\r\n            </mat-card-subtitle>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button mat-button color=\"accent\" (click)=\"onLike(post._id)\">LIKE</button>\r\n            <button mat-button color=\"warn\" [routerLink]=\"['/donate',post._id]\">DONATE</button>\r\n            <a mat-button color=\"accent\" [routerLink]=\"['/edit', post._id]\"\r\n                *ngIf=\"userIsAuthenticated && userId == post.creatorId\">EDIT</a>\r\n            <button mat-button color=\"warn\" (click)=\"onDelete(post._id)\"\r\n                *ngIf=\"userIsAuthenticated && userId == post.creatorId\">DELETE</button>\r\n        </mat-card-actions>\r\n        <mat-card-title>\r\n            <h1>Comments</h1>\r\n        </mat-card-title>\r\n        <mat-list role=\"list\" *ngFor=\"let user of post.comment\">\r\n            <mat-list-item role=\"listitem\">\r\n                <h3>{{ user.name }}</h3>\r\n            </mat-list-item>\r\n            <mat-list-item role=\"listitem\">\r\n                <h4>{{ user.commented }}</h4>\r\n            </mat-list-item>\r\n        </mat-list>\r\n        <form (submit)=\"onComment(commentForm,post._id)\" #commentForm=\"ngForm\">\r\n            <mat-form-field>\r\n                <input matInput type=\"text\" ngModel placeholder=\"Comments\" #commentInput=\"ngModel\" name=\"comment\"\r\n                    required minlength=\"5\">\r\n                <mat-error *ngIf=\"commentInput.invalid\">Please fill Comment</mat-error>\r\n            </mat-form-field>\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">COMMENT</button>\r\n        </form>\r\n    </mat-card>\r\n</main>\r\n<p class=\"mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No projects Added Yet!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/wallet/wallet.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/wallet/wallet.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n<mat-card *ngIf=\"!isLoading\">\r\n    <mat-card-title>\r\n        <h2>{{ name }}</h2>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        <p>Balance in Your Wallet</p>\r\n        <h1>{{userWallet}}</h1>\r\n    </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n    <mat-card-title>\r\n        <p>Top Up</p>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n        <form (submit)=\"onTopUp(postForm)\" #postForm=\"ngForm\" *ngIf=\"!isLoading\">\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" name=\"creditCardNum\" placeholder=\"Credit Card Number\" ngModel required minlength=\"3\"\r\n                    #cardInput=\"ngModel\">\r\n                <mat-error *ngIf=\"cardInput.invalid\">Enter Credit Card Number</mat-error>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <input matInput type=\"number\" name=\"topup\" placeholder=\"Top Up\" ngModel required minlength=\"3\"\r\n                    #donationInput=\"ngModel\">\r\n                <mat-error *ngIf=\"donationInput.invalid\">Please fill Top Up</mat-error>\r\n            </mat-form-field>\r\n            <button mat-raised-button color=\"primary\" type=\"submit\">Top Up</button>\r\n        </form>\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'The Starter';
    }
    ngOnInit() {
        this.authService.autoAuthUser();
    }
};
AppComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm2015/angular-google-charts.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _user_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user/my-projects/my-projects.component */ "./src/app/user/my-projects/my-projects.component.ts");
/* harmony import */ var _user_my_donations_my_donations_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/my-donations/my-donations.component */ "./src/app/user/my-donations/my-donations.component.ts");
/* harmony import */ var _user_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/wallet/wallet.component */ "./src/app/user/wallet/wallet.component.ts");
/* harmony import */ var _dash_dash_dash_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dash/dash/dash.component */ "./src/app/dash/dash/dash.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _donate_donate_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./donate/donate.component */ "./src/app/donate/donate.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
























const appRoutes = [
    { path: '', component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_12__["PostListComponent"] },
    { path: 'create', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_10__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'edit/:postId', component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_10__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'donate/:postId', component: _donate_donate_component__WEBPACK_IMPORTED_MODULE_20__["DonateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'signUp', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'myProjects', component: _user_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_15__["MyProjectsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'myDonations', component: _user_my_donations_my_donations_component__WEBPACK_IMPORTED_MODULE_16__["MyDonationsComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'wallet', component: _user_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"]] },
    { path: 'dash', component: _dash_dash_dash_component__WEBPACK_IMPORTED_MODULE_18__["DashComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_10__["PostCreateComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
            _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_12__["PostListComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_14__["SignupComponent"],
            _user_my_projects_my_projects_component__WEBPACK_IMPORTED_MODULE_15__["MyProjectsComponent"],
            _user_my_donations_my_donations_component__WEBPACK_IMPORTED_MODULE_16__["MyDonationsComponent"],
            _user_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_17__["WalletComponent"],
            _dash_dash_dash_component__WEBPACK_IMPORTED_MODULE_18__["DashComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"],
            _donate_donate_component__WEBPACK_IMPORTED_MODULE_20__["DonateComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_8__["GoogleChartsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes)
        ],
        providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_21__["AuthInterceptor"], multi: true },
            _auth_auth_guard__WEBPACK_IMPORTED_MODULE_23__["AuthGuard"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_22__["ErrorInterceptor"], multi: true }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
        entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_19__["ErrorComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            return this.router.navigate(['/login']);
        }
        return isAuth;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AuthService = class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isAuthenticated = false;
    }
    getToken() {
        return this.token;
    }
    getUserId() {
        return this.userId;
    }
    getUserName() {
        return this.name;
    }
    getUserWallet() {
        return this.wallet;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    signUp(name, email, password) {
        const authData = {
            name: name,
            email: email,
            password: password
        };
        this.http.post("http://localhost:3000/signup", authData).subscribe((Response) => {
            alert(Response);
            this.router.navigate(['/login']);
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    login(email, password) {
        const authData = {
            email: email,
            password: password
        };
        this.http.post("http://localhost:3000/login", authData).subscribe(Response => {
            const token = Response.token;
            this.token = token;
            if (token) {
                const expiresInDuration = Response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.userId = Response.userId;
                this.name = Response.name;
                this.wallet = Response.wallet;
                this.isAuthenticated = true;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                this.saveAuthData(token, expirationDate, this.userId, this.name, this.wallet);
                this.router.navigate(['/']);
            }
        }, error => {
            this.authStatusListener.next(false);
        });
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.name = authInformation.name;
            this.wallet = authInformation.wallet;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    logOut() {
        this.token = null;
        this.userId = null;
        this.name = null;
        this.wallet = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(['/']);
    }
    setAuthTimer(duration) {
        console.log("setting Timer: " + duration);
        this.tokenTimer = setTimeout(() => {
            this.logOut();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId, name, wallet) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('userId', userId);
        localStorage.setItem('name', name);
        localStorage.setItem('wallet', wallet);
    }
    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('userId');
        localStorage.removeItem('name');
        localStorage.removeItem('wallet');
    }
    getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const userId = localStorage.getItem('userId');
        const name = localStorage.getItem('name');
        const wallet = localStorage.getItem('wallet');
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            name: name,
            wallet: wallet
        };
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    width: 25%;\r\n    margin: 5rem auto;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
    }
    onLogin(form) {
        this.isLoading = true;
        if (form.invalid) {
            this.isLoading = false;
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    width: 50%;\r\n    margin: 5rem auto;\r\n}\r\n\r\nmat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n\r\nlabel {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");




let SignupComponent = class SignupComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.confirmPasswordValidator = false;
    }
    onSignUp(form) {
        this.isLoading = true;
        if (form.invalid || form.value.password !== form.value.confirmPassword) {
            this.isLoading = false;
            this.confirmPasswordValidator = true;
            return;
        }
        this.confirmPasswordValidator = false;
        this.authService.signUp(form.value.name, form.value.email, form.value.password);
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/dash/dash.service.ts":
/*!**************************************!*\
  !*** ./src/app/dash/dash.service.ts ***!
  \**************************************/
/*! exports provided: DashService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashService", function() { return DashService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DashService = class DashService {
    constructor(http) {
        this.http = http;
    }
    crowdFunding() {
        return this.http.get("http://localhost:3000/crowdFunding");
    }
    projectSuccess() {
        return this.http.get("http://localhost:3000/success");
    }
    totalNoOfProject() {
        return this.http.get("http://localhost:3000/totalProject");
    }
};
DashService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DashService);



/***/ }),

/***/ "./src/app/dash/dash/dash.component.css":
/*!**********************************************!*\
  !*** ./src/app/dash/dash/dash.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    width: 50%;\r\n    margin: 5rem auto;\r\n}\r\n\r\nmat-spinner {\r\n    margin: 5rem auto;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaC9kYXNoL2Rhc2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoL2Rhc2gvZGFzaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogNXJlbSBhdXRvO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDVyZW0gYXV0bztcclxufVxyXG5cclxucCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dash/dash/dash.component.ts":
/*!*********************************************!*\
  !*** ./src/app/dash/dash/dash.component.ts ***!
  \*********************************************/
/*! exports provided: DashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashComponent", function() { return DashComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dash_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dash.service */ "./src/app/dash/dash.service.ts");



let DashComponent = class DashComponent {
    constructor(dashService) {
        this.dashService = dashService;
        this.title = 'Crowd Funded Projects';
        this.type = 'PieChart';
        this.data = [
            ['Success', 75],
            ['CrowdFunding', 25]
        ];
        this.columnNames = ['Projects', 'Percentage'];
        this.options = {};
        this.width = 550;
        this.height = 440;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.dashService.crowdFunding().subscribe((Response) => {
            this.isLoading = false;
            this.crowdfunding = Response.length;
        });
        this.isLoading = true;
        this.dashService.projectSuccess().subscribe((Response) => {
            this.isLoading = false;
            this.success = Response.length;
        });
        this.isLoading = true;
        this.dashService.totalNoOfProject().subscribe((Response) => {
            this.isLoading = false;
            this.total = Response.length;
        });
    }
};
DashComponent.ctorParameters = () => [
    { type: _dash_service__WEBPACK_IMPORTED_MODULE_2__["DashService"] }
];
DashComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dash.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dash/dash/dash.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dash.component.css */ "./src/app/dash/dash/dash.component.css")).default]
    })
], DashComponent);



/***/ }),

/***/ "./src/app/donate/donate.component.css":
/*!*********************************************!*\
  !*** ./src/app/donate/donate.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    margin: 5rem auto;\r\n    width: 80%;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n\r\nh1 {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRlL2RvbmF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZG9uYXRlL2RvbmF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxcclxudGV4dGFyZWEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/donate/donate.component.ts":
/*!********************************************!*\
  !*** ./src/app/donate/donate.component.ts ***!
  \********************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_posts_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/user/user.service */ "./src/app/user/user.service.ts");






let DonateComponent = class DonateComponent {
    constructor(route, authService, router, postService, userService) {
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.postService = postService;
        this.userService = userService;
        this.isLoading = false;
        this.userIsAuthenticated = false;
    }
    onDonation(data) {
        if (!this.userIsAuthenticated) {
            this.router.navigate(['/login']);
        }
        if (data.value.donation > this.userWallet) {
            alert("No Sufficient Balance in your Wallet for this donation");
            this.router.navigate(["/wallet"]);
        }
        else {
            this.isLoading = true;
            this.postService.donateToProject(this.postId, this.userId, this.name, data.value.donation).subscribe((Response) => {
                this.isLoading = false;
                this.router.navigate(['/']);
                console.log(Response);
            });
        }
    }
    ngOnInit() {
        this.route.paramMap.subscribe((paramMap) => {
            this.postId = paramMap.get('postId');
        });
        this.userId = this.authService.getUserId();
        this.name = this.authService.getUserName();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
            this.name = this.authService.getUserName();
        });
        this.isLoading = true;
        this.userService.myWallet(this.userId).subscribe((Response) => {
            this.isLoading = false;
            this.userWallet = Response[0].wallet;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
DonateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_posts_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: src_app_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
DonateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-donate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./donate.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/donate/donate.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./donate.component.css */ "./src/app/donate/donate.component.css")).default]
    })
], DonateComponent);



/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");






let ErrorInterceptor = class ErrorInterceptor {
    constructor(dialog) {
        this.dialog = dialog;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = "An Unknown Error Occured";
            if (error.error.message) {
                errorMessage = error.error.message;
            }
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], { data: { message: errorMessage } });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ErrorComponent = class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
    }
};
ErrorComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ErrorComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(authservice) {
        this.authservice = authservice;
        this.userIsAuthenticated = false;
    }
    onLogOut() {
        this.authservice.logOut();
    }
    ngOnInit() {
        this.userIsAuthenticated = this.authservice.getIsAuth();
        this.authListenerSubs = this.authservice.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    width: 70%;\r\n    margin: 5rem auto;\r\n}\r\n\r\nmat-form-field,\r\ntextarea {\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiA1cmVtIGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLFxyXG50ZXh0YXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





let PostCreateComponent = class PostCreateComponent {
    constructor(postService, route, authService, router) {
        this.postService = postService;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.mode = 'create';
        this.post = [];
    }
    onAddProject(form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            console.log("Value sent to Service to add new project", form.value);
            this.postService.saveProject(form.value).subscribe((Response) => {
                this.isLoading = false;
                this.router.navigate(["/"]);
            });
        }
        else {
            console.log("Update function update to service", form.value);
            this.postService.updateProject(this.postId, form.value).subscribe((Response) => {
                this.isLoading = false;
                this.router.navigate(["/"]);
            });
        }
        form.resetForm();
    }
    ngOnInit() {
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(authStatus => {
            this.isLoading = false;
        });
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("postId")) {
                this.mode = 'edit';
                this.postId = paramMap.get('postId');
                this.isLoading = true;
                this.postService.editProject(this.postId).subscribe((Response) => {
                    this.isLoading = false;
                    this.post = Response;
                });
            }
            else {
                this.mode = 'create';
                this.postId = null;
            }
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
PostCreateComponent.ctorParameters = () => [
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")).default]
    })
], PostCreateComponent);



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    width: 70%;\r\n    margin: 6rem auto;\r\n}\r\n\r\nmat-form-field,input {\r\n    width: 100%;\r\n}\r\n\r\np {\r\n    margin: 6rem auto;\r\n    text-align: center;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n\r\nh4 {\r\n    text-align: justify;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogNnJlbSBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDZyZW0gYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");





let PostListComponent = class PostListComponent {
    constructor(postService, authService, router) {
        this.postService = postService;
        this.authService = authService;
        this.router = router;
        this.isLoading = false;
        this.posts = [];
        this.userIsAuthenticated = false;
    }
    onLike(postId) {
        if (!this.userIsAuthenticated) {
            this.router.navigate(['/login']);
        }
        this.isLoading = true;
        this.postService.likeProject(postId, this.userId, this.name).subscribe((Response) => {
            this.isLoading = false;
            console.log(Response);
            this.ngOnInit();
        });
    }
    onDelete(postId) {
        this.isLoading = true;
        this.postService.deleteProject(postId).subscribe((Response) => {
            this.isLoading = false;
            console.log(Response);
            this.ngOnInit();
        });
    }
    onComment(userComment, postId) {
        if (userComment.invalid) {
            return;
        }
        this.postService.commentProject(userComment.value.comment, postId, this.userId, this.name).subscribe((Response) => {
            console.log(Response);
            this.ngOnInit();
        });
    }
    ngOnInit() {
        this.isLoading = true;
        this.postService.viewProject().subscribe((Response) => {
            this.isLoading = false;
            this.posts = Response;
        });
        this.userId = this.authService.getUserId();
        this.name = this.authService.getUserName();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
            this.name = this.authService.getUserName();
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
PostListComponent.ctorParameters = () => [
    { type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")).default]
    })
], PostListComponent);



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PostsService = class PostsService {
    constructor(http) {
        this.http = http;
    }
    saveProject(data) {
        return this.http.post("http://localhost:3000/createProject", data);
    }
    viewProject() {
        return this.http.get("http://localhost:3000/getProject");
    }
    editProject(postId) {
        return this.http.get("http://localhost:3000/getProjectById/" + postId);
    }
    updateProject(postId, data) {
        return this.http.put("http://localhost:3000/updateProject/" + postId, data);
    }
    deleteProject(postId) {
        return this.http.delete("http://localhost:3000/deleteProject/" + postId);
    }
    likeProject(postId, userId, name) {
        const userData = {
            userId: userId,
            name: name
        };
        return this.http.put("http://localhost:3000/likeProject/" + postId, userData);
    }
    donateToProject(postId, userId, name, donation) {
        const userData = {
            userId: userId,
            name: name,
            donation: donation
        };
        return this.http.put("http://localhost:3000/donation/" + postId, userData);
    }
    commentProject(comment, postId, userId, name) {
        const userData = {
            comment: comment,
            userId: userId,
            name: name,
        };
        return this.http.put("http://localhost:3000/commentProject/" + postId, userData);
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostsService);



/***/ }),

/***/ "./src/app/user/my-donations/my-donations.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/my-donations/my-donations.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    width: 70%;\r\n    margin: 6rem auto;\r\n}\r\n\r\nmat-form-field,input {\r\n    width: 100%;\r\n}\r\n\r\np {\r\n    margin: 6rem auto;\r\n    text-align: center;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n\r\nh4 {\r\n    text-align: justify;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9teS1kb25hdGlvbnMvbXktZG9uYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL215LWRvbmF0aW9ucy9teS1kb25hdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDZyZW0gYXV0bztcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQsaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luOiA2cmVtIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaDQge1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/my-donations/my-donations.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/my-donations/my-donations.component.ts ***!
  \*************************************************************/
/*! exports provided: MyDonationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDonationsComponent", function() { return MyDonationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");




let MyDonationsComponent = class MyDonationsComponent {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.isLoading = false;
        this.posts = [];
        this.userIsAuthenticated = false;
    }
    ngOnInit() {
        this.userId = this.authService.getUserId();
        this.name = this.authService.getUserName();
        this.wallet = this.authService.getUserWallet();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
            this.name = this.authService.getUserName();
            this.wallet = this.authService.getUserWallet();
        });
        this.isLoading = true;
        this.userService.myDonations(this.userId).subscribe((Response) => {
            console.log("userID my Donations  " + this.userId);
            this.isLoading = false;
            this.posts = Response;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
MyDonationsComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
MyDonationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-donations',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-donations.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-donations/my-donations.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-donations.component.css */ "./src/app/user/my-donations/my-donations.component.css")).default]
    })
], MyDonationsComponent);



/***/ }),

/***/ "./src/app/user/my-projects/my-projects.component.css":
/*!************************************************************!*\
  !*** ./src/app/user/my-projects/my-projects.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    width: 70%;\r\n    margin: 6rem auto;\r\n}\r\n\r\nmat-form-field,input {\r\n    width: 100%;\r\n}\r\n\r\np {\r\n    margin: 6rem auto;\r\n    text-align: center;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n\r\nh4 {\r\n    text-align: justify;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9teS1wcm9qZWN0cy9teS1wcm9qZWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9teS1wcm9qZWN0cy9teS1wcm9qZWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIG1hcmdpbjogNnJlbSBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCxpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW46IDZyZW0gYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/user/my-projects/my-projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/my-projects/my-projects.component.ts ***!
  \***********************************************************/
/*! exports provided: MyProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function() { return MyProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_posts_posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/posts/posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");






let MyProjectsComponent = class MyProjectsComponent {
    constructor(authService, userService, postService, router) {
        this.authService = authService;
        this.userService = userService;
        this.postService = postService;
        this.router = router;
        this.isLoading = false;
        this.posts = [];
        this.userIsAuthenticated = false;
    }
    onLike(postId) {
        if (!this.userIsAuthenticated) {
            this.router.navigate(['/login']);
        }
        this.isLoading = true;
        this.postService.likeProject(postId, this.userId, this.name).subscribe((Response) => {
            this.isLoading = false;
            console.log(Response);
            this.ngOnInit();
        });
    }
    onDelete(postId) {
        this.isLoading = true;
        this.postService.deleteProject(postId).subscribe((Response) => {
            this.isLoading = false;
            console.log(Response);
            this.ngOnInit();
        });
    }
    onComment(userComment, postId) {
        if (userComment.invalid) {
            return;
        }
        this.postService.commentProject(userComment.value.comment, postId, this.userId, this.name).subscribe((Response) => {
            console.log(Response);
            this.ngOnInit();
        });
    }
    ngOnInit() {
        this.userId = this.authService.getUserId();
        this.name = this.authService.getUserName();
        this.wallet = this.authService.getUserWallet();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
            this.name = this.authService.getUserName();
            this.wallet = this.authService.getUserWallet();
        });
        this.isLoading = true;
        this.userService.myProjects(this.userId).subscribe((Response) => {
            console.log("userID my Projects" + this.userId);
            this.isLoading = false;
            this.posts = Response;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
MyProjectsComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_posts_posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MyProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/my-projects/my-projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-projects.component.css */ "./src/app/user/my-projects/my-projects.component.css")).default]
    })
], MyProjectsComponent);



/***/ }),

/***/ "./src/app/user/user.service.ts":
/*!**************************************!*\
  !*** ./src/app/user/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    myProjects(userId) {
        return this.http.get("http://localhost:3000/userProjects/" + userId);
    }
    myDonations(userId) {
        return this.http.get("http://localhost:3000/userDonations/" + userId);
    }
    myWallet(userId) {
        return this.http.get("http://localhost:3000/userWallet/" + userId);
    }
    topUp(userId, credit, money) {
        const up = {
            credit: credit,
            money: money
        };
        return this.http.put("http://localhost:3000/topup/" + userId, up);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/user/wallet/wallet.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/wallet/wallet.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n    margin: 4rem auto;\r\n    width: 80%;\r\n}\r\n\r\nmat-form-field,input {\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    margin: 4rem auto;\r\n}\r\n\r\nh1 {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdXNlci93YWxsZXQvd2FsbGV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgICBtYXJnaW46IDRyZW0gYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkLGlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IDRyZW0gYXV0bztcclxufVxyXG5cclxuaDEge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/user/wallet/wallet.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/wallet/wallet.component.ts ***!
  \*************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user/user.service.ts");




let WalletComponent = class WalletComponent {
    constructor(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.isLoading = false;
        this.userIsAuthenticated = false;
    }
    onTopUp(data) {
        if (data.invalid) {
            return;
        }
        if (111 !== data.value.creditCardNum) {
            alert("Invalid credit Card Number");
            return;
        }
        this.userService.topUp(this.userId, data.value.creditCardNum, data.value.topup).subscribe((Response) => {
            console.log(Response);
            this.ngOnInit();
        });
    }
    ngOnInit() {
        this.userId = this.authService.getUserId();
        this.name = this.authService.getUserName();
        this.wallet = this.authService.getUserWallet();
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
            this.userId = this.authService.getUserId();
            this.name = this.authService.getUserName();
            this.wallet = this.authService.getUserWallet();
        });
        this.isLoading = true;
        this.userService.myWallet(this.userId).subscribe((Response) => {
            this.isLoading = false;
            this.userWallet = Response[0].wallet;
        });
    }
    ngOnDestroy() {
        this.authStatusSub.unsubscribe();
    }
};
WalletComponent.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
WalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wallet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/wallet/wallet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wallet.component.css */ "./src/app/user/wallet/wallet.component.css")).default]
    })
], WalletComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\to host\mainAngular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map