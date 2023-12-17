import ContactForm from "@/components/component-form/ComponentForm";

export default function Contact() {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-center sm:py-20 sm:px-32 pb-12 px-8 sm:min-w-[650px] min-w-[100px] text-center">
        <h1 className="sm:text-6xl text-4xl text-apex-green pb-10">
          Let&apos;s Work Together
        </h1>
        <p className="pb-8 sm:text-md text-sm">
          Interested in outsourcing your bookkeeping services? Fill out your
          contact and business information in the form. I'll reach out to
          schedule a consultation, and answer any questions you may have.
        </p>
        <p className="sm:text-md text-sm">Have any additional questions?</p>
        <p className="pb-8 sm:text-md text-sm">
          Email your inquiry to{" "}
          <u>
            <a href="mailto:info@apexsheets.com">info@apexsheets.com</a>
          </u>
        </p>
        <p className="sm:text-md text-sm">
          Thank you for your interest in connecting with ApexSheets as your
          virtual bookkeeper.
        </p>
      </div>
      <div className="sm:w-1/2 sm:min-w-[450px] min-w-[100px] m-4">
        <ContactForm />
      </div>
    </div>
  );
}
