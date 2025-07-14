<template>
  <div class="max-w-4xl p-6 mx-auto">
    <h1 class="mb-6 text-2xl font-bold">Checkout</h1>

    <div class="grid gap-6 md:grid-cols-2">
      <!-- Billing Info -->
      <div>
        <h2 class="mb-4 text-xl font-semibold">Billing Information</h2>
        <form class="space-y-4">
          <input type="text" placeholder="Full Name" class="w-full p-3 border rounded" />
          <input type="email" placeholder="Email Address" class="w-full p-3 border rounded" />
          <input type="text" placeholder="Address" class="w-full p-3 border rounded" />
          <input type="text" placeholder="City" class="w-full p-3 border rounded" />
          <input type="text" placeholder="Postal Code" class="w-full p-3 border rounded" />
        </form>
      </div>

      <!-- Order Summary -->
      <div>
        <h2 class="mb-4 text-xl font-semibold">Order Summary</h2>
        <div class="p-4 space-y-2 bg-gray-100 rounded">
          <div class="flex justify-between">
            <span>Product A</span>
            <span>$49.99</span>
          </div>
          <div class="flex justify-between">
            <span>Product B</span>
            <span>$29.99</span>
          </div>
          <hr />
          <div class="flex justify-between font-bold">
            <span>Total</span>
            <span>$79.98</span>
          </div>
        </div>

        <button class="w-full py-3 mt-6 text-white bg-blue-600 rounded hover:bg-blue-700">
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>
