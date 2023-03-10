import Image from 'next/image'
import React from 'react'
import Input from '../../atoms/Input'

export default function EditProfileForm() {
    return (
        <form action="">
            <div className="photo d-flex">
                <div className="position-relative me-20">
                    <Image alt="avatar" src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" />
                    <div
                        className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center">
                        <Image src="/icon/trash.svg" width={20} height={20} alt="trash" />
                    </div>
                </div>
                <div className="image-upload">
                    <label htmlFor="avatar">
                        <Image src={`/icon/upload.svg`} height={90} width={90} alt="upload" />
                    </label>
                    <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                </div>
            </div>
            <div className="pt-30">
                <Input id='name' name='name' label='Full Name' type='text' placeholder='Enter your name' />
            </div>
            <div className="pt-30">
                <Input id='email' name='email' label='Email Address' type='email' placeholder='Enter your email address' />
            </div>
            <div className="pt-30">
                <Input id='phone' name='phone' label='Phone' type='tel' placeholder='Enter your phone number' />
            </div>
            <div className="button-group d-flex flex-column pt-50">
                <button type="submit" className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    role="button">Save My Profile</button>
            </div>
        </form>
    )
}
