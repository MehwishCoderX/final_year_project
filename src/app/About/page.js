import Head from 'next/head';

function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn about our company" />
      </Head>

      <main className="mt-10">
        <h1 className="text-3xl font-bold mb-5">About Us</h1>
        <p className="text-lg">
          {/* Place your about page content here */}
          This is where you would describe your company, mission, history, etc. 
        </p>
      </main>
    </div>
  );
}

export default AboutPage;
