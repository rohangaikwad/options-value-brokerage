(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(t,e,s){},14:function(t,e,s){"use strict";s.r(e);var c=s(0),i=s(1),r=s.n(i),a=s(7),l=s.n(a),n=s(2),j=s(3),h=s(5),d=s(4),b=Object(i.createContext)({}),o=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(t){var c;return Object(n.a)(this,s),(c=e.call(this,t)).calculate=function(){var t=(c.props.buy+c.props.sell)*c.props.qty,e=c.props.sell*c.props.qty*5e-4,s=53e-5*t,i=.18*(40+s),r=5e-7*t,a=c.props.buy*c.props.qty*3e-5;c.setState({turnover:t,stt:e.toFixed(2),exchange:s,gst:i.toFixed(2),sebi:r.toFixed(2),stampduty:a.toFixed(2),totaltax:(40+e+s+0+i+r+a).toFixed(2)})},c.state={turnover:0,brokerage:40,stt:0,exchange:0,clearing:0,gst:0,sebi:0,stampduty:0,totaltax:0},c}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.calculate()}},{key:"componentDidUpdate",value:function(t){var e=this.props,s=e.buy,c=e.sell,i=e.qty;s===t.buy&&c===t.sell&&i===t.qty||this.calculate()}},{key:"render",value:function(){return Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Turnover"}),Object(c.jsx)("td",{children:this.state.turnover})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Brokerage"}),Object(c.jsx)("td",{children:this.state.brokerage})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"STT Total"}),Object(c.jsx)("td",{children:this.state.stt})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Exchange Txn"}),Object(c.jsx)("td",{children:this.state.exchange})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Clearing Charge"}),Object(c.jsx)("td",{children:this.state.clearing})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"GST"}),Object(c.jsx)("td",{children:this.state.gst})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"SEBI Charges"}),Object(c.jsx)("td",{children:this.state.sebi})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Stamp Duty"}),Object(c.jsx)("td",{children:this.state.stampduty})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Amount Spent"}),Object(c.jsx)("td",{children:this.props.buy*this.props.qty})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Profit"}),Object(c.jsx)("td",{children:(this.props.sell-this.props.buy)*this.props.qty})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Total Tax"}),Object(c.jsx)("td",{children:this.state.totaltax})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Net P&L"}),Object(c.jsx)("td",{children:((this.props.sell-this.props.buy)*this.props.qty-this.state.totaltax).toFixed(2)})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"P&L %"}),Object(c.jsxs)("td",{children:[(((this.props.sell-this.props.buy)*this.props.qty-this.state.totaltax)/(this.props.buy*this.props.qty)*100).toFixed(2),"%"]})]})]})})}}]),s}(r.a.Component),x=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(t){var c;return Object(n.a)(this,s),(c=e.call(this,t)).calculate=function(){var t=(c.props.buy+c.props.sell)*c.props.qty,e=c.props.sell*c.props.qty*5e-4,s=53e-5*t,i=.18*(40+s),r=5e-7*t,a=c.props.buy*c.props.qty*3e-5;c.setState({turnover:t,stt:e.toFixed(2),exchange:s,gst:i.toFixed(2),sebi:r.toFixed(2),stampduty:a.toFixed(2),totaltax:(40+e+s+0+i+r+a).toFixed(2)})},c.state={turnover:0,brokerage:40,stt:0,exchange:0,clearing:0,gst:0,sebi:0,stampduty:0,totaltax:0},c}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.calculate()}},{key:"componentDidUpdate",value:function(t){var e=this.props,s=e.buy,c=e.sell,i=e.qty;s===t.buy&&c===t.sell&&i===t.qty||this.calculate()}},{key:"render",value:function(){return Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Turnover"}),Object(c.jsx)("td",{children:this.state.turnover})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Brokerage"}),Object(c.jsx)("td",{children:this.state.brokerage})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"STT Total"}),Object(c.jsx)("td",{children:this.state.stt})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Exchange Txn"}),Object(c.jsx)("td",{children:this.state.exchange})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Clearing Charge"}),Object(c.jsx)("td",{children:this.state.clearing})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"GST"}),Object(c.jsx)("td",{children:this.state.gst})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"SEBI Charges"}),Object(c.jsx)("td",{children:this.state.sebi})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Stamp Duty"}),Object(c.jsx)("td",{children:this.state.stampduty})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Amount Spent"}),Object(c.jsx)("td",{children:this.props.buy*this.props.qty})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Profit"}),Object(c.jsx)("td",{children:(this.props.sell-this.props.buy)*this.props.qty})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Total Tax"}),Object(c.jsx)("td",{children:this.state.totaltax})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Net P&L"}),Object(c.jsx)("td",{children:((this.props.sell-this.props.buy)*this.props.qty-this.state.totaltax).toFixed(2)})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"P&L %"}),Object(c.jsxs)("td",{children:[(((this.props.sell-this.props.buy)*this.props.qty-this.state.totaltax)/(this.props.buy*this.props.qty)*100).toFixed(2),"%"]})]})]})})}}]),s}(r.a.Component),p=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(t){var c;return Object(n.a)(this,s),(c=e.call(this,t)).calculate=function(){var t=(c.props.buy+c.props.sell)*c.props.qty,e=c.props.sell*c.props.qty*5e-4,s=53e-5*t,i=.18*(40+s),r=5e-7*t,a=c.props.buy*c.props.qty*3e-5,l=40+e+s+0+i+r+a,n=l/c.props.qty,j=(c.props.sell-c.props.buy)*c.props.qty,h=j-l;c.setState({turnover:t,stt:e.toFixed(2),exchange:s.toFixed(2),gst:i.toFixed(2),sebi:r.toFixed(2),stampduty:a.toFixed(2),totaltax:l.toFixed(2),breakeven:n,pl:j,netpl:h})},c.state={turnover:0,brokerage:40,stt:0,exchange:0,clearing:0,gst:0,sebi:0,stampduty:0,totaltax:0,breakeven:0,pl:0,netpl:0},c}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.calculate()}},{key:"componentDidUpdate",value:function(t){var e=this.props,s=e.buy,c=e.sell,i=e.qty;s===t.buy&&c===t.sell&&i===t.qty||this.calculate()}},{key:"render",value:function(){return Object(c.jsx)("table",{className:"table table-bordered table-primary table-striped",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Breakeven"}),Object(c.jsx)("td",{children:(this.state.breakeven+this.props.buy).toFixed(2)})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Turnover"}),Object(c.jsx)("td",{children:this.state.turnover.toFixed(2)})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Brokerage"}),Object(c.jsx)("td",{children:this.state.brokerage.toFixed(2)})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"STT Total"}),Object(c.jsx)("td",{children:this.state.stt})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Exchange Txn"}),Object(c.jsx)("td",{children:this.state.exchange})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Clearing Charge"}),Object(c.jsx)("td",{children:this.state.clearing.toFixed(2)})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"GST"}),Object(c.jsx)("td",{children:this.state.gst})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"SEBI Charges"}),Object(c.jsx)("td",{children:this.state.sebi})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Stamp Duty"}),Object(c.jsx)("td",{children:this.state.stampduty})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Profit"}),Object(c.jsx)("td",{children:this.state.pl.toFixed(2)})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Charges"}),Object(c.jsx)("td",{children:this.state.totaltax})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Net P&L"}),Object(c.jsx)("td",{className:this.state.netpl>=0?"profit":"loss",children:Object(c.jsx)("strong",{children:((this.props.sell-this.props.buy)*this.props.qty-this.state.totaltax).toFixed(2)})})]})]})})}}]),s}(r.a.Component),O=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(t){var c;return Object(n.a)(this,s),(c=e.call(this,t)).calculate=function(){var t=(c.props.buy+c.props.sell)*c.props.qty,e=c.props.sell*c.props.qty*5e-4,s=53e-5*t,i=.18*(0+s),r=5e-7*t,a=c.props.buy*c.props.qty*3e-5,l=0+e+s+0+i+r+a,n=l/c.props.qty,j=(c.props.sell-c.props.buy)*c.props.qty,h=j-l;c.setState({turnover:t,stt:e.toFixed(2),exchange:s.toFixed(2),gst:i.toFixed(2),sebi:r.toFixed(2),stampduty:a.toFixed(2),totaltax:l.toFixed(2),breakeven:n,pl:j,netpl:h})},c.state={turnover:0,brokerage:0,stt:0,exchange:0,clearing:0,gst:0,sebi:0,stampduty:0,totaltax:0,breakeven:0,pl:0,netpl:0},c}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.calculate()}},{key:"componentDidUpdate",value:function(t){var e=this.props,s=e.buy,c=e.sell,i=e.qty;s===t.buy&&c===t.sell&&i===t.qty||this.calculate()}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("table",{className:"table table-bordered table-success table-striped",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Breakeven"}),Object(c.jsx)("td",{children:(this.state.breakeven+this.props.buy).toFixed(2)})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Turnover"}),Object(c.jsx)("td",{children:this.state.turnover.toFixed(2)})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Brokerage"}),Object(c.jsx)("td",{children:this.state.brokerage.toFixed(2)})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"STT Total"}),Object(c.jsx)("td",{children:this.state.stt})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Exchange Txn"}),Object(c.jsx)("td",{children:this.state.exchange})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Clearing Charge"}),Object(c.jsx)("td",{children:this.state.clearing.toFixed(2)})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"GST"}),Object(c.jsx)("td",{children:this.state.gst})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"SEBI Charges"}),Object(c.jsx)("td",{children:this.state.sebi})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Stamp Duty"}),Object(c.jsx)("td",{children:this.state.stampduty})]}),Object(c.jsxs)("tr",{className:"hide",children:[Object(c.jsx)("th",{children:"Profit"}),Object(c.jsx)("td",{children:this.state.pl.toFixed(2)})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Charges"}),Object(c.jsx)("td",{children:this.state.totaltax})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Net P&L"}),Object(c.jsx)("td",{className:this.state.netpl>=0?"profit":"loss",children:Object(c.jsx)("strong",{children:this.state.netpl.toFixed(2)})})]})]})})})}}]),s}(r.a.Component),u=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(t){var c;return Object(n.a)(this,s),(c=e.call(this,t)).setActiveCalculator=function(t){c.setState({active:t})},c.setBuy=function(t){var e=+t.target.value,s=1.01*e;c.setState({buy:e,sell:s}),document.getElementById("sel").value=s},c.setSell=function(t){c.setState({sell:+t.target.value})},c.setQty=function(t){c.setState({qty:+t.target.value})},c.toggleCharges=function(){document.body.classList.toggle("show-charges")},c.state={buy:25,sell:25.25,qty:225,active:"o"},c}return Object(j.a)(s,[{key:"render",value:function(){var t=this;return Object(c.jsxs)("div",{class:"container",children:[Object(c.jsx)("div",{className:"charges-toggle",children:Object(c.jsx)("div",{className:"btn-charges",onClick:function(){return t.toggleCharges()},children:"Charges"})}),Object(c.jsxs)("ul",{className:"nav nav-tabs mt-4",children:[Object(c.jsx)("li",{className:"nav-item",onClick:function(){return t.setActiveCalculator("mis")},children:Object(c.jsx)("div",{className:"nav-link ".concat("mis"===this.state.active?"active":""),children:"MIS"})}),Object(c.jsx)("li",{className:"nav-item",onClick:function(){return t.setActiveCalculator("cnc")},children:Object(c.jsx)("div",{className:"nav-link ".concat("cnc"===this.state.active?"active":""),children:"CNC"})}),Object(c.jsx)("li",{className:"nav-item",onClick:function(){return t.setActiveCalculator("f")},children:Object(c.jsx)("div",{className:"nav-link ".concat("f"===this.state.active?"active":""),children:"F"})}),Object(c.jsx)("li",{className:"nav-item",onClick:function(){return t.setActiveCalculator("o")},children:Object(c.jsx)("div",{className:"nav-link ".concat("o"===this.state.active?"active":""),children:"O"})})]}),Object(c.jsxs)("div",{className:"tab-panel mt-3",children:[Object(c.jsxs)("div",{className:"inputs row",children:[Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{class:"form-label",children:"Buy"}),Object(c.jsx)("input",{type:"number",step:"0.05",placeholder:"buy",id:"buy",onChange:this.setBuy,onKeyUp:this.setBuy,defaultValue:this.state.buy,className:"form-control"})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{class:"form-label",children:"Sell"}),Object(c.jsx)("input",{type:"number",step:"0.05",placeholder:"sell",id:"sel",onChange:this.setSell,onKeyUp:this.setSell,defaultValue:this.state.sell,className:"form-control"})]}),Object(c.jsxs)("div",{className:"col-12 mt-3",children:[Object(c.jsxs)("span",{className:"d-flex justify-content-between",children:["Qty: ",this.state.qty," ",Object(c.jsxs)("span",{children:[this.state.buy," * ",this.state.qty," = ",Object(c.jsxs)("b",{children:["\u20b9",this.state.buy*this.state.qty]})]})]}),Object(c.jsx)("input",{type:"range",defaultValue:this.state.qty,step:"25",min:"25",max:"2500",placeholder:"qty",id:"qty",onChange:this.setQty,onKeyUp:this.setQty,className:"form-range"})]})]}),Object(c.jsxs)("div",{className:"calculations mt-3",children:["mis"===this.state.active&&Object(c.jsx)(o,{buy:this.state.buy,sell:this.state.sell,qty:this.state.qty}),"cnc"===this.state.active&&Object(c.jsx)(x,{buy:this.state.buy,sell:this.state.sell,qty:this.state.qty}),"o"===this.state.active&&Object(c.jsx)(p,{buy:this.state.buy,sell:this.state.sell,qty:this.state.qty}),"o"===this.state.active&&Object(c.jsx)(O,{buy:this.state.buy,sell:this.state.sell,qty:this.state.qty})]})]})]})}}]),s}(r.a.Component),y=function(t){Object(h.a)(s,t);var e=Object(d.a)(s);function s(t){var c;return Object(n.a)(this,s),(c=e.call(this,t)).state={symbols:[],symbol:"",options:{}},c}return Object(j.a)(s,[{key:"render",value:function(){var t=this;return Object(c.jsx)(b.Provider,{value:{symbols:this.state.symbols,setSymbols:function(e){return t.setState({symbols:e})},symbol:this.state.symbol,setSymbol:function(e){return t.setState({symbol:e})},options:this.state.options,setOptions:function(e){return t.setState({options:e})}},children:Object(c.jsx)("div",{className:"main-container",children:Object(c.jsx)(u,{})})})}}]),s}(r.a.Component);s(13);l.a.render(Object(c.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.58aacd89.chunk.js.map