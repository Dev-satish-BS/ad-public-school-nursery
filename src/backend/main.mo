import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Time "mo:core/Time";
import List "mo:core/List";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import AccessControl "authorization/access-control";

actor {
  let _admissions = Map.empty<Text, AdmissionForm>();
  let _contacts = Map.empty<Text, ContactForm>();
  let _gallery = Map.empty<Text, GalleryItem>();
  let _testimonials = Map.empty<Text, Testimonial>();

  module Testimonial {
    public func compareByRating(a : Testimonial, b : Testimonial) : Order.Order {
      Nat.compare(b.rating, a.rating); // descending order
    };
  };

  module GalleryItem {
    public func compareByCategory(a : GalleryItem, b : GalleryItem) : Order.Order {
      Text.compare(a.category, b.category);
    };
    public func compareByTitle(a : GalleryItem, b : GalleryItem) : Order.Order {
      Text.compare(a.title, b.title);
    };
  };

  type AdmissionForm = {
    childName : Text;
    age : Nat;
    parentName : Text;
    phoneNumber : Text;
    timestamp : Int;
  };
  type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
    phone : ?Text;
    timestamp : Int;
  };
  type GalleryItem = {
    title : Text;
    category : Text;
    blob : Storage.ExternalBlob;
    timestamp : Int;
  };
  type Testimonial = {
    parentName : Text;
    text : Text;
    photoKey : ?Storage.ExternalBlob;
    timestamp : Int;
    rating : Nat;
  };
  /// Persistent state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  include MixinStorage();

  public shared ({ caller }) func submitAdmissionForm(form : AdmissionForm) : async () {
    let id = form.childName.concat(form.parentName);
    let timestampedForm : AdmissionForm = {
      form with timestamp = Time.now();
    };
    _admissions.add(id, timestampedForm);
  };

  public shared ({ caller }) func submitContactForm(form : ContactForm) : async () {
    let id = form.name.concat(form.email);
    let timestampedForm : ContactForm = {
      form with timestamp = Time.now();
    };
    _contacts.add(id, timestampedForm);
  };

  public shared ({ caller }) func publishGalleryItem(item : GalleryItem) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    let id = item.title.concat(item.category);
    let timestampedItem : GalleryItem = {
      item with timestamp = Time.now();
    };
    _gallery.add(id, timestampedItem);
  };

  public shared ({ caller }) func removeGalleryItem(id : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    _gallery.remove(id);
  };

  public query ({ caller }) func getAllGalleryItems() : async [GalleryItem] {
    let array = _gallery.toArray().map(func((key, value)) { value });
    array.sort(GalleryItem.compareByCategory).sort(GalleryItem.compareByTitle);
  };

  public query ({ caller }) func getGalleryItemsByCategory(category : Text) : async [GalleryItem] {
    _gallery.values().filter(func(item) { item.category == category }).toArray();
  };

  public shared ({ caller }) func saveTestimonial(testimonial : Testimonial) : async () {
    let id = testimonial.parentName.concat(testimonial.text);
    let timestampedTestimonial : Testimonial = {
      testimonial with timestamp = Time.now();
    };
    _testimonials.add(id, timestampedTestimonial);
  };

  public shared ({ caller }) func removeTestimonial(id : Text) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    _testimonials.remove(id);
  };

  public query ({ caller }) func getAllTestimonials() : async [Testimonial] {
    _testimonials.values().toArray().sort(Testimonial.compareByRating);
  };

  public query ({ caller }) func getAllAdmissions() : async [AdmissionForm] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    _admissions.values().toArray();
  };

  public query ({ caller }) func getAllContacts() : async [ContactForm] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admin can perform this action");
    };
    _contacts.values().toArray();
  };
};
