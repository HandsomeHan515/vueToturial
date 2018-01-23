const serviceDomain = 'http://39.106.111.163:10010'

export const address = {
  // 学校信息
  tenents: `${serviceDomain}/tenents/`,
  // 用户信息的更新
  usersDetail: `${serviceDomain}/users/detail/`,
  usersLogin: `${serviceDomain}/users/login/`,
  usersLogout: `${serviceDomain}/users/logout/`,
  // 修改密码
  usersPasswordChange: `${serviceDomain}/users/password/change/`,
  tasks: `${serviceDomain}/tasks/`,
  subtasks: `${serviceDomain}/subtasks/`,
  units: `${serviceDomain}/units/`,
  // 点击某一个学生查看某一个task下的unit  //dongwu-inc.com:10010/units/published/?task=823
  unitpublished: `${serviceDomain}/units/published/`,
  questions: `${serviceDomain}/questions/`,
  // 班级群组
  groups: `${serviceDomain}/groups/`,
  // 创建群组
  joingroups: `${serviceDomain}/groups/join/`,
  // 申请加入群组
  myApplications: `${serviceDomain}/groups/join/myApplications/`,
  // 我的申请
  joinmanagement: `${serviceDomain}/groups/join/groupApplications/`,
  // 审核管理
  grouptask: `${serviceDomain}/tasks/myGroup/`,
  // 获取群组我新建任务
  missionGrouptask: `${serviceDomain}/tasks/group/`,
  // 获取群组发给我的任务
  resources: `${serviceDomain}/resources/folders/`,
  dirs: `${serviceDomain}/resources/dirs/`,
  classes: `${serviceDomain}/classes/`,
  // 获取rosters
  rosters: `${serviceDomain}/tenents/users/`,
  // 我的消息
  messages: `${serviceDomain}/messages/`,
  // 我的发布
  mysendmessage: `${serviceDomain}/messages/send/`,
  // 学情
  watchrecords: `${serviceDomain}/learning/watchrecords/`,
  notes: `${serviceDomain}/learning/notes/`,
  answers: `${serviceDomain}/learning/answers/`,
  incomplete: `${serviceDomain}/subtasks/incomplete/`,
  studentTasks: `${serviceDomain}/subtasks/`,
  studystatus: `${serviceDomain}/learning/studystatus/`,
  videoDetail: 'https://api.youku.com/videos/show.json?client_id=b803976f0c082cbe&video_id='
}
