import { request } from "../utils/request";

export function test(parameter) {
  return request({
    url: "",
    method: "get",
    params: parameter,
  });
}
