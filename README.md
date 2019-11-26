# Vue Calendar

<!-- > A calendar components for Vue.js.

![](http://ww1.sinaimg.cn/large/823603acgy1fh120p4bigg20b50c1wq4.gif) -->

## Installation
```
npm install --save foliday-calendar
```

```js
//main.js
import FolidayCalendar from 'foliday-calendar'
Vue.use(FolidayCalendar)
```

But you can also import the standalone component to add locally or for more complex installations.

```js
// foo.vue
import { FolidayCalendar } from 'foliday-calendar'
export default {
  components: {
    FolidayCalendar,
  },
}
```

## Basic Usage

```html
            <calendar
                ref="calendar1"
                :events="calendar1.events" 
                :lunar="calendar1.lunar" 
                :value="calendar1.value" 
                :begin="calendar1.begin" 
                :end="calendar1.end" 
                :weeks="calendar1.weeks" 
                :months="calendar1.months" 
                showOtherMonth
                canChoice
                @select="calendar1.select"
                @selectMonth="calendar1.selectMonth"
                @selectYear="calendar1.selectYear">  
            </calendar>
...
<script>
...
  data() {
    return {
        calendar1:{
            value:[2017,7,20], //默认日期
            // lunar:true, //显示农历
            weeks:['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months:['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            events:{
                '2017-7-7':'$408',
                '2017-7-20':'$408',
                '2017-7-21':'$460',
                '2017-7-22':'$500',
            },
            select(value){
                console.log(value.toString());
            },
            selectMonth(month,year){
                console.log(year,month)
            },
            selectYear(year){
                console.log(year)
            },
            timestamp:Date.now()
        },
    }
  }
...
</script>
```

## props
参数|值类型|默认值|说明
--:|:--:|:--:|:--
showOtherMonth|Boolean|false|是否显示其他月份日期
canChoice|Boolean|false|是否可选
multi|Boolean|false|是否多选
range|Boolean|false|是否范围模式
value|Arrary|[]|默认日期
begin|Arrary|[]|开始选择日期
end|Arrary|[]|结束选择日期
lunar|Boolean|[]|是否显示农历
weeks|Arrary|['日', '一', '二', '三', '四', '五', '六']|自定义星期名称
months|Arrary|['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']|自定义月份

