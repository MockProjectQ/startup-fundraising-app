import React from 'react'
import {TextField} from '@material-ui/core';


function SignupDetails() {
    return (
        <div>
            <form key={"haha"} > {/* onSubmit={handleSubmit}> */}
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="fullname"
                    label="Full Name"
                    name="fullname"
                    autoComplete="name"
                    autoFocus
                // inputRef={email}
                />

                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                // inputRef={email}
                />
                <TextField
                    // inputRef={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    id="password"
                />
                <TextField
                    // inputRef={password}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    id="confirmPassword"
                />

            </form>

        </div>
    )
}

export default SignupDetails
