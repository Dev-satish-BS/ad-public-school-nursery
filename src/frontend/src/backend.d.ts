import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface ContactForm {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone?: string;
}
export interface AdmissionForm {
    age: bigint;
    timestamp: bigint;
    phoneNumber: string;
    childName: string;
    parentName: string;
}
export interface GalleryItem {
    title: string;
    blob: ExternalBlob;
    timestamp: bigint;
    category: string;
}
export interface Testimonial {
    text: string;
    photoKey?: ExternalBlob;
    timestamp: bigint;
    rating: bigint;
    parentName: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllAdmissions(): Promise<Array<AdmissionForm>>;
    getAllContacts(): Promise<Array<ContactForm>>;
    getAllGalleryItems(): Promise<Array<GalleryItem>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getCallerUserRole(): Promise<UserRole>;
    getGalleryItemsByCategory(category: string): Promise<Array<GalleryItem>>;
    isCallerAdmin(): Promise<boolean>;
    publishGalleryItem(item: GalleryItem): Promise<void>;
    removeGalleryItem(id: string): Promise<void>;
    removeTestimonial(id: string): Promise<void>;
    saveTestimonial(testimonial: Testimonial): Promise<void>;
    submitAdmissionForm(form: AdmissionForm): Promise<void>;
    submitContactForm(form: ContactForm): Promise<void>;
}
