public class ContactsController {
    @AuraEnabled
    public static List<Contact> getContact(){
        return [SELECT Id,FirstName,LastName FROM Contact];
    }
}
