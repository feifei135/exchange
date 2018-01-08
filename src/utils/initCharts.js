/**
 * Created by wuwc on 2017/5/10.
 */
import Highcharts from 'highcharts/highstock'
export default function (id, dataList) {
    let lastClose = 6500.00;
    let max = 0, min = 100000, minTime = 1478568600000, maxTime = 1478588400000;

    //将日期格式转换为时间戳
    for (let i = 0; i < dataList.length; i++) {
        //计算最新价最大值和最小值
        max = parseFloat(dataList[i][1]) > max ? parseFloat(dataList[i][1]) : max;
        min = parseFloat(dataList[i][1]) < min ? parseFloat(dataList[i][1]) : min;
    }
    //午休时间节点
    let breakss = [{from: 1478575800000, to: 1478581260000}];

    //X轴时间分布
    let positions = [1478568600000, 1478575800000, 1478581200000, 1478588400000];


    /* H全局配置 */
    Highcharts.setOptions({global: {useUTC: false}});
    Highcharts.StockChart(id, {
        chart: {
            height: 140,
            events: {
                load: function () {
                    let series = this.series[0];

                    /* 1.直接循环打点的方式渲染分时图
                     for(let j=0;j<dataList.length;j++){
                     series.addPoint([dataList[j][0], dataList[j][1]],true,false);
                     }*/

                    /* 2.一秒调用一次打点的方式渲染分时图
                     let i = 0;
                     let timer = setInterval(function () {
                         if (i > data.length) {
                            clearInterval(timer);
                         }
                        i++;
                        let x = data[i][0],y = data[i][1];
                        series.addPoint([x, y], true, false);
                     }, 1000);*/
                    /* 3.直接setData的方式渲染分时图 */
                    series.setData(dataList);


                }
            }
        },
        rangeSelector: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        scrollbar: {
            enabled: false,
        },
        navigator: {
            adaptToUpdatedData: false,
            enabled: false
        },
        series: [
            {
                name: 'Random data',
                lineWidth: 1,
                type: 'area',
                data: [],
                gapSize: 5,
                tooltip: {
                    valueDecimals: 2
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                threshold: null
            }
        ],
        tooltip: {
            formatter: function (e) {
                let fixed = null;
                let hours = new Date(this.x).getHours();
                let minutes = new Date(this.x).getMinutes();
                if (hours < 8) {
                    hours = hours + 24;
                }
                if (this.y >= 100) {
                    fixed = 2;
                } else {
                    fixed = 4;
                }
                let str = '<span>' + Highcharts.dateFormat("%H:%M", this.x) + '</span><br/>现价:' + this.y + '<br/> 涨  跌：' + (this.y - lastClose).toFixed(fixed) + '<br/>涨跌幅：' + ((this.y - lastClose) * 100 / lastClose).toFixed(2) + "%";
                return str;
            }
        },
        xAxis: {
            tickInterval: 60 * 1000 * 60,
            min: minTime,
            max: maxTime,
            gridLineColor: '#ccc',
            gridLineDashStyle: 'dotted',
            gridLineWidth: 1,
            tickColor: '#ccc',
            lineColoe: '#ccc',
            crosshair: {
                label: {
                    enabled: true,
                    padding: 3,
                    formatter: function (e) {
                        return Highcharts.dateFormat("%H:%M", e);
                    },
                    borderWidth: 1,
                    backgroundColor: 'red',
                    style: {
                        'color': 'white'
                    }

                },
                color: 'black',
                dashStyle: 'dash'
            },
            breaks: breakss,
            tickPositioner: function () {
                return positions;
            },
            labels: {
                formatter: function () {
                    let t = Highcharts.dateFormat("%H:%M", this.value);
                    if (t == "11:30") {
                        t = "11:30/13:00";
                    }
                    return t;
                }
            }
        },
        yAxis: [
            /* y轴右 */
            {
                allowDecimals: true,
                gridLineWidth: 1,
                opposite: true,
                labels: {
                    formatter: function () {
                        let valDate = null;
                        if (this.value > 100000) {
                            this.value = close;
                        }
                        if (this.value > 10000) {
                            valDate = Math.ceil(this.value);
                        } else if (this.value >= 100) {
                            valDate = parseFloat(this.value).toFixed(2);
                        } else {
                            valDate = parseFloat(this.value).toFixed(4);
                        }
                        return valDate;
                    }
                },
                plotLines: [
                    {
                        color: 'red',
                        dashStyle: 'dash',
                        value: 6500.00,
                        width: 1,
                        zIndex: 99
                    }
                ],
                tickPositioner: function () {
                    let y_pos = [];
                    let y_inc = max - min;

                    let increment = Number((y_inc) / 5);
                    let tickMin = Number(min);
                    let tickMax = Number(max);

                    let i = 0;
                    let tick = Number(min) - increment * 3 / 2;
                    for (i; i < 7; i++) {
                        tick += increment;
                        y_pos.push(Number(tick).toFixed(4));
                        if (tick > max) {
                            break
                        }
                    }

                    return y_pos;
                },
                gridLineColor: '#ccc',
                crosshair: {
                    label: {
                        enabled: true,
                        padding: 3,
                        formatter: function (e) {
                            return e;
                        },
                        borderWidth: 1,
                        backgroundColor: 'red',
                        style: {
                            'color': 'white'
                        }
                    }
                },
                color: 'black',
                dashStyle: 'dash'
            },
            {
                allowDecimals: true,
                opposite: false,
                labels: {
                    align: 'left',
                    x: 10,
                    formatter: function () {
                        if (this.value > 100000) {
                            this.value = lastClose;
                        }
                        return parseFloat((this.value - lastClose) * 100 / lastClose).toFixed(2) + '%';
                    }
                },
                tickPositioner: function () {
                    let y_pos = [];
                    let y_inc = max - min;

                    let increment = Number((y_inc) / 5);
                    let tickMin = Number(min);
                    let tickMax = Number(max);

                    let i = 0;
                    let tick = Number(min) - increment * 3 / 2;
                    for (i; i < 7; i++) {
                        tick += increment;
                        y_pos.push(Number(tick).toFixed(4));
                        if (tick > max) {
                            break
                        }
                    }

                    return y_pos;
                }
            }
        ]

    });
}