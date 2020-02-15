"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var n=require("react"),m=e(n),y=e(require("timestamp-utils")),f=e(require("lodash.times"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?l(e):t}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,s=e[Symbol.iterator]();!(a=(c=s.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e){e=e||(new Date).getTime();var t,n=v(y.decompose(e),3),a=n[0],r=n[1],o=g(y.addDays(e,1-n[2])),c=b[r-1]||((t=a)%4==0&&t%100!=0||t%400==0?29:28),s=y.addDays(o,c-1),i=y.getWeekDay(o);return{firstMonthDay:o,lastMonthDay:s,firstDayToDisplay:y.addDays(o,-i),month:r,year:a}}function d(e,t){return{startDate:t?e?Math.min(e,t):null:e,endDate:t&&t!==e?Math.max(e,t):null}}function p(e){return"0".concat(e).slice(-2)}var b=[31,null,31,30,31,30,31,31,30,31,30,31],g=function(e){var t=v(y.decompose(e),7);return y.add(e,{hours:-t[3],minutes:-t[4],seconds:-t[5],milliseconds:-t[6]})},D=function(){function r(){var e,s;c(this,r);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return h(l(s=u(this,(e=i(r)).call.apply(e,[this].concat(n)))),"onHoursChange",function(e){var t=s.props;(0,t.onTimeChange)(y.setHours(t.date,parseInt(e.target.value,10)))}),h(l(s),"onMinutesChange",function(e){var t=s.props;(0,t.onTimeChange)(y.setMinutes(t.date,parseInt(e.target.value,10)))}),h(l(s),"render",function(){var e=s.props,t=e.date,n=e.displayTime,a=e.dayLabels,r=e.monthLabels,o=y.getHours(t),c=y.getMinutes(t);return m.createElement("div",{className:"rlc-date-details-wrapper"},m.createElement("div",{className:"rlc-date-details"},m.createElement("div",{className:"rlc-date-number"},y.getDay(t)),m.createElement("div",{className:"rlc-date-day-month-year"},m.createElement("div",{className:"rlc-detail-day"},a[y.getWeekDay(t)]),m.createElement("div",{className:"rlc-detail-month-year"},r[y.getMonth(t)-1]," ",m.createElement("span",{className:"rlc-detail-year"},y.getYear(t))))),n&&m.createElement("div",{className:"rlc-date-time-selects"},m.createElement("select",{onChange:s.onHoursChange,value:o},f(24).map(function(e){return m.createElement("option",{value:p(e),key:e},p(e))})),m.createElement("span",{className:"rlc-time-separator"},":"),m.createElement("select",{onChange:s.onMinutesChange,value:c},[0,15,45].map(function(e){m.createElement("option",{value:p(e),key:e},p(e))}))))}),s}return s(r,n.Component),r}(),E=function(){function o(){var e,r;c(this,o);for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return h(l(r=u(this,(e=i(o)).call.apply(e,[this].concat(n)))),"prevYear",function(){return r.props.onChange({yearOffset:-1})}),h(l(r),"prevMonth",function(){return r.props.onChange({monthOffset:-1})}),h(l(r),"nextYear",function(){return r.props.onChange({yearOffset:1})}),h(l(r),"nextMonth",function(){return r.props.onChange({monthOffset:1})}),h(l(r),"render",function(){var e=r.props,t=e.monthLabels,n=e.month,a=e.year;return m.createElement("div",{className:"rlc-month-and-year-wrapper"},m.createElement("div",{className:"rlc-navigation-button-wrapper rlc-prevs"},m.createElement("div",{className:"rlc-navigation-button rlc-prev-year",onClick:r.prevYear},"<<"),m.createElement("div",{className:"rlc-navigation-button rlc-prev-month",onClick:r.prevMonth},"<")),m.createElement("div",{className:"rlc-month-and-year"},t[n-1]," ",m.createElement("span",null,a)),m.createElement("div",{className:"rlc-navigation-button-wrapper rlc-nexts"},m.createElement("div",{className:"rlc-navigation-button rlc-next-month",onClick:r.nextMonth},">"),m.createElement("div",{className:"rlc-navigation-button rlc-next-year",onClick:r.nextYear},">>")))}),r}return s(o,n.Component),o}(),t=function(){function t(e){var p;return c(this,t),h(l(p=u(this,i(t).call(this,e))),"componentDidUpdate",function(e){var t=p.props,n=t.timezone,a=t.startDate,r=t.endDate;n!==e.timezone&&y.setTimezone(n),a===e.startDate&&r===e.endDate||p.setState(p.getInitialState(p.props))}),h(l(p),"getInitialState",function(e){var t=e.startDate,n=e.endDate;return function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach(function(e){h(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},o(t),{},d(t,n))}),h(l(p),"onClickDay",function(e){var t=p.state,n=t.startDate;p.update(n?n&&!t.endDate?d(n,e):{startDate:e,endDate:null}:{startDate:e})}),h(l(p),"changeMonth",function(e){var t=e.yearOffset,n=e.monthOffset,a=y.add(p.state.firstMonthDay,{months:void 0===n?0:n,years:void 0===t?0:t});p.setState(o(a))}),h(l(p),"update",function(e){var t=e.startDate,n=e.endDate;p.props.onChange(void 0===t?p.props.startDate:t,void 0===n?p.props.endDate:n)}),h(l(p),"getClassNames",function(e){var t,n,a,r,o=p.state,c=o.firstMonthDay,s=o.lastMonthDay,i=o.endDate,l=p.props.disableDates,u=g(o.startDate),d=g(i),m=h({"rlc-day-disabled":l(e),"rlc-day-today":e===g((new Date).getTime()),"rlc-day-inside-selection":(r=d,u<(a=e)&&a<r),"rlc-day-out-of-month":(n=s,(t=e)<c||n<t),"rlc-day-selected":!i&&u===e,"rlc-day-start-selection":i&&u===e,"rlc-day-end-selection":i&&d===e},"rlc-day-".concat(e),!0);return Object.entries(m).reduce(function(e,t){var n=v(t,2),a=n[0];return n[1]?"".concat(e," ").concat(a):e},"")}),h(l(p),"render",function(){var t,e=p.state,n=e.firstDayToDisplay,a=e.startDate,r=e.endDate,o=e.month,c=e.year,s=p.props,i=s.disableDates,l=s.displayTime,u=s.dayLabels,d=s.monthLabels;return m.createElement("div",{className:"rlc-calendar"},m.createElement("div",{className:"rlc-details"},!!a&&m.createElement(D,{dayLabels:u,monthLabels:d,date:a,displayTime:l,onTimeChange:function(e){return p.update({startDate:e})}}),!!r&&m.createElement(D,{dayLabels:u,monthLabels:d,date:r,displayTime:l,onTimeChange:function(e){return p.update({endDate:e})}})),m.createElement(E,{monthLabels:d,month:o,year:c,onChange:p.changeMonth}),m.createElement("div",{className:"rlc-days-label"},u.map(function(e){return m.createElement("div",{className:"rlc-day-label",key:e.toLowerCase()},e.slice(0,2))})),m.createElement("div",{className:"rlc-days"},(t=n,f(42,function(e){return y.addDays(t,e)}).map(function(e){return m.createElement("div",{className:"rlc-day ".concat(p.getClassNames(e)),key:e,onClick:function(){return!i(e)&&p.onClickDay(e)}},parseInt(y.getDay(e),10))}))))}),y.setTimezone(e.timezone),p.state=p.getInitialState(e),p}return s(t,n.Component),t}();t.defaultProps={startDate:null,endDate:null,onChange:function(){},disableDates:function(){return!1},displayTime:!1,dayLabels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthLabels:["January","February","March","April","May","June","July","August","September","October","November","December"],timezone:"UTC"},module.exports=t;
