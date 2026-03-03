import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-semibold mb-6">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Terms of Service</h1>
          <p className="text-slate-300 text-lg">Last updated: January 1, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none space-y-8">

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using the website of My Dental Home ("we," "our," or "us"), operated by
              Dr. Faraz Sadiq, you agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our website or services. These terms apply to all visitors,
              patients, and users of our website and dental services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">2. Our Services</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              My Dental Home provides professional dental care services including, but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>General and preventive dentistry (scaling, polishing, fillings)</li>
              <li>Cosmetic dentistry (veneers, teeth whitening, Hollywood smile)</li>
              <li>Restorative dentistry (crowns, bridges, dental implants)</li>
              <li>Orthodontic treatments (braces, invisible aligners)</li>
              <li>Endodontic treatments (root canal therapy)</li>
              <li>Oral surgery (wisdom tooth extraction)</li>
              <li>Digital smile design and treatment planning</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              All services are provided at our clinic located at 120/A, Commercial Area Sector C, Bahria Town,
              Lahore, 53720, Pakistan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Appointments & Scheduling</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Appointments can be scheduled by calling us at <a href="tel:03278149889" className="text-accent hover:underline">0327 8149889</a> or visiting our clinic</li>
              <li>We kindly request at least 24 hours' notice for cancellations or rescheduling</li>
              <li>Walk-in patients are welcome but may be subject to availability</li>
              <li>Emergency dental appointments are accommodated whenever possible</li>
              <li>We reserve the right to reschedule appointments due to unforeseen circumstances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">4. Patient Responsibilities</h2>
            <p className="text-slate-600 leading-relaxed mb-4">As a patient, you agree to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Provide accurate and complete medical and dental history</li>
              <li>Inform us of any changes to your health, medications, or allergies</li>
              <li>Follow prescribed treatment plans and post-treatment instructions</li>
              <li>Arrive on time for scheduled appointments</li>
              <li>Make timely payments for services rendered</li>
              <li>Treat our staff and other patients with respect and courtesy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">5. Consent for Treatment</h2>
            <p className="text-slate-600 leading-relaxed">
              Before any dental procedure, we will explain the proposed treatment, alternatives, risks, and
              expected outcomes. Your informed consent will be obtained before proceeding with treatment.
              For patients under 18 years of age, consent must be provided by a parent or legal guardian.
              You have the right to refuse or discontinue treatment at any time, though we will explain the
              potential consequences of doing so.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">6. Fees & Payment</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Treatment fees will be discussed and agreed upon before commencing any procedure</li>
              <li>We accept cash, bank transfers, and major credit/debit cards</li>
              <li>A treatment estimate is provided for reference; final costs may vary depending on clinical findings</li>
              <li>Payment is expected upon completion of each visit unless otherwise agreed</li>
              <li>For extensive treatment plans, installment arrangements may be discussed on a case-by-case basis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">7. Treatment Outcomes & Limitations</h2>
            <p className="text-slate-600 leading-relaxed">
              While we strive for the best possible outcomes, dentistry is not an exact science. Results may
              vary based on individual patient factors including oral health condition, compliance with
              post-treatment care, and biological response. We do not guarantee specific results from any
              dental treatment. Before-and-after images displayed on our website are representative examples
              and may not reflect every patient's experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Website Use</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The content on our website is provided for informational purposes only and does not constitute
              medical or dental advice. By using this website, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Not rely solely on website content for dental health decisions — always consult a qualified dentist</li>
              <li>Not reproduce, distribute, or modify any content without our written permission</li>
              <li>Not attempt to interfere with the website's functionality or security</li>
              <li>Not use the website for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">9. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              All content on this website — including text, images, logos, graphics, and design — is the
              property of My Dental Home and is protected by applicable intellectual property laws. The
              "My Dental Home" name, logo, and branding are our trademarks. Unauthorized use of any
              content is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the fullest extent permitted by law, My Dental Home and Dr. Faraz Sadiq shall not be
              liable for any indirect, incidental, or consequential damages arising from the use of our
              website or services. Our total liability for any claim shall not exceed the amount paid by
              you for the specific service in question. This limitation does not apply to cases of
              gross negligence or willful misconduct.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">11. Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Your privacy is important to us. Please review our{' '}
              <Link to="/privacy-policy" className="text-accent hover:underline font-semibold">Privacy Policy</Link>{' '}
              to understand how we collect, use, and protect your personal and medical information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">12. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms of Service are governed by and construed in accordance with the laws of Pakistan.
              Any disputes arising from these terms or our services shall be subject to the exclusive
              jurisdiction of the courts in Lahore, Pakistan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">13. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective
              immediately upon posting to this page. Your continued use of our website or services after
              changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">14. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-bg-light rounded-2xl p-6 space-y-2">
              <p className="font-bold text-primary">My Dental Home by Dr. Faraz Sadiq</p>
              <p className="text-slate-600">120/A, Commercial Area Sector C, Bahria Town, Lahore, 53720</p>
              <p className="text-slate-600">Phone: <a href="tel:03278149889" className="text-accent hover:underline">0327 8149889</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
