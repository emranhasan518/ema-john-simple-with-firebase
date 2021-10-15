import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const {user} =useAuth();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
               
                <input placeholder="name" defaultValue={user.displayName} {...register("name")} />

                <input placeholder="email"  defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">Email is required</span>}

                <input placeholder="Address"  defaultValue="" {...register("Address")} />
                {/* {errors.Address && <span className="error">Address is required</span>} */}

                <input placeholder="Phone"  defaultValue="" {...register("Phone")} />
                {/* {errors.Phone && <span className="error">Phone is required</span>} */}

                <input placeholder="City"  defaultValue="" {...register("City")} />

                <input type="submit" />
            </form>        
        </div>
    );
};

export default Shipping;