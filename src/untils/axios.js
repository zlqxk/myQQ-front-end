import axios from 'axios'

export default function(data) {
  return new Promise((reslove, reject) => {
    axios(data).then(res => {
      reslove(res.data)
    })
  })
}