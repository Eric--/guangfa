import { City } from '../flow_center/city';
import { NavItem } from '../navbar/nav.item';
import { FastServiceItem }  from '../fast_service/fast.service.item';
import { OtherServiceItem } from '../other_service/other.service.item';


export const CITYS: City[] = [
  {city: "haerbin", name: 'Mr. Nice'},
  {city: "changchun", name: 'Narco'},
  {city: "shengyang", name: 'Bombasto'},
  {city: "jinan", name: 'Celeritas'},
  {city: "shijiazhuang", name: 'Magneta'},
  {city: "zhengzhou", name: 'Tornado'}
];

export const NAVITEMS: NavItem[] = [
  {name: '流程中心', linkUrl: '/flowCenter', className: 'icon icon1'},
  {name: '业务受理', linkUrl: '/business', className: 'icon icon2'},
  {name: '查询', linkUrl: '/queryCenter', className: 'fa fa-search icon3'},
  {name: '其它', linkUrl: '/other', className: 'icon icon4'}
];

export const FASTSERVICEITEMS:FastServiceItem[] = [
  {name: '一站式开户',  className: 'icon1'},
  {name: '一站式销户',  className: 'icon2'},
  {name: '密码重置',  className: 'icon3'},
  {name: '创业板登记',  className: 'icon4'},
  {name: '证券账户开户',  className: 'icon5'},
  {name: '客户佣金设置',  className: 'icon6'},
  {name: '账户注册资料变更',  className: 'icon7'},
  {name: '身份信息变更',  className: 'icon8'},
  {name: '撤指定',  className: 'icon9'},
  {name: '转托管',  className: 'icon10'}
]

export const OTHERSERVICEITEMS:OtherServiceItem[] = [
  {name:'客户信息管理', desc: '客户身份信息，联系信息，其他信息和邮寄信息的维护'},
  {name:'基金账户管理', desc: '基金账户信息变更和维护'},
  {name:'适当性管理', desc: '客户风险业务权限的开通和取消'},
  {name:'存管账户管理', desc: '存管账户信息变更和维护'},
  {name:'资产账户管理', desc: '客户交易费用，开通委托方式信息变更'},
  {name:'银行账户管理', desc: '银行账户信息变更和维护'},
  {name:'中登业务管理', desc: '登记公司信息维护'},
  {name:'融资融券', desc: '客户合同信息管理与维护'}
]
