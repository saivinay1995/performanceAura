({
    doInit : function(component, event, helper) {
        var action=component.get("c.getContact");
        action.setCallback(this,function(response){
            var state=response.getState();
            if(state=='SUCCESS')
            {
                component.set("v.contacts",response.getReturnValue());
                component.set("v.tabledata",response.getReturnValue());
            }
            else
                console.log('error');
            
            console.log(component.get("v.contacts"));
            
        });
        $A.enqueueAction(action);
        
    },

    changeHandler : function(component, event, helper){
        var allcontacts=component.get("v.contacts");
        var searchKey=event.getSource().get('v.search');
        var allData=component.get("v.tabledata");
            var filtereddata = allData.filter(word => (!searchKey) || word.FirstName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 || word.LastName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1); 
        	component.set("v.tabledata",filtereddata);
        
        if(searchKey=='')
        {
            component.set("v.tabledata",allcontacts);
        }
        
        
    }
})