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