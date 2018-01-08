import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '@/components/test'
import Home from '@/pages/home/home'
import Hall from '@/pages/hall/hall'
import PurchaseDetail from '@/pages/hall/purchase'
import SupplyDetail from '@/pages/hall/supply'
import SupplyList from '@/pages/hall/supply_list'
import Auction from '@/pages/hall/auction'
import AuctionList from '@/pages/hall/auction_list'
import AuctionIng from '@/pages/hall/auction_ing'
import AuctionUnstart from '@/pages/hall/auction_unstart'
import AuctionEnd from '@/pages/hall/auction_end'
import AuctionSucc from '@/pages/hall/auction_succ'
import NoticeList from '@/pages/hall/notice_list'
import NoticeDetail from '@/pages/hall/notice_detail'
import Deposit from '@/pages/hall/deposit'
import Quote from '@/pages/hall/quote'
import Order from '@/pages/hall/order'
import OrderInfo from '@/pages/hall/order_info'
import Login from '@/pages/login/login'
import Regist from '@/pages/regist/regist'
import Guide from '@/pages/login/guide'
import FindPwd from '@/pages/find/find_pwd'

import UserCenter from '@/pages/uc/user_center'
import AccountPay from '@/pages/uc/account_pay'
import AccountYuE from '@/pages/uc/account_yue'
import CapitalDetail from '@/pages/uc/capital_detail'
import SetPayPwd from '@/pages/uc/set_pay_pwd'
import FindPayPwd from '@/pages/uc/find_pay_pwd'
import OutinMoney from '@/pages/uc/outin_money'
import CardManage from '@/pages/uc/card_manage'

import UserInfo from '@/pages/uc/user_info'
import IdentityAuth from '@/pages/uc/identity_auth'
import ModifyPwd from '@/pages/uc/modify_pwd'
import ModifyInfo from '@/pages/uc/modify_info'

import DemandInfo from '@/pages/uc/demand_info'
import CreateProduct from '@/pages/uc/create_product'
import BargainManager from '@/pages/uc/bargain_manager'
import BargainDetail from '@/pages/uc/bargain_detail'
import BreachManager from '@/pages/uc/breach_manager'
import BreachDetail from '@/pages/uc/breach_detail'

import OrderManager from '@/pages/uc/order_manager'
import OrderDetail from '@/pages/uc/order_detail'
import MyCart from '@/pages/uc/my_cart'
import MyFocus from '@/pages/uc/my_focus'
import MyFootmark from '@/pages/uc/my_footmark'
import DeliveryManager from '@/pages/uc/delivery_manager'
import DeliveryDetail from '@/pages/uc/delivery_detail'

import AboutUs from '@/pages/aboutUs/about_us'
import CompanyCulture from '@/pages/aboutUs/company_culture'
import LawStatement from '@/pages/aboutUs/law_statement'
import JoinUs from '@/pages/aboutUs/join_us'
import ConcatUs from '@/pages/aboutUs/concat_us'

import InitiationGuide from '@/pages/aboutUs/initiation_guide'
import SeatManager from '@/pages/aboutUs/seat_manager'
import MarketGuide from '@/pages/aboutUs/market_guide'
import DealRules from '@/pages/aboutUs/deal_rules'
import SoftwareDownload from '@/pages/aboutUs/software_download'
import TechnologyService from '@/pages/aboutUs/technology_service'
import HowDeal from '@/pages/aboutUs/how_deal'
import OnlineDeal from '@/pages/aboutUs/online_deal'
import DeliveryClosing from '@/pages/aboutUs/delivery_closing'

import DayQuotation from '@/pages/quotation/day_quotation'
import WeekQuotation from '@/pages/quotation/week_quotation'
import MonthQuotation from '@/pages/quotation/month_quotation'
import DelayQuotation from '@/pages/quotation/delay_quotation'
import WarahouseDaily from '@/pages/quotation/warehouse_daily'
import DeliveryDaily from '@/pages/quotation/delivery_daily'
import DealRanking from '@/pages/quotation/deal_ranking'



import Notice from '@/pages/notice/notice'
import BusinessNotice from '@/pages/notice/business_notice'
import ActiveNotice from '@/pages/notice/active_notice'
import InfoNotice from '@/pages/notice/info_notice'
import ExchangeDynamic from '@/pages/notice/exchange_dynamic'
import NoticeMain from '@/pages/notice/notice_main'



Vue.use(VueRouter)


const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/index',
            name: 'Home',
            component: Home
        },
        {
            path: '/hall',
            name: 'Hall',
            component: Hall
        },
        {
            path: '/quote',
            name: 'Quote',
            component: Quote
        },
        {
            path: '/order',
            name: 'Order',
            component: Order
        },
        {
            path: '/order_info',
            name: 'OrderInfo',
            component: OrderInfo
        },
        {
            path: '/purchase',
            name: 'PurchaseDetail',
            component: PurchaseDetail

        },
        {
            path: '/supply/:id',
            name: 'Hall',
            component: SupplyDetail
        },
        {
            path: '/supply_list',
            name: 'Hall',
            component: SupplyList
        },
        {
            path: '/auction',
            name: 'Auction',
            component: Auction
        },
        {
            path: '/auction_list',
            name: 'AuctionList',
            component: AuctionList
        },
        {
            path: '/auction_ing',
            name: 'AuctionIng',
            component: AuctionIng
        },
        {
            path: '/auction_unstart',
            name: 'AuctionUnstart',
            component: AuctionUnstart
        },
        {
            path: '/auction_end',
            name: 'AuctionEnd',
            component: AuctionEnd
        },
        {
            path: '/auction_succ',
            name: 'AuctionSucc',
            component: AuctionSucc
        },
        {
            path: '/notice_list',
            name: 'NoticeList',
            component: NoticeList
        },
        {
            path: '/notice_detail',
            name: 'NoticeDetail',
            component: NoticeDetail
        },
        {
            path: '/deposit',
            name: 'Deposit',
            component: Deposit
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/regist',
            name: 'Regist',
            component: Regist
        },
        {
            path: '/guide',
            name: 'Guide',
            component: Guide
        },
        {
            path: '/find_pwd',
            name: 'FindPwd',
            component: FindPwd
        },
        {
            path: '/user_center',
            name: 'Hall',
            meta: {requireAuth: true},
            component: UserCenter
        },
        {
            path: '/account_pay',
            name: 'Hall',
            component: AccountPay
        },
        {
            path: '/account_yue',
            name: 'Hall',
            component: AccountYuE
        },
        {
            path: '/capital_detail',
            name: 'Hall',
            component: CapitalDetail
        },
        {
            path: '/set_pay_pwd',
            name: 'Hall',
            component: SetPayPwd
        },
        {
            path: '/find_pay_pwd',
            name: 'Hall',
            component: FindPayPwd
        },
        {
            path: '/outin_money',
            name: 'Hall',
            component: OutinMoney
        },
        {
            path: '/card_manage',
            name: 'Hall',
            component: CardManage
        },
        {
            path: '/user_info',
            name: 'Hall',
            component: UserInfo
        },
        {
            path: '/identity_auth',
            name: 'Hall',
            component: IdentityAuth
        },
        {
            path: '/modify_pwd',
            name: 'Hall',
            component: ModifyPwd
        },
        {
            path: '/modify_info',
            name: 'Hall',
            component: ModifyInfo
        },
        {
            path: '/demand_info',
            name: 'Hall',
            component: DemandInfo
        },
        {
            path: '/create_product',
            name: 'Hall',
            meta: {requireAuth: true},
            component: CreateProduct
        },
        {
            path: '/bargain_manager',
            name: 'Hall',
            component: BargainManager
        },
        {
            path: '/bargain_detail/:id',
            name: 'Hall',
            component: BargainDetail
        },
        {
            path: '/breach_manager',
            name: 'Hall',
            component: BreachManager
        },
        {
            path: '/breach_detail',
            name: 'Hall',
            component: BreachDetail
        },
        {
            path: '/order_manager',
            name: 'Hall',
            component: OrderManager
        },
        {
            path: '/order_detail/:id',
            name: 'Hall',
            component: OrderDetail
        },
        {
            path: '/my_cart',
            name: 'Hall',
            component: MyCart
        },
        {
            path: '/my_focus',
            name: 'Hall',
            component: MyFocus
        },
        {
            path: '/my_footmark',
            name: '/Hall',
            component: MyFootmark
        },
        {
            path: '/delivery_manager',
            name: 'Hall',
            component: DeliveryManager
        },
        {
            path: '/delivery_detail',
            name: 'Hall',
            component: DeliveryDetail
        },
        {
            path: '/about_us',
            name: 'AboutUs',
            component: AboutUs
        },
        {
            path: '/company_culture',
            name: 'AboutUs',
            component: CompanyCulture
        },
        {
            path: '/law_statement',
            name: 'AboutUs',
            component: LawStatement
        },
        {
            path: '/join_us',
            name: 'AboutUs',
            component: JoinUs
        },
        {
            path: '/concat_us',
            name: 'AboutUs',
            component: ConcatUs
        },
        {
            path: '/initiation_guide',
            name: 'AboutUs',
            component: InitiationGuide
        },
        {
            path: '/seat_manager',
            name: 'AboutUs',
            component: SeatManager
        },
        {
            path: '/market_guide',
            name: 'AboutUs',
            component: MarketGuide
        },
        {
            path: '/deal_rules',
            name: 'AboutUs',
            component: DealRules
        },
        {
            path: '/software_download',
            name: 'AboutUs',
            component: SoftwareDownload
        },
        {
            path: '/technology_service',
            name: 'AboutUs',
            component: TechnologyService
        },
        {
            path: '/how_deal',
            name: 'AboutUs',
            component: HowDeal
        },
        {
            path: '/online_deal',
            name: 'AboutUs',
            component: OnlineDeal
        },
        {
            path: '/delivery_closing',
            name: 'AboutUs',
            component: DeliveryClosing
        },
        {
            path: '/day_quotation',
            name: 'DayQuotation',
            component: DayQuotation
        },
        {
            path: '/week_quotation',
            name: 'DayQuotation',
            component: WeekQuotation
        },
        {
            path: '/month_quotation',
            name: 'DayQuotation',
            component: MonthQuotation
        },
        {
            path: '/delay_quotation',
            name: 'DayQuotation',
            component: DelayQuotation
        },
        {
            path: '/warehouse_daily',
            name: 'DayQuotation',
            component: WarahouseDaily
        },
        {
            path: '/delivery_daily',
            name: 'DayQuotation',
            component: DeliveryDaily
        },
        {
            path: '/deal_ranking',
            name: 'DayQuotation',
            component: DealRanking
        },
        {
            path: '/notice',
            name: 'Notice',
            component: Notice
        },
        {
            path: '/business_notice',
            name: 'Notice',
            component: BusinessNotice
        },
        {
            path: '/active_notice',
            name: 'Notice',
            component: ActiveNotice
        },
        {
            path: '/info_notice',
            name: 'Notice',
            component: InfoNotice
        },
        {
            path: '/exchange_dynamic',
            name: 'Notice',
            component: ExchangeDynamic
        },
        {
            path: '/notice_main',
            name: 'Notice',
            component: NoticeMain
        }

    ]
});



export default router;
