import { CheckCircle, Copy, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useActor } from "../hooks/useActor";
import { useScrollReveal } from "../hooks/useScrollReveal";

const steps = [
  {
    num: "01",
    title: "Fill the Inquiry Form",
    desc: "Submit your interest online or visit our reception desk.",
    color: "bg-school-blue",
  },
  {
    num: "02",
    title: "Campus Visit",
    desc: "Schedule a guided tour of our beautiful campus facilities.",
    color: "bg-school-blush",
  },
  {
    num: "03",
    title: "Interaction Session",
    desc: "A friendly interaction with your child to understand their readiness.",
    color: "bg-school-yellow",
  },
  {
    num: "04",
    title: "Confirmation & Enrollment",
    desc: "Complete documentation and fee payment to confirm your seat.",
    color: "bg-school-cta",
  },
];

export default function Admission() {
  useScrollReveal();
  useEffect(() => {
    document.title = "Admission \u2013 A. D Public School Nursery";
  }, []);

  const { actor } = useActor();
  const [form, setForm] = useState({
    childName: "",
    age: "",
    parentName: "",
    phoneNumber: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCopyUPI() {
    navigator.clipboard.writeText("deeptigambhir92@okicici").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.childName || !form.age || !form.parentName || !form.phoneNumber) {
      setError("Please fill in all fields.");
      return;
    }
    if (!actor) {
      setError("Not connected. Please try again.");
      return;
    }
    setLoading(true);
    try {
      await actor.submitAdmissionForm({
        childName: form.childName,
        age: BigInt(form.age),
        parentName: form.parentName,
        phoneNumber: form.phoneNumber,
        timestamp: BigInt(Date.now()),
      });
      setSuccess(true);
      setForm({ childName: "", age: "", parentName: "", phoneNumber: "" });
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="overflow-x-hidden">
      <section
        className="py-20 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.952 0.05 95 / 0.35) 0%, oklch(0.906 0.04 355 / 0.35) 100%), oklch(0.974 0.003 100)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Admission 2025&#x2013;26
          </h1>
          <p className="text-lg text-muted-foreground">
            Admissions are now open. Limited seats available. Apply today!
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">
              Admission Process
            </h2>
            <p className="text-muted-foreground">
              Simple 4-step process to secure your child&apos;s future.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.num}
                className="reveal bg-white rounded-3xl p-6 shadow-card text-center card-hover"
                style={{ transitionDelay: `${i * 80}ms` }}
                data-ocid={`admission.card.${i + 1}`}
              >
                <div
                  className={`w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                >
                  <span className="text-lg font-extrabold text-foreground">
                    {s.num}
                  </span>
                </div>
                <h4 className="font-bold text-foreground mb-2">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Payment via UPI */}
      <section className="py-16 px-4 bg-school-yellow/20">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 reveal">
            <h2 className="text-3xl font-extrabold text-foreground mb-3">
              Fee Payment via UPI
            </h2>
            <p className="text-muted-foreground">
              Scan the QR code below to pay school fees instantly.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="reveal bg-white rounded-3xl shadow-card p-6 flex flex-col items-center"
              style={{ maxWidth: 320 }}
              data-ocid="admission.card"
            >
              <div
                className="rounded-2xl overflow-hidden border border-border shadow-xs mb-4"
                style={{ width: 220, height: 300 }}
              >
                <img
                  src="/assets/uploads/whatsapp_image_2026-03-09_at_09.19.12-019d23e2-979a-7411-9085-df8a1f462bb7-3.jpeg"
                  alt="UPI QR Code for school fee payment"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <button
                type="button"
                onClick={handleCopyUPI}
                className="flex items-center gap-2 bg-muted hover:bg-muted/80 px-4 py-2 rounded-xl text-sm font-mono font-semibold text-foreground transition-colors mb-3"
                data-ocid="admission.primary_button"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? "Copied!" : "deeptigambhir92@okicici"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Scan to pay school fees via any UPI app
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 px-4 bg-school-blue/20">
        <div className="max-w-lg mx-auto">
          <div
            className="bg-white rounded-3xl p-8 shadow-card reveal"
            data-ocid="admission.modal"
          >
            {success ? (
              <div
                className="text-center py-8"
                data-ocid="admission.success_state"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-extrabold text-foreground mb-2">
                  Application Submitted!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Thank you! Our team will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSuccess(false)}
                  className="px-6 py-2.5 font-semibold bg-primary text-white rounded-pill btn-hover"
                  data-ocid="admission.primary_button"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-extrabold text-foreground mb-2">
                  Enquiry Form
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Fill the form and our admissions team will reach you shortly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="childName"
                      className="text-sm font-medium text-foreground mb-1 block"
                    >
                      Child&apos;s Full Name
                    </label>
                    <input
                      id="childName"
                      name="childName"
                      value={form.childName}
                      onChange={handleChange}
                      placeholder="e.g. Arjun Sharma"
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      data-ocid="admission.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="age"
                      className="text-sm font-medium text-foreground mb-1 block"
                    >
                      Child&apos;s Age (years)
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="1"
                      max="6"
                      value={form.age}
                      onChange={handleChange}
                      placeholder="e.g. 3"
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      data-ocid="admission.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="parentName"
                      className="text-sm font-medium text-foreground mb-1 block"
                    >
                      Parent&apos;s Full Name
                    </label>
                    <input
                      id="parentName"
                      name="parentName"
                      value={form.parentName}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      data-ocid="admission.input"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="text-sm font-medium text-foreground mb-1 block"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                      data-ocid="admission.input"
                    />
                  </div>
                  {error && (
                    <p
                      className="text-destructive text-sm"
                      data-ocid="admission.error_state"
                    >
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 font-semibold bg-primary text-white rounded-pill btn-hover flex items-center justify-center gap-2 disabled:opacity-60"
                    data-ocid="admission.submit_button"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {loading ? "Submitting..." : "Submit Application"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
