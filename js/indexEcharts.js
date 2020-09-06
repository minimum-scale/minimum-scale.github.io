
$(function(){
    initChartLine();
    initChartBar();
    initChartPie();
    initChartCircle();
    initChartBarTwo();
    initChartLineTwo();
})
var initChartLine = function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chartLine'));
    // 获取最小值到最大值之前的整数随机数
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range));
    }
    var data1 = []
    var data2 = []
    for (var i=0;i< 7;i++) {
        data1.push(GetRandomNum(10, 60))
        data2.push(GetRandomNum(60, 120))
    }
    // 指定图表的配置项和数据
    var option = {
        tooltip: {
            borderColor:'#A5ACFF',
            backgroundColor:'#242644',
            borderWidth:'1',
            padding: [5, 15],
            position:'top',
            textStyle:{
                color:'#00D2FF'
            },
            formatter: function (params, ticket, callback) {
                return params.value+'%';
            }
        },
        grid:{
            top:'1%',
            bottom:'1%',
            left:'1%',
            right:'1%'
        },
        xAxis: {
            show:false,
            data: ["1","2","3","4","5","6","7"]
        },
        yAxis: {
            show:false,
        },
        series: [{
            type: 'line',
            lineStyle:{
                color:'#AF00F1'
            },
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#AF00F1' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#1E2035' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            data: data1,
        },
            {
                type:'line',
                lineStyle:{
                    color:'#277FFF'
                },
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#277FFF' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#1E2035' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
                data:data2
            },
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.onresize = function() {
        myChart.resize();
    }
}

var initChartBar = function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chartBar'));
    // 指定图表的配置项和数据
    var option = {
        color:['#B558F6','#29CB97','#FEC400','#4072EE'],
        grid:{
            top:'7%',
            bottom:'1%',
            left:'1%',
            right:'3%'
        },
        xAxis: {
            show:true,
            type: 'value',
            position:'top',
            data: ["1"],
            axisLine:{
                lineStyle:{
                    color:'#33393F',
                    width:1
                }
            },
            //网格样式
            splitLine: {
                show: true,
                lineStyle:{
                    color: ['#33393F'],
                    width: 1,
                    type: 'solid'
                }
            },
        },
        yAxis: {
            show:true,
            type: 'category',
            axisLine:{
                lineStyle:{
                    color:'#33393F',
                    width:1
                }
            }
        },
        series: [{
            type: 'bar',
            barWidth:'9px',
            barGap:'5px',
            data: [63],
            itemStyle:{
                barBorderRadius:[0,9,9,0]
            },
            label: {
                show: true,
                position: 'right',
                textStyle: {
                    color: 'white'
                },
                distance :10,
                formatter: function (params, ticket, callback) {
                    return params.value+'%';
                }
            }
        },
            {
                type: 'bar',
                barWidth:'9px',
                barGap:'5px',
                data: [47],
                itemStyle:{
                    barBorderRadius:[0,9,9,0]
                },
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: 'white'
                    },
                    distance :10,
                    formatter: function (params, ticket, callback) {
                        return params.value+'%';
                    }
                }
            },{
                type: 'bar',
                barWidth:'9px',
                barGap:'5px',
                data: [52],
                itemStyle:{
                    barBorderRadius:[0,9,9,0]
                },
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: 'white'
                    },
                    distance :10,
                    formatter: function (params, ticket, callback) {
                        return params.value+'%';
                    }
                }
            },
            {
                type: 'bar',
                barWidth:'9px',
                barGap:'5px',
                data: [88],
                itemStyle:{
                    barBorderRadius:[0,9,9,0]
                },
                label: {
                    show: true,
                    position: 'right',
                    textStyle: {
                        color: 'white'
                    },
                    distance :10,
                    formatter: function (params, ticket, callback) {
                        return params.value+'%';
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.onresize = function() {
        myChart.resize();
    }
}
var initChartPie = function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chartPie'));
    // 指定图表的配置项和数据
    var option = {
        color:['#B558F6','#FEC400','#29CB97','#4072EE'],
        grid:{
            top:'0%',
            bottom:'0%',
            left:'0%',
            right:'0%'
        },
        series: [{
            type: 'pie',
            data:[
                {value:81.57, name:'81.57%'},
                {value:52.95, name:'52.95%'},
                {value:47.29, name:'47.29%'},
                {value:63.25, name:'63.25%'}
            ],
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.onresize = function() {
        myChart.resize();
    }
}
var initChartCircle = function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chartCircle'));
    // 指定图表的配置项和数据
    var option = {
        color:['#F0426C','#18D6F3','#FF7F9B'],
        grid:{
            top:'0%',
            bottom:'0%',
            left:'0%',
            right:'0%'
        },
        series: [{
            type: 'pie',
            data:[
                {value:20, name:'Windows'},
                {value:30, name:'Android'},
                {value:45, name:'Ios'},
            ],
            radius: ['45%', '80%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 1)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.onresize = function() {
        myChart.resize();
    }
}

var initChartBarTwo = function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chartBarTwo'));
    // 指定图表的配置项和数据
    var option = {
        color:['#1767F2','#B558F6'],
        grid:{
            top:'3%',
            bottom:'7.5%',
            left:'5%',
            right:'5%'
        },
        xAxis : {
            type : 'category',
            data : ['2015','2016','2017','2018','2019'],
            axisLabel:{
                color:'rgba(255,255,255,0.5)'
            }
        },
        yAxis : {
            type : 'value',
            //网格样式
            splitLine: {
                show: true,
                lineStyle:{
                    color: ['#33393F'],
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine:{show:false},
            axisLabel:{
                color:'rgba(255,255,255,0.5)'
            },
            axisTick: {show:false},
        },
        series: [
            {
                type: 'bar',
                barCategoryGap:'40%',
                data: [17,30,26,39,66],
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'white'
                    },
                    distance :10
                }
            },
            {
                type: 'bar',
                barCategoryGap:'40%',
                data: [13,25,23,45,61],
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: 'white'
                    },
                    distance :10
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.onresize = function() {
        myChart.resize();
    }
}
var initChartLineTwo = function(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chartLineTwo'));
    // 指定图表的配置项和数据
    var option = {
        color:['#1767F2','#B558F6'],
        grid:{
            top:'2%',
            bottom:'2%',
            left:'10%',
            right:'0%'
        },
        tooltip: {
            borderColor:'#A5ACFF',
            backgroundColor:'#242644',
            borderWidth:'1',
            padding: [5, 15],
            position:'top',
            textStyle:{
                color:'#00D2FF'
            },
            formatter: function (params, ticket, callback) {
                return params.value;
            }
        },
        xAxis : {
            show:false,
            type : 'category',
            data : ['2015','2016','2017','2018','2019'],
        },
        yAxis : {
            type : 'value',
            //网格样式
            splitLine: {
                show: false
            },
            axisLine:{show:false},
            axisTick: {show:false},
        },
        series: [
            {
                type: 'line',
                data: [10000,21000,20500,30000,21000],
                smooth: true,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#AF00F1' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#1E2035' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                type: 'line',
                data: [5000,7000,6500,11000,9000],
                smooth: true,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#277FFF' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#1E2035' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                },
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.onresize = function() {
        myChart.resize();
    }
    // 获取最小值到最大值之前的整数随机数
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return(Min + Math.round(Rand * Range));
    }
    setInterval(function () {
        if(!myChart){
            return;
        }
        //更新数据

        var option = myChart.getOption();
        var data1 = []
        var data2 = []
        for (var i=0;i< 7;i++) {
            data1.push(GetRandomNum(13000, 30000))
            data2.push(GetRandomNum(5000, 11000))
        }
        option.series[0].data = data1;
        option.series[1].data = data2;
        myChart.setOption(option);
    },5000)
}