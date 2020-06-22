import axios from 'axios';
import { Modal } from 'antd-mobile';
const alert = Modal.alert;

function handleReslove(res) {
  if (!res) return;
  const data = res.data;
  console.log(data,'data')
  if (!data) {
    alert('网络错误，请稍后再试');
    return Promise.reject(res || {})
  }
  if (!data.success) {
    alert(data.msg || '网络错误，请稍后再试');
    return Promise.resolve(data)
  }
  if (data.success) {
    return Promise.resolve(data)
  }

}

function handleReject() {
  alert('请求错误');
}

export default function(opt) {
  return axios(opt).then(
    res => handleReslove(res)
  ).catch(
    // 处理失败的回调
    error => handleReject(error)
  )

}