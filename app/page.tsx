import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ChatWidgets from "@/components/chat-widgets";
import ClientSlider from "@/components/client-slider";
import YouTubeVideo from "@/components/YouTubeVideo";

export default function HomePage() {
  return (
    <>
      {/* Head Component for SEO and Metadata */}
      <Head>
        <title>Online Legal Support for Business in India | Startup Solicitors</title>
        <meta
          name="description"
          content="Comprehensive online legal support for startups and businesses in India. Expert services in business incorporation, taxation, IPR, and immigration."
        />
        <meta name="keywords" content="legal support, business incorporation, taxation, IPR, immigration, startups, India" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.startupsolicitors.com/" />
        {/* OpenGraph Tags */}
        <meta property="og:title" content="Online Legal Support for Business in India | Startup Solicitors" />
        <meta
          property="og:description"
          content="Expert legal services for startups and businesses in India, including incorporation, taxation, IPR, and immigration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.startupsolicitors.com/" />
        <meta property="og:image" content="https://www.startupsolicitors.com/images/og-image.jpg" />
        <meta property="og:site_name" content="Startup Solicitors" />
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Online Legal Support for Business in India | Startup Solicitors" />
        <meta
          name="twitter:description"
          content="Expert legal services for startups and businesses in India, including incorporation, taxation, IPR, and immigration."
        />
        <meta name="twitter:image" content="https://www.startupsolicitors.com/images/og-image.jpg" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Startup Solicitors",
            url: "https://www.startupsolicitors.com/",
            logo: "https://www.startupsolicitors.com/images/logo.png",
            description: "Online legal support for startups and businesses in India, specializing in business incorporation, taxation, IPR, and immigration services.",
            contactPoint: {
              "@type": "ContactPoint",
              email: "immigration@startupsolicitors.com",
              contactType: "Customer Service",
            },
            sameAs: [
              "https://twitter.com/startupsolicitors",
              "https://www.linkedin.com/company/startupsolicitors",
            ],
          })}
        </script>
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Invest India Card */}
              <Card className="bg-[#0198DB] text-white mb-8">
                <CardContent className="p-6 flex flex-col h-full">
                  <h2 className="text-xl font-bold mb-4">Invest in India</h2>
                  <p className="text-sm mb-6 flex-grow">
                    Navigate the complexities of setting up a business in India with our expert legal guidance.
                  </p>
                  <div className="mb-6">
                    <Image
                      src="/magnet_img.png"
                      alt="Illustration of investment opportunities in India"
                      width={120}
                      height={80}
                      className="mx-auto"
                      loading="lazy"
                    />
                  </div>
                  <Link href="/invest-india" passHref>
                    <Button
                      variant="outline"
                      className="w-full text-white bg-[#0198DB] hover:bg-blue-700 border-white"
                      aria-label="Learn more about investing in India"
                    >
                      Read more
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* YouTube Video Section */}
              <YouTubeVideo />

              {/* Law Blog Section */}
              <section aria-labelledby="law-blog-heading" className="mt-8">
                <h2 id="law-blog-heading" className="text-xl font-bold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                  Law Blog
                </h2>
                <div className="space-y-6">
                  <article>
                    <time className="text-sm text-gray-500 mb-2 block" dateTime="2025-06-25">
                      June 25, 2025
                    </time>
                    <h3 className="font-semibold mb-2">
                      Nominee Director Services in India: Why You Might Need One
                    </h3>
                    <Link
                      href="/blogs/nominee-director-services-in-india"
                      className="text-blue-600 text-sm hover:underline"
                      aria-label="Read more about nominee director services in India"
                    >
                      Read more
                    </Link>
                  </article>
                  <article>
                    <time className="text-sm text-gray-500 mb-2 block" dateTime="2025-06-24">
                      June 24, 2025
                    </time>
                    <h3 className="font-semibold mb-2">
                      Essential Steps for Foreigners to Set Up a Company in India
                    </h3>
                    <Link
                      href="/blogs/setting-up-company-india-foreigners"
                      className="text-blue-600 text-sm hover:underline"
                      aria-label="Read more about setting up a company in India for foreigners"
                    >
                      Read more
                    </Link>
                  </article>
                </div>
                <div className="mt-6">
                  <Link
                    href="/blogs"
                    className="text-blue-600 font-semibold hover:underline"
                    aria-label="View all blog posts"
                  >
                    View All
                  </Link>
                </div>
              </section>
            </aside>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Hero Section */}
              <section aria-labelledby="hero-heading">
                <h1
                  id="hero-heading"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-blue-600 mb-8 leading-tight"
                >
                  Online Legal Support for Doing Business in India
                </h1>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {/* Business Incorporation Card */}
                  <Card className="bg-[#cf8e00] text-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h2 className="text-xl font-bold mb-4">Business Incorporation</h2>
                      <ul className="space-y-2 text-sm mb-6 flex-grow" aria-label="Business incorporation services">
                        <li>Sole Proprietorship</li>
                        <li>Partnership/LLP</li>
                        <li>Private Limited Company (Pvt Ltd)</li>
                        <li>Public Company</li>
                        <li>Trusts</li>
                        <li>Not for Profit</li>
                        <li>Crypto Currency Trading Company</li>
                      </ul>
                      <Link href="/services/business-incorporation" passHref>
                        <Button
                          variant="outline"
                          className="w-full text-white bg-[#cf8e00] hover:bg-[#b8790a] border-white"
                          aria-label="Learn more about business incorporation services"
                        >
                          Read more
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Taxation & IPR Card */}
                  <Card className="bg-[#59a618] text-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h2 className="text-xl font-bold mb-4">Taxation & IPR</h2>
                      <ul className="space-y-2 text-sm mb-6 flex-grow" aria-label="Taxation and IPR services">
                        <li>Trademark</li>
                        <li>Patent</li>
                        <li>Copyright</li>
                      </ul>
                      <Link href="/services/taxation-ipr" passHref>
                        <Button
                          variant="outline"
                          className="w-full text-white bg-[#59a618] hover:bg-[#4a8e14] border-white"
                          aria-label="Learn more about taxation and IPR services"
                        >
                          Read more
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>

                  {/* Immigration Card */}
                  <Card className="bg-[#cf8e00] text-white">
                    <CardContent className="p-6 flex flex-col h-full">
                      <h2 className="text-xl font-bold mb-4">Immigration</h2>
                      <ul className="space-y-2 text-sm mb-6 flex-grow" aria-label="Immigration services">
                        <li>Study Abroad</li>
                        <li>Settle Abroad</li>
                      </ul>
                      <div className="text-sm mb-6">
                        <a
                          href="mailto:immigration@startupsolicitors.com"
                          className="hover:underline"
                          aria-label="Contact us for immigration services"
                        >
                          immigration@startupsolicitors.com
                        </a>
                      </div>
                      <Link href="/services/immigration" passHref>
                        <Button
                          variant="outline"
                          className="w-full text-white bg-[#cf8e00] hover:bg-[#b8790a] border-white"
                          aria-label="Learn more about immigration services"
                        >
                          Read more
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </div>
          </div>

          {/* Our Clients Section */}
          <section className="mt-8" aria-labelledby="clients-heading">
            <h2 id="clients-heading" className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-8">
              Our Clients
            </h2>
            <ClientSlider />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Chat Widget */}
        <ChatWidgets />
      </div>
    </>
  );
}