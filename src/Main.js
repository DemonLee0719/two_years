/**
 * Created by Rychou on 2018/4/19.
 */
import React, {Component} from  'react'
import $ from 'jquery'
import url from './audio/yj.mp3'


class Main extends Component{
    state={
        date:{},
    }
    componentDidMount(){
        this.print();
        setInterval(()=>{
                this.time(2014,8,23,13,25,25)
            },1000
        )
        var audio = document.getElementById("audio");
        setTimeout(()=>audio.play(),7700)
    }
    print = ()=>{
        $.fn.autotype = function() {
            var _this=$(this);
            var str=_this.html();
            // 正则替换代码行之间添加的多个空格，不去除换行输出会有明显的停顿：实际是在输出多个空格
            str=str.replace(/(\s){2,}/g,"$1");
            var index = 0;
            $(this).html('');
            var timer = function fn() {
                var args=arguments;
                var current = str.slice(index, index+1);
                // html标签完整输出,如：<p>
                if (current == '<'){
                    index = str.indexOf('>', index) + 1;
                }
                else{
                    index++;
                }
                //位运算符: 根据setInterval运行奇偶次来判断是否加入下划线字符“_”，使输入效果更逼真
                if (index < str.length-1){ //打印字符倒数第2个字符开始，不加下划线字符，以防止结束符可能会多输出一下划线字符
                    _this.html(str.substring(0, index) + (index & 1 ? '_' : ''));
                }else{
                    _this.html(str.substring(0, index));
                    clearTimeout(timer);
                };
                setTimeout(fn,200)
            };
            // 延迟1s开始
            setTimeout(timer,1000);
        };
        $("#autotype").autotype();
    }
    time =(year,month,day,hour,min,second)=>{
        var dateNow = new Date();
        var dateJNR = new Date(year,month-1,day,hour,min,second);
        // var anniversary = parseInt((dateNow - dateJNR) / (365*24*3600*1000))
        var d = parseInt((dateNow - dateJNR)/(24*3600*1000));
        var hour = parseInt(((dateNow - dateJNR)/(3600*1000))%24);
        var minute = parseInt((dateNow - dateJNR)/(1000*60)%60);
        var second = parseInt((dateNow - dateJNR)/1000%60);
        this.setState({date:{d:d,hour:hour,minute:minute,second:second}});
    };
    render(){
        const date =()=>{
            if (this.state.date.d!==undefined){
                const {d,hour,minute,second} = this.state.date
                return (<p>我们已经一起走过了: <span className="date-text">{d}</span> 天 <span className="date-text">{hour}</span> 小时 <span className="date-text">{minute}</span> 分 <span className="date-text">{second}</span> 秒 </p>
                )
            }
        }
        return(
            <div className="App animated bounceInLeft">
            <div className="date">{date()}</div>
            <div id="autotype">
                <h1 style={{fontWeight:900}}>亲爱的李夫人</h1>
                <p >在煽情开始之前，是不是应该放首歌！Music!</p>
                <p>亲爱的，自从我们异地以来，我们也总是为了一些小事吵架，也差点弄得分手了，我现在发觉我特别特别爱你，不能离开你。</p>
                <p>我今天制作这个网页的时候才发现原来我们已经交往了1590天了，这段时间有你陪在我身边，感觉真的很幸福</p>
                <p>现在我还记得毕业那会，8月23号，我们一起去衡山玩，那个时候我们还很青涩，对于恋爱这个东西还不是很懂，我们一起在酒店，那一晚，我亲吻了你，后面就一直不可自拔，
                    那天我们不知道亲了多久，至少有3个小时吧，后来的我们就越来越像了。我喜欢和你在一起的感觉，没有你，就像你说的，感觉做什么都没有意义。我不该总是惹你生气，也不该凶你。
                </p>
                <p>我们闹得最凶的一次，那天晚上我真的4点才睡，而且在床上很没有骨气的哭了，一直在想以后没有你我该怎么办，没有你我又该为谁去奋斗呢！现在我在成都工作，
                    为的也是以后我们能有更好的未来，你总说我未来的规划没有你，这样真的很伤我的心，我的未来一直都有你的存在，除非某天你想要我了，其实在心里我还是觉得自己有点配不上你，
                    你家里人反对，朋友也反对，我都不知道该怎么办了，还有啊，你嫌弃我家没有房子，这个问题我也和你说过了，这些都是客观的，我爸妈对这一块没有重视起来，
                    也就是还没有考虑到他们的儿子要结婚的时候，我结婚之前肯定会安置好房的，不可能让你来我家住破房子的，其实我在家也会嫌弃我家没有很好的设施，小的时候没感觉，
                    现在出来了，觉得家里的条件确实不行，这也是我要做出改变的地方。
                </p>
                <p>对于异地恋这个，我们真的没有好说的，内心对你特别愧疚，现在生活所迫，不得不进行异地恋，我也说过，异地不会太久，而且我也相信，我们异地恋都熬过来了，
                    还有什么问题是解决不了的呢？之前听过邓紫棋的一首《多远都要在一起》，特别有感触，想对你好，对你一千一万的好，不能割舍对你的爱。还有啊，
                    李夫人，都1590天了，还没有弄出一个孩子出来，丢人不？
                </p>
                <p>我对你的爱希望你能感受得更多，千言万语汇成"我爱你千百遍"，未来请多指教。永远在一起...
                </p>
                <p>遇见你是最美丽的意外</p>
                <div style={{textAlign:'right'}}>
                    <p>爱你的♥李兵学</p>
                    <p>2018年12月30日</p>
                </div>
            </div>
                <audio id="audio" src={url}></audio>
            </div>

        )
    }
}
export default Main