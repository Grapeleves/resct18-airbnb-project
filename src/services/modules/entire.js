import SYRequest from "..";

export function getEntireRoomList(offset = 0, size = 20) {
  return SYRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size
    }
  })
}