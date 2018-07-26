import Mock from 'mockjs'

const dataList = []
for (let i = 0; i < Math.floor(Math.random() * 10 + 10); i++) {
  dataList.push(Mock.mock({
    'userId': '@INCREMENT',
    'username': '@NAME',
    'email': '@EMAIL',
    'mobile': /^1[0-9]{10}$/,
    'status|0-1': 1,
    'roleIdList': null,
    'createUserId': 1,
    'createTime': Mock.Random.date()
  }))
}

// 获取用户列表
export function list () {
  return {
    url: '/sys/user/list',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'page': {
        'totalCount': dataList.length,
        'pageSize': 10,
        'totalPage': 1,
        'currPage': 1,
        'list': dataList
      }
    }
  }
}

// 获取用户信息
export function info () {
  return {
    url: '/sys/user/info',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'user': dataList[0]
    }
  }
}

// 修改密码
export function updatePassword () {
  return {
    url: '/sys/user/password',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 添加用户
export function add () {
  return {
    url: '/sys/user/save',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 修改用户
export function update () {
  return {
    url: '/sys/user/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除用户
export function del () {
  return {
    url: '/sys/user/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
