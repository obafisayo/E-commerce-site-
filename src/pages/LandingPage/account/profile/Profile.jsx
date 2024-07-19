import React from 'react'
import { NavLink } from 'react-router-dom';
import PrimaryButton from '../../../../components/shared/primarybutton/PrimaryButton';

const Profile = ({user}) => {
  return (
    <form action="submit" className="flex gap-4 flex-col" id='myForm1'>
        <div className="flex flex-wrap gap-6">
            { [ ["First Name", "text", user.firstname], ["Last Name", "text", user.lastname],
                ["Email Address", "email", user.email],  ["Address", "text", user.address]
            ].map((label, index) => (
            <div className="w-full md:w-[330px] gap-2 flex flex-col" key={index}>
                <label htmlFor={label[0]} className="">{label[0]}</label>
                <input type={label[1]} name={label[0]} id={label[0]}
                placeholder={label[2]}
                className="bg-secondary px-4 py-2 rounded w-full transition duration-500"
                />
            </div>
            ))}
        </div>
        <div className="gap-2 flex flex-col">
            <label htmlFor="current-password" className="">Password Changes</label>
            <div className="flex flex-col gap-4">
            <input type="text" name="current-password" id="current-password" placeholder="Current Password"
                className="bg-secondary px-4 py-2 rounded w-full transition duration-500"
            />
            <input type="text" name="new-password" id="new-password" placeholder="New Password"
                className="bg-secondary px-4 py-2 rounded w-full transition duration-500"
            />
            <input type="text" name="confirm-password" id="confirm-password" placeholder="Confirm Password"
                className="bg-secondary px-4 py-2 rounded w-full transition duration-500"
            />
            </div>
        </div>
        <div className="flex gap-3 mt-1 items-center justify-end">
            <NavLink className={"px-4 py-2 rounded-md"}
            onClick={() => document.getElementById("myForm1").reset()}>
            Cancel
            </NavLink>
            <PrimaryButton bgColor={"bg-brandRed"}
            text={"Save Changes"}
            textColor={'text-white'}
            />
        </div>
    </form>
  )
}

export default Profile;
