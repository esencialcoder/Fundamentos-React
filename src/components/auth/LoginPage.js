import Button from "../shared/button";

function LoginPage() {
    const handleSubmit = event => {
        event.preventDefault();
        console.log('submit', event.target.username.value, event.target.password.value);
    }

    return <div>
        <h1>Log in to Twitter</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" />
            <input type="password" name="password" />
            <Button type="submit" variant='primary'>Log in</Button> 
        </form>
    </div>; 

};

export default LoginPage;