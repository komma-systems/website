import { Placeholder } from "@/components/placeholder"

export default function PlaceholderDemo() {
  return (
    <div className="container mx-auto p-6 space-y-10">
      <div>
        <h1 className="text-3xl font-bold mb-6">Placeholder Components</h1>
        <p className="text-gray-600 mb-8">
          A collection of customizable placeholder components for your Next.js application.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Text Placeholders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Text Placeholder</h3>
            <Placeholder />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Custom Lines (5)</h3>
            <Placeholder lines={5} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Custom Width (50%)</h3>
            <Placeholder width="50%" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">No Animation</h3>
            <Placeholder animate={false} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Custom Color</h3>
            <Placeholder color="bg-blue-200" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Custom Rounded</h3>
            <Placeholder rounded="lg" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Image Placeholders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Image</h3>
            <Placeholder type="image" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Custom Size</h3>
            <Placeholder type="image" width={200} height={150} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Rounded Full</h3>
            <Placeholder type="image" width={200} height={200} rounded="full" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Avatar Placeholders</h2>
        <div className="flex gap-6 items-center">
          <div>
            <Placeholder type="avatar" />
          </div>
          <div>
            <Placeholder type="avatar" width={50} height={50} />
          </div>
          <div>
            <Placeholder type="avatar" width={80} height={80} color="bg-purple-200" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Placeholders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Card</h3>
            <Placeholder type="card" />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Custom Lines (2)</h3>
            <Placeholder type="card" lines={2} />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Custom Rounded</h3>
            <Placeholder type="card" rounded="lg" />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Loading Layout Example</h2>
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-4 mb-6">
            <Placeholder type="avatar" width={60} height={60} />
            <div className="flex-1">
              <Placeholder lines={2} />
            </div>
          </div>
          <Placeholder type="image" className="mb-6" />
          <Placeholder lines={4} />
        </div>
      </section>
    </div>
  )
}
