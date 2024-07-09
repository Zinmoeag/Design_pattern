interface LoginServiceInterface{
    login : () => boolean
}

class GoogleLogin implements LoginServiceInterface{
    public login() : boolean{ 
        console.log("login with google");
        return true;
    }
}

class FaceBookLogin implements LoginServiceInterface{
    public login() : boolean{
        console.log("login with facebook");
        return true;
    }
}

class LoginService{
    private myLogin : LoginServiceInterface | null = null;
    constructor(myLogin : LoginServiceInterface){
        this.myLogin = myLogin
    }
    public dologin() : boolean{
        return this.myLogin?.login() || false
    }
}


//stretagy pattern
class LoginController {  
    login () {
       const loginService = new LoginService(new FaceBookLogin());
       return loginService.dologin()
    }

    register(){
        console.log("not implemented");
    }
}

const controller = new LoginController();
console.log(controller.login());
