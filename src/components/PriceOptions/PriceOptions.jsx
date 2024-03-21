import React from "react";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: "$29.99/month",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
        "Online workout tracking",
        "Discounts on gym merchandise",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: "$49.99/month",
      features: [
        "Access to all gym equipment including premium machines",
        "Group fitness classes included",
        "Access to sauna and steam room",
        "Personal trainer consultation",
        "Nutritional counseling",
        "Monthly body composition analysis",
      ],
    },
    {
      id: 3,
      name: "Gold Membership",
      price: "$79.99/month",
      features: [
        "All features of Premium Membership",
        "Access to exclusive VIP lounge",
        "Towel service included",
        "Monthly complimentary massage",
        "Unlimited guest passes",
        "Priority booking for group classes",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Price in the town </h2>
      {priceOptions.map((option) => (
        <PriceOptions key={option.id} option={option} />
      ))}
    </div>
  );
};

export default PriceOptions;
