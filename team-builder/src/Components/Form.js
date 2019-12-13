import React, {useState} from 'react';


function Form(props) {
    const [newMember, setNewMember] = useState({
        name: '',
        email: '',
        company: '',
        role: ''
    });

    const changeHandler = event => {
        setNewMember({...newMember, [event.target.name]: event.target.value});
    }

    const submitForm = event => {
        event.preventDefault();
        const member = {...newMember};
        props.newMember(member);
    }

    return(
        <div className='FormDiv'>
            <h2>Please complete form</h2>

            <form className='form' onSubmit={submitForm}>
                
                <label htmlFor='name' className='name'>
                    Name: 
                    <input  type='text'
                            name='name'
                            placeholder='Full Name'
                            value={newMember.name}
                            onChange={changeHandler}
                    />                
                </label>

                <label htmlFor='email' className='email'>
                    Email:
                    <input  type='text'
                            name='email'
                            placeholder='Email Address'
                            value={newMember.email}
                            onChange={changeHandler}
                    />                      
                </label>

                <label htmlFor='company' className='company'>
                    Company:
                    <input  type='text'
                            name='company'
                            placeholder='Company Name'
                            value={newMember.company}
                            onChange={changeHandler}
                    />
                </label>

                <label htmlFor='role' className='role'>
                    Role:
                    <input  type='text'
                            name='role'
                            placeholder='Developer Role'
                            value={newMember.role}
                            onChange={changeHandler}
                    />
                </label>

                <button type='submit' className='submitButton'>Add Member</button>

            </form>
        </div>
    )

}

export default Form;