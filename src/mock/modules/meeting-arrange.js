import Mock from 'mockjs'

// 会议信息
var dataList = []
for (let i = 0; i < Math.floor(10); i++) {
  dataList.push(Mock.mock({
    'meetingId': '@INCREMENT',
    'meetingName': '@NAME',
    'meetingDateTime': Mock.Random.date(),
    'status|0-2': 0
  }))
}

// 获取会议列表
export function list () {
  return {
    url: '/meeting/arrange/list',
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

// 获取会议信息
export function info () {
  return {
    url: '/meeting/arrange/info',
    type: 'get',
    data: {
      'msg': 'success',
      'code': 0,
      'user': dataList[0]
    }
  }
}

// 添加会议
export function add () {
  return {
    url: '/meeting/arrange/save',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 修改会议
export function update () {
  return {
    url: '/meeting/arrange/update',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 退出会议
export function exit () {
  return {
    url: '/meeting/arrange/exit',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}

// 删除会议
export function del () {
  return {
    url: '/meeting/arrange/delete',
    type: 'post',
    data: {
      'msg': 'success',
      'code': 0
    }
  }
}
