export default function SteffenBirthdayRSVP() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-orange-50 to-yellow-50 text-slate-800">
      <section className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-medium shadow-sm ring-1 ring-orange-100 backdrop-blur">
              Save the date · Friday 12th June 2026
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Steffen’s 60th Birthday Party
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              We’d love to celebrate with you. Please let us know whether you can make it,
              how many people will be attending, and any dietary preferences for your group.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">Date</p>
                <p className="mt-2 text-base font-medium">Friday<br></br>12th June 2026 <br></br>6pm till 11pm </p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">Where</p>
                <p className="mt-2 text-base font-medium">The Barn<br></br>Hulcott Lane<br></br>Bierton<br></br>Aylesbury<br></br>HP22 5GA</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">RSVP</p>
                <p className="mt-2 text-base font-medium">by 30 April please</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-xl ring-1 ring-slate-200 md:p-8">
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <p className="mb-2 block text-sm font-semibold text-slate-700">Will you be attending?</p>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-green-300 hover:bg-green-50">
                    <input type="radio" name="attendance" value="attending" className="h-4 w-4" />
                    <span className="font-medium">Joyfully accept</span>
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 transition hover:border-rose-300 hover:bg-rose-50">
                    <input type="radio" name="attendance" value="declining" className="h-4 w-4" />
                    <span className="font-medium">Regretfully decline</span>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="mb-2 block text-sm font-semibold text-slate-700">
                  Number of people
                </label>
                <input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  placeholder="1"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <div>
                <label htmlFor="dietary" className="mb-2 block text-sm font-semibold text-slate-700">
                  Dietary preferences
                </label>
                <textarea
                  id="dietary"
                  rows={4}
                  placeholder="Please tell us about any allergies, intolerances, vegetarian/vegan preferences, or other dietary requirements."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-300 focus:ring-4 focus:ring-orange-100"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-slate-900 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5"
              >
                Send RSVP
              </button>

              <p className="text-center text-sm text-slate-500">
                This demo page is ready for you to customize and connect to email, Google Sheets, Airtable, or any RSVP collection tool.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-[2rem] bg-white/80 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur md:p-8">
          <h2 className="text-2xl font-bold text-slate-900">What this page includes</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-orange-50 p-5">
              <h3 className="font-semibold text-slate-900">Guest RSVP form</h3>
              <p className="mt-2 text-slate-600">
                Guests can enter their name, confirm or decline attendance, choose the number in their party, and share dietary requirements.
              </p>
            </div>
            <div className="rounded-2xl bg-pink-50 p-5">
              <h3 className="font-semibold text-slate-900">Easy to customise</h3>
              <p className="mt-2 text-slate-600">
                You can add venue details, party time, RSVP deadline, gift message, accommodation info, or a photo gallery.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
