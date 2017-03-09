describe("Login", function() {

    var Login = {
            userNameTextField: function() {
                return ST.textField('[name=username]');
            },
            passwordTextField: function() {
                return ST.textField('[name=password]');
            },
            loginButton: function() {
                return ST.button('[text=Login]');
            }
        },
        ViewPort = {
            main: function() {
                ST.component('app-main');
            },
            logOutButton: function() {
                return ST.button('[text=Logout]')
            }
        },
        Data = {
            userName: 'admin',
            password: 'admin'
        };

    afterAll(function() {
        ST.wait(5000);
    });

    it("should login", function() {
        Login.userNameTextField().type(Data.userName);
        Login.passwordTextField().type(Data.password);
        Login.loginButton().click();
        // ViewPort.main().visible();
    });

    it('should logout', function() {
        ViewPort.logOutButton().click();
    });
});