(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","clicked":false},{"id":2,"image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","clicked":false},{"id":3,"image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","clicked":false},{"id":4,"image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","clicked":false},{"id":5,"image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","clicked":false},{"id":6,"image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","clicked":false},{"id":7,"image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","clicked":false},{"id":8,"image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","clicked":false},{"id":9,"image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","clicked":false},{"id":10,"image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","clicked":false},{"id":11,"image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","clicked":false},{"id":12,"image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","clicked":false}]')},,,,,,function(e,t,i){e.exports=i(18)},,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(8),s=i.n(c),o=i(1),r=i(2),l=i(5),d=i(3),g=i(6);i(15);var m=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)},u=i(4);i(16);var f=function(e){return n.a.createElement("div",{className:"card",onClick:function(){return e.checkClicked(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})))},k=i(9),p=i.n(k),v=function(e){function t(){var e,i;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(i=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={count:0,friends:u},i.handleIncrement=function(){i.setState({count:i.state.count+1})},i.reset=function(){i.setState({count:0}),i.state.friends.forEach((function(e){return e.clicked=!1}))},i.checkClicked=function(e){var t=i.state.friends.filter((function(t){return t.id===e}));!1===t[0].clicked?(t[0].clicked=!0,i.handleIncrement(),p()(i.state.friends)):i.reset()},i}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("p",{className:"card-text"},"Click Count: ",this.state.count),n.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},this.state.friends.map((function(t){return n.a.createElement(f,{key:t.id,id:t.id,checkClicked:e.checkClicked,image:t.image})}))))}}]),t}(n.a.Component),h=function(e){function t(){var e,i;Object(o.a)(this,t);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(i=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={friends:u},i}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return n.a.createElement(m,null,n.a.createElement(v,null))}}]),t}(a.Component);i(17);s.a.render(n.a.createElement(h,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.f615ccac.chunk.js.map