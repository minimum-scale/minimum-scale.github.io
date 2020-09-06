// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('earthChart'));

var color = ['#a6c84c', '#ffa022', '#46bee9']
    ,series = []
    ,option
    ,LineData = []
    ,MaxSourceCount = 30

var countries = [
    '巴黎','莫斯科','马德里','罗马','孟买','老挝','东京','首尔','纽约','华盛顿','开罗','里约热内卢',
    '雅典', '华沙', '布达佩斯', '布拉格', '维也纳', '柏林', '日内瓦', '阿姆斯特丹', '伦敦', '雷克雅未克', '多伦多', '阿尔及尔', '巴马科', '卢萨卡',
    '开普敦', '约翰内斯堡', '墨尔本', '霍尼亚拉', '苏瓦', '达喀尔', '利马','旧金山','布宜诺斯艾利斯','温哥华',
    '北京' ,'长春', '长沙', '成都', '福州', '广州', '贵阳', '哈尔滨', '海口', '杭州', '合肥', '呼和浩特', '济南', '昆明', '拉萨', '兰州', '南昌', '南京', '南宁', '上海', '沈阳', '石家庄', '太原', '天津', '乌鲁木齐', '武汉', '西安', '西宁', '银川', '郑州', '重庆'
];

var geoCoordMap = {
    //被攻击城市
    '巴黎':[2.35,48.87] ,'莫斯科': [37.3,55.46,],'马德里': [3.45, 40.25],'罗马': [12.30, 41.54],'孟买': [72.5, 18.56],'老挝': [102.49, 19.9],
    '东京':[139.39,35.48] ,'首尔': [126.58,37.35,],'纽约': [-73.51, 40.50],'华盛顿': [-77.3, 38.54],'开罗': [31.5, 30.01],'里约热内卢': [-43.12, -22.54],
    '雅典':[23.43,37.58],'华沙':[21,52.15],'布达佩斯':[19.05,47.30],'布拉格':[14.26,50.05],'维也纳':[16.20,48.13],'柏林':[13.25,52.30],'日内瓦':[6.09,46.12],
    '阿姆斯特丹':[4.54,52.22],'伦敦':[0.1,51.30],'雷克雅未克':[-21.51,64.09],'多伦多':[-79.25,43.42],'阿尔及尔':[3.08,36.42],'巴马科':[-8,12.39],'卢萨卡':[28.17,-15.25],
    '开普敦':[18.28,-35.56],'约翰内斯堡':[28,-26.15],'墨尔本':[144.58,-37.49],'霍尼亚拉':[159.57,-9.27],'苏瓦':[178.25,-18.08],'达喀尔':[-17.26,14.4],'利马':[-77.03,-12.03],
    '旧金山':[-122.33,37.47], '布宜诺斯艾利斯':[-58.27,-34.36], '温哥华':[-123.07,49.16],
    '北京': [116.5, 39.9],'长春': [125.31, 43.88], '长沙': [112.97, 28.2], '成都': [104.07, 30.67], '福州': [119.3, 26.07], '广州': [113.24, 23.13], '贵阳': [106.7, 26.57], '哈尔滨': [126.61, 45.73], '海口': [110.34, 20.04], '杭州': [120.16, 30.25], '合肥': [117.27, 31.86], '呼和浩特': [111.65, 40.81], '济南': [116.97, 36.66], '昆明': [102.7, 25.05], '拉萨': [91.13, 29.65], '兰州': [103.6, 36.11], '南昌': [115.89, 28.67], '南京': [118.77, 32.05], '南宁': [108.31, 22.83], '上海': [121.48, 31.24], '沈阳': [123.41, 41.79], '石家庄': [114.49, 38.04], '太原': [112.55, 37.89], '天津': [117.2, 39.15], '乌鲁木齐': [87.59, 43.79], '武汉': [114.28, 30.57], '西安': [108.88, 34.27], '西宁': [101.76, 36.62], '银川': [106.27, 38.46], '郑州': [113.65, 34.76], '重庆': [106.52, 29.54]
};


var attackList = [
    { 'Source': '北京,巴黎,莫斯科,马德里,罗马,孟买,老挝,东京,首尔,纽约,墨尔本,开罗,里约热内卢,哈尔滨,长沙,旧金山', 'Destination': '北京', 'Duration': '327'},
    { 'Source': '东京,首尔,温哥华,华盛顿,开罗,巴黎,莫斯科,马德里,里约热内卢,柏林,日内瓦,阿姆斯特丹,开普敦,约翰内斯堡,墨尔本', 'Destination': '哈尔滨', 'Duration': '327'},
    { 'Source': '孟买,老挝,东京,首尔,纽约,里约热内卢,哈尔滨,长沙,雷克雅未克,阿尔及尔,巴马科,卢萨卡,开普敦,约翰内斯堡,墨尔本,温哥华,莫斯科', 'Destination': '纽约', 'Duration': '327'},
    { 'Source': '北京,巴黎,莫斯科,马德里,罗马,孟买,老挝,东京,首尔,纽约,霍尼亚拉,达喀尔,利马,伦敦,利马,', 'Destination': '拉萨', 'Duration': '327'},
    { 'Source': '哈尔滨,长沙,东京,华盛顿,开罗,里约热内卢,布达佩斯,布拉格,维也纳,苏瓦,达喀尔,伦敦', 'Destination': '兰州', 'Duration': '327'},
    { 'Source': '孟买,老挝,纽约,华盛顿,开罗,里约热内卢,哈尔滨,维也纳,苏瓦,达喀尔,柏林,日内瓦,阿姆斯特丹', 'Destination': '旧金山', 'Duration': '327'},
    { 'Source': '孟买,老挝,东京,首尔,旧金山,雅典,华沙,布达佩斯,开普敦,约翰内斯堡,墨尔本,霍尼亚拉,布宜诺斯艾利斯', 'Destination': '海口', 'Duration': '327'},


];
function trimStr(str){return str.replace(/(^\s*)|(\s*$)/g,"");}

function sleep(n){
    var start = new Date().getTime();
    while(true){
        if(new Date().getTime()-start > n)
            break;
    }
}

//等比例缩放
var getDuration = function(realValue){
    var minRealValue = 5;
    var maxRealValue = 360;
    var minValue = 5;
    var maxValue = 10;

    return ((realValue-minRealValue)/(maxRealValue-minRealValue))*(maxValue-minValue)+minValue;

}

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};



var setOption = function(){

    [['', LineData]].forEach(function (item, i) {
        series = [];
        series.push({
                name: item[0],
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 3.3,
                    trailLength: 0.8,
                    color: '#0249C7',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.1
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                itemStyle: {
                    normal: {
                        color: '#0249C7'
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            },
            {
                name: item[0],
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 3,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbol:'none',
                symbolSize: function (val) {
                    return val[2] / 10;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[0].name,
                        value: geoCoordMap[dataItem[0].name].concat([95])
                    };
                })
            }
        );
    });

    option = {
        // backgroundColor: '#404a59',
        geo: {

            map: 'world',
            // map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            top:'5%',
            bottom:'5%',
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#070707',
                    borderColor: '#3B3B3B'
                },
                emphasis: {
                    areaColor: '#1C262E',
                    borderColor:'#425CCC'
                }
            }
        },
        series: series
    };

}

var setLineData = function(sourceArray,dest){
    LineData = [];
    for(var j = 0;j<sourceArray.length;j++){
        if(j > MaxSourceCount){
            break;
        }
        var s = sourceArray[j];
        if(typeof(s)=="undefined" || s == ""){
            continue;
        }

        if(typeof(dest)=="undefined" || dest == ""){
            continue;
        }
        s = trimStr(s);
        if(countries.indexOf(s) == -1){
            continue;
        }

        dest = trimStr(dest);
        if(countries.indexOf(dest) == -1){
            continue;
        }

        var newData = [{ 'name': s }, { 'name': dest, 'value': 95 }];
        LineData.push(newData);
    }
}


var attackListIndex = 0;
function loadChart(){
    var item,sourceArray,dest,duration
    item = attackList[attackListIndex];
    sourceArray = item.Source.split(",");
    dest = trimStr(item.Destination);
    duration = parseInt(getDuration(item.Duration))*1000;

    setLineData(sourceArray,dest);

    if(LineData.length > 0){
        setOption();
        myChart.clear();
        myChart.setOption(option);
    }

    attackListIndex ++;
    if(attackListIndex ==  attackList.length){
        attackListIndex = 0
    }

    if(attackListIndex < attackList.length){
        setTimeout("loadChart()", duration);
    }


}
$(function(){
    loadChart();
})


