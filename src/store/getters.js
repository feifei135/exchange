/**
 * Created by wuwc on 2017/6/9.
 */
export default {
    isLogin: state=>state.isLogin,
    sessionId:state=>state.sessionId,
    clientId:state=>state.clientId,
    userId:state=>state.userId,
    userName:state=>state.userName,
    userStatus:state=>state.userStatus,
    bizName:state=>state.bizName,
    api: state=>state.api,
    loopScrollList:state=>state.loopScrollList,
    allTeaList:state=>state.allTeaList,
    allAucList:state=>state.allAucList,
    allDealList:state=>state.allDealList,
    allNewsList:state=>state.allNewsList,
    noticeList:state=>state.noticeList,
    promoteInfo:state=>state.promoteInfo
}