import Time "mo:core/Time";
import List "mo:core/List";

actor {
  type Contact = {
    name : Text;
    email : Text;
    phone : Text;
    className : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let contacts = List.empty<Contact>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, className : Text, message : Text) : async () {
    let contact : Contact = {
      name;
      email;
      phone;
      className;
      message;
      timestamp = Time.now();
    };
    contacts.add(contact);
  };

  public query ({ caller }) func getAllContacts() : async [Contact] {
    contacts.toArray();
  };
};
