import SYRequest from "..";

// 获取高性价比房源
export function getHomeGoodPriceData() {
  return SYRequest.get({
    url: '/home/goodprice'
  })
}

// 获取高分房源
export function getHomeHighSocreData() {
  return SYRequest.get({
    url: '/home/highscore'
  })
}

// 获取折扣房源
export function getHomeDiscountData() {
  return SYRequest.get({
    url: '/home/discount'
  })
}

// 获取热门推荐数据
export function getHomeHotRecommendData() {
  return SYRequest.get({
    url: '/home/hotrecommenddest'
  })
}

// 获取向往地数据
export function getHomeLongForData() {
  return SYRequest.get({
    url: '/home/longfor'
  })
}