module.exports = {
  list: {
    query: "select * from t_person",
  },
  createUser: {
    query: "insert into userTable set ?", // insert into t_person set first_name='Kim', last_name='Uicheon', email='drooom@naver.com'
    // 물음표 2개는 값 2개를 준다
  },
  getUser: {
    query: "select * from userTable where user_id = ? and user_password = ?",
  },
  deletePerson: {
    query: "delete from t_person where id=?",
  },
  updatePerson: {
    query: "update t_person set ? where id=?",
  },
  //_________________________________________________________________________________
  create_EventTable: {
    query: "insert into t_event set ?",
  },
  create_PhotoTable: {
    query: "insert into t_photo set ?",
  },
  create_BuisnessTable: {
    query: "insert into t_buisness set ?",
  },
  create_UserTable: {
    query: "insert into t_user set ?",
  },
};
