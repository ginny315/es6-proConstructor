import Normalize from './public/css/normalize.css';
import MainCss from './public/scss/main.scss';
import Milktea from './components/milkteaCom/milktea.js';

const father = document.getElementById('insertHtml');
const tpl = Milktea.data();
const json = {
    "data":[
        {
            "title":"找好茶",
            "list":[
                {"name":"茉莉绿茶","price1":6,"price2":8},
                {"name":"阿萨姆红茶","price1":6,"price2":8},
                {"name":"四季春茶","price1":6,"price2":8},
                {"name":"冻顶乌龙茶","price1":6,"price2":8},
                {"name":"翡翠柠檬","price1":12,"price2":15},
                {"name":"梅果绿","price1":12,"price2":15},
                {"name":"蜂蜜绿","price1":12,"price2":15},
                {"name":"8冰绿","price1":12,"price2":15},
                {"name":"养乐多绿","price1":13,"price2":17},
                {"name":"冰淇凌红茶","price1":13,"price2":17},
                {"name":"葡萄柚绿茶","price1":12,"price2":15},
            ]
        },{
            "title":"找奶茶",
            "list":[
                {"name":"奶茶","price1":10,"price2":13},
                {"name":"奶绿 ","price1":10,"price2":13},
                {"name":"四季奶清","price1":10,"price2":13},
                {"name":"乌龙奶茶","price1":10,"price2":13},
                {"name":"焦糖奶茶","price1":11,"price2":14},
                {"name":"红茶玛奇朵","price1":12,"price2":15},
                {"name":"乌龙玛奇朵","price1":12,"price2":15},
                {"name":"阿华田","price1":13,"price2":17},
                {"name":"可可芭蕾","price1":14,"price2":18},
            ]
        },{
            "title":"找口感",
            "list":[
                {"name":"波霸奶茶","price1":10,"price2":13},
                {"name":"波霸奶绿 ","price1":10,"price2":13},
                {"name":"波霸红/绿","price1":10,"price2":13},
                {"name":"珍珠奶茶","price1":10,"price2":13},
                {"name":"珍珠奶绿","price1":10,"price2":13},
                {"name":"珍珠红/绿","price1":10,"price2":13},
                {"name":"椰果奶茶","price1":10,"price2":13},
                {"name":"仙草奶茶 ","price1":10,"price2":13},
                {"name":"红豆QQ奶茶","price1":10,"price2":13},
                {"name":"统一布丁奶茶","price1":13,"price2":17},
                {"name":"四季如意 ","price1":8,"price2":10},
                {"name":"燕麦奶茶","price1":11,"price2":14},
            ]
        },{
            "title":"找新鲜",
            "list":[
                {"name":"柠檬汁","price1":12,"price2":15},
                {"name":"金桔柠檬 ","price1":12,"price2":15},
                {"name":"柠檬蜜","price1":13,"price2":17},
                {"name":"柠檬梅子","price1":13,"price2":17},
                {"name":"柠檬养乐多","price1":15,"price2":19},
                {"name":"蜜茶","price1":12,"price2":15},
                {"name":"8冰茶","price1":12,"price2":15},
            ]
        },{
            "title":"红茶拿铁",
            "list":[
                {"name":"红茶拿铁 ","price1":13,"price2":17},
                {"name":"乌龙拿铁 ","price1":13,"price2":17},
                {"name":"焦糖红茶拿铁","price1":14,"price2":18},
                {"name":"可可芭蕾拿铁","price1":16,"price2":21},
            ]
        }
    ]};
const data = json.data;
var child = '';
for(let i=0,len=data.length ; i<len ; i++ ){
    console.log('len='+len)
    child += (tpl.tpl1 + data[i].title + tpl.tpl2);
    console.log('child='+child)
    for(let j=0,len2=data[i].list.length ; j<len2 ; j++){
        child +=  tpl.tpl3 + data[i].list[j].name + tpl.tpl4 + data[i].list[j].price1 + tpl.tpl4 + data[i].list[j].price2+tpl.tpl4;
        console.log('child='+child)
        child += tpl.tpl5;
    }
    child += tpl.tpl5;
}
father.innerHTML = child;


