!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){function t(e,n){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==t.return||t.return()}finally{if(l)throw a}}}}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}!function(){var e={showElem:function(e){return function(){var n=document.getElementById(e);n&&n.classList.contains("hidden")&&n.classList.remove("hidden")}},hideElem:function(e){return function(){var n=document.getElementById(e);n&&(n.classList.contains("hidden")||n.classList.add("hidden"))}},getElem:function(e){return document.getElementById(e)},toggleErrorStateHTML:function(e){return e?"":'<div class="usa-alert usa-alert--error usa-alert--slim">\n                    <div class="usa-alert__body" role="alert" aria-live="assertive">\n                        <em class="usa-alert__text">\n                            Please enter a number.\n                        </em>\n                    </div>\n                </div>'},validateNumberField:function(n){return function(t){var r=o.numberFieldValid(t);e.getElem(n).innerHTML=e.toggleErrorStateHTML(r)}}},n={VA:{apply:[{url:"https://commonhelp.dss.virginia.gov/CASWeb/faces/loginCAS.xhtml",description:"Apply online using CommonHelp. (You may have to create an account to apply.)"},{url:"https://www.dss.virginia.gov/localagency/index.cgi",description:"Apply at a local Social Services office near you."}],other_resources:[{url:"https://www.foodpantries.org/st/virginia",description:"Foodpantries.org"},{url:"https://www.feedingamerica.org/find-your-local-foodbank",description:"Feeding America"}]},IL:{apply:[{url:"https://abe.illinois.gov/abe/access/",description:"Apply online using ABE."}],other_resources:[{url:"https://www.dhs.state.il.us/page.aspx?item=31245",description:"Food Connections"}]}},o={showCitizenshipInfobox:e.showElem("citizenship_info_box"),hideCitizenshipInfobox:e.hideElem("citizenship_info_box"),showMedicalExpensesForElderlyOrDisabled:e.showElem("medical_expenses_for_elderly_or_disabled_question"),hideMedicalExpensesForElderlyOrDisabled:e.hideElem("medical_expenses_for_elderly_or_disabled_question"),showExplanationButton:e.showElem("show-explanation"),hideExplanationButton:e.hideElem("show-explanation"),showResultExplanation:e.showElem("result-explanation"),hideResultExplanation:e.hideElem("result-explanation"),showIncomeExplanationButton:e.showElem("show-income-explanation"),hideIncomeExplanationButton:e.hideElem("show-income-explanation"),showIncomeExplanation:e.showElem("income-explanation"),hideIncomeExplanation:e.hideElem("income-explanation"),hideErrors:e.hideElem("errors"),showErrors:e.showElem("errors"),hideResults:e.hideElem("results"),showResults:e.showElem("results"),numberFieldValid:function(e){var n=e.target.value;return""===n||!isNaN(parseInt(n))}},r={onSubmit:function(){var n,o={},i=t(e.getElem("prescreener-form").elements);try{for(i.s();!(n=i.n()).done;){var a=n.value;switch(a.type){case"select-one":o[a.id]=a.value;break;case"radio":var s=document.querySelector('input[name="'.concat(a.name,'"]:checked'));o[a.name]=s?s.value:void 0;break;case"text":o[a.id]=a.value}}}catch(e){i.e(e)}finally{i.f()}var l=[];""===o.household_size&&l.push({name:"household_size",message:"Select a household size"}),""===o.monthly_job_income&&l.push({name:"monthly_job_income",message:"Enter a monthly household pre-tax income from jobs or self-employment"}),""===o.monthly_non_job_income&&l.push({name:"monthly_non_job_income",message:"Enter any monthly household income from other sources"}),""===o.resources&&l.push({name:"resources",message:"Enter total resources amount"}),void 0===o.household_includes_elderly_or_disabled&&l.push({name:"household_includes_elderly_or_disabled",message:'Select "yes" or "no" if your household includes someone who is 60 or older, or someone who is disabled'}),void 0===o.all_citizens_question&&l.push({name:"all_citizens_question",message:'Select "yes" or "no" if everyone on the application a U.S. citizen'}),console.log("errors",l),0===l.length&&r.sendData(o)},sendData:function(n){var t=e.getElem("prescreener-form");n.state_or_territory=t.dataset.stateOrTerritory,n.use_emergency_allotment=t.dataset.useEmergencyAllotment;var o=new SnapAPI.SnapEstimateEntrypoint(n).calculate();r.responseToHTML(o)},responseToHTML:function(n){if("OK"!==n.status){o.hideResults(),o.hideExplanationButton(),o.hideResultExplanation();var t=r.responseErrorsToHTML(n.errors);return e.getElem("errors").innerHTML=t,void o.showErrors()}var i=r.responseResultToHTML(n),a=r.responseExplanationToHTML(n.eligibility_factors),s=r.responseIncomeExplanationToHTML(n.eligibility_factors);e.getElem("results").innerHTML=i,e.getElem("result-explanation").innerHTML=a,e.getElem("income-explanation").innerHTML=s,o.showResults(),o.hideErrors(),o.showExplanationButton(),o.hideResultExplanation(),o.hideIncomeExplanationButton(),o.hideIncomeExplanation(),e.getElem("results").scrollIntoView()},responseErrorsToHTML:function(e){var n,o="<h1>Errors:</h1>",r=t(e);try{for(r.s();!(n=r.n()).done;){var i=n.value;o+="<li>".concat(i,"</li>")}}catch(e){r.e(e)}finally{r.f()}return o},optionsHTML:function(e,n){var o,r="<p>".concat(n,'\n                            <ul class="usa-link">'),i=t(e);try{for(i.s();!(o=i.n()).done;){var a=o.value;r+='<li>\n                        <a class="usa-link" href="'.concat(a.url,'" rel="noopener noreferrer">\n                            ').concat(a.description,"\n                        </a>\n                    </li>")}}catch(e){i.e(e)}finally{i.f()}return r+="</ul></p>"},responseResultToHTML:function(e){var t='<h2 id="results-section-title">Results:</h2>',o=e.estimated_eligibility,i=e.estimated_monthly_benefit,a=e.emergency_allotment_estimated_benefit,s=document.getElementById("prescreener-form").dataset.stateOrTerritory,l=n[s];if(!o)return t+="<p>You <strong>might not</strong> be eligible for SNAP benefits.</p>\n                    <p>This result is only an estimate based on your inputs, not an official application or decision. <strong>You can still apply for SNAP benefits</strong>.</p>",t+=r.optionsHTML(l.apply,"Ways to apply:"),t+=r.optionsHTML(l.other_resources,"Other resources for food assistance:");if(t+="<p>You may be <b>eligible</b> for SNAP benefits.</p>",a&&i!==a){var c=a-i;t+="<p>If you apply and are approved, your benefit may be $".concat(i," per month.</p><p>Due to the current pandemic, you could receive an additional $").concat(c," per month. (This additional amount is temporary.)</p>")}else t+="<p>If you apply and are approved, your benefit may be $".concat(i," per month.</p>");return t+=r.optionsHTML(l.apply,"Ways to apply:")},responseExplanationToHTML:function(e){var n="";e.sort((function(e,n){return e.sort_order-n.sort_order})),n+='<a class="usa-link explanation-link clicked">\n                    Why did I get this result?\n                </a>\n                <h2>SNAP requirements</h2>\n                <p>To be eligible for SNAP benefits, a household needs to meet three requirements:</p>';var o,r=t(e.filter((function(e){return"test"===e.type})));try{for(r.s();!(o=r.n()).done;){var i=o.value,a=i.name,s=i.result?"Pass":"Fail",l=i.result?"pass-green":"fail-red";n+="<h3>".concat(a,': <span class="').concat(l,'">').concat(s,"</span></h3>");var c,u=t(i.explanation);try{for(u.s();!(c=u.n()).done;){var d=c.value;n+="<p>".concat(d,"</p>")}}catch(e){u.e(e)}finally{u.f()}}}catch(e){r.e(e)}finally{r.f()}var p=e.filter((function(e){return"amount"===e.type}))[0];n+="<h2>".concat(p.name,"</h2>");var m,h=t(p.explanation);try{for(h.s();!(m=h.n()).done;){var f=m.value;n+="<p>".concat(f,"</p>")}}catch(e){h.e(e)}finally{h.f()}return n},responseIncomeExplanationToHTML:function(e){var n='<a class="usa-link explanation-link clicked">How are gross and net income calculated?</a>';e.sort((function(e,n){return e.sort_order-n.sort_order}));var o,r=t(e.filter((function(e){return"income"===e.type})));try{for(r.s();!(o=r.n()).done;){var i=o.value,a=i.name,s=i.explanation;n+="<h3>".concat(a,"</h3>");var l,c=t(s);try{for(c.s();!(l=c.n()).done;){var u=l.value;n+="<p>".concat(u,"</p>")}}catch(e){c.e(e)}finally{c.f()}}}catch(e){r.e(e)}finally{r.f()}return n}};e.getElem("prescreener-form").addEventListener("submit",(function(e){e.preventDefault(),r.onSubmit()})),e.getElem("input__all_citizens_question_true").addEventListener("change",(function(){o.hideCitizenshipInfobox()})),e.getElem("input__all_citizens_question_false").addEventListener("change",(function(){o.showCitizenshipInfobox()})),e.getElem("input__household_includes_elderly_or_disabled_true").addEventListener("change",(function(){o.showMedicalExpensesForElderlyOrDisabled()})),e.getElem("input__household_includes_elderly_or_disabled_false").addEventListener("change",(function(){o.hideMedicalExpensesForElderlyOrDisabled()})),e.getElem("show-explanation").addEventListener("click",(function(){o.showResultExplanation(),o.hideExplanationButton(),o.showIncomeExplanationButton()})),e.getElem("show-income-explanation").addEventListener("click",(function(){o.showIncomeExplanation(),o.hideIncomeExplanationButton()}));for(var i=function(){var n=s[a],t=e.getElem(n);t&&t.addEventListener("input",(function(t){e.validateNumberField("".concat(n,"_error_elem"))(t)}))},a=0,s=["monthly_job_income","monthly_non_job_income","resources","dependent_care_costs","medical_expenses_for_elderly_or_disabled","court_ordered_child_support_payments","rent_or_mortgage","homeowners_insurance_and_taxes","utility_costs"];a<s.length;a++)i()}()}]);