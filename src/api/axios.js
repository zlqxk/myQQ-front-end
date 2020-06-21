import axios from 'axios';
import { Toast } from 'antd-mobile';

function handleReslove(res) {
  if (!res) return;
  const data = res.data;
  console.log(data,'data')
  if (!data) {
    Toast.fail('网络错误，请稍后再试');
    return Promise.reject(res || {})
  }
  if (!data.success) {
    Toast.fail(data.msg || '网络错误，请稍后再试');
    return Promise.resolve(data)
  }
  if (data.success) {
    return Promise.resolve(data)
  }

}

function handleReject() {
  Toast.fail('请求错误');
}

export default function(opt) {
  return axios(opt).then(
    res => handleReslove(res)
  ).catch(
    // 处理失败的回调
    error => handleReject(error)
  )

}