/**
 * Created by wuwc on 2017/4/26.
 */
export default function(startDate,endDate){
    let diff=endDate.getTime() - startDate.getTime();//时间差的毫秒数

    //计算出相差天数
    let days=Math.floor(diff/(24*3600*1000));

    //计算出小时数
    let leave1=diff%(24*3600*1000);    //计算天数后剩余的毫秒数
    let hours=Math.floor(leave1/(3600*1000));
    //计算相差分钟数
    let leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
    let minutes=Math.floor(leave2/(60*1000));

    //计算相差秒数
    let leave3=leave2%(60*1000);      //计算分钟数后剩余的毫秒数
    let seconds=Math.round(leave3/1000);

    //补0
    function p(s) {
        return s < 10 ? '0' + s: s;
    }

    return {
        days:p(days),
        hours:p(hours),
        minutes:p(minutes),
        seconds:p(seconds)
    };
}