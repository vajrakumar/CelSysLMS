describe("Employee", function() {

    var ViewPort = {
            main: function() {
                ST.component('app-main');
            },
            applyLeaveButton: function() {
                return ST.button('[handler=onApplyLeaveClick]')
            },
            logOutButton: function() {
                return ST.button('[text=Logout]')
            },
            leaveWin: function() {
                return ST.component('leave-window');
            }
        }
        /*,
                Data = {
                    userName: 'admin',
                    password: 'admin'
                }*/
    ;

    afterAll(function() {
        ST.wait(5000);
    });
    describe('Apply Leave', function() {
        it('should open apply leave window', function() {
            ViewPort.applyLeaveButton().click();
            ViewPort.leaveWin().visible();
        });


    });


});