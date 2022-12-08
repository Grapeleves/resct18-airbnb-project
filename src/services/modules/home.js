import SYRequest from "..";

export function getHomeGoodPriceData() {
  return SYRequest.get({
    url: '/home/goodprice'
  })
}