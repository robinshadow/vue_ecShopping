//统一管理api接口
import requests from "./requests";
import mockRequest from './mockRequest'

//获取商品三级分类列表数据
export const reqCategoryList = () => {
   return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

//获取主轮播图mock数据
export const reqGetBannerList = () => {
   return mockRequest.get('/banner')
}

//获取floor模块mock数据
export const reqGetFloorList = () => {
   return mockRequest.get('/floor')
}

//获取搜索模块数据
/* export const reqSearchList = (params) => {
   return mockRequest({ url: '/searchList', method: 'post', data: params })
} */
export const reqSearchList = (params) => {
   return requests({ url: '/list', method: 'post', data: params })
}

//获取商品详情页信息
export const reqGoodsInfo = (skuid) => {
   return requests({ url: `/item/${skuid}`, method: 'get' })
}

//将产品添加到购物车中或更新购物车
export const reqUpdateShopCart = (skuid, skuNum) => {
   return requests({ url: `/cart/addToCart/${skuid}/${skuNum}`, method: 'post' })
}