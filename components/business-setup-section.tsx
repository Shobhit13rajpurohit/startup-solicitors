import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BusinessSetupIndia() {
  return (
    <section className="mt-12 py-12 bg-gray-50" aria-labelledby="business-setup-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="business-setup-heading" className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">
          Seamless Business Setup in India
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-8">
          From ideation to incorporation, our experts provide end-to-end support to establish your business in India's thriving market. We handle the legalities so you can focus on growth.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-blue-600 mb-2">Market Entry Strategy</h3>
            <p className="text-gray-600">Expert advice on the best legal structure and market approach for your venture.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-blue-600 mb-2">Regulatory Compliance</h3>
            <p className="text-gray-600">Ensuring your business adheres to all central and state regulations from day one.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold text-xl text-blue-600 mb-2">Ongoing Legal Support</h3>
            <p className="text-gray-600">Continuous assistance with contracts, compliance, and corporate governance.</p>
          </div>
        </div>
        <div className="mt-10">
          <Link href="/business-setup-india" passHref>
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 text-lg"
              aria-label="Learn more about Business Setup in India"
            >
              Explore Business Setup Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}