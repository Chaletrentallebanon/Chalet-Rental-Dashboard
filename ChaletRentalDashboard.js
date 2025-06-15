import { useState } from "react";

const listingsData = [
  {
    name: "The Bungalow",
    photo: "https://www.instagram.com/p/DKbOOQEowqN/?igsh=MTRrMjVweHpuYXA5Nw==",
    details:
      "📍Aley - Aabadiyyi 25mins From Beirut ☀️ 550m Above SeaLevel 🏊\n● For Up to 13 Sleeping Guests\n■ 250$ Weekdays \n■ 300$ Weekends \n■ Each Extra Guest 15$\n• Check in at 7 pm\n• Check out at 5 pm\n● Prices Differ for Events & on Holidays 🎊\n■ Day Use Option 300$ for 20 Guests\n*Amenities:*\n(1 Double Bed & 2 Single Beds) in the Bungalow\n1 Sofa bed\n2 Mattresses\nTv\nSpeaker\nOutdoor Oven\nBBQ Area\nFully Equipped kitchen\nAC\n24/7 Electricity\n2 toilets\n2 Showers\n2 x Tents that Fit 8 Guests with Beddings\n*Extra Tent Available for 30$ Extra Charge*\nOutdoor Jacuzzi\nPool size 12 meters x 6 meters / Pool Depth 1.9m\nLoud Music is Allowed\n■ Security Deposit : 100$ Refundable on Check out\n● *Bring Your Towels*🏊‍♂️\n*Prices Change in August*",
    price: 250,
    bedrooms: 1,
    guests: 13,
    pool: true,
    location: "Aley , Aabadiyyi",
    availability: [
      ["2025-06-04", "2025-06-06"],
      ["2025-06-07", "2025-06-08"],
      ["2025-06-10", "2025-06-11"],
      ["2025-06-11", "2025-06-13"],
      ["2025-06-13", "2025-06-14"],
      ["2025-06-16", "2025-06-17"],
      ["2025-06-17", "2025-06-18"],
      ["2025-06-20", "2025-06-22"],
      ["2025-06-22", "2025-06-23"],
      ["2025-06-23", "2025-06-25"],
      ["2025-06-27", "2025-06-29"],
      ["2025-06-30", "2025-07-01"]
    ]
  }
];

export default function ChaletRentalDashboard() {
  const [selectedDate, setSelectedDate] = useState("");
  const [guestFilter, setGuestFilter] = useState("");
  const [poolFilter, setPoolFilter] = useState("");
  const [bedroomFilter, setBedroomFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  function isDateBooked(date, availability) {
    const d = new Date(date);
    return availability.some(([start, end]) => {
      const from = new Date(start);
      const to = new Date(end);
      return d >= from && d <= to;
    });
  }

  const filteredListings = listingsData.filter((listing) => {
    if (guestFilter && listing.guests < parseInt(guestFilter)) return false;
    if (bedroomFilter && listing.bedrooms < parseInt(bedroomFilter)) return false;
    if (locationFilter && !listing.location.toLowerCase().includes(locationFilter.toLowerCase())) return false;
    if (poolFilter && poolFilter === "yes" && !listing.pool) return false;
    if (poolFilter && poolFilter === "no" && listing.pool) return false;
    return true;
  });

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold" }}>Chalet Rental Lebanon</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20 }}>
        <div>
          <label>Date: </label>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ padding: 8 }}
          />
        </div>

        <div>
          <label>Min Guests: </label>
          <input
            type="number"
            value={guestFilter}
            onChange={(e) => setGuestFilter(e.target.value)}
            style={{ padding: 8 }}
          />
        </div>

        <div>
          <label>Min Bedrooms: </label>
          <input
            type="number"
            value={bedroomFilter}
            onChange={(e) => setBedroomFilter(e.target.value)}
            style={{ padding: 8 }}
          />
        </div>

        <div>
          <label>Location: </label>
          <input
            type="text"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            style={{ padding: 8 }}
            placeholder="e.g. Aley"
          />
        </div>

        <div>
          <label>Pool: </label>
          <select
            value={poolFilter}
            onChange={(e) => setPoolFilter(e.target.value)}
            style={{ padding: 8 }}
          >
            <option value="">Any</option>
            <option value="yes">With Pool</option>
            <option value="no">Without Pool</option>
          </select>
        </div>
      </div>

      {filteredListings.map((listing, i) => {
        const booked = selectedDate
          ? isDateBooked(selectedDate, listing.availability)
          : false;

        return (
          <div
            key={i}
            style={{
              border: "1px solid #ccc",
              padding: 15,
              marginTop: 20,
              borderRadius: 8,
              background: "#f9f9f9"
            }}
          >
            <h2>{listing.name}</h2>
            <p><strong>Location:</strong> {listing.location}</p>
            <p><strong>Price:</strong> ${listing.price} / night</p>
            <p><strong>Bedrooms:</strong> {listing.bedrooms}</p>
            <p><strong>Guests:</strong> Up to {listing.guests}</p>
            <p><strong>Pool:</strong> {listing.pool ? "Yes" : "No"}</p>
            <p><strong>Description:</strong> {listing.details}</p>
            {selectedDate && (
              <p style={{ color: booked ? "red" : "green", fontWeight: "bold" }}>
                {booked ? "Reserved" : "Available"} on {selectedDate}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}