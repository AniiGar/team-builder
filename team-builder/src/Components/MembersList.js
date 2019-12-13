import React from 'react';


function MembersList(props) {

    return(

        <div className='membersList'>

            <h3>Team Members</h3>

            {props.membersList.map((member)=>{
                
                return(
                    <div className='list' key={member.name}>
                        <p>Name: {member.name}</p>
                        <p>Email: {member.email}</p>
                        <p>Company: {member.company}</p>
                        <p>Role: {member.role}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default MembersList;