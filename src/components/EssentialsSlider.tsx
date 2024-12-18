import Image from "next/image";

export default function EssentialsSlider() {
  return (
    <section className="px-4 py-8 mx-[50px]">
      <h2 className="text-xl font-semibold mb-6">Essential Items</h2>
      <div className="flex flex-wrap justify-between">
        {/* Men's Section */}
        <div className="w-full md:w-1/3 p-2 border border-gray-200 rounded relative">
          <Image
            src="/12.png" // Update with your image path
            alt="Men's Essential Items"
            width={500}
            height={500}
            className="rounded"
          />
          <button className="absolute bottom-4 left-4 bg-white px-3 py-1 text-sm font-medium rounded-full hover:bg-gray-200 transition duration-300">
            Men's Collection
          </button>
        </div>

        {/* Women's Section */}
        <div className="w-full md:w-1/3 p-2 border border-gray-200 rounded relative">
          <Image
            src="/13.png" // Update with your image path
            alt="Women's Essential Items"
            width={500}
            height={500}
            className="rounded"
          />
          <button className="absolute bottom-4 left-4 bg-white px-3 py-1 text-sm font-medium rounded-full hover:bg-gray-200 transition duration-300">
            Women's Collection
          </button>
        </div>

        {/* Kids' Section */}
        <div className="w-full md:w-1/3 p-2 border border-gray-200 rounded relative">
          <Image
            src="/14.png" // Update with your image path
            alt="Kids' Essential Items"
            width={500}
            height={500}
            className="rounded"
          />
          <button className="absolute bottom-4 left-4 bg-white px-3 py-1 text-sm font-medium rounded-full hover:bg-gray-200 transition duration-300">
            Kids&apos; Collection
          </button>
        </div>
      </div>

      {/* Links Section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="hover:text-gray-700 transition duration-300">
          <h3 className="font-medium mb-2">Popular Models</h3>
          <ul>
            <li>Air Force 1</li>
            <li>Huarache</li>
            <li>Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>

        <div className="hover:text-gray-700 transition duration-300">
          <h3 className="font-medium mb-2">Footwear</h3>
          <ul>
            <li>All Footwear</li>
            <li>Custom Footwear</li>
            <li>Jordan Footwear</li>
            <li>Running Footwear</li>
          </ul>
        </div>

        <div className="hover:text-gray-700 transition duration-300">
          <h3 className="font-medium mb-2">Apparel</h3>
          <ul>
            <li>All Apparel</li>
            <li>Modest Apparel</li>
            <li>Hoodies &amp; Sweatshirts</li>
            <li>Tops &amp; Tees</li>
          </ul>
        </div>

        <div className="hover:text-gray-700 transition duration-300">
          <h3 className="font-medium mb-2">Kids&apos; Apparel</h3>
          <ul>
            <li>Infant &amp; Toddler Footwear</li>
            <li>Kids&apos; Footwear</li>
            <li>Kids&apos; Jordan Footwear</li>
            <li>Kids&apos; Basketball Footwear</li>
          </ul>
        </div>
      </div>
    </section>
  );
}