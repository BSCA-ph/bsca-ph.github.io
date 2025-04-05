// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Contact Us</h1>
        <form
          action="https://formspree.io/f/movekodr"
          method="POST"
          className="space-y-6 bg-gray-100 p-6 rounded-xl shadow-md"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-400 text-gray-900 shadow-sm focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-400 text-gray-900 shadow-sm focus:ring focus:ring-indigo-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border border-gray-400 text-gray-900 shadow-sm focus:ring focus:ring-indigo-200"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-800"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="mt-10 text-gray-800 text-sm md:text-base bg-white border-t pt-6">
          <h2 className="text-xl font-semibold mb-2">Baguio Siloam Christian Academy</h2>
          <p>📍 No. 7 First Road, Quezon Hill Proper, Baguio City, Philippines</p>
          <p>📞 (074) 442-5455 / 0921-982-1412</p>
          <p>✉️ bscaadmissions@gmail.com</p>
          <p className="mt-2">We look forward to hearing from you!</p>
        </div>
      </div>
    </div>
  );
}
