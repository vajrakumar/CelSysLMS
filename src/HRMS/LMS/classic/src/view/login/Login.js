Ext.define('LMS.view.login.Login', {
    extend: 'Ext.container.Container',
    alias:'widget.login-page',
     controller: 'login',
    bodyPadding: 100,
    title: 'Login Window',
    cls:'ctr-cls',
    layout:{
        type:'vbox',
        align:'center',
        pack:'center',
        padding:'150',        
    },
   items:[{
        xtype: 'form',
        bodyCls:'form-cls', 
        layout:{
        type:'vbox',
        align:'center',
        pack:'center',
        padding:'60',
        ui: '',
               
        },
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'checkbox',
            boxLabel: 'Remember Me'
        }],
        buttons: [{
            text: 'Login',
            //cls: 'x-toolbar-grey-btn',
            //ui:'round',
            cls:'button-cls',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }],
    }],    
    renderTo:Ext.getBody()
    
});