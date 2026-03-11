import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";

import Iter "mo:core/Iter";


actor {
  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  var nextId = 1;

  let submissions = Map.empty<Nat, ContactSubmission>();

  public shared ({ caller }) func submitContact(name : Text, email : Text, phone : Text, message : Text) : async () {
    let id = nextId;
    nextId += 1;

    let submission : ContactSubmission = {
      id;
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };

    submissions.add(id, submission);
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray();
  };

  public query ({ caller }) func getSubmission(id : Nat) : async ?ContactSubmission {
    submissions.get(id);
  };

  public shared ({ caller }) func deleteSubmission(id : Nat) : async () {
    switch (submissions.get(id)) {
      case (null) { Runtime.trap("Submission does not exist! ") };
      case (?_submission) { submissions.remove(id) };
    };
  };
};
