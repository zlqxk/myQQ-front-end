const USER_LOGIN = "USER_LOGIN"

const action = {
  userLogin(data) {
    return {
      type: USER_LOGIN,
      data: data
    }
  }
}

export default action