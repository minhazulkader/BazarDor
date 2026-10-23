
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-green-700">
            আপনার প্রতিদিনের বাজার
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            আজকের বাজারদর জানুন,
            <span className="block text-green-700">
              সঠিক সিদ্ধান্ত নিন
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            নিত্যপ্রয়োজনীয় পণ্যের দাম দেখুন, বাজারদরের পরিবর্তন বুঝুন
            এবং কেনাকাটার পরিকল্পনা করুন সহজেই।
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#market-prices"
              className="rounded-lg bg-green-700 px-6 py-3 font-medium text-white transition hover:bg-green-800"
            >
              বাজারদর দেখুন
            </a>

            <a
              href="#categories"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium transition hover:bg-gray-50"
            >
              পণ্য দেখুন
            </a>
          </div>
        </div>
      </section>

      <section
        id="market-prices"
        className="border-t border-gray-100 bg-gray-50"
      >
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">আজকের বাজারদর</h2>
          <p className="mt-2 text-gray-600">
            নিত্যপ্রয়োজনীয় পণ্যের দাম শিগগিরই এখানে দেখানো হবে।
          </p>
        </div>
      </section>

      <section
        id="categories"
        className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
      >
        <h2 className="text-2xl font-bold">পণ্যের ক্যাটাগরি</h2>
        <p className="mt-2 text-gray-600">
          বিভিন্ন ক্যাটাগরির পণ্য এখানে পাওয়া যাবে।
        </p>
      </section>
    </main>
  );
}
