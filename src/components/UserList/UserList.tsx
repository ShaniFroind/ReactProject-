import React, { FC, useEffect, useRef, useState } from 'react';
import './UserList.scss'
import apiService from '../../Servise/api.service';
import User from '../../Model/User';
import Loadder from '../loadder/loadder';
import UserDetials from '../userDetials/userDetials';
import UserModel from '../userModel/userModel';
import cilMagnifyingGlass from '@coreui/icons-react';
import Trail from '../Trail/Trail';




interface UserListProps { }

const UserList: FC<UserListProps> = () => {
  const [usersList, setUsersList] = useState<User[]>([]);
  const [isLoadd, setIsLoadd] = useState<boolean>(false);
  const [searchList, setSearchList] = useState<User[]>([]);
  const [isExist, setIsExist] = useState<boolean>(false)
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [dellUser, setDellUser] = useState<User>(new User("", "", "", ""));
  const [failDell, setFailDell] = useState<boolean>(false);
  const [userAdded, setUserAdded] = useState<boolean>(false);
  const [userAddedObject, setUserAddedObject] = useState<User>(new User("", "", "", ""))
  const searchValueRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsLoadd(true);
    apiService.getUser()
      .then((res: any) => {
        setIsLoadd(false);
        const userList = res.data.map((user: any) => new User(user.id, user.name, user.username, user.email));
        setUsersList(userList);
        setSearchList(userList);
      })
      .catch((error: any) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const searchValue = () => {
    if (searchValueRef.current) {
      let inputValue = searchValueRef.current.value;
      setSearchList(usersList.filter((item: User) => item.name.includes(inputValue)));
    }
  };

  const addToUserList = (user: User) => {
    const userExists = usersList.some((u: User) => u.email === user.email || u.id === user.id);
    setIsExist(userExists);
    if (!userExists) {
      // setUsersList((prevList) => [...prevList, user]);
      // setSearchList((prevList) => [...prevList, user]);
      usersList.push(user);
      setUsersList([...usersList])
      setSearchList([...usersList])
      setUserAdded(true);
      setUserAddedObject({ ...user });
      // alert(`The user ${user.name} added to users successfully`);
    }
  };
  const addMasege = () => {
    deleteUser(userAddedObject);
    setUserAdded(false)
  }
  const deleteUser = (user: User) => {

    setIsDelete(true);
    console.log('isDelete', isDelete)
    setDellUser(user);
  };
  const deleteReqest = () => {

    console.log('isDell', isDelete)
    apiService.deleteUser(dellUser)
      .then(() => {
        alert(`User ${dellUser.name} deleted successfully`);
        let indexOf = usersList.findIndex(user => user.id == dellUser.id)
        if (indexOf != -1) {
          usersList.splice(indexOf, 1);
          setUsersList([...usersList])
          setSearchList([...usersList])
        }

      })
      .catch((error) => {

        setFailDell(true);
      })
      .finally(() => {
        setIsDelete(false);
      });
  };


  return (
    <div>
      <h1 className='text-center'>my users</h1>
      <div className="container-fluid">
        <div className='row'>
          <div className="col-md-6  mt6">
            {/* <UserDetials addToUsersList={addToUserList}></UserDetials> */}
            <Trail addToUsersList={addToUserList}></Trail>
            {isExist ? <UserModel
              titel="oops"
              onClick={() => { setIsExist(false) }}
              onClickDescraption="try agine"
              onClose={() => { setIsExist(false) }}><h2>there is such a user</h2></UserModel> : null}
          </div>
          {userAdded ? <UserModel
            titel="congratulation!!"
            onClick={addMasege}
            onClickDescraption="delete user"
            onClose={() => { setUserAdded(false) }}
          ><h4>the user:{userAddedObject.name} added sucssesfaly</h4></UserModel> : null}
          <div className="col-md-6 ">
            <form className="form-inline">
              <i className="fas fa-search" aria-hidden="true"></i>
              <input
                className="form-control form-control-sm ml-3 w-75"
                ref={searchValueRef}
                onChange={searchValue}
                type="text"
                placeholder="Search"
                aria-label="Search"
              />
            </form>{

            }
            <table className="table table-hover">
              {isLoadd ? <Loadder titel='table loaded'></Loadder> : null}
              <thead >
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">UserName</th>
                  <th scope="col">Email</th>
                  <th scope="col">Delete User</th>
                </tr>
              </thead>
              <tbody>
                {searchList.map((u: User, index: number) => (
                  <tr key={index}>
                    <th scope="row">{u.id}</th>
                    <td>{u.name}</td>
                    <td>{u.userName}</td>
                    <td>{u.email}</td>
                    <td>
                      <button id={u.id} onClick={() => (deleteUser(u))} className='myb'>Delete</button>
                      {isDelete ? (
                        <UserModel
                          titel='Delete User'
                          onClick={deleteReqest}
                          onClickDescraption='delete'
                          onClose={() => { setIsDelete(false) }}

                        >
                          <h4>{`Are you sure you want to delete the user: ${dellUser.name}`}</h4>
                          <p>Once deleted, you will not be able to recover the user information</p>
                        </UserModel>
                      ) : null}
                    </td>
                    {failDell ? <UserModel
                      titel='Delete User failed'
                      onClickDescraption='try agine'
                      onClick={() => {
                        setFailDell(false)
                        setIsDelete(true);
                      }}

                      onClose={() => { setFailDell(false) }}
                    ><h2>error</h2><p>We could not delete the user</p></UserModel> : null}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;

