(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){e.exports=n(76)},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(32),o=n.n(l),c=(n(41),n(42),n(15)),i=n.n(c),u=n(17),s=n(2),d=n(3),m=n(5),p=n(4),h=n(6),f=(n(44),n(45),function(e){var t={backgroundColor:e.bgColor,color:e.color};return r.a.createElement("button",{id:e.id?e.id:"button",style:t,onClick:e.clicked},e.children)}),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={transFlag:!1},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("startClickHandler",e.state),t.next=3,e.setState({transFlag:!0});case 3:console.log("startClickHandler",e.state),setTimeout((function(){e.props.history.push("/personalinfo")}),200);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{id:"HomePage",style:this.state.transFlag?{transform:"translateX(500px)",opacity:0}:null},r.a.createElement("p",null,"\u0631\u0632\u0648\u0645\u0647 \u062e\u0648\u062f\u062a\u0648 \u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647 \u0627\u06cc \u0628\u0633\u0627\u0632"),r.a.createElement(f,{bgColor:"#0099ff",color:"white",clicked:t},"\u0634\u0631\u0648\u0639"))}}]),t}(a.Component),b=n(33),v=n(13),y=(n(46),n(47),function(e){return r.a.createElement("input",{id:e.id,onChange:e.changed,placeholder:e.placeholder,autoComplete:e.autocomplete,type:e.type,name:e.name})}),g=(n(48),function(e){var t=e.options.map((function(e,t,n){return r.a.createElement("option",{key:t,value:e},e)}));return r.a.createElement("select",{className:"optionClass",id:e.id,onChange:e.changed},r.a.createElement("option",null,"-"),t)}),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={outAnim:!1},n.personalInfoData={},n.createSelectItems=function(){for(var e=[],t=1398;t>=1350;t--)e.push(t);return e},n.clickHandler=Object(u.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.personalInfoData.fullName&&n.personalInfoData.jobTitle?n.setState({outAnim:!0},(function(){return setTimeout((function(){n.props.history.push({pathname:"/skills",state:{personalInfo:n.personalInfoData}})}),200)})):(t=document.getElementById("jobTitle"),a=document.getElementById("fullName"),"1px solid red",t.value.length||(t.style.border="1px solid red"),a.value.length||(a.style.border="1px solid red"));case 1:case"end":return e.stop()}}),e)}))),n.handleInputChange=function(e){"fullName"===e.target.id?n.personalInfoData.fullName=e.target.value:"jobTitle"===e.target.id?n.personalInfoData.jobTitle=e.target.value:"sex"===e.target.id?n.personalInfoData.sex=e.target.value:"birthYear"===e.target.id?n.personalInfoData.birthYear=e.target.value:"aboutMe"===e.target.id?n.personalInfoData.aboutMe=e.target.value:"city"===e.target.id&&(n.personalInfoData.city=e.target.value)},n.renderCities=function(){return["\u0622\u0630\u0631\u0628\u0627\u06cc\u062c\u0627\u0646 \u0634\u0631\u0642\u06cc","\u0622\u0630\u0631\u0628\u0627\u06cc\u062c\u0627\u0646 \u063a\u0631\u0628\u06cc","\u0627\u0631\u062f\u0628\u06cc\u0644","\u0627\u0635\u0641\u0647\u0627\u0646","\u0627\u0644\u0628\u0631\u0632","\u0627\u06cc\u0644\u0627\u0645","\u0628\u0648\u0634\u0647\u0631","\u062a\u0647\u0631\u0627\u0646","\u0686\u0647\u0627\u0631\u0645\u062d\u0627\u0644 \u0648 \u0628\u062e\u062a\u06cc\u0627\u0631\u06cc","\u062e\u0631\u0627\u0633\u0627\u0646 \u062c\u0646\u0648\u0628\u06cc","\u062e\u0631\u0627\u0633\u0627\u0646 \u0631\u0636\u0648\u06cc","\u062e\u0631\u0627\u0633\u0627\u0646 \u0634\u0645\u0627\u0644\u06cc","\u062e\u0648\u0632\u0633\u062a\u0627\u0646","\u0632\u0646\u062c\u0627\u0646","\u0633\u0645\u0646\u0627\u0646","\u0633\u06cc\u0633\u062a\u0627\u0646 \u0648 \u0628\u0644\u0648\u0686\u0633\u062a\u0627\u0646","\u0641\u0627\u0631\u0633","\u0642\u0632\u0648\u06cc\u0646","\u0642\u0645","\u06a9\u0631\u062f\u0633\u062a\u0627\u0646","\u06a9\u0631\u0645\u0627\u0646","\u06a9\u0631\u0645\u0627\u0646\u0634\u0627\u0647","\u06a9\u0647\u06af\u06cc\u0644\u0648\u06cc\u0647 \u0648\u0628\u0648\u06cc\u0631\u0627\u062d\u0645\u062f","\u06af\u0644\u0633\u062a\u0627\u0646","\u06af\u06cc\u0644\u0627\u0646","\u0644\u0631\u0633\u062a\u0627\u0646","\u0645\u0627\u0632\u0646\u062f\u0631\u0627\u0646","\u0645\u0631\u06a9\u0632\u06cc","\u0647\u0631\u0645\u0632\u06af\u0627\u0646","\u0647\u0645\u062f\u0627\u0646","\u06cc\u0632\u062f"]},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={};return this.state.outAnim&&(e={transform:"translateX(500px)",opacity:1}),r.a.createElement("div",{id:"PersonalInfo",style:e},r.a.createElement("p",null,"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u062f\u06cc \u062e\u0648\u062f\u062a\u0648\u0646\u0648 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f"),r.a.createElement("div",{id:"form-wrapper"},r.a.createElement(y,{id:"fullName",changed:this.handleInputChange,placeholder:"\u0646\u0627\u0645 \u0648 \u0646\u0627\u0645 \u062e\u0627\u0646\u0648\u0627\u062f\u06af\u06cc",autoComplete:"off",type:"text",name:"fullName"}),r.a.createElement("br",null),r.a.createElement(y,{id:"jobTitle",changed:this.handleInputChange,autoComplete:"off",placeholder:"\u0639\u0646\u0648\u0627\u0646 \u0634\u063a\u0644\u06cc",type:"text"}),r.a.createElement("br",null),r.a.createElement("label",null,"\u062c\u0646\u0633\u06cc\u062a: "),r.a.createElement(g,{id:"sex",changed:this.handleInputChange,options:["\u0645\u0631\u062f","\u0632\u0646"]}),r.a.createElement("br",null),r.a.createElement("label",null,"\u0627\u0633\u062a\u0627\u0646 \u0633\u06a9\u0648\u0646\u062a:"),r.a.createElement(g,{id:"city",changed:this.handleInputChange,options:this.renderCities()}),r.a.createElement("br",null),r.a.createElement("label",{id:"yearLabel"},"\u0633\u0627\u0644 \u062a\u0648\u0644\u062f: "),r.a.createElement(g,{id:"birthYear",changed:this.handleInputChange,options:this.createSelectItems()}),r.a.createElement("br",null),r.a.createElement("textarea",{id:"aboutMe",onChange:this.handleInputChange,placeholder:"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646"})),r.a.createElement(f,{bgColor:"#0099ff",color:"white",clicked:this.clickHandler},"\u0645\u0631\u062d\u0644\u0647 \u0628\u0639\u062f"))}}]),t}(a.Component),j=n(12),k=n(9);n(49);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={skills:[],outAnim:!1},n.levels=["\u062a\u0627\u0632\u0647 \u06a9\u0627\u0631","\u0646\u06cc\u0645\u0647 \u0645\u0627\u0647\u0631","\u0645\u0627\u0647\u0631","\u0645\u062a\u062e\u0635\u0635"],n.currentSkill={skillText:"",level:""},n.handleAddNewSkillText=function(e){n.currentSkill.skillText=e.target.value},n.handleLevelSelector=function(e){n.currentSkill.level=e.target.value},n.handleAddSkill=function(e){var t=Object(k.a)(n.state.skills);if(n.currentSkill.level.length&&n.currentSkill.skillText.length)t.push({skillText:n.currentSkill.skillText,level:n.currentSkill.level}),n.setState({skills:t}),n.currentSkill={level:"",skillText:""},document.getElementById("skillInput").value="",document.getElementById("skillInput").focus(),document.getElementById("levelSelector").value="-";else{var a=document.getElementById("skillInput");a.value.length||(a.style.border="1px solid red")}},n.handleDeleteSkill=function(e){var t=Object(k.a)(n.state.skills);t.splice(e,1),n.setState({skills:Object(k.a)(t)})},n.handleSubmit=function(){n.setState({outAnim:!0},(function(){return setTimeout((function(){n.props.history.push({pathname:"/workexperience",state:x({},n.props.location.state,{skills:n.state.skills})})}),300)}))},n.skillContainerRenderer=function(){var e=null;return n.state.skills.length&&(e=n.state.skills.map((function(e,t){return r.a.createElement("div",{className:"addedSkillBox",key:t},r.a.createElement("div",{className:"addedSkillText"},r.a.createElement("br",null),e.skillText," ",r.a.createElement("br",null),e.level),r.a.createElement("div",{className:"deleteIcon",onClick:function(){return n.handleDeleteSkill(t)}}))}))),e},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e={};return this.state.outAnim&&(e={transform:"translateX(500px)",opacity:0}),r.a.createElement("div",{id:"skills",style:e},r.a.createElement("p",null,"\u0645\u0647\u0627\u0631\u062a \u0647\u0627"),r.a.createElement("div",{id:"formWrapper"},r.a.createElement(y,{id:"skillInput",changed:this.handleAddNewSkillText,value:this.state.skills,placeholder:"\u0645\u0647\u0627\u0631\u062a \u062e\u0648\u062f \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f",autocomplete:"off",type:"text",name:"skills"}),r.a.createElement(g,{id:"levelSelector",changed:this.handleLevelSelector,options:this.levels}),r.a.createElement(f,{clicked:this.handleAddSkill,bgColor:"#ff6666",color:"white"},"+"),r.a.createElement("br",null),this.skillContainerRenderer()),r.a.createElement(f,{bgColor:"#0099ff",color:"white",clicked:this.handleSubmit},"\u0645\u0631\u062d\u0644\u0647 \u0628\u0639\u062f"))}}]),t}(a.Component);n(50);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={experiences:[],outAnim:!1},n.yearList=function(){for(var e=[],t=1398;t>=1350;t--)e.push(t);return e},n.monthList=function(){return["\u0641\u0631\u0648\u0631\u062f\u06cc\u0646","\u0627\u0631\u062f\u06cc\u0628\u0647\u0634\u062a","\u062e\u0631\u062f\u0627\u062f","\u062a\u06cc\u0631","\u0645\u0631\u062f\u0627\u062f","\u0634\u0647\u0631\u06cc\u0648\u0631","\u0645\u0647\u0631","\u0622\u0628\u0627\u0646","\u0622\u0630\u0631","\u062f\u06cc","\u0628\u0647\u0645\u0646","\u0627\u0633\u0641\u0646\u062f"]},n.currentExperience={jobTitle:"",companyName:"",fromMonth:"",fromYear:"",toMonth:"",toYear:""},n.handleJobTitle=function(e){n.currentExperience.jobTitle=e.target.value},n.handleCompanyName=function(e){n.currentExperience.companyName=e.target.value},n.handleFromMonth=function(e){n.currentExperience.fromMonth=e.target.value},n.handleFromYear=function(e){n.currentExperience.fromYear=e.target.value},n.handleToMonth=function(e){n.currentExperience.toMonth=e.target.value},n.handleToYear=function(e){n.currentExperience.toYear=e.target.value},n.handleAddExperience=function(){var e=Object(k.a)(n.state.experiences);e.push({jobTitle:n.currentExperience.jobTitle,companyName:n.currentExperience.companyName,fromYear:n.currentExperience.fromYear,fromMonth:n.currentExperience.fromMonth,toYear:n.currentExperience.toYear,toMonth:n.currentExperience.toMonth}),n.setState({experiences:e}),n.currentExperience={jobTitle:"",companyName:"",fromMonth:"",fromYear:"",toMonth:"",toYear:""},document.getElementById("jobTitleInput").value="",document.getElementById("jobTitleInput").focus(),document.getElementById("companyNameInput").value="",document.getElementById("companyNameInput").focus(),document.getElementById("fromMonthSelector").value="-",document.getElementById("fromYearSelector").value="-",document.getElementById("toMonthSelector").value="-",document.getElementById("toYearSelector").value="-"},n.handleDeleteExperience=function(e){var t=Object(k.a)(n.state.experiences);t.splice(e,1),n.setState({experiences:Object(k.a)(t)})},n.handleSubmit=function(){n.setState({outAnim:!0},(function(){return setTimeout((function(){n.props.history.push({pathname:"/education",state:C({},n.props.location.state,{experiences:n.state.experiences})})}),300)}))},n.experienceContainerRenderer=function(){var e=null;return n.state.experiences.length&&(e=n.state.experiences.map((function(e,t){return r.a.createElement("div",{className:"addedExperienceBox",key:t},r.a.createElement("p",{className:"addedExperienceBoxOutputs"},r.a.createElement("label",null," \u0633\u0645\u062a:"),e.jobTitle),r.a.createElement("p",{className:"addedExperienceBoxOutputs"},r.a.createElement("label",null," \u0646\u0627\u0645 \u0634\u0631\u06a9\u062a:"),e.companyName),r.a.createElement("br",null),r.a.createElement("p",{className:"addedExperienceBoxOutputs"},r.a.createElement("label",null," \u0627\u0632:"),e.fromMonth," ",e.fromYear),r.a.createElement("p",{className:"addedExperienceBoxOutputs"},r.a.createElement("label",null," \u062a\u0627:"),e.toMonth," ",e.toYear),r.a.createElement("div",{className:"deleteIcon",onClick:function(){return n.handleDeleteExperience(t)}}))}))),e},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.location)}},{key:"render",value:function(){var e={};return this.state.outAnim&&(e={transform:"translateX(500px)",opacity:0}),r.a.createElement("div",{id:"workExperience",style:e},r.a.createElement("p",null,"\u0633\u0648\u0627\u0628\u0642 \u0634\u063a\u0644\u06cc"),r.a.createElement("div",{id:"formWrapper"},r.a.createElement(y,{id:"jobTitleInput",changed:this.handleJobTitle,value:this.state.experiences,placeholder:"\u0639\u0646\u0648\u0627\u0646 \u0634\u063a\u0644\u06cc",autocomplete:"off",type:"text",name:"jobTitle"}),r.a.createElement(y,{id:"companyNameInput",changed:this.handleCompanyName,value:this.state.experiences,placeholder:"\u0646\u0627\u0645 \u0634\u0631\u06a9\u062a",autocomplete:"off",type:"text",name:"companyName"})," ",r.a.createElement("br",null),r.a.createElement("label",null,"\u0633\u0627\u0644 \u0634\u0631\u0648\u0639"),r.a.createElement(g,{id:"fromYearSelector",changed:this.handleFromYear,options:this.yearList()}),r.a.createElement("label",null,"\u0645\u0627\u0647 \u0634\u0631\u0648\u0639"),r.a.createElement(g,{id:"fromMonthSelector",changed:this.handleFromMonth,options:this.monthList()}),r.a.createElement("label",null,"\u0633\u0627\u0644 \u067e\u0627\u06cc\u0627\u0646"),r.a.createElement(g,{id:"toYearSelector",changed:this.handleToYear,options:this.yearList()}),r.a.createElement("label",null,"\u0645\u0627\u0647 \u067e\u0627\u06cc\u0627\u0646"),r.a.createElement(g,{id:"toMonthSelector",changed:this.handleToMonth,options:this.monthList()}),r.a.createElement(f,{clicked:this.handleAddExperience,bgColor:"#ff6666",color:"white"},"+"),r.a.createElement("br",null),this.experienceContainerRenderer()),r.a.createElement(f,{bgColor:"#0099ff",color:"white",clicked:this.handleSubmit},"\u0645\u0631\u062d\u0644\u0647 \u0628\u0639\u062f"))}}]),t}(a.Component);n(51);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={education:[],outAnim:!1},n.degreeList=function(){return["\u062f\u06cc\u067e\u0644\u0645","\u06a9\u0627\u0631\u062f\u0627\u0646\u06cc","\u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u06cc","\u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u06cc \u0627\u0631\u0634\u062f","\u062f\u06a9\u062a\u0631\u06cc"]},n.monthList=function(){return["\u0641\u0631\u0648\u0631\u062f\u06cc\u0646","\u0627\u0631\u062f\u06cc\u0628\u0647\u0634\u062a","\u062e\u0631\u062f\u0627\u062f","\u062a\u06cc\u0631","\u0645\u0631\u062f\u0627\u062f","\u0634\u0647\u0631\u06cc\u0648\u0631","\u0645\u0647\u0631","\u0622\u0628\u0627\u0646","\u0622\u0630\u0631","\u062f\u06cc","\u0628\u0647\u0645\u0646","\u0627\u0633\u0641\u0646\u062f"]},n.yearList=function(){for(var e=[],t=1398;t>=1350;t--)e.push(t);return e},n.currentEducation={degree:"",major:"",university:"",month:"",year:""},n.handleDegree=function(e){n.currentEducation.degree=e.target.value},n.handleMajor=function(e){n.currentEducation.major=e.target.value},n.handleUniversity=function(e){n.currentEducation.university=e.target.value},n.handleMonth=function(e){n.currentEducation.month=e.target.value},n.handleYear=function(e){n.currentEducation.year=e.target.value},n.handleAddEducation=function(){var e=Object(k.a)(n.state.education);if(n.currentEducation.degree.length&&n.currentEducation.major.length)e.push({degree:n.currentEducation.degree,major:n.currentEducation.major,university:n.currentEducation.university,month:n.currentEducation.month,year:n.currentEducation.year}),n.setState({education:e}),n.currentEducation={degree:"",major:"",university:"",fromMonth:"",fromYear:""},document.getElementById("degreeSelector").value="",document.getElementById("majorInput").value="",document.getElementById("degreeSelector").focus(),document.getElementById("universityInput").value="",document.getElementById("monthSelector").value="-",document.getElementById("yearSelector").value="-";else{var t=document.getElementById("degreeSelector"),a=document.getElementById("majorInput");t.value.length||a.value.length||(t.style.border="1px solid red",a.style.border="1px solid red")}},n.handleDeleteEducation=function(e){var t=Object(k.a)(n.state.education);t.splice(e,1),n.setState({education:Object(k.a)(t)})},n.handleSubmit=function(){n.setState({outAnim:!0},(function(){return setTimeout((function(){n.props.history.push({pathname:"/contact",state:B({},n.props.location.state,{education:n.state.education})})}),300)}))},n.educationContainerRenderer=function(){var e=null;return n.state.education.length&&(e=n.state.education.map((function(e,t){return r.a.createElement("div",{className:"addedEducationBox",key:t},r.a.createElement("p",{className:"addedEducationBoxOutputs"},r.a.createElement("label",null," \u0645\u062f\u0631\u06a9:"),e.degree),r.a.createElement("p",{className:"addedEducationBoxOutputs"},r.a.createElement("label",null," \u0631\u0634\u062a\u0647:"),e.major),r.a.createElement("br",null),r.a.createElement("p",{className:"addedEducationBoxOutputs"},r.a.createElement("label",null," \u0646\u0627\u0645 \u0645\u062d\u0644 \u0627\u062e\u0630 \u0645\u062f\u0631\u06a9:"),e.university),r.a.createElement("p",{className:"addedEducationBoxOutputs"},r.a.createElement("label",null," \u062a\u0627\u0631\u06cc\u062e \u0627\u062e\u0630 \u0645\u062f\u0631\u06a9:"),e.month," - ",e.year),r.a.createElement("div",{className:"deleteIcon",onClick:function(){return n.handleDeleteEducation(t)}}))}))),e},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.location)}},{key:"render",value:function(){var e={};return this.state.outAnim&&(e={transform:"translateX(500px)",opacity:0}),r.a.createElement("div",{id:"education",style:e},r.a.createElement("p",null,"\u0633\u0648\u0627\u0628\u0642 \u062a\u062d\u0635\u06cc\u0644\u06cc"),r.a.createElement("div",{id:"formWrapper"},r.a.createElement("label",null,"\u0645\u062f\u0631\u06a9:"),r.a.createElement(g,{id:"degreeSelector",changed:this.handleDegree,options:this.degreeList()}),r.a.createElement("label",null,"\u0631\u0634\u062a\u0647:"),r.a.createElement(y,{id:"majorInput",changed:this.handleMajor,value:this.state.education,placeholder:"\u0646\u0627\u0645 \u0631\u0634\u062a\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc",autocomplete:"off",type:"text",name:"majorInput"}),r.a.createElement("br",null),r.a.createElement("label",null,"\u0645\u062d\u0644 \u062a\u062d\u0635\u06cc\u0644:"),r.a.createElement(y,{id:"universityInput",changed:this.handleUniversity,value:this.state.education,placeholder:"\u0646\u0627\u0645 \u0645\u062d\u0644 \u062a\u062d\u0635\u06cc\u0644",autocomplete:"off",type:"text",name:"universityInput"}),r.a.createElement("br",null),r.a.createElement("label",null,"\u0645\u0627\u0647 \u0627\u062e\u0630 \u0645\u062f\u0631\u06a9:"),r.a.createElement(g,{id:"monthSelector",changed:this.handleMonth,options:this.monthList()}),r.a.createElement("label",null,"\u0633\u0627\u0644 \u0627\u062e\u0630 \u0645\u062f\u0631\u06a9:"),r.a.createElement(g,{id:"yearSelector",changed:this.handleYear,options:this.yearList()}),r.a.createElement(f,{id:"addEducationBtn",clicked:this.handleAddEducation,bgColor:"#ff6666",color:"white"},"+"),r.a.createElement("br",null),this.educationContainerRenderer()),r.a.createElement(f,{bgColor:"#0099ff",color:"white",clicked:this.handleSubmit},"\u0645\u0631\u062d\u0644\u0647 \u0628\u0639\u062f"))}}]),t}(a.Component);n(52);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){Object(j.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={outAnim:!1},n.currentContactInfo={phoneNumber:"",email:"",linkedIn:"",github:""},n.handleAddPhoneNumber=function(e){n.currentContactInfo.phoneNumber=e.target.value},n.handleAddEmail=function(e){n.currentContactInfo.email=e.target.value},n.handleAddLinkedIn=function(e){n.currentContactInfo.linkedIn=e.target.value},n.handleAddGithub=function(e){n.currentContactInfo.github=e.target.value},n.handleSubmit=function(){var e=n.currentContactInfo;if(n.currentContactInfo.phoneNumber.length&&n.currentContactInfo.email.length)n.setState({outAnim:!0},(function(){return setTimeout((function(){n.props.history.push({pathname:"/resumePreview",state:A({},n.props.location.state,{contactInfo:e})})}),300)})),n.currentContactInfo={phoneNumber:null,email:"",linkedIn:"",github:""},document.getElementById("phoneNumberInput").value="",document.getElementById("phoneNumberInput").focus(),document.getElementById("emailInput").value="",document.getElementById("emailInput").focus();else{var t=document.getElementById("phoneNumberInput"),a=document.getElementById("emailInput");t.value.length||a.value.length?a.value.length?t.value.length||(t.style.border="1px solid red"):a.style.border="1px solid red":(t.style.border="1px solid red",a.style.border="1px solid red")}},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.location)}},{key:"render",value:function(){var e={};return this.state.outAnim&&(e={transform:"translateX(500px)",opacity:0}),r.a.createElement("div",{id:"contact",style:e},r.a.createElement("p",null,"\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u062a\u0645\u0627\u0633"),r.a.createElement("div",{id:"formWrapper"},r.a.createElement(y,{id:"phoneNumberInput",changed:this.handleAddPhoneNumber,value:this.state.contactInfo,placeholder:"\u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647",autocomplete:"on",type:"number",name:"phoneNumber"})," ",r.a.createElement("br",null),r.a.createElement(y,{id:"emailInput",changed:this.handleAddEmail,value:this.state.contactInfo,placeholder:"\u0627\u06cc\u0645\u06cc\u0644",autocomplete:"on",type:"email",name:"Email"})," ",r.a.createElement("br",null),r.a.createElement(y,{id:"linkedInInput",changed:this.handleAddLinkedIn,value:this.state.contactInfo,placeholder:"\u0622\u062f\u0631\u0633 \u0644\u06cc\u0646\u06a9\u062f\u06cc\u0646",autocomplete:"off",type:"link",name:"linkedIn"})," ",r.a.createElement("br",null),r.a.createElement(y,{id:"githubInput",changed:this.handleAddGithub,value:this.state.contactInfo,placeholder:"\u0622\u062f\u0631\u0633 \u06af\u06cc\u062a \u0647\u0627\u0628",autocomplete:"off",type:"link",name:"github"})),r.a.createElement(f,{bgColor:"#0099ff",color:"white",clicked:this.handleSubmit},"\u0645\u0631\u062d\u0644\u0647 \u0628\u0639\u062f"))}}]),t}(a.Component),Y=n(19),L=n.n(Y),W=(n(70),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={},n.handleDownloadButton=function(e){L()("/getPdf",{method:"GET",responseType:"blob"}).then((function(e){var t=new Blob([e.data],{type:"application/pdf"}),n=URL.createObjectURL(t);window.open(n)})).catch((function(e){console.log(e)}))},n.renderEducation=function(){return n.props.location.state.education.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("h4",null,e.degree," ",e.major),r.a.createElement("h5",null,e.university),r.a.createElement("h6",null,e.month,"/",e.year))}))},n.renderSkills=function(){return n.props.location.state.skills.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("h4",null,e.skillText),r.a.createElement("h5",null,e.level))}))},n.renderWorkExperience=function(){return n.props.location.state.experiences.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("h2",null,e.jobTitle),r.a.createElement("h4",null,e.toMonth,"/",e.toYear," - ",e.fromMonth,"/",e.fromYear),r.a.createElement("h3",null,e.companyName))}))},n.renderContact=function(){var e=n.props.location.state.contactInfo;return r.a.createElement("div",{id:"contacts"},r.a.createElement("h3",null,e.email),r.a.createElement("h3",null,e.phoneNumber),r.a.createElement("h4",null,e.github),r.a.createElement("h4",null,e.linkedIn))},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){L.a.post("/create-pdf",this.props.location)}},{key:"render",value:function(){return r.a.createElement("div",{id:"resumePreview"},r.a.createElement("div",{id:"header"},r.a.createElement("h1",null,this.props.location.state.personalInfo.fullName),r.a.createElement("h2",null,this.props.location.state.personalInfo.jobTitle),r.a.createElement(f,{clicked:this.handleDownloadButton},"\u062f\u0631\u06cc\u0627\u0641\u062a \u0641\u0627\u06cc\u0644")),r.a.createElement("div",{id:"headerDivider"}),r.a.createElement("div",{id:"rightPanel"},r.a.createElement("div",{id:"educationPanel"},r.a.createElement("h3",null,"\u062a\u062d\u0635\u06cc\u0644\u0627\u062a"),r.a.createElement("div",{className:"headerDivider"}),r.a.createElement("ul",null,this.renderEducation())),r.a.createElement("div",{id:"skillsPanel"},r.a.createElement("h3",null,"\u0645\u0647\u0627\u0631\u062a \u0647\u0627"),r.a.createElement("div",{className:"headerDivider"}),r.a.createElement("ul",null,this.renderSkills())),r.a.createElement("div",{id:"contactPanel"},r.a.createElement("h3",null,"\u0631\u0627\u0647 \u0647\u0627\u06cc \u0627\u0631\u062a\u0628\u0627\u0637\u06cc"),r.a.createElement("div",{className:"headerDivider"}),this.renderContact())),r.a.createElement("div",{id:"panelsDivider"}),r.a.createElement("div",{id:"leftPanel"},r.a.createElement("div",{id:"abouteMe"},r.a.createElement("h3",null,"\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646"),r.a.createElement("h4",null,this.props.location.state.personalInfo.city," - ",this.props.location.state.personalInfo.sex," - ",this.props.location.state.personalInfo.birthYear),r.a.createElement("div",{className:"headerDivider"}),r.a.createElement("p",null,this.props.location.state.personalInfo.aboutMe)),r.a.createElement("div",{id:"workExperienceContainer"},r.a.createElement("h3",null,"\u0633\u0627\u0628\u0642\u0647 \u06a9\u0627\u0631\u06cc"),r.a.createElement("div",{className:"headerDivider"}),r.a.createElement("div",{id:"experiences"},this.renderWorkExperience()))))}}]),t}(a.Component));var R=function(){return r.a.createElement(b.a,null,r.a.createElement(v.a,{path:"/",component:E,exact:!0}),r.a.createElement(v.a,{path:"/personalinfo",component:O}),r.a.createElement(v.a,{path:"/skills",component:w}),r.a.createElement(v.a,{path:"/workexperience",component:N}),r.a.createElement(v.a,{path:"/education",component:P}),r.a.createElement(v.a,{path:"/contact",component:M}),r.a.createElement(v.a,{path:"/resumePreview",component:W}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.8e45de19.chunk.js.map