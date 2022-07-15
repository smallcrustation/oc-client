import React from 'react'
import { useHistory } from 'react-router-dom';
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'


function CreateUserPage() {
  let history = useHistory();

  const onSuccessfulCreateUser = () => {
    // this.setState({accountCreated: false})
    return history.push('/portfolio')
  }

  return (
    <div className='CreateUserPage'>
      <CreateUserForm onSuccessfulCreateUser={onSuccessfulCreateUser}/>
    </div>
  )
}

export default CreateUserPage